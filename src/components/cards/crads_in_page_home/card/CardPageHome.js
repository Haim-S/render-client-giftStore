import React from 'react'
import { Link } from 'react-router-dom'
import { formatPrice, percentage } from '../../../../utils/CalculateAndWritePrice'
import { CardStyle,
CategoryCard,
ImageCardStyle,
TpographyContainer } from '../../../../css/CardStyle'

const CardPageHome = ({item}) => {

      
  return (
      
      <Link to={`/product/${item.id}`}>
    <CardStyle>
      <ImageCardStyle src={item.images[0]}/>
      <CategoryCard>{item.category}</CategoryCard>

      <TpographyContainer>
      <div className='Brand'>
<span>Brand:</span>
<span>{item.brand}</span>
      </div>
      <div className='title'>
<span>{item.description}</span>
      </div>
      <div className='price'>
<span className='old-price'>{formatPrice(item.price)}</span>
<span className='new-price'>{percentage(item.price, item.discountPercentage)}</span>
<span className='descount-price'>({item.discountPercentage}% off)</span>
      </div>

      </TpographyContainer>

      </CardStyle>
      </Link>
      
  )
}

export default CardPageHome