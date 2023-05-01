import React from 'react'

import CardPageHome from '../card/CardPageHome'
import {ListCardStyle, TitleCategory, H3} from "../../../../css/ListCardStyle"


const ListCardPageHome = ({Products}) => {



  return (
    <>
         <TitleCategory>
      <H3>SEE OUR PRODUCTS</H3>
      </TitleCategory>
    <ListCardStyle>
    {Products.map((one, index) => <CardPageHome key={index} item={one}/>)}
    </ListCardStyle>
    </>
  )
}

export default ListCardPageHome