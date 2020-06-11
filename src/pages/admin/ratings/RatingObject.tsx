import { Rating } from "../../../generated/graphql";
import { Field } from "../lists/TableList";

export const newRating: Rating = { 
    id: "",
    userId: 0,
    rating: 2.5,
    title: "testtitle",
    targetId: 0,
    targettype: "property",
    comment: "ich bin zufrieden"
}

export const RatingFields: Field[] = [
        {
            name: "ID",
            keyName: "id"
        },
        {
            name: "Nutzer ID",
            keyName: "userId"
        },
        {
            name: "Bewertung",
            keyName: "rating"
        },
        {
            name: "Title",
            keyName: "title"
        },
        {
            name: "Object",
            keyName: "targettype"
        },
    ]
    


export const formatRating = (rating: Rating) => {

    rating.__typename = undefined;
    rating.userId = parseFloat(rating.userId+"");
    rating.rating = parseFloat(rating.rating+"");
    rating.targetId = parseFloat(rating.targetId+"");

    return rating;
}