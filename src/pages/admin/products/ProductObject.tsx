import { Property, Product } from "../../../generated/graphql";
import { Field } from "../lists/TableList";

export const newProduct: Product = { 
    id: "",
    title: "",
    creationDate: Date.now(),
    paymentPricePlan: "",
    price: 0.0,
    minmonth: 0,
    active: true,
    deleted: false,   
}

export const formatProduct = (product: Product) => {

    product.__typename = undefined;
    product.price = parseFloat(product.price+"");
    product.minmonth = parseFloat(product.minmonth + "")
    product.creationDate = new Date(product.creationDate)

    console.log(JSON.stringify(product))

    return product;
}

export const ProductFields: Field[] = [
    {
        name: "ID",
        keyName: "id"
    },
    {
        name: "Name",
        keyName: "title"
    },
    {
        name: "Preis",
        keyName: "price"
    },
    {
        name: "Payment_ID",
        keyName: "paymentPricePlan"
    },
    {
        name: "Mindestlaufzeig",
        keyName: "minmonth"
    },
    {
        name: "Aktive",
        keyName: "active"
    },

]