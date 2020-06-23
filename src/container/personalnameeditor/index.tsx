import React, { useState } from "react";
import { useMeQuery} from "../../generated/graphql";
import { ErrorMessage } from "../../pages/pageframe/global/Messages/ErrorMessage";
import { NameForm, NameData } from "../../components/nameform";
import { LoadingAnimation } from "../../pages/pageframe/global/Messages/LoadingAnimation";
import { SuccessMessage } from "../../pages/pageframe/global/Messages/SucessMessage";

interface Props {
    onDone: () => void
}

export const PersonalNameEditor: React.FC<Props> = (props) => {

    const {data, loading, error} = useMeQuery();
    const [showSuccess, setshowSuccess] = useState(false)
    const [showError, setshowError] = useState(false)

    if(error){
        return (<ErrorMessage error={error} show={true}/>)
    }

    const handleSaveName = async (name: NameData) => {

        console.log("submit namedata")
        /* TODO 
        const result = await username({
                variables: {
                    username: name
                }
        })
        if(result){
            setshowSuccess(true);
            
        } else {
            setshowError(true);
        }
        console.log("submit end")
        */
        props.onDone()
    }

    if(data && data.me){
        const user = data.me;

        const name: NameData ={
            gender: user.gender ? user.gender as "male" | "female" | "else" : "else",
            firstName: user.firstname ? user.firstname : "",
            surname: user.surname ? user.surname : ""
        }

        return (
            <div>
                <NameForm values={name} onSubmit={handleSaveName}/>
                <SuccessMessage show={showSuccess} response={"Dein Name wurde gespeichert"} />
                <ErrorMessage error={new Error("Bei speichert ist ein Fehler aufgetreten")} show={showError}/>
            </div>
            
        )
    }
    return (
        <LoadingAnimation message={"Daten werden geladen"} />
    )
}
