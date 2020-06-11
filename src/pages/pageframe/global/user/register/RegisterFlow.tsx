import React, { useState } from "react";
import './styles.css'
import { RegisterForm } from "./RegisterForm";
import { useRegisterMutation } from "../../../../../generated/graphql";
import { Typography } from "@material-ui/core";

interface Props {

}


export const RegisterFlow: React.FC<Props> = () => {

    const [Register] = useRegisterMutation()
    const [registerComlete, setregisterComlete] = useState(false)

    const registerFormFinished = (values: {email: string, password: string}) => {
        loginFunc(values);
    }

    const loginFunc = async (values: {email: string, password: string}) => {
        const response = await Register({
            variables: {
                email: values.email, 
                password: values.password,
                username: ""
            }
        })
        
        if(response && response.data){
            setregisterComlete(true)
        }
    }
    if(registerComlete){
        return (
            <Typography>
                <div>Vielen Dank</div>
                Wir haben Dir eine Email mit einem Akttivierungslink geschickt. <br/> Bitte aktiviere noch deinen Account.
            </Typography>
        )
    }


    return (
        <RegisterForm registerFormFinished={registerFormFinished}/>
    )
};