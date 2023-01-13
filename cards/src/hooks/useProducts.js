
import React, {useEffect, useState} from 'react';

import axios, {AxiosError} from "axios";

const useProducts = () => {
    const [products, setProducts] = useState([])
    const [loading, setLoading]=useState(false)
    const [error, setError]=useState('')


    async function fetchProducts() {
        try{
            setError('')
            setLoading(true)
            const response = await axios.get("https://fakestoreapi.com/products?limit=6")
            setProducts(response.data)
            setLoading(false)
        } catch (e) {
            // const error = e as AxiosError
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