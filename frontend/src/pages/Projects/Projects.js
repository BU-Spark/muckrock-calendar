import proj from '../../images/Vectorproj.png';
import filter from '../../images/Vectorfilter.png';
import ProjectCard from '../../components/projectCard/Project';
import RequestCard from '../../components/request/Request';
import Blue from '../../images/Bluesquare.png';
import Green from '../../images/Greensquare.png';
import Red from '../../images/Redsquare.png';
import Yellow from '../../images/Yellowsquare.png';
import Navbar from '../../components/navbar/Navbar';
import SidebarComp from '../../components/sidebar/Sidebar';
import './Projects.css';
import {Link} from "react-router-dom";
import ProjectListing from '../../components/projectListing/ProjectListing'; 
import { projectTestData } from '../../components/projectListing/projectTestData';
import { getFOIA } from '../../service/foia';
import ListingHeader from '../../components/listing_header/ListingHeader';


const Projects = () => {

  return (
    <div>
      <ListingHeader headerTitle="Projects"/>

      <div className="container">
        <span className="Projectnum">15 Active Projects</span>
        <button className="addProject"><img src={proj}></img></button>
        <span className="addProjecttxt">Add Project</span>
        <button className="addFilter"><img src={filter}></img></button>
        <span className="addFiltertxt">Add Filter</span>
      </div>

      <div className="contentContainer">
        <ProjectListing projects={projectTestData}/>
      </div>

    </div>
  );
}

export default Projects;
