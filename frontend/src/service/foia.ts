import axios from 'axios';
import { apiConfig } from './muckrock';

/**
 * This file provides all the service functions
 */

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
               
export const getFOIA = () => {
    // await axios({
    //     method: 'get',
    //     url: url + '/foia',
    //     headers: headers,
    // }).then(response => {
    //     console.log(response.data);
    // }).catch(error => {
    //     console.log(error);
    // })
    
    // We get the base URL from the env variables. This allows us to change the base URL 
    // of the API between dev and production(or in the future). Could also put this in another 
    // file and call a constant here instead.

    // We're using the NPM proxy to help us.
     axios.get(process.env.REACT_APP_MUCKROCK_BASE_URL + '/foia', {
        headers: get_headers,
        withCredentials: true
    }).then(res => console.log(res))
}



