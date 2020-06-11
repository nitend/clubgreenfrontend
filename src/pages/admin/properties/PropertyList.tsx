import React from 'react'
import { useTeaserPropertiesQuery} from '../../../generated/graphql'
import { TableBody, Table, Container, Button } from '@material-ui/core';
import { LoadingAnimation } from '../../pageframe/global/Messages/LoadingAnimation';
import { ErrorMessage } from '../../pageframe/global/Messages/ErrorMessage';
import { ListItem } from '../lists/ListItem';
import { useHistory, useRouteMatch } from 'react-router-dom';

interface Props {
}

export const PropertyList: React.FC<Props> = (props) => {

    const {data, loading, error} = useTeaserPropertiesQuery();
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

    const onPropertyEdit = (id: any) => {
        history.push( path + '/' + id);
        console.log(id)
    }

    const onPropertyDelete = (id: any) => {

    }

    const onNewPropertyClicked = () => {
        onPropertyEdit(0);
    } 

    if(data && data.teaserProperties){
        return(
            <Container>
                <Table>      
                    <TableBody>
                        {data?.teaserProperties.map(x => {
                        return (              
                            <ListItem
                                key={x.id} 
                                onEditClicked={onPropertyEdit} 
                                onDeletClicked={onPropertyDelete} 
                                id={x.id}
                                title={x.title}
                                tagone={x.location}
                                tagtwo={x.subtext}
                                tagthree={""} />
                            )                
                        })}
                    </TableBody>
                </Table> 
                <Button onClick={onNewPropertyClicked}>New Property</Button>
            </Container> 
        )

    }

    return (
        <LoadingAnimation message={'Daten werden geladen'}/>  
    )
}