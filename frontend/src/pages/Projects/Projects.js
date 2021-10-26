import proj from '../../images/Vectorproj.png';
import filter from '../../images/Vectorfilter.png';
import './Projects.css';
import ProjectListing from '../../components/projectListing/ProjectListing'; 
import { projectTestData } from '../../components/projectListing/projectTestData';
import { getFOIA, get_headers } from '../../service/foia';
import { getProjects } from '../../service/foia';
import ListingHeader from '../../components/listing_header/ListingHeader';
import { useState, createContext, useContext } from 'react';
import axios from 'axios';



export const ProjectsContext = createContext()

const Projects = () => {

  // projectsList is the list of projects that will be displayed
  // Calling setProjectsList will cause a re-render to display updated projectsList
  const [projectsList, setProjectsList] = useState([]);

  /**
   *  Get list of projects from '/project' and set projectsList to it
   */
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
    <ProjectsContext.Provider value={{projectsList, setProjectsList}}>
      <ListingHeader headerTitle="Projects"/>

      <div className="container">
        <span className="Projectnum"># Active Projects</span>
        <button className="addProject"><img src={proj}></img></button>
        <span className="addProjecttxt">Add Project</span>
        <button className="addFilter"><img src={filter}></img></button>
        <span className="addFiltertxt">Add Filter</span>
      </div>

      <div className="contentContainer">
        {/* <ProjectListing projects={ projectTestData.results }/> */}
        <ProjectListing projects={ projectsList }/>

      </div>

    </ProjectsContext.Provider>
  );
}

export default Projects;
