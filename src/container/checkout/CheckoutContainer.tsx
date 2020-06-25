import React, { useContext} from "react";
import { CheckoutContext} from "../../context/checkoutcontext/CheckoutContext";
import { CheckOutFlow } from "./CheckOutFlow";
import { CheckoutSummary } from "../checkoutsummary/CheckoutSummary";
import { Payment } from "../../components/paymentformcard/Payment";
import { AddressEditor } from "../addresseditor";
import { CheckoutStepContext} from "../../context/checkoutcontext/CheckoutStepContext";
import { useGetProductQuery} from "../../generated/graphql";
import { ErrorMessage } from "../../pages/pageframe/global/Messages/ErrorMessage";


interface Props {
    productId: string | undefined | null
}

export const CheckOutContainer: React.FC<Props> = (props) => {
      
    const {step, setstep} = useContext(CheckoutStepContext);    
    const {setProduct} = useContext(CheckoutContext);

    const productId = props.productId;

    const product = useGetProductQuery({
            variables: {
                id: productId ? productId : ""
            }
        })

    if(productId && product && product.data && product.data.getProduct){
        setProduct(product.data.getProduct)
    } else {
        return <ErrorMessage error={new Error("Es ist kein Product ausgewählt.")} show={true} />
    }


    const nextStep = () => {      
        setstep(step + 1)
        console.log("nextStep " + step);
    }

    const steps = [
        "Adressdaten",
        "Bezahldaten",
        "Bestellung",
        "Zusammenfassung"
    ]


   return (      
        <CheckOutFlow steps={steps}>
            <AddressEditor onDone={nextStep}/>
            <Payment onDone={nextStep}/>     
            <CheckoutSummary />
        </CheckOutFlow>
    )
}