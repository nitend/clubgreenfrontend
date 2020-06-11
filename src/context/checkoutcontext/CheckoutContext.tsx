import React, { useState, useCallback } from "react";
import { Product } from "../../generated/graphql";
import { PaymentMethod } from "@stripe/stripe-js";


type Address = {
    street:  string, 
    number: number, 
    postalCode: string, 
    city: string }

type PersonData = {
    firstName: string,
    surname: string,
    phoneNumber: string
}


type CheckoutCtxt = {
    product: Product | undefined
    paymentMethod: PaymentMethod | undefined
    address: Address | undefined
    personData: PersonData | undefined
    setProduct: (product: Product) => void 
    setAddress: (address: Address) => void
    setPersonData: (personData: PersonData) => void
    setPaymentMethod: (product: PaymentMethod) => void 
}

export const initialCheckoutCtxt: CheckoutCtxt = {
    product: undefined,
    paymentMethod: undefined,
    address: undefined,
    personData: undefined,
    setProduct: (product: Product) => {},
    setAddress: (address: Address) => {},
    setPersonData: (personData: PersonData) => {},
    setPaymentMethod: (product: PaymentMethod) => {}
}

export const CheckoutContext = React.createContext<CheckoutCtxt>(initialCheckoutCtxt);

export const CheckoutContextProvider: React.FC = (props) => {

    const [product, setpproduct] = useState()
    const [paymentMethod, setpaymentMethod] = useState()
    const [address, setaddress] = useState()
    const [personData, setpersonData] = useState()

 

    const setProduct = useCallback((product: Product): void => {
        setpproduct(product);
    },[])

    const setPaymentMethod = useCallback((paymentMethod: PaymentMethod): void => {
        setpaymentMethod(paymentMethod);
    },[])

    const setAddress = useCallback((address: Address): void => {
        setaddress(address);
    },[])

    const setPersonData = useCallback((personData: PersonData): void => {
        setpersonData(personData);
    },[])

   const initValue = initialCheckoutCtxt;
    initValue.product = product;
    initValue.paymentMethod = paymentMethod;
    initValue.address = address;
    initValue.personData = personData;
    initValue.setProduct = setProduct;
    initValue.setPaymentMethod = setPaymentMethod;
    initValue.setAddress = setAddress;
    initValue.setPersonData = setPersonData

   return (
        <CheckoutContext.Provider value={initValue}> 
            {props.children}
        </CheckoutContext.Provider>
    )
}
