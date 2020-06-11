import React from 'react'
import { HotelOutlined } from '@material-ui/icons'
import { Paper } from '@material-ui/core'

interface Props {
    value: number
}

export const FeaturesBatch:  React.FC<Props> = ({children = <HotelOutlined />, value=0}) => {
  
    return (
        <Paper variant="outlined" style={{display: 'inline-block', margin: '4px', backgroundColor: '#f7f7f7'}}>
            <div style={{display: 'inline', padding: '4px'}}>
                {children}
            </div>
            <div style={{display: 'inline', padding: '4px'}}>
                {value}
            </div> 
        </Paper>
    )
}
