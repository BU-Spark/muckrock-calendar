import axios from 'axios';
import { apiConfig } from './muckrock';

/**
 * This file provides all the service functions
 */
const url = "https://www.muckrock.com/api_v1";

const auth_headers = {'Authorization': 'Token ' + apiConfig.API_KEY,
                 'Access-Control-Allow-Origin': '*',
                 'Access-Control-Allow-Headers': "Origin, X-Requested-With, Content-Type, Accept",
                 
                 'content-type': 'application/json'};

const get_headers = {
                "mode": "no-cors",
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Headers": "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers",
                "Access-Control-Allow-Methods": "GET,HEAD,OPTIONS,POST,PUT",
                "Access-Control-Allow-Credentials": true,
                "Content-Type": "application/json"};
               

//TODO: Fix CORS issue:
// Access to XMLHttpRequest at 'https://www.muckrock.com/api_v1/foia' from origin 'http://localhost:3000' 
// has been blocked by CORS policy: Request header field access-control-allow-origin is not allowed 
// by Access-Control-Allow-Headers in preflight response.
export const getFOIA =  () => {
    // await axios({
    //     method: 'get',
    //     url: url + '/foia',
    //     headers: headers,
    // }).then(response => {
    //     console.log(response.data);
    // }).catch(error => {
    //     console.log(error);
    // })
     axios.get(url + '/foia', {
        headers: get_headers,
        withCredentials: true
    })
}



