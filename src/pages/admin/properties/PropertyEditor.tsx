import React, { useState } from 'react'
import { Property, useGetPropertyQuery, useCreatePropertyMutation } from '../../../generated/graphql'
import { useParams } from 'react-router-dom';
import { Editor } from '../form/Editor';
import { MessageView } from '../../pageframe/global/Messages/MessageView';
import { LoadingAnimation } from '../../pageframe/global/Messages/LoadingAnimation';
import { ErrorMessage } from '../../pageframe/global/Messages/ErrorMessage';
import { formatProperty, newProperty } from './PropertyObject';
import { PROPERTY_IMAGE_UPLOAD_URL } from '../../../config';


interface Props {
    
}

export const PropertyEditor: React.FC<Props> = (props) => {

    const { propertyId } = useParams()

    const [showMessage, setshowMessage] = useState(false);
    const {data, error} = useGetPropertyQuery({
        variables: {
            id: propertyId ? propertyId : "0"
        }
    });
    
    const [saveProperty] = useCreatePropertyMutation();

    async function onSubmit(values: Property) {     
        var result = await saveProperty({
            variables: {
                property: formatProperty(values)
            }
        });
        if(result){
            setshowMessage(true)
            // history.push("/admin#/properties")
        }
    }

    
    if((data && data.getProperty) || (propertyId == "0")) {
        var property = newProperty;
        if(data?.getProperty){
            property = data.getProperty;
        }
        
        return(
            <Editor 
                entity={property} 
                store={onSubmit} 
                entityId={property.id}
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