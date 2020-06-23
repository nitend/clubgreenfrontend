import React from "react";
import { Marker} from 'react-leaflet'
import { Sight } from "../../../../generated/graphql";

interface Props {
     sight: Sight
}

export const MapMarkerSight: React.FC<Props> = (Props) => {

    const sight = Props.sight;

    if(sight && sight.lat && sight.long && sight.title){
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
    return (<div></div>)
}