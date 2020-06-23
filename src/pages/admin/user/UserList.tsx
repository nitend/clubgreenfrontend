import React from 'react'
import { useUsersQuery} from '../../../generated/graphql'
import { TableBody, Table, Container, Button } from '@material-ui/core';
import { LoadingAnimation } from '../../pageframe/global/Messages/LoadingAnimation';
import { ErrorMessage } from '../../pageframe/global/Messages/ErrorMessage';
import { ListItem } from '../lists/ListItem';
import { useHistory, useRouteMatch } from 'react-router-dom';

interface Props {
}

export const UserList: React.FC<Props> = (props) => {

    const {data, loading, error} = useUsersQuery();
    const {path} = useRouteMatch();

    const history = useHistory();


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

    if(data && data.users){
        return(
            <Container>
                <Table>      
                    <TableBody>
                        {data?.users.map(x => {
                        return (              
                            <ListItem
                                key={x.id} 
                                onEditClicked={onEntityEdit} 
                                onDeletClicked={onEntityDelete} 
                                id={x.id}
                                title={x.email || ""}
                                tagone={""}
                                tagtwo={""}
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