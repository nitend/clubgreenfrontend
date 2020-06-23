import React from 'react'
import { useSightsQuery} from '../../../generated/graphql'
import { Container, Button } from '@material-ui/core';
import { LoadingAnimation } from '../../pageframe/global/Messages/LoadingAnimation';
import { ErrorMessage } from '../../pageframe/global/Messages/ErrorMessage';
import { ListItem } from '../lists/ListItem';
import { useHistory, useRouteMatch } from 'react-router-dom';
import { TableList } from '../lists/TableList';
import { SightFields } from './SightObject';

interface Props {
}

export const SightList: React.FC<Props> = (props) => {

    const {data, loading, error} = useSightsQuery();
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
        history.push( path + '/' + id);
        console.log(id)
    }

    const onEntityDelete = (id: any) => {

    }

    const onNewEntityClicked = () => {
        onEntityEdit(0);
    } 

    if(data && data.getAllSights){
        return(
            <Container>
                <TableList 
                    fields={SightFields} 
                    data={data.getAllSights}
                    onDeleteClicked={onEntityDelete}
                    onEditClicked={onEntityEdit}></TableList>  
                <Button onClick={onNewEntityClicked}>Neuer Interessanter Ort</Button>
            </Container> 
        )

    }

    return (
        <LoadingAnimation message={'Daten werden geladen'}/>  
    )
}