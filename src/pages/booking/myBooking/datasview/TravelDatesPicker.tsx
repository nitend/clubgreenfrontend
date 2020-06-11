import React from 'react'
import moment, { Moment } from 'moment'
import { useBlockedDatesByPropertyQuery} from '../../../../generated/graphql'
import { DateSelector } from './DateSelector'
import { LoadingAnimation } from '../../../pageframe/global/Messages/LoadingAnimation'
import { ErrorMessage } from '../../../pageframe/global/Messages/ErrorMessage'

interface Props {
    propertyId: string | undefined
}

export const TravelDatesPicker:  React.FC<Props> = (props) => {

   var propId = props.propertyId;
   if(!propId){
    propId = "";
   }

    const {data, loading, error} = useBlockedDatesByPropertyQuery({
        variables: {
            propertyId: propId
        }
    })

    if(loading){
        return(<LoadingAnimation message={"Buchungen werden geladen"}/>)
    }

    if(error){
        return(<ErrorMessage error={error} show={true}/>)
    }

    var blockedDates: Moment[] = [];

    if(data && data.getBlockedDatesFromProperty){        
        data.getBlockedDatesFromProperty.map((date) =>{
            blockedDates.push(moment(date.dateTimeStamp))
            return true;
        })
    }

    return  (
        <DateSelector blockedDates={blockedDates} />
    )

}