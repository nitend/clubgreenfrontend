import React from 'react'
import { useProductsQuery, useDeleteProductMutation} from '../../../generated/graphql'
import { Container, Button } from '@material-ui/core';
import { LoadingAnimation } from '../../pageframe/global/Messages/LoadingAnimation';
import { ErrorMessage } from '../../pageframe/global/Messages/ErrorMessage';
import { useHistory, useRouteMatch } from 'react-router-dom';
import { TableList } from '../lists/TableList';
import { ProductFields } from './ProductObject';

interface Props {
}

export const ProductList: React.FC<Props> = (props) => {

    const {data, loading, error} = useProductsQuery();
    const [deleteProduct] = useDeleteProductMutation()
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

    const onProductEdit = (entity: any) => {
        history.push( path + '/' + entity.id);
        console.log(entity.id)
    }

    const onProductDelete = (entity: any) => {
        const result = deleteProduct(
            {
                variables: {
                    id: entity.id
                }
            }
        )
        console.log(result)
    }

    const onNewPropertyClicked = () => {
        onProductEdit("new");
    } 

    if(data && data.getAllProducts){
        return(
            <Container>
                <TableList 
                    fields={ProductFields} 
                    data={data.getAllProducts}
                    onDeleteClicked={onProductDelete}
                    onEditClicked={onProductEdit}></TableList>  
                <Button onClick={onNewPropertyClicked}>Neues Product</Button>
        </Container> 
        )

    }

    return (
        <LoadingAnimation message={'Daten werden geladen'}/>  
    )
}