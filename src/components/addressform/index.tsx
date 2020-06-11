import React from 'react'
import { Button, TextField, Grid } from '@material-ui/core'
import {useFormik, FormikBag} from 'formik'
import styles from "./AddressForm.module.css"
import * as Yup from 'yup'
import { SubmitButton } from '../formsubmitbutton'


export interface Address {
    streetName: string
    streetNumber: string
    postalCode: string
    town: string
}

interface Props {
    values: Address;
    onSubmit: (values: Address) => void;
}

export const AddressForm: React.FC<Props> = (props) => {

    const values = props.values;

    const formik = useFormik({
        initialValues: values, 
        onSubmit: values => {
            props.onSubmit(values);
          },
    })

    return (
        <form onSubmit={formik.handleSubmit}>
                <div className={styles.row_elements}>
                    <TextField
                    style={{flex: 1}}
                    id={"streetName"} 
                    name={"streetName"}
                    label={"Straße"}
                    value={formik.values.streetName} 
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    />
                    <TextField 
                    style={{width: "80px", marginLeft: "40px"}}
                    id={"streetNumber"}
                    name={"streetNumber"}
                    label={"Nr."}
                    value={formik.values.streetNumber} 
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}/>
                </div>
                <div className={styles.row_elements}>
                    <TextField 
                    style={{width: "80px"}}
                    name={"postalCode"}
                    label={"PLZ"}
                    id={"postalCode"}
                    value={formik.values.postalCode} 
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    />
                    <TextField 
                    style={{flex: 1, marginLeft: "40px"}}
                    id={"town"}
                    name={"town"}
                    label={"Ort"}
                    value={formik.values.town} 
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}/>
                </div> 

            <SubmitButton label={"Übernehmen"} />    
            
            </form>   
    )
}
