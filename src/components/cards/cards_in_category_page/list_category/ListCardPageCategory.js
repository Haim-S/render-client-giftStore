import React from 'react'
import CardPageCategory from '../card/CardPageCategory'
import { ListCardStyle, TitleCategory, H3 } from '../../../../css/ListCardStyle'




const ListCardPageCategory = ({oneCategory}) => {
   
  return (
    <>
      <TitleCategory>
      <H3>See Our {oneCategory ? (oneCategory[0] ? oneCategory[0].category : " ") : ""}</H3>
      </TitleCategory>
    <ListCardStyle>
    {oneCategory.map((one, index)=>  <CardPageCategory key={index} itemCategory={one}/> )}
    </ListCardStyle>
    </>
  )
}

export default ListCardPageCategory