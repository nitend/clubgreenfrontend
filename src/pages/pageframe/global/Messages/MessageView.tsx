import React, { useEffect } from "react";
import { Alert } from "@material-ui/lab";
import { Snackbar } from "@material-ui/core";

interface Props {
    message: string
    severity: "info" | "warning" | "error" | "success" | undefined
    show: boolean
}

export const MessageView: React.FC<Props> = ({message, severity= "info", show=false}) => {
 
    const [open, setOpen] = React.useState(false);

    useEffect(() => {
        setOpen(show)
    }, [show])

    const handleClose = (event: any) => {    
        setOpen(open);
      };

   return (
    <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity={severity}>
            {message}
        </Alert>
    </Snackbar>
 
   )
}