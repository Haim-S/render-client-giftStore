import React from 'react'
import ShoppingCart from '../components/shoppingCart/ShoppingCart'
import GoShopping from '../components/shoppingCart/GoShopping'
import { UseContextControllers } from '../context/contextController'


const CartPage = () => {

  const cart = UseContextControllers().cart;

  return (
    <>
    {(cart.length)? 
      <ShoppingCart>CartPage</ShoppingCart>
    :  <GoShopping/>}

    </>
  )
}

export default CartPage