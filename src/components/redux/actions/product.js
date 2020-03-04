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
            data:data,
            url: "http://localhost:4500/product"
        })
    }
}

export const editProduct = (data, propsId) => {
    return{
        type: 'PATCH_PRODUCT',
        payload: axios({
            method: 'PATCH',
            data:data,
            url: `http://localhost:4500/product/${propsId}`
        })
    }
}

export const deleteProduct = (propsId) => {
    return{
        type: 'DELETE_PRODUCT',
        payload: axios({
            method: 'DELETE',
            url: `http://localhost:4500/product/${propsId}`
        })
    }
}

export const filterProduct = (category, name) => {
    return{
        type: 'FILTER_PRODUCT',
        payload: axios({
            method: 'GET',
            url: `http://localhost:4500/product?name=${name}&category=${category}`
        })
    }
}