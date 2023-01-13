import React, {useCallback} from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import DateRangeOutlinedIcon from '@mui/icons-material/DateRangeOutlined';
import "./Cards.css"
import EastIcon from '@mui/icons-material/East';
import {Link} from 'react-router-dom'




export const Cards = ({product, filter, HighLight}) => {
    const light=useCallback((str) =>{
        return <HighLight filter={filter} str={str}/>
    },[filter])


    return (

        <div className="container_cards">
            <Card sx={{ maxWidth: 400 }}>
                <CardMedia
                    sx={{ height: 250 }}
                    image={product.image}
                    title={product.title}
                />
                <CardContent>
                    <div style={{display:"flex", gap:5, color:"gray", marginBottom:5}}>
                        <DateRangeOutlinedIcon/>
                        <Typography>Time</Typography>
                    </div>

                    <Typography gutterBottom variant="h5" component="div">
                        {light(product.title)}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {light(product.description)}
                    </Typography>
                </CardContent>
                <CardActions style={{display:'flex', alignItems:"center", }}>

                    <Link
                        to={`/products/${product.id}`}
                        state={{ from: `${product.id}` }} style={{textDecoration:"none"}}>
                        <Button size="small" style={{color:'black'}}>Read more</Button>
                    </Link>
                    <EastIcon style={{width:15}}/>
                </CardActions>
            </Card>

        </div>
    );
};
