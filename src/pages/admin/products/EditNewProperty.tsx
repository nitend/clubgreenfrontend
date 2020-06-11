import React, { useState } from 'react'
import { useGetProductQuery, Product, useUpdateProductMutation, useCreateProductQuery} from '../../../generated/graphql'
import { useParams } from 'react-router-dom';
import { Editor } from '../form/Editor';
import { MessageView } from '../../pageframe/global/Messages/MessageView';
import { LoadingAnimation } from '../../pageframe/global/Messages/LoadingAnimation';
import { ErrorMessage } from '../../pageframe/global/Messages/ErrorMessage';
import { formatProduct, newProduct } from './ProductObject';


interface Props {
    
}

export const EditNewProperty: React.FC<Props> = (props) => {

    const [showMessage, setshowMessage] = useState(false);
  
    const {data, error} = useCreateProductQuery();
    
    
    const [updateProduct] = useUpdateProductMutation();

    async function onSubmit(values: Product) {     
        var result = await updateProduct({
            variables: {
                product: formatProduct(values)
            }
        });
        if(result){
            setshowMessage(true)
            // history.push("/admin#/properties")
        }
    }

    
    if(data && data.getNewProduct) {
        const product = data.getNewProduct;     
        return(
            <Editor 
                entity={product} 
                store={onSubmit} 
                entityId={product.id}
                imageuploadurl={"http://localhost:4000/upload/property/image"}>     
                <MessageView severity={"success"} message={"Die Daten wurden gespeichert"} show={showMessage} />
            </Editor>
        )   
    }


    if(error){
        return (<ErrorMessage error={error} show={true}/>) 
    }
   
    return (<LoadingAnimation message={"Daten werden geladen ..."}/>)
}