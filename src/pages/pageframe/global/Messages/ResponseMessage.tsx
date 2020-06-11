import React from "react";
import { MessageView } from "./MessageView";

interface Props {
    response: string
    show: boolean
}

export const ResponseMessage: React.FC<Props> = (props) => {
 
   return (
        <MessageView message={props.response} severity={"info"} show={props.show}/>
   )
}