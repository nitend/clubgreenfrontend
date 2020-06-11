import React from "react";
import { Card, CardActionArea, CardMedia, CardContent, Typography, CardActions, Button, makeStyles} from "@material-ui/core";
import { IMAGE_BASE_URL, IMAGE_MEDIUM_SIZE_APPENDIX } from '../../../../config'
import { Property } from "../../../../generated/graphql";

interface Props {
    property: Property
}

const useStyles = makeStyles({
  root: {
    maxWidth: 240,
  },
  media: {
    height: 140,
  },
  cardcontent: {
    height: 100,
  }
  
});



export const PropertyCard: React.FC<Props> = (props) => {

  const classes = useStyles();

  var imageUrl = IMAGE_BASE_URL + props.property.images[0];
  imageUrl = imageUrl.replace(".", IMAGE_MEDIUM_SIZE_APPENDIX)
  console.log(imageUrl); 

   return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media} 
          image=  {imageUrl}
          title="Contemplative Reptile"
        />
        <CardContent className={classes.cardcontent}>
          <Typography gutterBottom variant="h5" component="h2">
                  {props.property.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
                  {props.property.location}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions >
        <Button size="medium" color="primary">
            Reservieren
        </Button>
      </CardActions>
  </Card>
   )
}