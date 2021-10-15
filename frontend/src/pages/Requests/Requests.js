import proj from '../../images/Vectorproj.png';
import filter from '../../images/Vectorfilter.png';
import ProjectCard from '../../components/project/Project';
import RequestCard from '../../components/request/Request';
import Blue from '../../images/Bluesquare.png';
import Green from '../../images/Greensquare.png';
import Red from '../../images/Redsquare.png';
import Yellow from '../../images/Yellowsquare.png';
import './Requests.css';
import Navbar from '../../components/navbar/Navbar';
import SidebarComp from '../../components/sidebar/Sidebar';
import {Link} from "react-router-dom";
import { getFOIA } from '../../service/foia';
import RequestListing from '../../components/requestlisting/RequestListing';

const Requests = () => {
    return (
        <div className="RequestsPage">  
            <header className="App-header">
              <div className="container">
                <span className="headerP">Requests</span>
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

            <RequestListing className="ProjContainer1"/>

            {/* <div className="ProjContainer1" >
                  
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

export default Requests