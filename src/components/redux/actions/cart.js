import axios from 'axios'

export const addToCart = (data) =>{
    return{
        type: 'ADD_CART',
        payload: data
    }
}