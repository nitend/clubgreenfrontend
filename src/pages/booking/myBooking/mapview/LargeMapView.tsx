import React, { useState, useEffect } from 'react'
import { Dialog, IconButton } from '@material-ui/core'
import { MapView } from '../../../pageframe/global/maps/MapView'
import { Close } from '@material-ui/icons'

interface Props {
        show: boolean
        onClose: () => void
}


export const LargeMapView:  React.FC<Props> = (Props) => {

        const [open, setopen] = useState(Props.show)

        console.log("LargeMap " + Props.show);

        const handleClose = () =>{
              setopen(false)  
        }


      useEffect(() => {
            setopen(Props.show);
      }, [Props.show]);

        return (
                <Dialog onClose={handleClose} 
                        fullWidth={true}
                        maxWidth={"lg"}
                        aria-labelledby="customized-dialog-title" 
                        open={open}>
                      <div style={{height: "90vh"}}>
                              <IconButton onClick={handleClose}>
                                    <Close ></Close>
                              </IconButton>
                              <MapView properties={[]} height={"90vh"} sights={[]}></MapView>
                      </div>  
                </Dialog> )
}