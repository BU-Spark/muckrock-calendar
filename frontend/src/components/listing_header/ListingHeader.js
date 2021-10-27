import './ListingHeader.css'
import { useState, useEffect } from 'react';
import { Link, matchPath } from "react-router-dom";


/** Function that checks if the path of the page is /Requests
 * 
 * @param {*} window 
 * @returns boolean
 */
function isPathRequests(window) {
    
    const matchRequestsPath = matchPath(window.location.pathname, {
        path: "/Requests",
        exact: true,
        strict: true
    });

    if (matchRequestsPath == null) {
        return false;
    }

    return matchRequestsPath.isExact;
};

/**  Header for Projects page and Requests page which will
 *   display the header title and 
*/
const ListingHeader = ({ headerTitle }) => {
    
    const [isRequestsPage, setIsRequestsPage] = useState(false);

    useEffect(() => {
        setIsRequestsPage(isPathRequests(window));

        const requestsLinkElement = document.querySelector("a.lh_requestslink");
        const projectsLinkElement = document.querySelector("a.lh_projectslink");

        if (isRequestsPage) {
            requestsLinkElement.style.color = "#3e80ff";
            requestsLinkElement.style.textShadow = "0px 5px 15px rgb(62 128 255 / 25%)";
            projectsLinkElement.style.color = "#c8ccd1";
            projectsLinkElement.style.textShadow = "0px 0px 0px";
        }
        else {
            projectsLinkElement.style.color = "#3e80ff";
            projectsLinkElement.style.textShadow = "0px 5px 15px rgb(62 128 255 / 25%)";
            requestsLinkElement.style.color = "#c8ccd1";
            requestsLinkElement.style.textShadow = "0px 0px 0px";
        }

    });

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