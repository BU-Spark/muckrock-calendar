import DashboardListing from '../../components/DashboardListing/DashboardListing'; 
import { get_headers } from '../../service/foia';
import { useState, createContext } from 'react';
import axios from 'axios';
import './DashboardPage.css';

export const RequestsContext = createContext();

const DashBoard = (props) => {

  const [requestsList, setRequestsList] = useState([]);
  //const [username, setUserName] = props;
  //Currently using a random user with all 3 types of columns
  const username = "ariccio";
  const handleGetRequests = async() => {
    try{
        const requests = await axios.get(process.env.REACT_APP_MUCKROCK_BASE_URL + '/foia/?user=' + username, {
            headers: get_headers,
            withCredentials: true
        });
        const res = requests.data

        // We take only "results" from the data as it contains the list of requests 
        const {results} = res

        setRequestsList(results)
    } catch (err) {
        console.error(err)
    }
  }
function getProgress(props) {
  const results = props;
  const progress = [];
  var counter = 0;
  for (let i = 0 ;i < results.length; i++){
    if(results[i].status === "ack" || results[i].status === "processed" ||results[i].status === "appealing" ||results[i].status === "lawsuit" ||results[i].status === "submitted"){
      progress[counter] = results[i];
      counter = counter +1;
    }
  }
  return progress;
}

function getFollowUp(props) {
  const results = props;
  const followUp = [];
  var counter = 0;
  for (let i = 0 ;i < results.length; i++){
    if(results[i].status === "payment" || results[i].status === "fix"){
      followUp[counter] = results[i];
      counter = counter +1;
    }
  }
  return followUp;
}

function getCompleted(props) {
  const results = props;
  const completed = [];
  var counter = 0;
  for (let i = 0 ;i < results.length; i++){
    if(results[i].status === "partial" || results[i].status === "done" ||results[i].status === "abandoned" ||results[i].status === "rejected" ||results[i].status === "no_docs"){
      completed[counter] = results[i];
      counter = counter +1;
    }
  }
  return completed;
}

  handleGetRequests()
  const progress = getProgress(requestsList);
  const followUp = getFollowUp(requestsList);
  const completed = getCompleted(requestsList);
  return (
    <div className = "dashboard_container">
      <div className = "column_container">
        <div className = "dashboard_column">
          <div className="section_title">In Progress</div>
          <DashboardListing requests={ progress }/>
        </div>
        <div className = "dashboard_column" >
          <div className="section_title">Follow Up</div>
          <DashboardListing requests={ followUp }/>
        </div>
        <div className = "dashboard_column" >
          <div className="section_title">Completed</div>
          <DashboardListing requests={ completed }/>
        </div>
      </div>
    </div>
  );
}
 
export default DashBoard;