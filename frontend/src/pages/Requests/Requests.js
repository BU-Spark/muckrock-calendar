import proj from '../../images/Vectorproj.png';
import filter from '../../images/Vectorfilter.png';
import ProjectCard from '../../components/projectCard/Project';
import RequestCard from '../../components/request/Request';
import Blue from '../../images/Bluesquare.png';
import Green from '../../images/Greensquare.png';
import Red from '../../images/Redsquare.png';
import Yellow from '../../images/Yellowsquare.png';
import './Requests.css';
import Navbar from '../../components/navbar/Navbar';
import SidebarComp from '../../components/sidebar/Sidebar';
import { Link } from "react-router-dom";
import { getFOIA } from '../../service/foia';
import RequestListing from '../../components/requestlisting/RequestListing';
import ListingHeader from '../../components/listing_header/ListingHeader';

const Requests = () => {
    return (
      <div>  
        <ListingHeader headerTitle="Requests"/>

        <div className="contentContainer">
          <RequestListing />
        </div>
      </div>
    );
}

export default Requests