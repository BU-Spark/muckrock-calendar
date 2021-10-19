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


const Projects = () => {
  
  return (
    <div className="App">
      <header className="App-header">

        <div className="container">
          <span className="headerP">Projects</span>
        </div>

        <div className="container">
          <Link to="/Projects" className="projects">Projects</Link>
          <Link to="/Requests" className="requests">Requests</Link>

          <span className="Sort">Sort by: </span>
          <button className="Sortbtn">Last Updated </button>

          {/* <hr className="PChecker"/>
          <hr className="RChecker"/> */}
        </div>
        <hr className="divider"/>

      </header>


      <div className="container">
        <span className="Projectnum">15 Active Projects</span>
        <button className="addProject"><img src={proj}></img></button>
        <span className="addProjecttxt">Add Project</span>
        <button className="addFilter"><img src={filter}></img></button>
        <span className="addFiltertxt">Add Filter</span>
      
      </div>

      {/* Projects */}

      <div className="contentContainer">
        <ProjectListing projects={projectTestData}/>
      </div>

      {/* 
        <div className="ProjContainer">
            <ProjectCard
              title="Project X"
              num="(240)"
              name="Agency Name"
              desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor, quisque in lorem accumsan massa ullamcorper. Fermentum, non, orci et tortor volutpat egestas."
            />
              <ProjectCard
              title="Project Y"
              num="(45)"
              name="Agency Name"
              desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor, quisque in lorem accumsan massa ullamcorper. Fermentum, non, orci et tortor volutpat egestas."
            />
          </div> */}

        {/* Requests

        <span className="Requestnum">874 Active Requests</span>
        <button className="addFilter"><img src={filter}></img></button>
        <span className="addFiltertxt">Add Filter</span>

        <div className="ProjContainer" >
          <RequestCard
            img={Blue}
            title="Request Title"
            name="Agency Name" 
            desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor, quisque in lorem accumsan massa ullamcorper."
          />
          <RequestCard
            img={Blue}
            title="Request Title"
            name="Agency Name"
            desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor, quisque in lorem accumsan massa ullamcorper."
          />
          <RequestCard
            img={Red}
            title="Request Title"
            name="Agency Name"
            desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor, quisque in lorem accumsan massa ullamcorper."
          />
          <RequestCard
            img={Green}
            title="Request Title"
            name="Agency Name"
            desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor, quisque in lorem accumsan massa ullamcorper."
          />
          <RequestCard
            img={Red}
            title="Request Title"
            name="Agency Name"
            desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor, quisque in lorem accumsan massa ullamcorper."
          />
          <RequestCard
            img= {Yellow}
            title="Request Title"
            name="Agency Name"
            desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor, quisque in lorem accumsan massa ullamcorper."
          />
        </div> */}
    </div>
  );
}

export default Projects;
