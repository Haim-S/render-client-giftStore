import React, {useEffect} from 'react'
import OrderTable from '../components/myOrders/OrderTable'
import {UseOrderContext} from "../context/contextOrder";
import GoShopping from "../components/shoppingCart/GoShopping";

const OrderPage = () => {

    const {Use_getAllMyOrders, products} = UseOrderContext();

useEffect(()=>{

  const p =  async ()=>{

        await Use_getAllMyOrders();
    }

    p();

},[])

  return (
    <div>
      {products?.length ?
       <OrderTable/> :
      <GoShopping/>}
    </div>
  )
}

export default OrderPage