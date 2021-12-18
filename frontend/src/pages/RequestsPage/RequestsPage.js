import './RequestsPage.css';
import RequestListing from '../../components/RequestListing/RequestListing';
import ListingHeader from '../../components/ListingHeader/ListingHeader';
import { get_headers } from '../../service/foia';
import { useState, createContext, useEffect } from 'react';
import axios from 'axios';

export const RequestsContext = createContext();
let firstRun = true;

const RequestsPage = () => {

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


  return (
    <RequestsContext.Provider value={{requestsList, setRequestsList}}>
      <ListingHeader headerTitle="Requests" requestsList={requestsList} setRequestsList={setRequestsList} />

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