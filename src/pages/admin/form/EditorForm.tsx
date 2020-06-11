import React from 'react'
import { Button, TextField, Grid } from '@material-ui/core'
import { Formik , Form} from 'formik'

interface Props {
    values: any;
    onSubmit: (values: any) => void;
}

export const EditorForm: React.FC<Props> = (props) => {


    return (
        <Formik initialValues={props.values} onSubmit={props.onSubmit} enableReinitialize={true}>
            {({values, handleChange, handleBlur}) => (
                <Form>
                <Grid container direction="column" spacing={4}>
                        {Object.entries(values).map(([key, value]) => {
                    
                            if(key !== "id" && key !== "__typename" && key !== "images"){
                                return <Grid item key={key}>
                                            <TextField 
                                            name={key}
                                            label={key}
                                            value={value ? value : ""} 
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            />
                                        </Grid>

                            }
                            }
                        )} 
                        <Grid item>
                            <Button variant="contained" type="submit">
                                speichern
                            </Button>
                        </Grid>
                    </Grid> 
                </Form>  
            ) }           
        </Formik>
    )
    

}

 /*       
<pre>
{JSON.stringify(values, null, 2)}
</pre>
*/