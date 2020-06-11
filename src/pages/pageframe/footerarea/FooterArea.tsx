import React from 'react'
import { BasicContentBox } from '../global/StyledComponents'
import { Grid } from '@material-ui/core'
import { FooterMenu } from './FooterMenu'
import { FOOTER_HEIGHT } from '../../../config'
import { FooterSectionContainer } from './Style'

interface Props {
    
}

export const Footer: React.FC<Props> = () => {


    const menu1 = [
        {
            id: 1,
            itemTitle: "Wochenende buchen",
            link: "/booking"
        },
        {
            id: 2,
            itemTitle: "Club Grün",
            link: "/"
        },
        {
            id: 3,
            itemTitle: "Service Portal",
            link: "/admin"
        } ,
        {
            id: 4,
            itemTitle: "Onboarding",
            link: "/onboarding"
        }   
    ]


    return (
        <div style={{bottom: "0", position: "absolute", width: "100%", height: FOOTER_HEIGHT}}>
        <FooterSectionContainer>
            <BasicContentBox>
                <Grid container>
                    <Grid item xs={4}>
                        <FooterMenu items={menu1} headerTitle={"Über uns"} ></FooterMenu>
                    </Grid>
                    <Grid item xs={4}>

                    </Grid>
                    <Grid item xs={4}>
                    </Grid>
                </Grid>
            </BasicContentBox>
        </FooterSectionContainer>
       </div> 
    )

}