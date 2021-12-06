import ListingCard from "../ListingCard/ListingCard";
import { get_headers } from '../../service/foia';
import { useState, createContext } from 'react';
import axios from 'axios';
/** Component that takes a list of Project components and displays them **/

export const RequestsContext = createContext();

const DashboardListing = ( { requests } ) => {
    const handleGetAgencies = async(props) => {
        const num = props;
        try{
            const agencies = await axios.get(process.env.REACT_APP_MUCKROCK_BASE_URL + 'agency/' + num, {
                headers: get_headers,
                withCredentials: true
            });
            console.log("AGENCIES: " + agencies)
            const a = agencies.data
            
            console.log(a.name)
            return a.name
        } catch (err) {
            console.error(err)
        }
    }

    function getAgencyList(props){
        const results = props;
        var agencies = [];
        for (let i = 0 ;i < results.length; i++){
            agencies = handleGetAgencies(results[i].agency)
        }
        return agencies;  
    }
    const agencies = getAgencyList(requests);
    console.log(agencies)
    return (
        <div>
            {requests.map(curr_request => (
                <ListingCard
                key = {curr_request.id}
                title = {curr_request.title}
                summary = {agencies[0]}
                />
            ))}
        </div>
    )
}

export default DashboardListing;