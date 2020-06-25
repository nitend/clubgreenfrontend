import React from 'react'
import { useAllBookingsQuery} from '../../../generated/graphql'
import { TableBody, Table, Container, Button } from '@material-ui/core';
import { LoadingAnimation } from '../../pageframe/global/Messages/LoadingAnimation';
import { ErrorMessage } from '../../pageframe/global/Messages/ErrorMessage';
import { ListItem } from '../lists/ListItem';

interface Props {
}

export const BookingList: React.FC<Props> = (props) => {

    const {data, loading, error} = useAllBookingsQuery();

    if(loading){
        return (
            <LoadingAnimation message={'Daten werden geladen'}/>
        )
    }

    if(error){
        return (
            <ErrorMessage error={error} show={true}/>
        )
    }

    const onEntityEdit = (id: any) => {
        // history.push( path + '/' + id);
        // console.log(id)
    }

    const onEntityDelete = (id: any) => {

    }

    const onNewEntityClicked = () => {
        // onEntityEdit(0);
    } 

    if(data && data.getAllBookings){
        return(
            <Container>
                <Table>      
                    <TableBody>
                        {data?.getAllBookings.map(x => {
                        
                        const arrival = x.dateOfArrival ? x.dateOfArrival : ""
                        const departure = x.dateOfDeparture ? x.dateOfDeparture : ""


                        return (              
                            <ListItem
                                key={x.id} 
                                onEditClicked={onEntityEdit} 
                                onDeletClicked={onEntityDelete} 
                                id={x.id+""}
                                title={x.propertyId + ""}
                                tagone={(new Date(arrival)).toUTCString()}
                                tagtwo={(new Date(departure)).toUTCString()}
                                tagthree={""} />
                            )                
                        })}
                    </TableBody>
                </Table> 
                <Button onClick={onNewEntityClicked}>Neuer Nutzer</Button>
            </Container> 
        )

    }

    return (
        <LoadingAnimation message={'Daten werden geladen'}/>  
    )
}