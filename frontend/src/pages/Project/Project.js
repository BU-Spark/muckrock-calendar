import React from "react"
import ReactDOM from "react-dom"
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import App from "../../App";
import Request from "../../components/projects/ProjectRequest";

class Project extends React.Component {

        render() {

            return (

            <container className="project-requests-page">

                <Navbar />
                <Sidebar/>
                <div className="main-frame">
                    <p className="header">Your Projects</p>
                    <a className="projects-button">Projects</a>
                    <a className="requests-button">Requests</a>
                    <p className="active-requests">874 Active Requests</p>
                    <p className="sort">Sort by:</p>
                    <a className="sort-system">Last Updated</a>
                    <button className="sorting">
                        <svg></svg>
                    </button>
                    <button className="filter">

                        </button> 
                    <a className="filter-text">Add Filter</a>
                </div>

                <Request /> 
                
            </container>
        )

    }
}



export default Project;
