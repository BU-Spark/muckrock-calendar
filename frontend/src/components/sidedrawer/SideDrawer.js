import './SideDrawer.css';
import {Link} from 'react-router-dom';

const SideDrawer = ({show, click}) => {
    const sideDrawerClass = ["sidedrawer"];

    if (show) {
        sideDrawerClass.push("show");
    }


    return <div className={sideDrawerClass.join(" ")}>
        <ul className="sidedrawer__links" onClick={click}>
            <div className="sidedrawer__menu">
                <div className="sidedrawer__logoholder"><div className="sidedrawer__muckrocklogo"><h2>M</h2></div></div>
                <div className="sidedrawer__link active_menu_link">
                    <i className="fa fa-home"></i>
                    <a href = "/Dashboard">Dashboard</a>
                </div>
                <h2>MuckRock</h2>
                <div className="sidedrawer__link">
                    <i className="fa fa-user-secret" aria-hidden="true"></i>
                    <a href="/Projects">Projects</a>
                </div>
                <div className="sidedrawer__link">
                    <i className="fa fa-quote-right"></i>
                    <a href="/Requests">Requests</a>
                </div>
                <div className="sidedrawer__link">
                    <i className="fa fa-calendar"></i>
                    <a href="/Calendar">Calendar</a>
                </div>
                <div className="sidedrawer__link">
                    <i className="fa fa-bell"></i>
                    <a href="/monthview">monthview</a>
                </div>
                <div className="sidedrawer__link">
                    <i className="fa fa-cog"></i>
                    <a href="/Settings">Settings</a>
                </div>
                <div className="sidedrawer__link">
                    <i className="fa fa-quote-right"></i>
                    {/* All the others really should be like this! */}
                    <Link to="/requests">Requests</Link>
                </div>
            </div>
        </ul>

    </div>;
};

export default SideDrawer;