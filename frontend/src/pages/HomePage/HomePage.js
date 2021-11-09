import proj from '../../images/Vectorproj.png';
import filter from '../../images/Vectorfilter.png';
import ProjectListing from '../../components/ProjectListing/ProjectListing'; 
//import { projectTestData } from '../components/ProjectListing/projectTestData';
import { getFOIA, get_headers } from '../../service/foia';
import { getProjects } from '../../service/foia';
import ListingHeader from '../../components/ListingHeader/ListingHeader';
import { useState, createContext, useContext } from 'react';
import axios from 'axios';


export const ProjectsContext = createContext()
function Home() {

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
    <div>
    <title> "hi" </title>
    
    <ProjectsContext.Provider value={{projectsList, setProjectsList}}>
    <div>

      <div className="contentContainer">
        {/* <ProjectListing projects={ projectTestData.results }/> */}
        <title>In Progress</title>
        <ProjectListing projects={ projectsList }/>
      </div>
      <div className="contentContainer">
        {/* <ProjectListing projects={ projectTestData.results }/> */}
        <title>Follow Up</title>
        <ProjectListing projects={ projectsList }/>
      </div>
      <div className="contentContainer">
        {/* <ProjectListing projects={ projectTestData.results }/> */}
        <title>Completed</title>
        <ProjectListing projects={ projectsList }/>
      </div>
    </div>
    </ProjectsContext.Provider>
    
    </div>
  );
}

export default Home;
