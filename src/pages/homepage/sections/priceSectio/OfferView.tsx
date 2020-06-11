import React from "react";
import { Paper, Button, Typography, withStyles } from "@material-ui/core";
import { Product } from "../../../../generated/graphql";

interface Props {
    product: Product
    onOfferClicked: (product: Product) => void
}

export const PriceTag = withStyles(
    {
      root: {
        marginTop: '8px',
        width: '100%',
        fontSize: '64px',
        fontWeight: "lighter",
        textAlign: 'center'
      }
      
    }
  )(Typography)

  export const ActionButton = withStyles(
    {
      root: {
        justifyContent: 'center'
      }
      
    }
  )(Button)

  export const MonthTag = withStyles(
    {
      root: {
        marginBottom: '16px',
        width: '100%',
        fontSize: '24px',
        textAlign: 'center'
      }
      
    }
  )(Typography)

export const OfferView: React.FC<Props> = (props) => {



  const product = props.product;

  const features = [
    "Über 100 Unterkünfte jederzeit nutzen",
    "Familie & Freunde kostenlos mitnehmen",
    "Vor Ort: Fahrräder, BBQ, Liegestühle, etc.",
    "Tour-Guide für Ausflüge und Aktivitäten",
    "24/7 Vor-Ort-Service bei Problemen"
]

const handleOfferClicked = () => {
    props.onOfferClicked(product)
}


   return (
    <Paper elevation={3} style={{justifyContent: 'center'}}>
        <PriceTag color="primary">
            {product.price}<span style={{fontSize: '14px'}}>€/m</span>
        </PriceTag>

        <MonthTag>
            für {product.minmonth} Monate 
        </MonthTag>

        <ul style={{width: '95%', margin: 'auto', fontSize: '14px'}}>
            {features.map((x) =>{
                return (

                    <li key={x}> {x}
                    </li>
                )
            }
            )}
        </ul>
        <div style={{padding: '8px', textAlign: 'center', marginTop: '16px'}}>
            <ActionButton 
              variant="contained" 
              color="secondary" 
              onClick={handleOfferClicked} >jetzt bestellen</ActionButton>
        </div>   
    </Paper>
   )
}