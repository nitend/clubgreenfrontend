import React, { useState } from "react";
import { useLoginMutation, MeDocument, MeQuery } from "../../../../../generated/graphql";
import { setAccessToken } from "../../../../../accessToken";
import { TextField, Button} from "@material-ui/core";
import {Formik} from 'formik'
import { useHistory } from "react-router-dom";

interface Props {

}

export const LoginForm: React.FC<Props> = () => {
    const history = useHistory();
    const [Login] = useLoginMutation();
    const [error, setError] = useState()

    const loginFunc = async (values: {email: string, password: string}) => {
        try{
            const response = await Login({
                variables: values,
                update: (store, {data}) => {
                    if(!data){
                        return null;
                    }
                    /*
                    store.writeQuery<MeQuery>({
                        query: MeDocument,
                        data: {
                            me: data.login.user
                        }
                    })
                    */  
                }
            })
            if(response && response.data){
                setAccessToken(response.data.login.accessToken)
                history.push('/booking')
            } 
        } catch(error){
            setError(true);
        }
       
    }

    return (
        <div style={{maxWidth: '400px', margin: 'auto'}}>
            <Formik initialValues={{
                email: "",
                password: "",
                acceptTerms: false
            }} 
            onSubmit={loginFunc} >
                {props => {
                const {
                values,
                handleChange,
                handleBlur,
                handleSubmit,
                } = props;
                return (
                    <form onSubmit={handleSubmit}>
                            <TextField 
                                error={error} 
                                fullWidth={true}
                                id="email" 
                                label="Email"
                                value={values.email} 
                                onChange={handleChange} 
                                onBlur={handleBlur}
                            />
                            <TextField 
                                error={error}
                                fullWidth={true}
                                id="password" 
                                label="Passwort"
                                type="password"
                                value={values.password} 
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                            <Button variant={"outlined"} style={{margin: 'auto', display: 'block', marginTop: '24px'}} type="submit">anmelden</Button>                          
                    </form>);
            }}
            </Formik>
            </div>)
};