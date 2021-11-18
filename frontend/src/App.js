import { useState } from "react";
import "./App.css";
import Main from "./pages/main/Main";
import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { HashRouter } from "react-router-dom";

import Login from "./pages/Login/Login";
import Home from "./pages/Home";
import Projects from "./pages/Projects/Projects";
import Project from "./components/projectCard/Project";
import Request from "./components/request/Request";
import Requests from "./pages/Requests/Requests";
import DayView from "./components/dayview/DayView";
import MonthView from './components/monthview/MonthView';
import Calendar from './pages/calendar/Calendar'
import Backdrop from "./components/backdrop/Backdrop";
import SideDrawer from "./components/sidedrawer/SideDrawer";

const App = () => {
  const [sidebarOpen, setsidebarOpen] = useState(false);
  const [sideToggle, setSideToggle] = useState(false);
  const openSidebar = () => {
    setsidebarOpen(true);
  };
  const closeSidebar = () => {
    setsidebarOpen(false);
  };
  return (

    <div>
      <HashRouter basename={process.env.PUBLIC_URL} hashType="slash" >
        <Navbar click={() => setSideToggle(true)} />
        <SideDrawer show={sideToggle} click={() => setSideToggle(true)} />
        <Backdrop show={sideToggle} click={() => setSideToggle(false)} />
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/home"  component={Home} />
          {/* <Route path="/requests" exact component={Requests}/> */}
          <Route exact path="/requests" component={Requests} />
          <Route exact path="/projects" component={Projects}/>
          <Route exact path="/calendar" component={Calendar}/>
          <Route exact path="/monthview" component={MonthView}/>

        </Switch>
      </HashRouter>
    </div>
    // <Projects />
    // <Login />
    // <DayView/>
    // <Calendar/>
  );
};

export default App;
