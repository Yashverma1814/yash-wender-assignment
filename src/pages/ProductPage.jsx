import React, { useEffect, useState } from 'react'
import { ProductCard } from '../components/productCard/ProductCard'

export const ProductPage = () => {
  const [products,setProducts] = useState([]);

  const fetchData = () =>{
    fetch(`http://localhost:8080/products`)
          .then((response) => response.json())
          .then((data) => setProducts(data));
  }
  const deleteItem =(id)=>{
    fetch('http://localhost:8080/products/' + id, {
      method: 'DELETE',
    })
    .then(res => res.json()) 
    .then(res => console.log(res));


    fetchData();
  }

  useEffect(()=>{
    fetchData();
  },[])



  return (
    <div>
        <div>
          <div>
            <h1 style={{textAlign:'center'}}>Products</h1>
          </div>
          <div className='productCards'>
            {
              products.map((el)=>{
                return <div key={el.id} style={{textAlign:'center'}}>
                  <ProductCard item={el} func={deleteItem} />
                </div>
              })
            }
          </div>
            
        </div>
    </div>
  )
}
