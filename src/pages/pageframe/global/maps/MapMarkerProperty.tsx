import React from "react";
import { Marker, Popup} from 'react-leaflet'
import { Property} from "../../../../generated/graphql";
import { PopUpContent } from "./PopUpContent";
import { genFullSourceUrl } from "../helper/ImageUrlGen";
import "./mapstyles.css"


interface Props {
     property: Property
}

export const MapMarkerProperty: React.FC<Props> = (Props) => {

    const property = Props.property;

    
    const fullSourceUrl = genFullSourceUrl(property.images[0], "small")

   return (
        <Marker
            key={property.id}
            position={[
                property.lat,
                property.long
            ]}
        >
            <Popup>
                
                <PopUpContent imageUrl={fullSourceUrl} title={property.title}>

                </PopUpContent>
            </Popup>
        </Marker>    )
}