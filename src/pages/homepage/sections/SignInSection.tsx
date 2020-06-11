import React from "react";
import { SectionContainer, BasicContentBox, SectionHeader } from "../../pageframe/global/StyledComponents";
import { RegisterFlow } from "../../pageframe/global/user/register/RegisterFlow";

interface Props {

}



export const SignInSection: React.FC<Props> = () => {

   return ( 

    <SectionContainer>
        <BasicContentBox>
          <SectionHeader>
             Mitglied werden
          </SectionHeader>
          <RegisterFlow/>
        </BasicContentBox>

    </SectionContainer>
   )
}