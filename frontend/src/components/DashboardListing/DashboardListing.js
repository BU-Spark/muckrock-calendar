import ListingCard from "../ListingCard/ListingCard";
import { get_headers } from '../../service/foia';
import { useState, createContext } from 'react';
import axios from 'axios';

export const RequestsContext = createContext();

/** Component that takes a list of requests and displays them 
 * Each instance of this component represents a coloumn in the Dashboard**/
const DashboardListing = ({ requests }) => {

    const handleGetAgencies = async (agency_id) => {
        const id = agency_id;
        try{
            const agencyList = await axios.get(process.env.REACT_APP_MUCKROCK_BASE_URL + '/agency/' + id, {
                headers: get_headers,
                withCredentials: true
            });
            console.log("AGENCIES: " + agencyList)
            const a = agencyList.data
            
            console.log(a.name)
            return a.name
        } catch (err) {
            console.error(err)
        }
    }

    const getAgencyList = (reqs) => {
        const results = reqs;
        let agencyList = [];
        // for (let i = 0 ;i < results.length; i++){
        //     agencyList.push(handleGetAgencies(results[i].agency))
        // }

        // agencyList.push(handleGetAgencies(results[0].agency))

        return agencyList;  
    }

    const getAgencyName = async (agency_id) => {
        console.log('test')
        const id = agency_id;

        try{
            const resp = await axios.get(process.env.REACT_APP_MUCKROCK_BASE_URL + 'agency/' + id, {
                headers: get_headers,
                withCredentials: true
            });
            const agency = resp.data
            
            console.log("AGENCY NAME: " + agency.name)
            return agency.name
        } catch (err) {
            console.error(err)
        }
    }

    // const agencies = getAgencyList(requests);
    // console.log(agencies)

    return (
        <div>
            {requests.map(curr_request => (
                <ListingCard
                key = {curr_request.id}
                title = {curr_request.title}
                summary = {getAgencyName(curr_request.agency)}
                datetime = {curr_request.datetime_submitted}
                due = {curr_request.date_due}
                />
            ))}
        </div>
    )
}

export default DashboardListing;