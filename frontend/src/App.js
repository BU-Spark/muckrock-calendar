import { useState } from "react";
import "./App.css";
import MainPage from "./pages/MainPage/MainPage";
import Navbar from "./components/NavBar/Navbar";
import { HashRouter, Switch, Route } from "react-router-dom";
import { get_username } from './service/foia';
import LoginPage from "./pages/LoginPage/LoginPage";
import DashboardPage from "./pages/DashboardPage/DashboardPage";
import ProjectsPage from "./pages/ProjectsPage/ProjectsPage";
import RequestsPage from "./pages/RequestsPage/RequestsPage";
import MonthView from './components/MonthView/MonthView';
import CalendarPage from './pages/CalendarPage/CalendarPage';
import Backdrop from "./components/Backdrop/Backdrop";
import SideDrawer from "./components/SideDrawer/SideDrawer";
import axios from 'axios';

const App = () => {
  const [sideToggle, setSideToggle] = useState(false);

  const [user, setUser] = useState("");
  const [loginError, setLoginError] = useState("");

  const Login = details => {
    console.log(details);
    setUser(details.userNameOrEmail);
  };

  const usernameTest = () => {
    console.log(user);
  }

  /*
  const usernameTest = async() => {
      const answer = await axios.post(process.env.REACT_APP_MUCKROCK_BASE_URL + '/user/login/', {
        username: "ashburnh",
        password: "",
        withCredentials: true
      });

  };
  */

  const Logout = () => {
    console.log("Logout");
  }

  return (

    <div>
      <HashRouter basename={process.env.PUBLIC_URL} hashType="slash" >
        <Navbar click={() => setSideToggle(true)} user={user} />
        <SideDrawer show={sideToggle} click={() => setSideToggle(true)} />
        <Backdrop show={sideToggle} click={() => setSideToggle(false)} />
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route exact path="/dashboard"  component={DashboardPage} />
          <Route exact path="/requests" component={RequestsPage} />
          <Route exact path="/projects" component={ProjectsPage}/>
          <Route exact path="/calendar" component={CalendarPage}/>
          <Route exact path="/monthview" component={MonthView}/>
          <Route exact path="/LoginPage"> <LoginPage user={user} Login={Login} usernameTest={usernameTest} error={loginError}/> </Route>

        </Switch>
      </HashRouter>
    </div>
  );
};

export default App;
