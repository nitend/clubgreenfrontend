import React, { useState } from 'react'
import { Product, useUpdateProductMutation, useCreateProductQuery} from '../../../generated/graphql'
import { Editor } from '../form/Editor';
import { MessageView } from '../../pageframe/global/Messages/MessageView';
import { LoadingAnimation } from '../../pageframe/global/Messages/LoadingAnimation';
import { ErrorMessage } from '../../pageframe/global/Messages/ErrorMessage';
import { formatProduct } from './ProductObject';
import { PROPERTY_IMAGE_UPLOAD_URL } from '../../../config';


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
                imageuploadurl={PROPERTY_IMAGE_UPLOAD_URL}>     
                <MessageView severity={"success"} message={"Die Daten wurden gespeichert"} show={showMessage} />
            </Editor>
        )   
    }


    if(error){
        return (<ErrorMessage error={error} show={true}/>) 
    }
   
    return (<LoadingAnimation message={"Daten werden geladen ..."}/>)
}