import React, { useState, useContext } from "react"
import "react-dates/initialize"
import "react-dates/lib/css/_datepicker.css"
import {DateRangePicker} from "react-dates" 
import "./customcss.css"
import moment, { Moment } from "moment"
import { BookingContext } from "../../BookingContext"



interface Props {
    blockedDates: Moment[]
}


export const DateSelector:  React.FC<Props> = (props) => {

    const {arrivalDate, 
      departureDate,
      setArrivalDate,
      setDepartureDate} = useContext(BookingContext);

 
    const [focusedInput, setFocusedInput] = useState();


    function onDateChange(start: Moment | null, end: Moment | null) {
            setArrivalDate(start);
            setDepartureDate(end);
      }
    
      function onFocusChange(focusedInput: any) {
        setFocusedInput(focusedInput);
      }

      const isOutsideRange = (day: Moment) => {        
        return day.isBefore(moment()) 
      }

      const isDayBlocked = (day: Moment) => {
        console.log(props.blockedDates.length + ' date ');
        var date = props.blockedDates.find((data) => {
            var istrue = day.isSame(data, 'd');
            return istrue;
        })
        if(date){
          return true
        }
        return false;
      } 
      

    return (
            <div>   
                <DateRangePicker 
                    startDatePlaceholderText={"Anreise"}
                    endDatePlaceholderText={"Abfahrt"}
                    startDate={arrivalDate}
                    startDateId="your_unique_start_date_id"
                    endDate={departureDate}
                    endDateId="your_unique_end_date_id"
                    onDatesChange={({ startDate, endDate }) => { onDateChange( startDate, endDate )}}
                    isDayBlocked={isDayBlocked}
                    focusedInput={focusedInput}
                    displayFormat={() => "DD. MMMM YYYY"}
                    onFocusChange={onFocusChange}
                    isOutsideRange={isOutsideRange}/>               
        </div>
    )
}