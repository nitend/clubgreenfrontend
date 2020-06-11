import React from 'react'
import { Dialog, Button } from '@material-ui/core'


interface Props {
    handleClose: () => void
    open: boolean
    buttonText: string
}

export const SuccessDialog: React.FC<Props> = (props) => {

    return (
       <Dialog
        open={props.open}
        keepMounted
        onClose={props.handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <div style={{padding: "16px"}}>
          {props.children}
    <Button onClick={props.handleClose} variant={"text"} color="primary" style={{width: "100%", textAlign: "center"}}>{props.buttonText}</Button>
        </div>
      </Dialog>
    )
}
