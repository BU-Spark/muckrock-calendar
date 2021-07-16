import { useState } from "react";
import "./App.css";
import Login from "./pages/Login/Login";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard/dashboard";
import Projects from "./pages/Projects/projects";
import Calendar from "./pages/Calendar/calendar";
import {BrowserRouter, Switch, Route, Link} from 'react-router-dom';
const App = () => {
  
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
    // <Dashboard></Dashboard>
    <BrowserRouter>
      <div className="container">
        <Switch>
          <Route path="/" exact component={Dashboard}><Dashboard></Dashboard></Route>
          <Route path="/Dashboard" exact component={Dashboard}><Dashboard></Dashboard></Route>
          <Route path="/Projects" exact component={Projects}><Projects></Projects></Route>
          <Route path="/Calendar" exact component={Calendar}><Calendar></Calendar></Route>
        </Switch>
      </div>
    </BrowserRouter>
    

  );
};

export default App;
