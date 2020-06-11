import React from "react";
import { SectionContainer, BasicContentBox } from "../../StyledComponents";
import { LoginForm } from "./LoginForm";

interface Props {

}

export const LoginSection: React.FC<Props> = () => {

    return (
        <SectionContainer maxWidth="xs">
            <BasicContentBox>
                <LoginForm/>
            </BasicContentBox>
        </SectionContainer>
        )
};