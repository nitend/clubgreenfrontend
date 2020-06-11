import React from 'react'
import { useAllBookingQuery} from '../../../generated/graphql'
import { TableBody, Table, Container, Button } from '@material-ui/core';
import { LoadingAnimation } from '../../pageframe/global/Messages/LoadingAnimation';
import { ErrorMessage } from '../../pageframe/global/Messages/ErrorMessage';
import { ListItem } from '../lists/ListItem';
import { useHistory, useRouteMatch } from 'react-router-dom';

interface Props {
}

export const BookingList: React.FC<Props> = (props) => {

    const {data, loading, error} = useAllBookingQuery();

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

    if(data && data.allBooking){
        return(
            <Container>
                <Table>      
                    <TableBody>
                        {data?.allBooking.map(x => {
                        return (              
                            <ListItem
                                key={x.id} 
                                onEditClicked={onEntityEdit} 
                                onDeletClicked={onEntityDelete} 
                                id={x.id+""}
                                title={x.propertyId + ""}
                                tagone={(new Date(x.from)).toUTCString()}
                                tagtwo={(new Date(x.to)).toUTCString()}
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