import React from "react";
import { Grid} from "@material-ui/core";
import { SectionContainerDark, BasicContentBox, SectionHeaderWhite } from "../../../pageframe/global/StyledComponents";
import { OfferView } from "./OfferView";
import { useProductsQuery } from "../../../../generated/graphql";
import { LoadingAnimation } from "../../../pageframe/global/Messages/LoadingAnimation";


interface Props {

}



export const PriceSection: React.FC<Props> = () => {

    const {data, loading, error} = useProductsQuery()

    
    if(data && data.getAllProducts){

        const products = data.getAllProducts;
        return (
            <SectionContainerDark>
                <BasicContentBox>
                    <SectionHeaderWhite variant="h6">
                       Mitgliedschaft
                   </SectionHeaderWhite>
                    <Grid container justify="center" spacing={2} direction='row'>
                        {products.map((product) => {
                            return (
                            <Grid item key={product.id}>
                                <OfferView product={product} onOfferClicked={()=>{}}></OfferView>
                            </Grid>
                            )
                        })}
                    </Grid>
                </BasicContentBox>        
            </SectionContainerDark>
           )
    }
    return (<LoadingAnimation message={"Angebote werden geladen ..."} />)
}