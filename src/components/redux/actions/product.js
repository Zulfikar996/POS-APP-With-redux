import axios from 'axios';

export const getProducts = (page, limit, category, name) => {
    const authorization = localStorage.getItem('token');
    const userId = localStorage.getItem("user-id");
    return{
        type: 'GET_PRODUCT',
        payload: axios({
            method: "GET",
            url: `http://localhost:4500/product?limit=${limit}&page=${page}`,
            headers: {
                "authorization": authorization,
                "user-id": userId
            }
        })
    }
}

export const getPagination = (page, limit) =>{
    return{
        type: 'GET_PAGINATION',
        payload: axios({
            method: "GET",
            url: `http://localhost:4500/product?limit=${limit}&page=${page}`
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

// export const pagination = (page) =>{
//     return{
//         type: 'PAGINATION',
//         payload: axios ({
//         method: 'GET',
//         url: `http://localhost:4500/product?page=${page}&limit=6`
//     })
// }
// }