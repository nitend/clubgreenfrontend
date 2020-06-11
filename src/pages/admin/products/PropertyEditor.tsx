import React, { useState } from 'react'
import { useGetProductQuery, Product, useUpdateProductMutation, useCreateProductQuery} from '../../../generated/graphql'
import { useParams } from 'react-router-dom';
import { EditNewProperty } from './EditNewProperty';
import { EditProperty } from './EditProperty';


interface Props {
    
}

export const ProductEditor: React.FC<Props> = (props) => {

    const { id } = useParams()
 
    if(id == "new"){
        return (<EditNewProperty></EditNewProperty>)
    } else {
        if(id){
            return (<EditProperty id={id}/>)
        } 
    }
    return (<div>Wrong ID </div>)
}