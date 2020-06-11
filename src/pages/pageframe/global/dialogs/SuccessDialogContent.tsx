import React from 'react'
import { DialogTitle, DialogContentText } from '@material-ui/core'

interface Props {
    title: string
    text: string
}

export const SuccessDialogContent: React.FC<Props> = (props) => {

    return (
      <div>
        <div style={{display: "block", marginLeft: "auto", marginRight: "auto", padding: "8px"}}>
           {props.children}
        </div>
        <DialogTitle style={{textAlign: "center", width: "100%", padding: "8px"}} >{props.title}</DialogTitle>
        <DialogContentText style={{margin: "auto", width: "fit-content", padding: "8px"}} >{props.text}</DialogContentText>

      </div>
    )
}

//
