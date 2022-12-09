import React from 'react'
import { AddProductForm } from '../components/addProduct/AddProductForm'

export const AddProductPage = ({func}) => {

    const allProduct = () =>{
        func('products')
    }

    return (
    <div>
        <div style={{textAlign:'center'}}><button onClick={allProduct}>All Products</button></div>
        <AddProductForm />
    </div>
  )
}
