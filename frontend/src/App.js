import { useState } from "react";
import "./App.css";
import Main from "./pages/main/Main";
import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./pages/Login/Login";
import Home from "./pages/Home";
import DayView from "./components/dayview/DayView";
import MonthView from './components/monthview/MonthView';
import Calendar from './pages/calendar/Calendar'

const App = () => {
  const [sidebarOpen, setsidebarOpen] = useState(false);
  const openSidebar = () => {
    setsidebarOpen(true);
  };
  const closeSidebar = () => {
    setsidebarOpen(false);
  };
  return (
    // <div className="container">
    //   <Router>
    //     <Navbar sidebarOpen={sidebarOpen} openSidebar={openSidebar} />
    //     <Switch>
    //       <Route path="/" exact component={Main}></Route>
    //       <Route path="/home" exact component={Home} />
    //     </Switch>
    //     <Sidebar sidebarOpen={sidebarOpen} closeSidebar={closeSidebar} />
    //   </Router>
    // </div>
    // <Login />
    // <DayView/>
    <Calendar/>
  );
};

export default App;
