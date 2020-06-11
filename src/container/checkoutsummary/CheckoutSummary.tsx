import React, { useContext } from "react";
import { CheckoutContext } from "../../context/checkoutcontext/CheckoutContext";
import { BasicContentBox } from "../../pages/pageframe/global/StyledComponents";
import { SummarySectionData, ListSection } from "../../components/datalistsection/ListSection";
import { Typography } from "@material-ui/core";



interface Props {
     
}

export const CheckoutSummary: React.FC<Props> = () => {

    const {address, product, paymentMethod, personData} = useContext(CheckoutContext)

    const productData: SummarySectionData[] = [
        {
            label: "Bezeichnung",
            value: product?.title
        },
        {
            label: "Mindestvertragslaufzeit",
            value: product?.minmonth + " Monate"
        },
        {
            label: "Monatliche Gebühr",
            value: product?.price + " €"
        } 
        ]

    const paymentData: SummarySectionData[] = [
            {
                label: "Kreditkarte",
                value: paymentMethod?.card?.brand
            },
            {
                label: "Kartennummer",
                value: "**** **** **** "+paymentMethod?.card?.last4
            },
            ]


  return (
    <BasicContentBox>
        <Typography variant="h3">
            Zusammenfassung
        </Typography>
        <ListSection data={productData} sectionHeader={"Product"}/>
        <ListSection data={paymentData} sectionHeader={"Zahlungsmittel"}/>
    </BasicContentBox>
  );
};