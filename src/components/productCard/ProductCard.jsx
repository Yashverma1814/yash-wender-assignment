import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';



export const ProductCard = ({item,func}) => {

  return (
    <div>
        <div style={{marginLeft:'18%',marginBottom:'4rem'}}>
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            height="140"
            image={item.image}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {item.productName}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Price : {item.price}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" onClick={()=>{func(item.id)}} >Remove</Button>
          </CardActions>
        </Card>
        </div>
    </div>
  )
}
