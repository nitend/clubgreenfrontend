import React, { useState } from 'react'
import { useGetRatingQuery, useSaveRatingMutation, Rating } from '../../../generated/graphql'
import { useParams } from 'react-router-dom';
import { Editor } from '../form/Editor';
import { MessageView } from '../../pageframe/global/Messages/MessageView';
import { LoadingAnimation } from '../../pageframe/global/Messages/LoadingAnimation';
import { ErrorMessage } from '../../pageframe/global/Messages/ErrorMessage';
import { formatRating, newRating } from './RatingObject';


interface Props {
    
}

export const RatingEditor: React.FC<Props> = (props) => {

    const { ratingId } = useParams()

    const [showMessage, setshowMessage] = useState(false);
    const {data, error, refetch} = useGetRatingQuery({
        variables: {
            id: ratingId ? ratingId : ""
        }
    });
    
    const [saveRating] = useSaveRatingMutation();

    async function onSubmit(values: Rating) {     
        var result = await saveRating({
            variables: {
                rating: formatRating(values)
            }
        });
        if(result){
            setshowMessage(true)
        }
    }

    
    if((data && data.getRating) || (ratingId == "0")) {
        var rating = newRating;
        if(data?.getRating){
            rating = data.getRating;
        }
        
        return(
            <Editor 
                entity={rating} 
                store={onSubmit} 
                entityId={rating.id}
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