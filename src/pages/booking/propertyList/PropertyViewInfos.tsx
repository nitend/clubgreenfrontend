import React from 'react'
import { Typography, Grid } from '@material-ui/core';
import {Rating} from '@material-ui/lab'
import {HotelOutlined} from '@material-ui/icons'
import { FeaturesBatch } from '../myBooking/propertyView/FeaturesBatch';


interface Props {
    property: any
}


export const PropertyViewInfos:  React.FC<Props> = (Props) => {
    
    return (
        <div>                 
            <Grid container 
                    direction="column" 
                    justify="flex-start" >
                    <Grid item>
                        <Typography variant={"h6"} color={"secondary"}>
                            {Props.property.title}
                        </Typography>                      
                    </Grid>
                    <Grid item>
                        <Typography variant={"subtitle2"}>
                            {Props.property.subtext}
                        </Typography>                      
                    </Grid>
                    <Grid item>
                        <Typography variant={"body1"}>
                            {Props.property.location}
                        </Typography>                      
                    </Grid>
                    <Grid item>
                        <Typography variant={"body2"}>
                            {Props.property.beds_adults}
                        </Typography>                      
                    </Grid>
                    <Grid item>
                        <Rating name="read-only" defaultValue={2.5} precision={0.5} readOnly/>         
                    </Grid> 
                    <Grid item>
                        <FeaturesBatch value={Props.property.beds_adult}>
                                <HotelOutlined />
                        </FeaturesBatch>                   
                    </Grid>                     
                </Grid>                                       
        </div>
    )
    
}
