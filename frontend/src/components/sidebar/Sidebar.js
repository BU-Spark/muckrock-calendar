import "./Sidebar.css";
// import logo from "../../assets/logo.png";

const Sidebar = ({ sidebarOpen, closeSidebar }) => {
  return (
    <div className={sidebarOpen ? "sidebar_responsive" : ""} id="sidebar">
      <div className="sidebar__title">
        <div className="sidebar__img">
          {/* <img src={logo} alt="logo" /> */}
          <h1>LOGO HERE</h1>
        </div>
        <i
          onClick={() => closeSidebar()}
          className="fa fa-times"
          id="sidebarIcon"
          aria-hidden="true"
        ></i>
      </div>

      <div className="sidebar__menu">
        <div className="sidebar__link active_menu_link">
          <i className="fa fa-home"></i>
          <a href="/">Dashboard</a>
        </div>
        <h2>MuckRock</h2>
        <div className="sidebar__link">
          <i className="fa fa-user-secret" aria-hidden="true"></i>
          <a href="/home">List of Projects</a>
        </div>
        <div className="sidebar__link">
          <i className="fa fa-calendar"></i>
          <a href="#">Calendar</a>
        </div>
        <div className="sidebar__link">
          <i className="fa fa-bell"></i>
          <a href="#">Notifications</a>
        </div>
        <div className="sidebar__link">
          <i className="fa fa-cog"></i>
          <a href="#">Settings</a>
        </div>
        <div className="sidebar__link">
          <i className="fa fa-quote-right"></i>
          <a href="#">About</a>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
