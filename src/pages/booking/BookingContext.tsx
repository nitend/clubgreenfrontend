import { Property } from "../../generated/graphql";
import { Moment } from "moment";
import React from "react";

type Booking = {
    selectedProperty: Property | null,
    arrivalDate: Moment | null,
    departureDate: Moment | null,
    isActive: boolean,
    setSelectedPropterty: (selectedProerty: Property | null) => void,
    setArrivalDate: (arrivalDate: Moment | null) => void,
    setDepartureDate: (deoartureDate: Moment | null) => void
    setIsActive: (isActive: boolean ) => void 
}

const emptyBooking: Booking = {
    isActive: false,
    selectedProperty: null,
    arrivalDate: null,
    departureDate: null,
    setSelectedPropterty: () => {},
    setArrivalDate: () => {},
    setDepartureDate: () => {},
    setIsActive: () => {},
}

export const BookingContext = React.createContext<Booking>(emptyBooking);

