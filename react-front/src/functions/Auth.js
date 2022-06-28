import * as Cookie from './Cookie';
import axios from 'axios';


export const Auth = async() => {
    let token = Cookie.getCookie('token');
    let response = await axios.post(`http://127.0.0.1:8000/api/authchecker`, {
        token: token
    })
    return response;
}