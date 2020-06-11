import React from "react";
import { MessageView } from "./MessageView";

interface Props {
    response: string
    show: boolean
}

export const SuccessMessage: React.FC<Props> = (props) => {
 
   return (
        <MessageView message={props.response} severity={"success"} show={props.show}/>
   )
}