import React from "react";
import { useTeaserPropertiesQuery } from "../../../../generated/graphql";
import { LoadingAnimation } from "../Messages/LoadingAnimation";
import { MapView } from "./MapView";
import { ErrorMessage } from "../Messages/ErrorMessage";

interface Props {

}

export const MapLoader: React.FC<Props> = () => {
    const {data, loading, error} = useTeaserPropertiesQuery()

    if(loading){ 

    }

    if(data && data.teaserProperties){
        return (
            <MapView properties={data.teaserProperties} height={"400px"} sights={[]}/>
        )
    }

    if(error){
        return (
            <ErrorMessage error={error} show={true}/>
        )
    }

   return (
        <LoadingAnimation message={'Daten werden geladen ...'}/>
   )
}