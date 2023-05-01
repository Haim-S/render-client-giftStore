import React, {useState} from 'react'

import "./orderTable.css"
import CancelIcon from '@mui/icons-material/Cancel';
import {formatPrice} from "../../utils/CalculateAndWritePrice";
import {UseOrderContext} from "../../context/contextOrder";
import checkIfSevenDaysPassed from '../../utils/isSevenDaysPassed';
import Alert from '@mui/material/Alert';

const OrderTable = () => {

    const {products, Use_DeleteOrder} = UseOrderContext();

    const [notCancel, setNotCancel] = useState(true)
    const [success, setSuccess] = useState(false)


    const formattedDate = (creatAt) => {
        
const date = new Date(creatAt);
return date.toLocaleDateString();
    }

    const deleteOrderifOk = async (id, creatAt)=>{

      if(checkIfSevenDaysPassed(creatAt)){
       await Use_DeleteOrder(id)
       setSuccess(true);
       setTimeout(()=> {
        setSuccess(false);
      },2500)
      }
      setNotCancel(false);
      setTimeout(()=> {
        setNotCancel(true);
      },2500)
    }



    // For an example of the database

    // const products = [
    //     {_id: '644e3c5657129eb7a21b8027', client: null, creatAt: "2023-04-30T09:17:40.977Z", products: [
    //         {name: 'MacBook Pro',price: 500, quantity: 1, _id: '644e3c5657129eb7a21b8028'},
    //         {name: 'Key Holder', price: 400, quantity: 6, _id: '644e3c5657129eb7a21b8029'},
    //         {name: 'Key Holder', price: 400, quantity: 6, _id: '644e3c5657129eb7a21b8029'},
    //         {name: 'Key Holder', price: 400, quantity: 6, _id: '644e3c5657129eb7a21b8029'},
    //         {name: 'Key Holder', price: 400, quantity: 6, _id: '644e3c5657129eb7a21b8029'},
    //         ], total: 2000.3842},
    //     {_id: '644e3c5657129eb7a21b8025', client: null, creatAt: "2023-04-30T09:17:40.977Z", products: [{name: 'MacBook Pro', quantity: 1, _id: '644e3c5657129eb7a21b8028'}, {name: 'Key Holder', quantity: 6, _id: '644e3c5657129eb7a21b8029'}], total: 1585.3842},
    // ];

  return (
    <>
    {
     notCancel ? "" : <Alert severity="error">Cannot delete this order, It's been a week since ordering</Alert>
    }
    {
      success?  <Alert severity="success">This is a success alert — check it out!</Alert> : ""
    }

   <table>
      <thead>
        <tr>
          <th>Order Number</th>
          <th>Created At</th>
          <th>Product Name</th>
          <th>Unit Price</th>
          <th>Quantity</th>
          <th>Total</th>
          <th>Cancel</th>
        </tr>
      </thead>
      <tbody>
        {products?.map(product => (
          <tr key={product._id}>
            <td>{product._id}</td>
            <td>{formattedDate(product.creatAt)}</td>
            <td>
              {product.products.map(item => (
                <div key={item._id}>
                  {item.name}
                 
                </div>
              ))}
            </td>
            <td>
              {product.products.map((item, index ) => (
                <div key={index}>
                  {formatPrice(item.price)}
                 
                </div>
              ))}
            </td>
            <td>
              {product.products.map((item, index )=> (
                <div key={index}>
                  {item.quantity}
                 
                </div>
              ))}
            </td>
            <td>{formatPrice(product.total)}</td>
            <td><CancelIcon sx={{'&:hover': { color: '#e57373' }}} onClick={()=> deleteOrderifOk(product._id, product.creatAt)}/></td>
          </tr>
        ))}
      </tbody>
    </table>
    
    </>
  )
}

export default OrderTable