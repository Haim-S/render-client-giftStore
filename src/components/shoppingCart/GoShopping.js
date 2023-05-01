import React from 'react'
import { shopping_cart } from '../../utils/images'
import { Link } from 'react-router-dom'

const GoShopping = () => {
  return (
    <div className='GoShopContainer'>
        <img style={{width: "150px"}} src={shopping_cart}/>
        <p>Your shopping cart is empty.</p>
        <Link to="/">
        <button className='BtnGoShop'>Go Shopping Now</button>
        </Link>
        </div>
  )
}

export default GoShopping