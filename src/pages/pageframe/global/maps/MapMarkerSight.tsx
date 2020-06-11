import React from "react";
import { Marker} from 'react-leaflet'
import { Sight } from "../../../../generated/graphql";

interface Props {
     sight: Sight
}

export const MapMarkerSight: React.FC<Props> = (Props) => {

    const sight = Props.sight;

   return (
        <Marker
            key={sight.id}
            position={[
                sight.lat,
                sight.long
            ]}
            onClick={() => {
                    
            }}
        />    )
}