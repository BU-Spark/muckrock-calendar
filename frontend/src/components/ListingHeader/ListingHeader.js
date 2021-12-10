import './ListingHeader.css'
import React, { useState, useEffect, useContext } from 'react';
import { Link, matchPath } from "react-router-dom";
import { handleSortHelper, RequestsContext } from '../../pages/RequestsPage/RequestsPage';


/**  Header for Projects page and Requests page which will
 *   display the header title and 
*/
const ListingHeader = ({ currentPage, setCurrentPageRequests, setCurrentPageProjects, headerTitle, requestsList, setRequestsList, setSortBy }) => {




    return (
        <div className="lh_container">
            <div className="simple_container">
                <span className="lh_title">{ headerTitle }</span>
            </div>

            <div className="simple_container">
                {(currentPage == "requests") ? (
                    <React.Fragment>
                        <Link to="/Projects" onClick={setCurrentPageProjects} className="lh_projectslink">Projects</Link>
                        <Link to="/Requests" className="lh_requestslinkactive">Requests</Link>
                        <span className="lh_sortby">Sort by: </span>
                        <select className="lh_sortmenu" onChange={(e) => setSortBy(e.target.value)}>
                            <option value="due_date">Due Date</option>
                            <option value="submit_date">Submit Date</option>
                        </select>
                    </React.Fragment>
                ) : (
                    <React.Fragment>
                        <Link to="/Projects" className="lh_projectslinkactive">Projects</Link>
                        <Link to="/Requests" onClick={setCurrentPageRequests} className="lh_requestslink">Requests</Link>
                    </React.Fragment>
                )}

            </div>
            <hr className="divider"/>
        </div>
    )

}

export default ListingHeader;