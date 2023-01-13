import React from 'react';
import {useEffect,useState} from "react";
import axios from "axios";
import {Link, useLocation} from "react-router-dom";
// import {image} from "./../../data/7f1e6f69a0251d2342c1212a131113d4.webp"
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import "./info.css";
import img from "./../../data/7f1e6f69a0251d2342c1212a131113d4.webp"

export const Info = () => {
    const [state, setState]=useState([])
    const location = useLocation();
    const { from } = location.state;
    console.log(state)
    useEffect(() => {
        if (from) {
            axios.get(`https://fakestoreapi.com/products/${from}`).then((response) => {
                setState(response.data);
            });
        }
    }, [from]);

    return (
        <div className="relative_block">
            <div>
                <img src={img} className="foto" />
            </div>

            <div className="description_block">
                {state &&
                    <>
                        <h2>{state.title}</h2>
                        <p className="description">{state.description}</p>
                    </>
                }
            </div>

            <div className='link_home_block'>
                <ArrowBackIcon />
                <Link to={'/'} className="link_home">Back to home</Link>
            </div>


        </div>
    );
};
