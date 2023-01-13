import React, {useCallback} from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import DateRangeOutlinedIcon from '@mui/icons-material/DateRangeOutlined';
import s from "./Cards.module.scss"
import EastIcon from '@mui/icons-material/East';
import {Link} from 'react-router-dom'


export const Cards = ({product, filter, HighLight}) => {
    const light=useCallback((str) =>{
        return <HighLight filter={filter} str={str}/>
    },[filter])


    return (

        <div className={s.container_cards}>
            <Card sx={{ maxWidth: 400  }}>
                {/*<CardMedia*/}
                {/*    sx={{ height: 250 }}*/}
                {/*    image={product.image}*/}
                {/*    // title={product.title}*/}
                {/*    style={{objectFit:"cover"}}*/}
                {/*    className="card"*/}
                {/*/>*/}

                    <img src={product.image} className={s.image}/>

                <CardContent>
                    <div style={{display:"flex", gap:5, color:"gray", marginBottom:5}}>
                        <DateRangeOutlinedIcon/>
                        <Typography>Time</Typography>
                    </div>

                    <Typography gutterBottom variant="h5" component="div" style={{fontSize:18, marginTop:20, marginBottom:20, height:40,  fontFamily: "Source Sans Pro"}}>
                        {light(product.title)}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" className={s.descrip_text} style={{fontFamily: "Source Sans Pro"}} >
                        {light(product.description)}
                    </Typography>
                </CardContent>
                <CardActions style={{display:'flex', alignItems:"center", }}>

                    <Link
                        to={`/products/${product.id}`}
                        state={{ from: `${product.id}` }} style={{textDecoration:"none"}}>
                        <Button size="small" style={{color:'black', fontWeight:"bolder"}}>Read more</Button>
                    </Link>
                    <EastIcon style={{width:15}}/>
                </CardActions>
            </Card>

        </div>
    );
};
