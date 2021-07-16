import React from 'react';
import Button from 'react-bootstrap/Button';
import Carousel from 'react-bootstrap/Carousel';
import {TextField} from '@material-ui/core';
import './dashboard.css';
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
class Dashboard extends React.Component {
    constructor(props) {
        super(props);
    }

    handleChange(e) {
        e.preventDefault()
    }

    render() {
        return (
            <container>
                <Navbar></Navbar>
                <SidebarComp></SidebarComp>
                <div>

                </div>
            </container>
        )
    }
}

export default Dashboard;