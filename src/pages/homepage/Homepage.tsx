import React from "react";
import { TopSection } from "./sections/TopSection";
import { MapSection } from "./sections/mapsection/MapSection";
import { SignInSection } from "./sections/SignInSection";
import { PropTeaserSection } from "./sections/propTeaserSectio/PropTeaserSection";
import { PriceSection } from "./sections/priceSectio/PriceSection";

interface Props {

}

export const Home: React.FC<Props> = () => {

   return (
       <div>
           <TopSection />
           <MapSection />
           <PropTeaserSection /> 
           <PriceSection />
           <SignInSection />
       </div>
   )
}