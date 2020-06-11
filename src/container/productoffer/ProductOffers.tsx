import React, { useContext } from "react";
import { Grid, Typography} from "@material-ui/core";
import { useProductsQuery, Product } from "../../generated/graphql";
import { LoadingAnimation } from "../../pages/pageframe/global/Messages/LoadingAnimation";
import { OfferView } from "../../pages/homepage/sections/priceSectio/OfferView";
import { BasicContentBox } from "../../pages/pageframe/global/StyledComponents";
import { CheckoutContext } from "../../context/checkoutcontext/CheckoutContext";


interface Props {
}

export const ProductOffers: React.FC<Props> = () => {

    const {data, loading, error} = useProductsQuery();

    const handleOfferClicked = (product: Product) => {
        //
        // GO TO Checkout with param!!

    }

    if(data && data.getAllProducts){
        const products = data.getAllProducts;
        return (
                <BasicContentBox>
                    <Grid container justify="center" spacing={2} direction='row'>
                        {products.map((product) => {
                            return (                        
                            <Grid item key={product.id}>
                                <OfferView product={product} onOfferClicked={handleOfferClicked}></OfferView>
                            </Grid>)
                        })}
                    </Grid>                  
                </BasicContentBox>       
           )
    }
    return (<LoadingAnimation message={"Angebote werden geladen ... "}></LoadingAnimation>) 
}