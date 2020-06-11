import React, { useState } from 'react'
import { Formik } from 'formik';
import * as Yup from 'yup'
import axios from 'axios'
import { SuccessMessage } from '../../pageframe/global/Messages/SucessMessage';


interface Props {
    propertyId: string
    url: string
}

export const PictureUpload: React.FC<Props> = (props) => {

    console.log(props.propertyId);

    const [isUploaded, setIsUploaded] = useState(false)
    const [file, setfile] = useState()

    const onSubmitHandler = (file: any) => {
        const data = new FormData()
        data.append('targetId', props.propertyId+"")
        data.append('imageFile', file)   
        axios.post(props.url, data, { 
            headers: {
                'Content-Type': 'multipart/form-data'
              }
        }).then((response) => {
          if(response){
            setIsUploaded(true);
          }
           
        })
    }

    return(
        <Formik 
          initialValues={{file: null}}
          onSubmit={(values) => {  
            if(values && values.file){
                onSubmitHandler(values.file)
                console.log(values.file)
                
            } 
          }} 
          validationSchema={Yup.object().shape({
            file: Yup.mixed().required(),
          })}
          render={({ values, handleSubmit, setFieldValue }) => {
            return (
              
              <form onSubmit={handleSubmit}>
                <div>
                  <img src={file} alt="Thumbnial" style={{width: "60px", margin: "8px"}}/>
                </div>
                <div className="form-group">
                  <input id="file" name="file" type="file" onChange={(event) => {
                      if(event?.currentTarget && event.currentTarget.files){
                        setfile(URL.createObjectURL(event.currentTarget.files[0]))
                        setFieldValue("file", event.currentTarget.files[0]);
                      }
                  }} className="form-control" />
                  
                </div>
                <button type="submit" className="btn btn-primary">Bild hochladen</button>
                <SuccessMessage show={isUploaded} response={"response"}></SuccessMessage>
              </form>

            );
          }} />
    )
}