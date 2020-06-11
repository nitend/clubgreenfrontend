import React, { useContext } from "react";
import { LoadingAnimation } from "../../pages/pageframe/global/Messages/LoadingAnimation";
import { CheckoutContext } from "../../context/checkoutcontext/CheckoutContext";
import { useAddPaymentMethodMutation, useSubscribeToPricePlanMutation } from "../../generated/graphql";


interface Props {
}



export const OrderFinish: React.FC<Props> = (props) => {

    const context = useContext(CheckoutContext)
    const [addPayment] = useAddPaymentMethodMutation()
    const [ subscripe ] = useSubscribeToPricePlanMutation()


    if(context.paymentMethod){
        const result = addPayment({
            variables:{
                paymentMethodId: context.paymentMethod.id,
            }
        })
        if(result && context.product){
           const result2 = subscripe({
                variables: {
                    priceplan: context.product?.paymentPricePlan
                }
            })
            if(result2){
                //
            }
        }
    }
  



   return (
       <LoadingAnimation message={"Bestellung wird ausgeführt"}></LoadingAnimation> 
    )
}