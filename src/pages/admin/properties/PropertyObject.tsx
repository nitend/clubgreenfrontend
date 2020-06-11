import { Property } from "../../../generated/graphql";

export const newProperty: Property = { 
    id: "",
    title: "",
    subtext: "",
    location: "",
    lat: 0.0,
    long: 0.0,
    beds_adult: 0,
    beds_kids: 0,
    beds_tent: 0,
    images: [],   
}

export const formatProperty = (property: Property) => {

    property.__typename = undefined;
    property.lat = parseFloat(property.lat+"");
    property.long = parseFloat(property.long+"");
    property.beds_adult = parseFloat(property.beds_adult+"");
    property.beds_kids = parseFloat(property.beds_kids+"");
    property.beds_tent = parseFloat(property.beds_tent+"");

    return property;
}