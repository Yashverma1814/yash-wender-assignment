import React, { useEffect, useState } from 'react'
import { ProductCard } from '../components/productCard/ProductCard'

export const ProductPage = ({func}) => {
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

  const logOut=()=>{
    func('login');
  }

  const addProduct = () =>{
    func('addProduct')
  }


  return (
    <div>
        <div>
          <div><marquee behavior="" direction="">run json server to see products</marquee></div>
          <div style={{display:'flex',justifyContent:'space-between'}}>
            <div><button onClick={logOut}>Logout</button></div>
            <div><button onClick={addProduct}>Add Product</button></div>
          </div>
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
