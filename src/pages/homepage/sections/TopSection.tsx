import React from "react";
import { TopSectionContainer, BasicContentBox, WhiteTypo, TopActionButton } from "../../pageframe/global/StyledComponents";


interface Props {

}



export const TopSection: React.FC<Props> = () => {

   return (
    <TopSectionContainer>
        <BasicContentBox>
            <WhiteTypo variant="h1">
               Jederzeit einchecken und entspannen
           </WhiteTypo>
           <WhiteTypo variant="h4">
               Freizeithäuser im Berliner Umland
           </WhiteTypo>
           <TopActionButton variant="contained" color="secondary" href=""> ab 99€/m </TopActionButton>
        </BasicContentBox>
    </TopSectionContainer>
   )
}