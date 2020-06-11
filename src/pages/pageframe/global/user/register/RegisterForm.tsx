import React from "react";
import { TextField, Button, Checkbox, Typography} from "@material-ui/core";
import {Formik} from 'formik'
import * as Yup from 'yup'

interface Props {
    registerFormFinished: (values: {email: string, password: string}) => void
}

export const RegisterForm: React.FC<Props> = (props) => {
    return (
        <div style={{maxWidth: '400px', margin: 'auto'}}>
            <Formik initialValues={{
                email: "",
                password: "",
                acceptTerms: false
            }} 
            onSubmit={props.registerFormFinished}
            validationSchema={Yup.object().shape({
                email: Yup.string()
                  .email()
                  .required("Required"),
                  password: Yup.string().min(8).required("Required"),
                  acceptTerms: Yup.bool().oneOf([true]).required()
              })} >
                {props => {
                const {
                values,
                touched,
                errors,
                handleChange,
                handleBlur,
                handleSubmit,
                } = props;
                return (
                    <form onSubmit={handleSubmit}>
                            <TextField 
                                error={errors.email && touched.email
                                    ? true
                                    : false
                                }
                                fullWidth={true}
                                id="email" 
                                label="Email"
                                value={values.email} 
                                onChange={handleChange} 
                                onBlur={handleBlur}
                                helperText={errors.password && touched.password 
                                    ? "Gib eine gültige Email-Adresse an."
                                    : ""
                                }
                            />
                            <TextField 
                                error={errors.password && touched.password
                                    ? true
                                    : false
                                }
                                fullWidth={true}
                                id="password" 
                                label="Passwort"
                                type="password"
                                value={values.password} 
                                onChange={handleChange}
                                onBlur={handleBlur}
                                helperText={errors.password && touched.password 
                                    ? "Dein Passwort muss mindestens 8 Zeichen lang sein."
                                    : ""
                                }
                            />
                            <Typography style={{fontSize: '14px',margin: '8px'}}>
                            <Checkbox
                                    checked={values.acceptTerms}
                                    required={true}
                                    id="acceptTerms"
                                    onChange={handleChange}
                                    inputProps={{ 'aria-label': 'primary checkbox' }}
                                /> Bitte bestätige unsere <a href="/">Nutzungsbedingungen</a> und die <a href="/">Erklärung zum Datenschutz</a>.
                            </Typography>

                            <Button variant={"outlined"} style={{margin: 'auto', display: 'block', marginTop: '24px'}} type="submit">anmelden</Button>                          
                    </form>);
            }}
            </Formik>
            </div>)
};