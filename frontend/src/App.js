import { useState } from "react";
import "./App.css";
import MainPage from "./pages/MainPage/MainPage";
import Navbar from "./components/NavBar/Navbar";
import { HashRouter, Switch, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage/LoginPage";
import DashboardPage from "./pages/DashboardPage/DashboardPage";
import ProjectsPage from "./pages/ProjectsPage/ProjectsPage";
import RequestsPage from "./pages/RequestsPage/RequestsPage";
import MonthView from './components/monthview/MonthView';
import CalendarPage from './pages/CalendarPage/CalendarPage';
import Backdrop from "./components/Backdrop/Backdrop";
import SideDrawer from "./components/SideDrawer/SideDrawer";

const App = () => {
  const [sideToggle, setSideToggle] = useState(false);

  return (

    <div>
      <HashRouter basename={process.env.PUBLIC_URL} hashType="slash" >
        <Navbar click={() => setSideToggle(true)} />
        <SideDrawer show={sideToggle} click={() => setSideToggle(true)} />
        <Backdrop show={sideToggle} click={() => setSideToggle(false)} />
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route exact path="/dashboard"  component={DashboardPage} />
          <Route exact path="/requests" component={RequestsPage} />
          <Route exact path="/projects" component={ProjectsPage}/>
          <Route exact path="/calendar" component={CalendarPage}/>
          <Route exact path="/monthview" component={MonthView}/>

        </Switch>
      </HashRouter>
    </div>
  );
};

export default App;
