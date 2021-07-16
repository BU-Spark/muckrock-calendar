import React, {Component} from 'react'
import { useState } from 'react';
// import {Button, Cnpm install --save react-collapseollapse} from 'react-bootstrap'
// import {Collapse} from 'react-collapse';
// import Carousel from 'react-bootstrap/Carousel';
import { MDBCollapse, MDBBtn } from 'mdb-react-ui-kit';
// import {Collapse, TextField} from '@material-ui/core';
import './projects.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import slide_1 from '../../images/accept-tasks.png';
import slide_2 from '../../images/files-sent.png';
import slide_3 from '../../images/secure-data.png';
import slide_4 from '../../images/online-calendar.png';
import Main from "../main/Main";
import Navbar from "../../components/navbar/Navbar";
import SidebarComp from "../../components/sidebar/Sidebar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "../Login/Login";
import Home from "../Home";
class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false
          }
    }
    
    handleChange(e) {
        e.preventDefault()
    }

    showProjects = () => {
        document.getElementById("projects").className = "active-projects-navbtn";
        document.getElementById("requests").className = "inactive-projects-navbtn";
        document.getElementById("projects-container").className = "appear";
        document.getElementById("requests-container").className = "disappear";
    }

    showRequests = () => {
        document.getElementById("requests").className = "active-projects-navbtn";
        document.getElementById("projects").className = "inactive-projects-navbtn";
        document.getElementById("requests-container").className = "appear";
        document.getElementById("projects-container").className = "disappear";
    }

    render() {
        return (
            <div className = "container">
                <Navbar></Navbar>
                <SidebarComp></SidebarComp>
                <div>
                    <h3>Projects</h3>
                    <span className="pageOrganization">  
                        <button id = "projects" class = "active-projects-navbtn" onClick={this.showProjects}> Projects </button>
                        &nbsp;&nbsp; <i className = "fa fa-dot-circle-o"></i>&nbsp;&nbsp;
                        <button id = "requests" class = "inactive-projects-navbtn" onClick={this.showRequests}> Requests </button>
                        <hr />
                        <div id = "projects-container" class = "appear">
                            <span className = "infoActions">
                                <h5>15 Active Projects</h5>
                                <div className = "actions">
                                    <button onClick={function(){this.setState({open:!this.state.open})}.bind(this)}> <i className = "fa fa-plus-square"></i>  &nbsp;&nbsp; Add Project</button>
                                    &nbsp;&nbsp; 
                                    &nbsp;&nbsp; 
                                    <button> <i className = "fa fa-plus-square"></i>  &nbsp;&nbsp; Add Filter </button>
                                </div>
                            </span>
                            <div className={this.state.open? "panel-collapse": "panel-collapse panel-close"}>
                                <form id = "newProjectForm">
                                    <input type = "text" placeholder = "Project Name ..." />
                                    <br />
                                    <input type = "text" placeholder = "Agency Name ..." />
                                    <br />
                                    <textarea placeholder = "Description ..." rows = "6">
                                    </textarea>
                                    <br />
                                    <button> Submit <i class = "fa fa-check"></i></button>
                                </form>  
                            </div>
                        </div>

                        <div id = "requests-container" class = "disappear">
                        <span className = "infoActions">
                                <h5>874 Active Requests</h5>
                                <div className = "actions">
                                    &nbsp;&nbsp; 
                                    <button> <i className = "fa fa-plus-square"></i>  &nbsp;&nbsp; Add Filter </button>
                                </div>
                            </span>
                            <div id = "requests-listing"></div>
                        </div>
                        
                    </span>
                    
                    <div className = "projectsListContainer">
                        {/* TO BE POPULATED WITH PROJECTS FROM DB  */}
                    </div>
                </div>
            </div>
        )
    }
}

export default Projects;