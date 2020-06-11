import React, { useContext } from "react";
import { Stepper, Step, StepButton } from "@material-ui/core";
import { CheckoutStepContext } from "../../context/checkoutcontext/CheckoutStepContext";

interface Props {
    stepLabels: string[]
}
  

export const CheckOutNavigation: React.FC<Props> = (props) => {
    const {step, setstep} = useContext(CheckoutStepContext)
    const handleStepClicked = (index: number) => () => {
        setstep(index)
    }    

   return (
    <Stepper activeStep={step} orientation="vertical">
  
    {props.stepLabels.map((label, index) => {

        const stepProps = {};
        const buttonProps = {};
       return (<Step key={label} {...stepProps}>
                <StepButton
                    onClick={handleStepClicked(index)}
                    completed={step > index ? true : false}
                    {...buttonProps}
                >
                     {label}
                </StepButton>
  
        </Step>)
    })}
  </Stepper>
    )
}