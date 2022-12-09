import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export const AddProductForm = () => {
    const [imageUrl,setImageUrl] = useState('');
    const [prodName,setProdName] = useState('');
    const [price,setPrice] = useState('');

    const formData = {
        productName:prodName,
        price:price,
        image:imageUrl
    }

    const addItem = (data) => {
        console.log(JSON.stringify(data))
        fetch('http://localhost:8080/products', {
            method: 'POST',
            body: JSON.stringify(data)
        }).then(response => response.json())
    }


  return (
    <div style={{textAlign:'center'}}>
        <div>
            <h1 >Add a New Product Here</h1>
            <TextField id="standard-basic" label="Product Name" variant="standard" onChange={(e)=>{setProdName(e.target.value)}} />
            <br />
            <br />
            <TextField id="standard-basic" label="Price" variant="standard" onChange={(e)=>{setPrice(e.target.value)}} />
            <br />
            <br />
            <TextField id="standard-basic" label="Image URL" variant="standard" onChange={(e)=>{setImageUrl(e.target.value)}} />
            <br />
            <br />
            <Button variant="contained" color="success" onClick={()=>{addItem(formData)}}>Submit</Button>
        </div>
    </div>
  )
}
