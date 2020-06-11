import React, { useState } from 'react'
import { IconButton } from '@material-ui/core'
import { Map } from '@material-ui/icons'
import { LargeMapView } from '../mapview/LargeMapView'

interface Props {
    
}


export const ShowMapButton:  React.FC<Props> = (Props) => {

    const [openMap, setopenMap] = useState(false);
   
    const onClick = () => {
        setopenMap(true)
    }


    return (
        <div>
            <IconButton onClick={onClick}>
                    <Map></Map>
            </IconButton> 
            <LargeMapView show={openMap} onClose={() => {setopenMap(false)}}></LargeMapView>
        </div>
)

}