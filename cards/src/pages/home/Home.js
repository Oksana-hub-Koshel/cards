import React, {FC, useMemo, useState} from 'react';
import  s from  "./home.module.scss";
import {Cards} from "../../components/cards/Cards";
import {Search} from "../../components/search/search";
import {ResultLine} from "../../components/resultLine/ResultLine";
import useProducts from "../../hooks/useProducts";

import { useCallback} from "react";
import {addCards} from "../../store/CardsSlice";




export const Home = () => {
    const [filter, setFilter]=useState('')
    const {products,loading,error}=useProducts()


    const handleChange=(e)=>{
        setFilter(e.target.value)
    }



    // const callbacks = {
    //     addCards: useCallback(() => {
    //         dispatch(
    //             addCards([])
    //         );
    //     }, []),
    // }


    const items=useMemo(()=>{
        if(filter){
            return products.filter(item=>{
                const matchValue=filter.toLowerCase()
                const {title, description}=item
                if(title.toLowerCase().includes(matchValue)) return true
                if(description.toLowerCase().includes(matchValue)) return true
            })
        }
        return products
    }, [filter])




    if(loading) return <h1 style={{textAlign:"center"}}>Loading</h1>
    if(error){
        console.log("error", error);
        return null
    }

    const HighLight=(props)=>{
    const {filter, str} =props
    if(!filter) return str
    const regexp=new RegExp(filter, 'ig')
    const match=str.match(regexp)
    if(match){
        return str.split(regexp).map((s, index, arr)=>{
            if(index< arr.length-1){
               const c=match.shift()
                return <>{s}<span style={{background: 'yellow'}}>{c}</span></>
            }
            return s
        })
    }
    return str
}




    return (
        <div className={s.container}>
            <Search handleChange={handleChange} filter={filter}/>
            <ResultLine length={products.length}/>
            <div className={s.cont_card}>
                {products.map(product => {
                    console.log(product)
                    return( <Cards product={product} key={product.id} filter={filter} HighLight={HighLight} />)
                })}
            </div>

        </div>

    );
};
