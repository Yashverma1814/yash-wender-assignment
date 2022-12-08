import React, { useEffect } from 'react'
import { ProductCard } from '../components/productCard/ProductCArd'

export const ProductPage = () => {
  

  const fetchData = () =>{
    fetch(`http://localhost:3000/posts`)
      .then((response) => response.json())
      .then((actualData) => console.log(actualData))
      .catch((err) => {
        console.log(err.message);
      });
  }

  useEffect(()=>{
    fetchData();
  },[])



  return (
    <div>
        <div>
            <ProductCard />
        </div>
    </div>
  )
}
