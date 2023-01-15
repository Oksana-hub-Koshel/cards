import React, {FC, useMemo, useState} from 'react';
import  s from  "./home.module.scss";
import {Cards} from "../../components/cards/Cards";
import {Search} from "../../components/search/search";
import {ResultLine} from "../../components/resultLine/ResultLine";
import useProducts from "../../hooks/useProducts";
import {HighLight} from "../../highlightLogic/HighLight";

export const Home = () => {
    const [filter, setFilter]=useState('')

    const {products,loading,error, dispatch}=useProducts()

    const handleChange=(e)=>{
        setFilter(e.target.value)

    }

    if(loading) return <h1 style={{textAlign:"center"}}>Loading</h1>
    if(error){
        console.log("error", error);
        return null
    }

    return (
        <div className={s.container}>
            <Search handleChange={handleChange} filter={filter}/>
            <ResultLine length={products.length}/>
            <div className={s.cont_card}>
                {products.map(product => {
                    return( <Cards product={product} key={product.id} filter={filter} HighLight={HighLight} />)
                })}
            </div>

        </div>

    );
};
