import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { getOneProductById } from '../service/serviceProducts';
import OneCardPageOneCard from '../components/cards/oneCards_in_oneCard_page/CardPageOneCard';

const OneCardPage = () => {

const {id} = useParams();

const [product, setproduct] = useState([]);

useEffect(()=> {
  getOneProductById(id).then(data => setproduct(data));
},[id]);
console.log(product);
  return (
    <OneCardPageOneCard item={product}/>
  )
}

export default OneCardPage