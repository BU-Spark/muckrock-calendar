import DashboardListing from '../../components/DashboardListing/DashboardListing'; 
import { get_headers } from '../../service/foia';
import { useState, createContext } from 'react';
import axios from 'axios';
import './DashboardPage.css';


export const ProjectsContext = createContext();

function DashBoard() {

  const [projectsList, setProjectsList] = useState([]);
  const handleGetProjects = async() => {
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

        setProjectsList(results)
    } catch (err) {
        console.error(err)
    }
  }

  handleGetProjects()
  return (
    <div className = "dashboard_container">
      <div className = "progress_pane">
        <div className="section_title">In Progress</div>
        <DashboardListing projects={ projectsList }/>
      </div>
      <div className = "followup_pane" >
        <div className="section_title">Follow Up</div>
        <DashboardListing projects={ projectsList }/>
      </div>
      <div className = "completed_pane" >
        <div className="section_title">Completed</div>
        <DashboardListing projects={ projectsList }/>
      </div>
    </div>
  );
}
 
export default DashBoard;