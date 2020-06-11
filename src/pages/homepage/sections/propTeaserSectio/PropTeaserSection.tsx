import React from "react";
import { SectionContainer, BasicContentBox, SectionHeader } from "../../../pageframe/global/StyledComponents";
import { PropertyTeaser } from "./PropertyTeaser";

interface Props {

}



export const PropTeaserSection: React.FC<Props> = () => {


   return (

    <SectionContainer>
        <BasicContentBox justifyContent="center">
            <SectionHeader>
                Über 50 Freizeithäuser im Berliner Umland
            </SectionHeader>
            <PropertyTeaser />
        </BasicContentBox>

    </SectionContainer>
   )
}