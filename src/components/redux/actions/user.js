import axios from 'axios';
require('dotenv').config();

export const getUser = () => {
    // const authorization = localStorage.getItem('token');
    // const userId = localStorage.getItem("user-id");
    return{
        type: 'GET_USER',
        payload: axios({
            method: "GET",
            url: `${process.env.REACT_APP_URL}/user`,
            // headers: {
            //     "authorization": authorization,
            //     "user-id": userId
            // }
        })
    }
}