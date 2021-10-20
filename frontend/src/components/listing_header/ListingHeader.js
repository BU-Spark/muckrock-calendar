import './ListingHeader.css'
import {Link} from "react-router-dom";


/**  Header for Projects page and Requests page which will
 *   display the header title and 
*/
const ListingHeader = ({ headerTitle }) => {

    return (
        <div className="lh_container">
            <div className="container">
                <span className="lh_title">{ headerTitle }</span>
            </div>

            <div className="container">
                <Link to="/Projects" className="lh_projectslink">Projects</Link>
                <Link to="/Requests" className="lh_requestslink">Requests</Link>

                <span className="lh_sortby">Sort by: </span>
                <button className="lh_sortbtn">Last Updated </button>

            </div>
            <hr className="divider"/>
        </div>
    )

}

export default ListingHeader;