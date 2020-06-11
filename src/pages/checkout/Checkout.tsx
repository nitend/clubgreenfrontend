import React from "react";
import { CheckOutContainer } from "../../container/checkout/CheckoutContainer";
import { CheckoutStepContextProvider } from "../../context/checkoutcontext/CheckoutStepContext";
import { useParams } from "react-router-dom";
import { CheckoutContextProvider } from "../../context/checkoutcontext/CheckoutContext";


interface Props {
}



export const Onboarding: React.FC<Props> = (Props) => {

    const {productId} = useParams()

   return (
        <CheckoutStepContextProvider>
            <CheckoutContextProvider>
                <CheckOutContainer productId={productId}/> 
            </CheckoutContextProvider> 
        </CheckoutStepContextProvider>    
    )
}