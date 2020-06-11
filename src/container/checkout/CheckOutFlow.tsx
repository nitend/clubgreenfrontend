import React, { ReactNodeArray, useContext, useEffect, useState } from "react";
import { CheckoutContext } from "../../context/checkoutcontext/CheckoutContext";
import styles from "./CheckOutFlow.module.css"
import { CheckOutNavigation } from "../../components/checkoutnavigation/CheckOutNavigation";
import { CheckoutStepContext } from "../../context/checkoutcontext/CheckoutStepContext";



interface Props {
     children: ReactNodeArray
     steps: string[]
     
}

export const CheckOutFlow: React.FC<Props> = (props) => {
    const children = props.children;
    const {step, setstep} = useContext(CheckoutStepContext)


   return (
        <div className={styles["checkout-frame"]}>
            <div className={styles["checkout-content"]}>
            {children[step]}
            </div>
            <div className={styles["checkout-nav"]}>
                <CheckOutNavigation stepLabels={props.steps}/>
            </div>
        </div> 
    )
}