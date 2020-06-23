import React from "react";
import { useGetAllPropertiesQuery } from "../../../../generated/graphql";
import { CircularProgress, Grid } from "@material-ui/core";
import { PropertyCard } from "./PropertyCard";

interface Props {

}



export const PropertyTeaser: React.FC<Props> = () => {

    const {data, loading, error} = useGetAllPropertiesQuery();

    if(loading){
        return (
            <CircularProgress />
        )
    }

    if(data && data.getAllProperties){

       return (
        <Grid
        container
        spacing={2}
        direction="row"
        justify="center">
        {data.getAllProperties?.map(prop => (
            <Grid item key={prop.id}>
              <PropertyCard property={prop} /> 
            </Grid>
        ))}
    </Grid>
       ) 
    }

    if(error){
        return (
            <div>
                {JSON.stringify(error)}
            </div>
        ) 
     }
     return (
        <CircularProgress />
    )
}