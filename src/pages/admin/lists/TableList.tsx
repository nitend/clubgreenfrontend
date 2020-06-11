import React from 'react'
import { TableBody, Table, TableHead, TableCell, TableRow, TableContainer } from '@material-ui/core';
import { LoadingAnimation } from '../../pageframe/global/Messages/LoadingAnimation';

import { ListItemTest } from './ListItemtest';

export interface Field {
    name: string
    keyName: string
}


interface Props {
    fields: Field[]
    data: any[]
    onEditClicked: (entity: any) => void 
    onDeleteClicked: (entity: any) => void  
}

export const TableList: React.FC<Props> = (props) => {

  
    if(props.data){
        return( 
            <TableContainer>        
            <Table>      
                <TableHead>
                    <TableRow>
                        {props.fields.map(field => {
                        return <TableCell key={field.keyName}>{field.name}</TableCell>
                        })
                        }
                        <TableCell key={"editaction"}>{"Bearbeiten"}</TableCell>
                        <TableCell key={"deleteaction"}>{""}</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {props.data.map(x => {
                    return (              
                        <ListItemTest
                            key={x.id}
                            rowData={x}
                            fields={props.fields}
                            onDeleteClicked={props.onDeleteClicked} 
                            onEditClicked={props.onEditClicked}/>
                        )                
                    })}
                </TableBody>   
            </Table>
            </TableContainer>      
        )
    }

    return (
        <LoadingAnimation message={'Daten werden geladen'}/>  
    )
}