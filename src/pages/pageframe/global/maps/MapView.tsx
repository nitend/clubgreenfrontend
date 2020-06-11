import React from "react";
import { Map, TileLayer} from 'react-leaflet'
import { Property, Sight } from "../../../../generated/graphql";
import { MAP_DEFAULT_FOCUS_LAT, MAP_DEFAULT_FOCUS_LONG, MAP_ZOOM_LEVEL } from "../../../../config";
import { MapMarkerProperty } from "./MapMarkerProperty";
import { MapMarkerSight } from "./MapMarkerSight";

interface Props {
     properties: Property[]
     sights: Sight[]
     height: string
}

export const MapView: React.FC<Props> = (props) => {

     console.log(props.properties)
     const style = {
          width: '100%',
          height: props.height
     };

   return (
        <Map style={style} 
        center= {{lat: MAP_DEFAULT_FOCUS_LAT ,lng: MAP_DEFAULT_FOCUS_LONG}}
        zoom= {MAP_ZOOM_LEVEL}
        doubleClickZoom= {false} 
        closePopupOnClick= {false} 
        dragging={false} 
        zoomSnap= {0} 
        zoomDelta= {0.5} 
        trackResize= {false}
        touchZoom= {false}
        scrollWheelZoom= {false}
        >
          <TileLayer
               url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
               attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          />       
               {props.properties.map((prop) => {
                         return <MapMarkerProperty key={"property "+prop.id} property={prop}/>  
                    }
               )}
               {props.sights.map((sight) => {
                         return <MapMarkerSight key={"sight "+sight.id} sight={sight}/>  
                    }
               )}            
        </Map>
   )
}