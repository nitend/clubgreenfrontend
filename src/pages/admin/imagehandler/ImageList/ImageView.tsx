import { IMAGE_BASE_URL } from "../../../../config"
import React from "react";
import { IconButton, Grid } from "@material-ui/core";
import { DeleteForeverOutlined } from "@material-ui/icons";



interface Props {
    imageUrlAppendix: string
    size: "s" | "m" | "l" | "default"
    handleDelete: (urlAppendix: string) => void
}

export const ImageView: React.FC<Props> = (props) => {

    var imageUrl = IMAGE_BASE_URL + props.imageUrlAppendix;
    var sizeAppendix = "."

    switch(props.size){
        case "s": sizeAppendix = "-sm.";
            break;
        case "m": sizeAppendix = "-md.";
            break;
        case "l": sizeAppendix = "-lg.";
            break;
        default: sizeAppendix = ".";        
    }

    imageUrl = imageUrl.replace(".", sizeAppendix);

    const handleDelete = () => {
        props.handleDelete(props.imageUrlAppendix);
    }


    return (
        <Grid item > 
                <div style={{margin: "8px"}}>
                <img src={imageUrl} alt={imageUrl}></img>
                <IconButton onClick={handleDelete}>
                    <DeleteForeverOutlined></DeleteForeverOutlined>
                </IconButton>
            </div>      
        </Grid>
        )
}