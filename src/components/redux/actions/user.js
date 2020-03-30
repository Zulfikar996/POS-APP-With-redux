import axios from 'axios';

export const getUser = () => {
    // const authorization = localStorage.getItem('token');
    // const userId = localStorage.getItem("user-id");
    return{
        type: 'GET_USER',
        payload: axios({
            method: "GET",
            url: "http://localhost:4500/user",
            // headers: {
            //     "authorization": authorization,
            //     "user-id": userId
            // }
        })
    }
}