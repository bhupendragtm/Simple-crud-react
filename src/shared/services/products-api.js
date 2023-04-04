import useFetch from "pages/AddProductPage/products-fetch";
import axios from "axios";

const instance = axios.create({
    // const c = useFetch('https://dummyjson.com');
    baseURL: 'https://dummyjson.com'
});
console.log(useFetch);

export const addProduct = async (data) => {
    const { data: result } = await instance.post("/products/add", data);
    return result;
}

export const deleteProduct = async (id) => {
    const { data } = await instance.get(`/products/${id}`);
    return data;
}


