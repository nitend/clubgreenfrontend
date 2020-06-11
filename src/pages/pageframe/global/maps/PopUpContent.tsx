import React from "react";

interface Props {
     title: string
     imageUrl: string
}

export const PopUpContent: React.FC<Props> = (Props) => {

   return (
       <div style={{display: "inline", width: "100px"}}>
           <img 
            src={Props.imageUrl} 
            alt={"Abbildung "+Props.title}
            style={{width: "100px", height: "100px"}} />
           
       </div>
    )
}