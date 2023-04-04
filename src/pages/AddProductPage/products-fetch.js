import { useEffect, useState } from "react";
import axios from 'axios';

export default function useFetch() {
    const[products, setProducts] = useState(null);
    useEffect(() =>{
        function loadPosts() {
            axios
            .get('https://dummyjson.com/products')
            .then((res) => {
                console.log(res.products);
                const c = res.products;
                setProducts(c);
            });
        }
        loadPosts();
    }, []);
    return products
}