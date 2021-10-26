import axios from 'axios';
import { apiConfig } from './muckrock';

/**
 * This file provides all the service functions
 */

const auth_headers = {'Authorization': 'Token ' + apiConfig.API_KEY,
                 'Access-Control-Allow-Origin': '*',
                 'Access-Control-Allow-Headers': "Origin, X-Requested-With, Content-Type, Accept",
                 
                 'content-type': 'application/json'};

export const get_headers = {
                "mode": "no-cors",
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Headers": "Access-Control-Allow-Headers, Origin, Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers",
                "Access-Control-Allow-Methods": "GET,HEAD,OPTIONS,POST,PUT",
                "Access-Control-Allow-Credentials": true,
                "Content-Type": "application/json"};

/**
 * NOTE: Currently only returning first page of foia requests
 *       meaning first 50 foia reqs. 
 * TODO: Implement function to cycle to next page of requests
 * @returns List of JS Objects (FOIA requests from '/foia')
 */
export const getFOIA = async() => {
    // We get the base URL from the env variables. This allows us to change the base URL 
    // of the API between dev and production(or in the future). Could also put this in another 
    // file and call a constant here instead.

    // We're using the NPM proxy to help us.

    try{
        const foia = await axios.get(process.env.REACT_APP_MUCKROCK_BASE_URL + '/foia/', {
            headers: get_headers,
            withCredentials: true
        });

        const res = foia.data

        // We take only "results" from the data as it contains the list of FOIA requests 
        const {results} = res

        // console.log(results)

        return results

    } catch (err) {
        console.error(err)
    }
}

/**
 * NOT BEING USED --> Similar function in Projects.js to allow setState of Projects component
 * @returns Promise of List of JS Objects (Projects from '/project')
 */
export const getProjects = async() => {

    try{
        const projects = await axios.get(process.env.REACT_APP_MUCKROCK_BASE_URL + '/project/', {
            headers: get_headers,
            withCredentials: true
        });

        const res = projects.data

        // We take only "results" from the data as it contains the list of projects 
        const {results} = res

        console.log(typeof(results))
        console.log(projects)

        // console.log("Projects Test")
        // console.log(results)

        return results

    } catch (err) {
        console.error(err)
    }
}



