import React, { useEffect, useState, lazy, Suspense } from 'react'
import { getCategoryProducts } from '../service/serviceProducts'
// import ListCardPageCategory from '../components/cards/cards_in_category_page/list_category/ListCardPageCategory'
import { useParams } from 'react-router-dom';

const ListCardPageCategory = lazy(()=> import('../components/cards/cards_in_category_page/list_category/ListCardPageCategory'))



const CategoryPage = () => {

const [oneCategory, setOneCategory] = useState([]);

let params = useParams();

  useEffect(()=> {
    getCategoryProducts(params.category).then(data => setOneCategory(data.products));
  },[params]);


  return (
    <>
    <Suspense fallback={<h1>Loading....</h1>}>
    <ListCardPageCategory oneCategory={oneCategory}/>
    </Suspense>
    </>
  )
}

export default CategoryPage