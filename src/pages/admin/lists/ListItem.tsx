import React from 'react'
import { Button, TableRow, TableCell } from '@material-ui/core';


interface Props {  
    id: string
    title: string
    tagone: string
    tagtwo: string
    tagthree: string
    onEditClicked: any
    onDeletClicked: any
}



export const ListItem: React.FC<Props> = ({id=0, title='noTitle', tagone='', tagtwo='', tagthree='', onDeletClicked, onEditClicked}) => {
    
    const onClickEdit = () => {
        onEditClicked(id)
    }

    const onClickDelete = () => {
        onDeletClicked(id)
    }
    
    return (
        <>
            <TableRow>
                <TableCell>
                    {id}
                </TableCell>
                <TableCell>
                    {title}
                </TableCell>
                <TableCell>
                    {tagone}
                </TableCell>
                <TableCell>
                    {tagtwo}
                </TableCell>
                <TableCell>
                    {tagthree}
                </TableCell>
                <TableCell>
                    <Button onClick={onClickEdit}>edit</Button>
                </TableCell>
                <TableCell>
                    <Button onClick={onClickDelete}>delete</Button>
                </TableCell>
            </TableRow>
        </>
    )
}