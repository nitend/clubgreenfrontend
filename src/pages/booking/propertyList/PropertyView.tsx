import React, { useContext } from 'react'
import { Button, Box, Grid, Paper} from '@material-ui/core';
import { BookingContext } from '../BookingContext';
import { IMAGE_BASE_URL } from '../../../config';
import { PropertyViewInfos } from './PropertyViewInfos';


interface Props {
    property: any
}


export const PropertyView:  React.FC<Props> = (Props) => {

    const {setSelectedPropterty, isActive} = useContext(BookingContext);
    
    return (
        <div>                 
            <Box marginY={2}> 
            <Paper>               
                <Grid container direction="row" spacing={0} justify="flex-start" alignItems="flex-end">
                    <Grid item >
                        <img alt={"Bild des Gartens"} src={IMAGE_BASE_URL+ Props.property.images[0]} width={"240px"} style={{marginRight: "8px"}}/>
                    </Grid>
                    <Grid item xs={12} sm >
                        <PropertyViewInfos property={Props.property} />
                    </Grid>
                    <Grid item >             
                        <Button variant="outlined" 
                            color="primary" 
                            disabled={isActive} 
                            style={{margin: "8px"}} 
                            onClick={() => {setSelectedPropterty(Props.property)}}>
                            auswählen
                        </Button>
                    </Grid>                                   
                </Grid> 
            </Paper>               
            </Box>
             
        </div>
    )
    
}
