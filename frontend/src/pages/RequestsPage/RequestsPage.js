import proj from '../../images/Vectorproj.png';
import filter from '../../images/Vectorfilter.png';
import ProjectCard from '../../components/ProjectCard/Project';
//import RequestCard from '../../components/Request/Request';
import Blue from '../../images/Bluesquare.png';
import Green from '../../images/Greensquare.png';
import Red from '../../images/Redsquare.png';
import Yellow from '../../images/Yellowsquare.png';
import './RequestsPage.css';
//import Navbar from '../../components/NavBar/Navbar';
//import SidebarComp from '../../components/sidebar/Sidebar';
//import { Link } from "../../components/ListingHeader/node_modules/react-router-dom";
import { getFOIA } from '../../service/foia';
import RequestListing from '../../components/RequestListing/RequestListing';
import ListingHeader from '../../components/ListingHeader/ListingHeader';

const RequestsPage = () => {
    return (
      <div>  
        <ListingHeader headerTitle="Requests"/>

        <div className="contentContainer">
          <RequestListing />
        </div>
      </div>
    );
}

export default RequestsPage