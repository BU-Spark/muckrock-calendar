import logo from './logo.svg';
import proj from './Vectorproj.png';
import filter from './Vectorfilter.png';
import ProjectCard from './Project.js';
import RequestCard from './Request.js';
import Blue from './Bluesquare.png';
import Green from './Greensquare.png';
import Red from './Redsquare.png';
import Yellow from './Yellowsquare.png';
import './App.css';

const Projects = () => {
  return (
    <div className="App">
      <header className="App-header">
        <hr className="top-line"/>
        <hr className="side-line"/>
        <span className="headerP">Your Projects</span>
        <span className="projects">Projects</span>
        <span className="requests">Requests</span>
        <span className="Sort">Sort by: </span>
        <button className="Sortbtn">Last Updated </button>
        
        <hr className="PChecker"/>
        <hr className="RChecker"/>
        <hr className="divider"/>

        {/* Projects */}

        {/* <span className="Projectnum">15 Active Projects</span>
        <button className="addProject"><img src={proj}></img></button>
        <span className="addProjecttxt">Add Project</span>
        <button className="addFilter"><img src={filter}></img></button>
        <span className="addFiltertxt">Add Filter</span>

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

        {/* Requests */}

        <span className="Requestnum">874 Active Requests</span>
        <button className="addFilter"><img src={filter}></img></button>
        <span className="addFiltertxt">Add Filter</span>

        <div className="ProjContainer">
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
        </div>
      </header>
    </div>
  );
}

export default Projects;
