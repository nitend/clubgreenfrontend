
import React, { useState, useContext } from "react";
import { CardElement, useStripe, useElements, CardCvcElement, CardNumberElement, CardExpiryElement} from "@stripe/react-stripe-js";
import { Button } from "@material-ui/core";
import { ErrorMessage } from "../../pages/pageframe/global/Messages/ErrorMessage";
import { CheckoutContext } from "../../context/checkoutcontext/CheckoutContext";
import styles from "./PaymentForm.module.css"
import { CheckoutStepContext } from "../../context/checkoutcontext/CheckoutStepContext";


interface Props {
   onDone: () => void  
}


const style =  {
    base: {
      backgroundColor: '#ffffff',
      padding: 10,
      fontSize: '22px',
      color: '#424770',
      '::placeholder': {
        color: '#aab7c4',
      },
    },
    invalid: {
      color: '#9e2146',
    }
}
  

export const PaymentForm: React.FC<Props> = (props) => {

    const stripe = useStripe();
    const elements = useElements();
    const context = useContext(CheckoutContext);

    const [error, seterror] = useState()
    const [success, setsuccess] = useState()


    const handleSubmit = async (event: React.FormEvent) => {
        // Block native form submission.
        event.preventDefault();
    
        if (!stripe || !elements) {
          seterror(new Error('Bazahldienst nicht erreichbar'));
          return;
        }
    
        // Get a reference to a mounted CardElement. Elements knows how
        // to find your CardElement because there can only ever be one of
        // each type of element.
        const cardElement = elements.getElement(CardNumberElement);
    
        // Use your card Element with other Stripe.js APIs
        const {error, paymentMethod} = await stripe.createPaymentMethod({
          type: 'card',
          card: cardElement ? cardElement : {token: ""},
        });
    
        if (error) {
          console.log('[error]', error);
          seterror(error)
        } 
        if(paymentMethod){
          context.setPaymentMethod(paymentMethod);
          props.onDone()
        }        
      };

    return(
      <div className={styles["payment-form"]}>
        <form onSubmit={handleSubmit} >


            <div className={styles["payment-input-field"]}>
              <CardNumberElement options={{style}}/>
            </div>
            <div className={styles["payment-input-line"]}>
              <div style={{flex: 1}} className={styles["payment-input-field"]}>
                <CardExpiryElement options={{style}}/>
              </div>
              <div style={{flex: 1}} className={styles["payment-input-field"]}>
                <CardCvcElement options={{style}}/> 
              </div>
            </div>
            <Button style={{float: "right"}} color="primary" variant="contained" type="submit" disabled={!stripe}>übernehmen</Button>
            {error ? <ErrorMessage error={error} show={error ? true : false}/> : <div></div>}
        </form>
        </div>

    )


}