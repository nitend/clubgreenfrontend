import React from 'react'
import { useAllRatingsQuery} from '../../../generated/graphql'
import { Container, Button } from '@material-ui/core';
import { LoadingAnimation } from '../../pageframe/global/Messages/LoadingAnimation';
import { ErrorMessage } from '../../pageframe/global/Messages/ErrorMessage';
import { useHistory, useRouteMatch } from 'react-router-dom';
import { TableList } from '../lists/TableList';
import { RatingFields } from './RatingObject';

interface Props {
}

export const RatingList: React.FC<Props> = (props) => {

    const {data, loading, error} = useAllRatingsQuery();
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
        return
    }

    const onNewEntityClicked = () => {
        onEntityEdit(0);
    } 


    if(data && data.getAllRatings){
        return(
            <Container>
                <TableList 
                    fields={RatingFields} 
                    data={data.getAllRatings} 
                    onDeleteClicked={onEntityDelete} 
                    onEditClicked={onEntityEdit}/>  
                <Button onClick={onNewEntityClicked}>Neuer Interessanter Ort</Button>
            </Container> 
        )

    }

    return (
        <LoadingAnimation message={'Daten werden geladen'}/>  
    )
}