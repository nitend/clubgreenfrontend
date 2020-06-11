import React from 'react'
import { Button, TextField, Select, MenuItem } from '@material-ui/core'
import { useFormik} from 'formik'
import styles from "./NameForm.module.css"
import * as Yup from 'yup'
import { SubmitButton } from '../formsubmitbutton'


export interface NameData {
    gender: "male" | "female" | "else"
    firstName: string
    surname: string
}

interface Props {
    values: NameData;
    onSubmit: (values: NameData) => void;
}

export const NameForm: React.FC<Props> = (props) => {

    const values = props.values;

    const formik = useFormik({
        initialValues: values, 
        onSubmit: props.onSubmit, 
    })

    return (
                <form onSubmit={formik.handleSubmit}>   
                    <div className={styles.row_elements}>
                        <Select
                        style={{width: "160px", justifySelf: "flex-start"}} 
                        label={""}
                        id={"gender"}
                        name={"gender"}
                        value={formik.values.gender} 
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        >
                            <MenuItem value={"male"}>Mann</MenuItem>
                            <MenuItem value={"female"}>Frau</MenuItem>
                            <MenuItem value={"else"}>Sonstige</MenuItem>
                        </Select>
                    </div>
                    <div className={styles.row_elements}>
                        <TextField 
                        style={{flex: 1}}
                        label={"Vorname"}
                        id={"firstName"}
                        name={"firstName"}
                        value={formik.values.firstName} 
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        />
                        <TextField 
                        style={{flex: 1, marginLeft: "40px"}}
                        id={"surname"}
                        label={"Nachname"}
                        name={"surname"}
                        value={formik.values.surname} 
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}/>
                </div> 
                <SubmitButton label={"übernehmen"} />
        </form>
       
    )
}
