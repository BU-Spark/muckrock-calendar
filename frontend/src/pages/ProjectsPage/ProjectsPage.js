import proj from '../../images/Vectorproj.png';
import filter from '../../images/Vectorfilter.png';
import './ProjectsPage.css';
import ProjectListing from '../../components/ProjectListing/ProjectListing'; 
import { get_headers } from '../../service/foia';
import ListingHeader from '../../components/ListingHeader/ListingHeader';
import { useState, createContext } from 'react';
import axios from 'axios';



export const ProjectsContext = createContext()

const ProjectsPage = () => {

  // projectsList is the list of projects that will be displayed
  // Calling setProjectsList will cause a re-render to display updated projectsList
  const [projectsList, setProjectsList] = useState([]);

  /**
   *  Get list of projects from '/project' and set projectsList to it
   */
  //Currently using a random user with all 3 types of columns
  const username = "erinmiller";
  const userid =75863;
  const handleGetProjects = async() => {
    try{
        const projects = await axios.get(process.env.REACT_APP_MUCKROCK_BASE_URL + '/project/?contributors=' + userid, {
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
        <span className="Projectnum">{projectsList.length} Active Projects</span>
        <button className="addProject"><img src={proj} alt="add_project_button"></img></button>
        <span className="addProjecttxt">Add Project</span>
        <button className="addFilter"><img src={filter} alt="add_filter_button"></img></button>
        <span className="addFiltertxt">Add Filter</span>
      </div>

      <div className="contentContainerProjects">
        {/* <ProjectListing projects={ projectTestData.results }/> */}
        <ProjectListing projects={ projectsList }/>

      </div>

    </ProjectsContext.Provider>
  );
}

export default ProjectsPage;
