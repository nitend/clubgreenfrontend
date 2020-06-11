
import React from 'react'
import { SectionItem, FooterSectionHeader } from './Style'


interface Props{
    headerTitle: string
    items: {
        id: number
        itemTitle: string,
        link: string
    }[]
}


export const FooterMenu: React.FC<Props> = (props) => {

    return (
        <div>
            <FooterSectionHeader>
                Über uns
            </FooterSectionHeader>
            {props.items.map(x => {
                return (<SectionItem key={x.id} href={x.link}>               
                    {x.itemTitle} <br />
                </SectionItem>)
                })
            } 
        </div>
    )
}
