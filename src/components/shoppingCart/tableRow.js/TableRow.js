import React, {useReducer, useEffect} from 'react'
import {QuantityContainer} from "../../../css/ShoppingCartStyle";
import { formatPrice } from '../../../utils/CalculateAndWritePrice';



function counterReducer(state, action) {
  switch (action.type) {
    case "PLUS":
      return{count: state.count +1};
    case "MINUS":
      return{count: state.count -1};

      break;
  }
}

const TableRow = ({products, editQuantity, deleteOne}) => {


  const [countState, dispatch] = useReducer(counterReducer, {count: products.Quantity})

  useEffect(()=>{
    editQuantity(products.id, countState.count)
  },[countState.count])




  return (
    <>
     <tr>
  <td>{products.id}</td>
  <td>{products.product}</td>
  <td>{formatPrice(products.unitPrice)}</td>
  <td>
 
    <QuantityContainer>
    
            <button className='cardBuyQuatity' onClick={() => dispatch({type: "MINUS"})}><i>-</i></button>
            <div   className='cardBuyQuatityNumber'>{countState.count}</div>
            <button className='cardBuyQuatity' onClick={()=>dispatch({type: "PLUS"})}><i>+</i></button> 
            {
                  (products?.stock === 0) ? <p>out of stock</p> : ""
            }

    </QuantityContainer>
    
    </td>
  <td>{formatPrice(products.TotalPrice)}</td>
  <td className='btnDel' onClick={()=>deleteOne(products.id)}>delete</td>
  </tr>
  
    </>
  )
}

export default TableRow