import axios from 'axios';

export const getProducts = () => {
    return{
        type: 'GET_PRODUCT',
        payload: axios({
            method: "GET",
            url: "http://localhost:4500/product"
        })
    }
}

export const addProduct = (data) => {
    return{
        type: 'POST_PRODUCT',
        payload: axios({
            method: 'POST',
            url: "http://localhost:4500/product",
            data:data
        })
    }
}