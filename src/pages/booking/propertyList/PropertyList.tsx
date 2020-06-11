import React from 'react'
import { usePropertiesQuery } from '../../../generated/graphql'
import { PropertyView } from './PropertyView';
import { BasicContentBox } from '../../pageframe/global/StyledComponents';


interface Props {

}


export const PropertyList:  React.FC<Props> = () => {
    const {data, loading, error} = usePropertiesQuery();


    if(loading){
        return <div>
            loading ....
        </div>
    }

    if(error){
        console.log(error)
        return <div>err</div>
    }

    if(!data){
        return <div>
            no data
        </div>
    }
    
    return (  
        <BasicContentBox>
            {data.allProperties?.map((x) => (                                                   
                        <PropertyView key={x.id} property={x}></PropertyView>
            ))}
        </BasicContentBox>
    )
}
