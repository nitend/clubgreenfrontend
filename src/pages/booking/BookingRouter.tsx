import React, { useState } from 'react'
import { MyBooking } from './myBooking/MyBooking';
import { PropertyList } from './propertyList/PropertyList';
import { BookingContext } from './BookingContext';
import { Property } from '../../generated/graphql';
import { Moment } from 'moment';
import { BgContainer } from '../pageframe/global/StyledComponents';

interface Props {
    
}


export const BookingRouter:  React.FC<Props> = () => {
    
    const [selectedProperty, setSelectedProp] = useState();
    const [arrivalDate, setArrivalD] = useState();
    const [departureDate, setDepartureD] = useState();
    const [isActive, setIsActi] = useState(false)

    const setSelectedPropterty = (property: Property | null): void => {
        setSelectedProp(property)
        console.log(property)
    }

    const setArrivalDate = (arrival: Moment | null): void => {
        setArrivalD(arrival);
    }

    const setDepartureDate = (departure: Moment | null): void => {
        setDepartureD(departure);
    }

    const setIsActive = (active: boolean): void => {
        setIsActi(active);
    }


    const values = {
        selectedProperty,
        arrivalDate,
        departureDate,
        setSelectedPropterty,
        setArrivalDate,
        setDepartureDate,
        isActive,
        setIsActive
    }


    return (        
        <BookingContext.Provider value={values}>
            <BgContainer>
                <MyBooking />              
                <PropertyList /> 
            </BgContainer>                  
        </BookingContext.Provider>  
    )
    
}
