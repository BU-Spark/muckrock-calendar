import React from 'react';
import './dashboard.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import slide_1 from '../../images/accept-tasks.png';
import slide_2 from '../../images/files-sent.png';
import slide_3 from '../../images/secure-data.png';
import slide_4 from '../../images/online-calendar.png';
import Navbar from "../../components/navbar/Navbar";
import SidebarComp from "../../components/sidebar/Sidebar";
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
                <br />
                <h2> &nbsp; &nbsp; Your Dashboard </h2>
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
            </container>
        )
    }
}

export default Dashboard;