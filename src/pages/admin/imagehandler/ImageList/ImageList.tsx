
import { ImageView } from "./ImageView"
import React from "react"
import { Grid } from "@material-ui/core"


interface Props {
    imageUrlApends: string[]
    onDeleteHandler: (imageAppendix: string) => void
}

export const ImageList: React.FC<Props> = (props) => {

    return (
        <Grid container spacing={2}>
            {props.imageUrlApends.map(
                (imageUrlAppendix, index) => {
                    return <ImageView key={index} imageUrlAppendix={imageUrlAppendix} size={"s"} handleDelete={props.onDeleteHandler}></ImageView>
                } 
            )}
        </Grid>
       

    )
}