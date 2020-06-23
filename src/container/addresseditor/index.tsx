import React, { useState } from "react";
import { Address, AddressForm } from "../../components/addressform";
import { useMeQuery} from "../../generated/graphql";
import { ErrorMessage } from "../../pages/pageframe/global/Messages/ErrorMessage";
import { LoadingAnimation } from "../../pages/pageframe/global/Messages/LoadingAnimation";
import { SuccessMessage } from "../../pages/pageframe/global/Messages/SucessMessage";

interface Props {
    onDone: () => void
}

export const AddressEditor: React.FC<Props> = (props) => {

    const {data, loading, error} = useMeQuery();
    const [addressUpdated, setaddressUpdated] = useState(false)

    if(error){
        return (<ErrorMessage error={error} show={true}/>)
    }

    const handleSaveAddress = async (address: Address) => {

        console.log("onSubmit :"+ JSON.stringify(address))
       /* TODO
        const result = await useraddress({
            variables: {
                useraddress: address
            }
        })
        
        if(result){
            setaddressUpdated(true)
             
        } else {
            console.log("onSubmit : false")
        }
        */
       props.onDone()
    }

    if(data && data.me){
        const user = data.me;

        const address: Address = {
            streetName: user.street ? user.street : "",
            streetNumber: user.streetNumber ? user.streetNumber : "",
            postalCode: user.postalcode ? user.postalcode : "",
            town: user.town ? user.town : "" 
        }


        return (
            <div>
                <AddressForm values={address} onSubmit={handleSaveAddress}/>
                <SuccessMessage response={"Neue Adresse wurden gespeichert."} show={addressUpdated} /> 
            </div>
        )
    }
    return (
        <LoadingAnimation message={"Daten werden geladen"} />
    )
}
