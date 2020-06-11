import React from 'react'
import { Button } from '@material-ui/core'

interface Props {
    aktiveBooking: boolean
    disabled: boolean
    buttonPressedListener: any
}


export const BookingButton:  React.FC<Props> = (Props) => {

    if(Props.aktiveBooking){
        return (
            <Button variant="text" style={{color: "#FF0000"}} onClick={Props.buttonPressedListener}>
                    Reservierung stornieren
            </Button> )
    }

    if(Props.disabled){
        return (
            <Button variant="contained" disabled >
                    Reservieren
            </Button> )
    }

    return (
        <Button variant="contained" color="primary" onClick={Props.buttonPressedListener}>
                Reservieren
        </Button> )
}