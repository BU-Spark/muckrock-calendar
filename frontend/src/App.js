import { useState } from "react";
import "./App.css";
import Main from "./pages/main/Main";
import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
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
      <Router>
        <Navbar click={() => setSideToggle(true)} />
        <SideDrawer show={sideToggle} click={() => setSideToggle(true)} />
        <Backdrop show={sideToggle} click={() => setSideToggle(false)} />
        <Switch>
          <Route path="/" exact component={Main}></Route>
          <Route path="/home" exact component={Home} />
          {/* <Route path="/requests" exact component={Requests}/> */}
          <Route path="/requests"><Requests/></Route>
          <Route path="/projects"><Projects/></Route>
          <Route path="/calendar"><Calendar/></Route>
          <Route path="/monthview"><MonthView/></Route>

        </Switch>
      </Router>
    </div>
    // <Projects />
    // <Login />
    // <DayView/>
    // <Calendar/>
  );
};

export default App;
