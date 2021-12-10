import './RequestsPage.css';
import RequestListing from '../../components/RequestListing/RequestListing';
import ListingHeader from '../../components/ListingHeader/ListingHeader';
import { get_headers } from '../../service/foia';
import React, { useState, createContext, useEffect } from 'react';
import axios from 'axios';

export const RequestsContext = createContext();
let firstRun = true;

const RequestsPage = ({currentPage, setCurrentPageRequests, setCurrentPageProjects}) => {

  // requestsList is the list of requests that will be displayed
  // Calling setrequestsList will cause a re-render to display updated requestsList
  const [requestsList, setRequestsList] = useState([]);

  const [sortSelector, setSortSelector] = useState('');
  const [sortBy, setSortBy] = useState("");

    // Will retrieve requestsList from local storage, only run on first render 
    useEffect(async() => {
      console.log("First Render")

      console.log("local storage: " + window.localStorage.getItem('requestsList'))
      console.log("typeof local storage: " + typeof(window.localStorage.getItem('requestsList')))
      JSON.parse(window.localStorage.getItem('requestsList')) == "" 
      ? handleGetRequests()
      : setRequestsList(JSON.parse(window.localStorage.getItem('requestsList')))
    }, []);

    // // Only run on first render 
    // useEffect(() => {
    //   if (requestsList.length == 0) {
    //     console.log("GOT NEW REQUESTS")
    //     handleGetRequests()
    //   }
    // }, []);

    // Update local storage whenever requestsLists updates
    useEffect(() => {
        // console.log("Put into local storage:")
        // console.log(requestsList)
        window.localStorage.setItem('requestsList', JSON.stringify(requestsList));
    }, [requestsList]);

  /**
   *  Get list of requests from '/request' and set requestsList to it
   */
  //Currently using a random user with all 3 types of columns
  const username = "erinmiller";
  const handleGetRequests = async() => {
    console.log("handleGetRequests")
    try{
        const requests = await axios.get(process.env.REACT_APP_MUCKROCK_BASE_URL + '/foia/?user=' + username, {
            headers: get_headers,
            withCredentials: true
        });
        const res = requests.data

        // We take only "results" from the data as it contains the list of requests 
        const {results} = res

        firstRun = false
        setRequestsList(results)
    } catch (err) {
        console.error(err)
    }
  }

    // SORT OPTIONS:
    //  - 'due_date'
    //  - 'submit_date'

  const handleSort = () => {
    const val = sortBy;
    // console.log(val)
    // console.log("type of requestsList:" + typeof(requestsList))
    // console.log(requestsList)


    //Sort by due_date (Latest first)
    if (val == 'due_date') {
        setRequestsList(requestsList.sort((a, b) => new Date(a.date_due) - new Date(b.date_due)).reverse())
        // console.log("After Sort:")
        // console.log(requestsList)

        // console.log(requestsList)

    //Sort by submit_date (Latest first)
    } else if (val == 'submit_date') {
        setRequestsList(requestsList.sort((a, b) => new Date(a.datetime_submitted) - new Date(b.datetime_submitted)).reverse())
        // console.log("After Sort (submitted date):")
        // console.log(requestsList)
        // console.log(requestsList)
        
    }

}


  return (
    <RequestsContext.Provider value={{requestsList, setRequestsList}}>
      <ListingHeader currentPage={currentPage} setCurrentPageRequests={setCurrentPageRequests} setCurrentPageProjects={setCurrentPageProjects} headerTitle="Requests" requestsList={requestsList} setRequestsList={setRequestsList} setSortBy={setSortBy}/>

      <div className="num_requests">
        <span className="Requestnum">{requestsList.length} Active Requests</span>
      </div>


      <div className="contentContainerRequests">
        <RequestListing requests={ requestsList }/>
      </div>
  </RequestsContext.Provider>
  );
}

export default RequestsPage;