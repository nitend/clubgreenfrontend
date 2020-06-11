import React from 'react'
import { Button, TableRow, TableCell } from '@material-ui/core';
import { Field } from './TableList';


interface newProps {  
    fields: Field[]
    rowData: any
    onEditClicked: (entity: any) => void 
    onDeleteClicked: (entity: any) => void 
}



export const ListItemTest: React.FC<newProps> = ({rowData, fields, onDeleteClicked, onEditClicked}) => {
    
    const editClicked = () => {
        onEditClicked(rowData)
    }

    const deleteClicked = () => {
        onDeleteClicked(rowData)
    }



    return (
        <>      
            <TableRow key={rowData.id}>
                { fields.map((field) => {
                     return (  <TableCell key={field.keyName}>{rowData[field.keyName]+ " "} </TableCell>)
                })}
                <TableCell key={"edit-button"}>
                    <Button onClick={editClicked}>edit</Button>
                </TableCell>
                <TableCell key={"delete-button"}>
                    <Button onClick={deleteClicked}>delete</Button>
                </TableCell>
            </TableRow>
        </>
    )
}