import React from 'react'
import { Link } from 'react-router-dom'
import { CardStyle, CategoryCard, ImageCardStyle, TpographyContainer} from "../../../../css/CardStyle"
import { formatPrice, percentage } from "../../../../utils/CalculateAndWritePrice"

const CardPageCategory = ({itemCategory}) => {
   
  return (
      <Link to={`/product/${itemCategory.id}`}>
    <CardStyle>
      <ImageCardStyle src={itemCategory.images[0]}/>
      <CategoryCard>{itemCategory.category}</CategoryCard>

      <TpographyContainer>
      <div className='Brand'>
<span>Brand:</span>
<span>{itemCategory.brand}</span>
      </div>
      <div className='title'>
<span>{itemCategory.description}</span>
      </div>
      <div className='price'>
<span className='old-price'>{formatPrice(itemCategory.price)}</span>
<span className='new-price'>{percentage(itemCategory.price, itemCategory.discountPercentage)}</span>
<span className='descount-price'>({itemCategory.discountPercentage}% off)</span>
      </div>

      </TpographyContainer>

      </CardStyle>
      </Link>
  )
}

export default CardPageCategory