import React from 'react';
import './dashboard.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "../../components/navbar/Navbar";
import SidebarComp from "../../components/sidebar/Sidebar";
import axios from 'axios';
import {dbData} from "./dbData"
class Dashboard extends React.Component {
    constructor(props) {
        super(props);

        this.getDBInfo = this.getDBInfo.bind(this);
        axios({
            url: `https://www.muckrock.com/api_v1/foia/?user=`,
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json;charset=UTF-8',
            }
        }).then((res) => {
            console.log(res)
        }).catch((err) => {
            console.log("Error")
            console.log(err)
        })
    }

    handleChange(e) {
        e.preventDefault()
    }

    getDBInfo =() => {
        console.log("outside of constructor")
    }

    render() {
        return (
            <container>
                <Navbar></Navbar>
                <SidebarComp></SidebarComp>
                <br />
                <div className = "bigger-main-dashboard-container">
                    <div className = "main-part-dashboard">
                        <h2> &nbsp; &nbsp; Your Dashboard </h2>
                        {/* <button className="apiCallBtn"> Hello World - Call API</button> */}
                        <div className = "main-dashboard-section">
                            <div className = "main-3-sections">
                                <div className = "section-top">
                                    <h5> In-Progress &nbsp;<i className = "fa fa-dot-circle-o"></i> &nbsp; 7</h5>
                                    <button><i className = "fa fa-ellipsis-v"></i></button>
                                </div>
                                <div className = "section-populated">
                                <div className = "dashboard-item">
                                        <h5> Title </h5>
                                        <p>Description</p>
                                        <br/>
                                        <p>Agency Name</p>
                                        <hr />
                                        <p> <strong> 8 </strong> Hours until next reminder </p>
                                        <div className = "dashboard-item-bottom">
                                            <p>
                                                <i className = "fa fa-paperclip"></i>
                                                &nbsp;
                                                <strong> 2 </strong>
                                            </p>
                                            <button><i className = "fa fa-ellipsis-v"></i></button>
                                        </div>
                                    </div>
                                    <div className = "dashboard-item">
                                        <h5> Title </h5>
                                        <p>Description</p>
                                        <br/>
                                        <p>Agency Name</p>
                                        <hr />
                                        <p> <strong> 8 </strong> Hours until next reminder </p>
                                        <div className = "dashboard-item-bottom">
                                            <p>
                                                <i className = "fa fa-paperclip"></i>
                                                &nbsp;
                                                <strong> 2 </strong>
                                            </p>
                                            <button><i className = "fa fa-ellipsis-v"></i></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className = "main-3-sections">
                                <div className = "section-top">
                                    <h5>Follow-ups &nbsp;<i className = "fa fa-dot-circle-o"></i> &nbsp; 64</h5>
                                    <button><i className = "fa fa-ellipsis-v"></i></button>
                                </div>
                                <div className = "section-populated">
                                <div className = "dashboard-item">
                                        <h5> Title </h5>
                                        <p>This is a mush longer description of the dashboard item. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eu eleifend neque, vel elementum erat. Donec ac ornare velit, et blandit nibh. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mollis erat sit amet justo sagittis egestas at sed elit. Integer feugiat viverra ipsum congue tempus. Vestibulum id diam ut nulla accumsan condimentum sit amet vulputate lacus. Suspendisse id bibendum nisl, ut rhoncus orci. Phasellus vestibulum quis dui vel viverra. In et dui nec metus imperdiet condimentum a eget purus. </p>
                                        <br/>
                                        <p>Agency Name</p>
                                        <hr />
                                        <p> <strong> 8 </strong> Hours until next reminder </p>
                                        <div className = "dashboard-item-bottom">
                                            <p>
                                                <i className = "fa fa-paperclip"></i>
                                                &nbsp;
                                                <strong> 2 </strong>
                                            </p>
                                            <button><i className = "fa fa-ellipsis-v"></i></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className = "main-3-sections">
                            <div className = "section-top">
                                <h5>Completed &nbsp;<i className = "fa fa-dot-circle-o"></i> &nbsp; 206</h5>
                                <button><i className = "fa fa-ellipsis-v"></i></button>
                            </div>
                            <div className = "section-populated">
                                <div className = "dashboard-item">
                                    <h5> Title </h5>
                                    <p>Description</p>
                                    <br/>
                                    <p>Agency Name</p>
                                    <hr />
                                    <p> <strong> 8 </strong> Hours until next reminder </p>
                                    <div className = "dashboard-item-bottom">
                                        <p>
                                            <i className = "fa fa-paperclip"></i>
                                            &nbsp;
                                            <strong> 2 </strong>
                                        </p>
                                        <button><i className = "fa fa-ellipsis-v"></i></button>
                                    </div>
                                </div>
                                <div className = "dashboard-item">
                                    <h5> Title </h5>
                                    <p>This is a mush longer description of the dashboard item. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eu eleifend neque, vel elementum erat. Donec ac ornare velit, et blandit nibh. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mollis erat sit amet justo sagittis egestas at sed elit. Integer feugiat viverra ipsum congue tempus. Vestibulum id diam ut nulla accumsan condimentum sit amet vulputate lacus. Suspendisse id bibendum nisl, ut rhoncus orci. Phasellus vestibulum quis dui vel viverra. In et dui nec metus imperdiet condimentum a eget purus. </p>
                                    <br/>
                                    <p>Agency Name</p>
                                    <hr />
                                    <p> <strong> 8 </strong> Hours until next reminder </p>
                                    <div className = "dashboard-item-bottom">
                                        <p>
                                            <i className = "fa fa-paperclip"></i>
                                            &nbsp;
                                            <strong> 2 </strong>
                                        </p>
                                        <button><i className = "fa fa-ellipsis-v"></i></button>
                                    </div>
                                </div>
                            </div>
                                
                        </div>
                        </div>
                    </div>
                    <div className = "dashboard-calendar">
                        <h4> Calendar 
                            <button className = "gotoCalendar" href = "/Calendar"><i className = "fa fa-calendar"></i></button>
                        </h4>
                        <div className = "dashboard-calendar-item">
                            <p> July 21</p>
                            <h6 className = "red-tag"> Submit Request X</h6>
                            <h6 className = "yellow-tag"> Submit Request Y</h6>
                            <h6 className = "blue-tag"> Follow Up on Request A</h6>
                            <h6 className = "red-tag"> Finalize Project K</h6>
                        </div>
                        <div className = "dashboard-calendar-item">
                            <p> July 24</p>
                            <h6 className = "red-tag"> File Extensionr Request B</h6>
                            <h6 className = "red-tag"> Begin Project L</h6>
                            <h6 className = "green-tag"> Speak to X about Project Y</h6>
                            <h6 className = "blue-tag"> Submit Request Z</h6>
                            <h6 className = "yellow-tag"> Re-Submit Request Y</h6>
                        </div>
                        <div className = "dashboard-calendar-item">
                            <p> July 30</p>
                            <h6 className = "blue-tag"> Follow Up on Project T</h6>
                            <h6 className = "black-tag"> Submit Request AC</h6>
                        </div>
                    </div>
                </div>
                
            </container>
        )
    }
}

export default Dashboard;