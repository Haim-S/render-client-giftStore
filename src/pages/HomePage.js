import React, { useEffect, useState } from 'react'
import ListCardPageHome from '../components/cards/crads_in_page_home/list_cards/ListCardPageHome';
import { getAllProducts } from '../service/serviceProducts';


const HomePage = () => {

  const [ Products, SetProducts] = useState([]);

useEffect(()=>{

  getAllProducts().then(data => SetProducts(data.products))

 
},[])


  return (
    <>
   
    <ListCardPageHome Products={Products}/>
    
    </>
  )
}


export default HomePage