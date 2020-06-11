import React from "react";
import { MessageView } from "./MessageView";

interface Props {
    error: Error
    show: boolean
}

export const ErrorMessage: React.FC<Props> = (props) => {
 
   return (
    <MessageView message={props.error.message} severity={"error"} show={props.show}/>
   )
}