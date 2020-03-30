import serverUrl from '../setting';
import axios from "axios";

export async function login(params) {
    try {
        const response = await axios.post(serverUrl + '/auth/request-token', params);
        // const response = await axios.post(`${serverUrl}/api/order/get-bank-details`, {user_id: 226});
        return response;
    } catch (error) {
        console.log(JSON.stringify(error));
        return error;
    }
}

export async function signup(params) {
    try {
        const response = await axios.post(serverUrl + '/auth/create', params);

        return response;            
    } catch (error) {
        console.log(JSON.stringify(error));
        return error;
    }
}