import React, {useEffect, useState} from 'react';
import {useDispatch} from "react-redux";
import {addCards} from "../store/CardsSlice";
import axios from "axios";

const useProducts = () => {
    const [products, setProducts] = useState([])
    const [loading, setLoading]=useState(false)
    const [error, setError]=useState('')
    const dispatch =useDispatch();

    async function fetchProducts() {
        try{
            setError('')
            setLoading(true)
            const response = await axios.get("https://fakestoreapi.com/products?limit=6")
            setProducts(response.data)
            dispatch({ type: addCards, payload:  response.data});
            setLoading(false)
        } catch (e) {

            setLoading(false)
            setError(error.message)
        }

    }

    useEffect(() => {
        fetchProducts()
    }, [])

    return {products, error,loading}
};

export default useProducts;