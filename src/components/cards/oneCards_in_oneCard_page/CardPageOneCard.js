import React, { useState } from 'react'
import { formatPrice, percentage } from '../../../utils/CalculateAndWritePrice'
import { UseContextControllers } from '../../../context/contextController'
import { 
      ExtrasContainerCardBuyStyle,
      CardBuyStyle,
      ImageContainer,
      ImageCardBuyStyle,
      SmallerImageContainer,
      SmallerImageStyle,
      TpographyCartBuyContainer,
      DivCategory,
      DivTitleOne,
      DivTitleTwo,
      DivPrice,
      OldPrice,
      NewPrice,
      DescountPrice,
      BtnContainer,
      QuantityContainer,
      BtnBayNow,
      BtnAddToCard,
} from '../../../css/CardBuyStyle'

// import { countProducts, countMinus, countPlus } from '../../../utils/Qty';


const OneCardPageOneCard =  ({item}) => {

      const cartArray = UseContextControllers().cartArray;

 
       const [countProducts, setcountProducts] = useState(1);

       function countPlus(item) {
            setcountProducts((prev) => {
                  let Qty = prev + 1;
                  if(Qty > item?.stock) Qty = item?.stock;
                  return Qty;
            })
      }
      
       function countMinus() {
            setcountProducts((prev) =>{
                  let Qty =  prev - 1;
                  if(Qty < 1) Qty = 1;
                  return Qty;
            })
      }






 

function addToCartHandler(item) {
      // It didn't work that way, so I paused
      // let discountedPrice = percentage(item.price, item.discountPercentage);
      let discountedPrice = (item?.price) - (item?.price * (item?.discountPercentage / 100));
      let totalPrice = countProducts * discountedPrice;
      cartArray(item,discountedPrice, countProducts, totalPrice);
    
}


  return (
      <ExtrasContainerCardBuyStyle>
    <CardBuyStyle>
      <ImageContainer>
      <ImageCardBuyStyle src={  item ? (item.images ? item.images[0] : "") : "" }/>
<SmallerImageContainer>
<SmallerImageStyle src={  item ? (item.images ? item.images[1] : "") : "" }/>
<SmallerImageStyle src={  item ? (item.images ? item.images[2] : "") : "" }/>
<SmallerImageStyle src={  item ? (item.images ? item.images[3] : "") : "" }/>
<SmallerImageStyle src={  item ? (item.images ? item.images[4] : "") : "" }/>
</SmallerImageContainer>
</ImageContainer>

      <TpographyCartBuyContainer>  
     
      <DivCategory>
      <h3>{item.category}</h3>
      </DivCategory>

      <DivTitleOne>
<span>{item.description}</span>

      </DivTitleOne>

      <DivTitleTwo>
      <span className='titleColor'>Rating:</span><span>{item.rating}</span>
      <span className='titleColor'>|</span>
      <span className='titleColor'>Brand:</span><span>{item.brand}</span>
      <span className='titleColor'>|</span>
      </DivTitleTwo>

      <DivPrice>
      <div>
       <OldPrice>{formatPrice(item.price)}</OldPrice>
<span>Inclusive of all taxes</span>
      </div>
<div>
<NewPrice>{percentage(item.price, item.discountPercentage)}</NewPrice>
<DescountPrice>({item.discountPercentage}% off)</DescountPrice>
</div>
      </DivPrice>
      <BtnContainer>
            <QuantityContainer>
            <p className='paragraphQuantity'>Quantity:</p>
            <button className='cardBuyQuatity' onClick={countMinus}><i>-</i></button>
            <div    className='cardBuyQuatityNumber'>{countProducts}</div>
            <button className='cardBuyQuatity' onClick={countPlus}><i>+</i></button> 
            {
                  (item?.stock === 0) ? <p>out of stock</p> : ""
            }
            </QuantityContainer>
            <div>
                  <BtnAddToCard onClick={()=>{addToCartHandler(item)}}><span >Add To Card</span>
                  </BtnAddToCard>
                  <BtnBayNow>Bay Now</BtnBayNow>
            </div>
      </BtnContainer>
      </TpographyCartBuyContainer>
    

      </CardBuyStyle>
      </ExtrasContainerCardBuyStyle>
  )
}

export default OneCardPageOneCard

// <CardStyle>
// <ImageCardStyle src={  item ? (item.images ? item.images[1] : "") : "" }/>
// <CategoryCard>{item.category}</CategoryCard>

// <TpographyContainer>
// <div className='Brand'>
// <span>Brand:</span>
// <span>{item.brand}</span>
// </div>
// <div className='title'>
// <span>{item.description}</span>
// </div>
// <div className='price'>
// <span className='old-price'>{formatPrice(item.price)}</span>
// <span className='new-price'>{percentage(item.price, item.discountPercentage)}</span>
// <span className='descount-price'>({item.discountPercentage}% off)</span>
// </div>

// </TpographyContainer>

// </CardStyle>