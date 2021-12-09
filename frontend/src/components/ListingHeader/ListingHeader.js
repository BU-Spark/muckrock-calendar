import './ListingHeader.css'
import { useState, useEffect, useContext } from 'react';
import { Link, matchPath } from "react-router-dom";
import { handleSortHelper, RequestsContext } from '../../pages/RequestsPage/RequestsPage';


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
const ListingHeader = ({ headerTitle, requestsList, setRequestsList }) => {
    
    const [isRequestsPage, setIsRequestsPage] = useState(false);


    // useEffect(() => {
    //     setIsRequestsPage(isPathRequests(window));

    //     const requestsLinkElement = document.querySelector("a.lh_requestslink");
    //     const projectsLinkElement = document.querySelector("a.lh_projectslink");

    //     if (isRequestsPage) {
    //         requestsLinkElement.style.color = "#3e80ff";
    //         requestsLinkElement.style.textShadow = "0px 5px 15px rgb(62 128 255 / 25%)";
    //         projectsLinkElement.style.color = "#c8ccd1";
    //         projectsLinkElement.style.textShadow = "0px 0px 0px";
    //     }
    //     else {
    //         projectsLinkElement.style.color = "#3e80ff";
    //         projectsLinkElement.style.textShadow = "0px 5px 15px rgb(62 128 255 / 25%)";
    //         requestsLinkElement.style.color = "#c8ccd1";
    //         requestsLinkElement.style.textShadow = "0px 0px 0px";
    //     }

    // });


    // SORT OPTIONS:
    //  - 'due_date'
    //  - 'submit_date'

    const handleSort = (e) => {
        const val = e.target.value
        // console.log(val)
        // console.log("type of requestsList:" + typeof(requestsList))
        // console.log(requestsList)


        //Sort by due_date (Latest first)
        if (val === 'due_date') {
            setRequestsList(requestsList.sort((a, b) => new Date(a.date_due) - new Date(b.date_due)).reverse())
            // console.log("After Sort:")
            // console.log(requestsList)

            // console.log(requestsList)

        //Sort by submit_date (Latest first)
        } else if (val === 'submit_date') {
            setRequestsList(requestsList.sort((a, b) => new Date(a.datetime_submitted) - new Date(b.datetime_submitted)).reverse())
            // console.log("After Sort (submitted date):")
            // console.log(requestsList)
            // console.log(requestsList)
            
        } 

        window.localStorage.setItem('requestsList', JSON.stringify(requestsList));

    }



    return (
        <div className="lh_container">
            <div className="simple_container">
                <span className="lh_title">{ headerTitle }</span>
            </div>

            <div className="simple_container">
                <Link to="/Projects" className="lh_projectslink">Projects</Link>
                <Link to="/Requests" className="lh_requestslink">Requests</Link>
                
                <span className="lh_sortby">Sort by: </span>
                <select className="lh_sortmenu" onChange={(e) => handleSort(e)}>
                    <option value="due_date">Due Date</option>
                    <option value="submit_date">Submit Date</option>
                </select>

            </div>
            <hr className="divider"/>
        </div>
    )

}

export default ListingHeader;