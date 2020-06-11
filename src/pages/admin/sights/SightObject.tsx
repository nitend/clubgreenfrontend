import { Sight } from "../../../generated/graphql";
import { Field } from "../lists/TableList";

export const newSight: Sight = { 
    id: "",
    title: "",
    subtext: "",
    location: "",
    type: "",
    lat: 0.0,
    long: 0.0,
    images: [],   
}

export const formatSight = (sight: Sight) => {

    sight.__typename = undefined;
    sight.lat = parseFloat(sight.lat+"");
    sight.long = parseFloat(sight.long+"");

    return sight;
}

export const SightFields: Field[] = [
    {
        name: "ID",
        keyName: "id"
    },
    {
        name: "Name",
        keyName: "title"
    },
    {
        name: "Subtext",
        keyName: "subtext"
    },
    {
        name: "Ort",
        keyName: "location"
    },
    {
        name: "Kathegorie",
        keyName: "type"
    },

]
