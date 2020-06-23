import React, { useState } from 'react'
import { Sight, useGetSightQuery, useCreateSightMutation} from '../../../generated/graphql'
import { useParams } from 'react-router-dom';
import { Editor } from '../form/Editor';
import { MessageView } from '../../pageframe/global/Messages/MessageView';
import { LoadingAnimation } from '../../pageframe/global/Messages/LoadingAnimation';
import { ErrorMessage } from '../../pageframe/global/Messages/ErrorMessage';
import { formatSight, newSight } from './SightObject';
import { SIGHT_IMAGE_UPLOAD_URL } from '../../../config';


interface Props {
    
}

export const SightEditor: React.FC<Props> = (props) => {

    const { sightId } = useParams()

    const [showMessage, setshowMessage] = useState(false);
    const {data, error} = useGetSightQuery({
        variables: {
            id: sightId ? sightId : "0"
        }
    });
    
    const [saveSight] = useCreateSightMutation();

    async function onSubmit(values: Sight) {     
        var result = await saveSight({
            variables: {
                sight: formatSight(values)
            }
        });
        if(result){
            setshowMessage(true)
        }
    }

    
    if((data && data.getSight) || (sightId === "0")) {
        var sight = newSight;
        if(data?.getSight){
            sight = data.getSight;
        }
        
        return(
            <Editor 
                entity={sight} 
                store={onSubmit} 
                entityId={sight.id}
                imageuploadurl={SIGHT_IMAGE_UPLOAD_URL}>     
                <MessageView severity={"success"} message={"Die Daten wurden gespeichert"} show={showMessage} />
            </Editor>
        )   
    }


    if(error){
        return (<ErrorMessage error={error} show={true}/>) 
    }
   
    return (<LoadingAnimation message={"Daten werden geladen ..."}/>)
}