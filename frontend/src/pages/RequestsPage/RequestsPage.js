import './RequestsPage.css';
import RequestListing from '../../components/RequestListing/RequestListing';
import ListingHeader from '../../components/ListingHeader/ListingHeader';
import { get_headers } from '../../service/foia';
import { useState, createContext } from 'react';
import axios from 'axios';

export const RequestsContext = createContext();

const RequestsPage = () => {

  // requestsList is the list of requests that will be displayed
  // Calling setrequestsList will cause a re-render to display updated requestsList
  const [requestsList, setRequestsList] = useState([]);

  /**
   *  Get list of requests from '/request' and set requestsList to it
   */
  //Currently using a random user with all 3 types of columns
  const username = "erinmiller";
  const handleGetRequests = async() => {
    return;
    try{
        const requests = await axios.get(process.env.REACT_APP_MUCKROCK_BASE_URL + '/foia/?user=' + username, {
            headers: get_headers,
            withCredentials: true
        });
        const res = requests.data

        // We take only "results" from the data as it contains the list of requests 
        const {results} = res

        console.log(typeof(results))
        console.log(requests)

        // console.log("requests Test")
        // console.log(results)

        setRequestsList(results)
    } catch (err) {
        console.error(err)
    }
  }

  handleGetRequests()

  return (
    <RequestsContext.Provider value={{requestsList, setRequestsList}}>
      <ListingHeader headerTitle="Requests"/>

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