import React from "react";
import { Box} from "@material-ui/core";
import { SectionContainer, SectionHeader } from "../../../pageframe/global/StyledComponents";
import { MapLoader } from "../../../pageframe/global/maps/MapLoader";

interface Props {

}



export const MapSection: React.FC<Props> = () => {

   return (
    <SectionContainer>
        <Box>
            <SectionHeader>
                Havel, Müritz ... oder Spreewald?
            </SectionHeader>
            <MapLoader />
        </Box>
    </SectionContainer>
   )
}