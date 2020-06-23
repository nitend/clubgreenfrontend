import React, { useContext } from "react"
import { Grid, Typography, Box } from "@material-ui/core"
import { BookingContext } from "../../BookingContext"
import { FeaturesBatch } from "./FeaturesBatch"
import { IMAGE_BASE_URL } from "../../../../config"
import { useGetPropertyQuery } from "../../../../generated/graphql"

interface Props {

}

export const PropertySelectionView:  React.FC<Props> = () => { 

    const {selectedProperty} = useContext(BookingContext)
    const {data, loading, error} = useGetPropertyQuery({
        variables: {
            id: selectedProperty || ""
        }
    })


    if(data && data.getProperty){
        const property = data.getProperty
        return (
        <div style={{marginTop: "8px"}}>    
            <Grid container spacing={2} alignItems="flex-end">
                
                    <Grid item >
                        <Box >               
                            <img alt={"testbild"} 
                                src={IMAGE_BASE_URL + property.images[0]} 
                                width={"120px"}/>
                        </Box>
                    </Grid>
                    <Grid item xs={6} >
                        <Typography variant="h6">
                            {property.title}
                        </Typography>
                        <Typography variant="subtitle2">
                            {property.subtext}
                        </Typography>
                        <Typography variant="body2">
                            {property.location}
                        </Typography>
                        <FeaturesBatch value={property.beds_adult || 0}>
                            test
                            </FeaturesBatch>
                        </Grid>
                    </Grid>
        </div>)
    } 

    return (<div style={{minHeight: "120px", alignContent: "center"}}>keine Unterkunft ausgewählt</div>)
}