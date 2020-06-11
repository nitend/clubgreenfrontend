import React, { useState, createContext } from "react";
import { number } from "yup";
import { setServers } from "dns";

interface StepContext {
    step: number
    setstep:  (step: number) => void;
}

const initValue: StepContext = {
    step: 0,
    setstep: (step: number) => {}
}

export const CheckoutStepContext = createContext(initValue);

export const CheckoutStepContextProvider: React.FC = (props) => {

const [step, setstep] = useState(0)

const setNextStep = (nextStep: number) => {
    console.log(nextStep)
    setstep(nextStep)
} 

   return (
        <CheckoutStepContext.Provider value={{step, setstep: setNextStep}}> 
            {props.children}
        </CheckoutStepContext.Provider>
    )
}
