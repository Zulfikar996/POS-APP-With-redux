import axios from 'axios'
require('dotenv').config();

export const addToCart = (data) =>{
    return{
        type: 'ADD_CART',
        payload: data
    }
}

export const addQuantity = (id) =>{
    return{
        type: 'ADD_QTY',
        payload: id
    }
}

export const reduceQuantity = (id) =>{
    return{
        type: 'REDUCE_QTY',
        payload: id
    }
}

export const deleteCart = (data) => {
    return {
        type: 'DELETE_CART',
        payload: data
    }
}

export const buy = (data) => {
return{
    type: 'BUY',
    payload: axios({
        method: 'POST',
        url: `${process.env.REACT_APP_URL}/purchase`,
        data:data
    })
}
}