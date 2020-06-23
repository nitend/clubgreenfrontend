import React from "react";
import { useGetAllPropertiesQuery } from "../../../../generated/graphql";
import { LoadingAnimation } from "../Messages/LoadingAnimation";
import { MapView } from "./MapView";
import { ErrorMessage } from "../Messages/ErrorMessage";

interface Props {

}

export const MapLoader: React.FC<Props> = () => {
    const {data, loading, error} = useGetAllPropertiesQuery()

    if(loading){ 

    }

    if(data && data.getAllProperties){
        return (
            <MapView properties={data.getAllProperties} height={"400px"} sights={[]}/>
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