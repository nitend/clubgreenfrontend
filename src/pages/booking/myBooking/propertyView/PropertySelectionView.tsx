import React, { useContext } from "react"
import { Grid, Typography, Box } from "@material-ui/core"
import { BookingContext } from "../../BookingContext"
import { FeaturesBatch } from "./FeaturesBatch"
import { IMAGE_BASE_URL } from "../../../../config"

interface Props {

}

export const PropertySelectionView:  React.FC<Props> = () => { 

    const {selectedProperty} = useContext(BookingContext)


    if(selectedProperty){
        return (
        <div style={{marginTop: "8px"}}>    
            <Grid container spacing={2} alignItems="flex-end">
                
                    <Grid item >
                        <Box >               
                            <img alt={"testbild"} 
                                src={IMAGE_BASE_URL + selectedProperty.images[0]} 
                                width={"120px"}/>
                        </Box>
                    </Grid>
                    <Grid item xs={6} >
                        <Typography variant="h6">
                            {selectedProperty.title}
                        </Typography>
                        <Typography variant="subtitle2">
                            {selectedProperty.subtext}
                        </Typography>
                        <Typography variant="body2">
                            {selectedProperty.location}
                        </Typography>
                        <FeaturesBatch value={selectedProperty.beds_adult}>
                            test
                            </FeaturesBatch>
                        </Grid>
                    </Grid>
        </div>)
    } 

    return (<div style={{minHeight: "120px", alignContent: "center"}}>keine Unterkunft ausgewählt</div>)
}