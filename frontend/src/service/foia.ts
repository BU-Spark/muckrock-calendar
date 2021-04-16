import axios from 'axios';
import { apiConfig } from './muckrock';

/**
 * This file provides all the service functions
 */

const auth_headers = {'Authorization': 'Token ' + apiConfig.API_KEY,
                 'Access-Control-Allow-Origin': '*',
                 'Access-Control-Allow-Headers': "Origin, X-Requested-With, Content-Type, Accept",
                 
                 'content-type': 'application/json'};

const headers = {'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept, X-Auth-Token',
                'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
                'content-type': 'application/json'};
               
const url = "https://www.muckrock.com/api_v1";

//TODO: Fix CORS issue:
// Access to XMLHttpRequest at 'https://www.muckrock.com/api_v1/foia' from origin 'http://localhost:3000' 
// has been blocked by CORS policy: Request header field access-control-allow-origin is not allowed 
// by Access-Control-Allow-Headers in preflight response.
export const getFOIA = async () => {
    await axios({
        method: 'get',
        url: url + '/foia',
        headers: headers,
    }).then(response => {
        console.log(response.data);
    }).catch(error => {
        console.log(error);
    })
}
