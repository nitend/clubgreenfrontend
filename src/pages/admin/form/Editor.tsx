import React from 'react'
import { EditorForm } from './EditorForm'
import { Container } from '@material-ui/core'
import { PictureUpload } from '../imagehandler/PictureUpload'
import { ImageList } from '../imagehandler/ImageList/ImageList'


interface Props {
    entity: any
    entityId: string
    imageuploadurl: string
    store: (entity: any) => void
}

export const Editor: React.FC<Props> = ({entity, entityId, imageuploadurl, store, children}) => {

    function onImageDelete (imageUrl: string) {
        console.log("try to delete")
        const newEntity = entity;
        const index: number = entity.images.indexOf(imageUrl);
        if(index >= 0){
            newEntity.images.splice(index, 1);
            console.log("delete " + index + " " + newEntity)
            store(newEntity); 
        }
    }

    const imagelist = () =>{
        if(entity.images){
            return <ImageList imageUrlApends={entity.images} onDeleteHandler={onImageDelete}/>
        }
    } 
    

    return(
        <Container>
            <div style={{marginTop: "16px", marginBottom: "16px"}}>
                {imagelist()}
                <PictureUpload url={imageuploadurl} propertyId={entityId}/>     
                {children}
            </div>
            <EditorForm values={entity} onSubmit={store}/>
        </Container>
    )



}