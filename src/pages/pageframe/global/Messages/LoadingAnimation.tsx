import React from "react";
import { CircularProgress, Typography } from "@material-ui/core";
import { BasicContentBox, SectionContainer } from "../StyledComponents";
import styles from './LoadingAnimation.module.css'

interface Props {
   message: string
}



export const LoadingAnimation: React.FC<Props> = (props) => {
 
   return (

               <div className={styles["loading-container"]}>
               <CircularProgress size={30} className={styles["loading-image"]}/>
                  <Typography className={styles["loading-message"]}>
                     {props.message}
                  </Typography>
               </div>
        
   )
}