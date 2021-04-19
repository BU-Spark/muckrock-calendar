import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';

import './App.css';
import CalendarView from './pages/CalendarView';
function App() {
  return (
    // <div className="App">
    //   <h1> Timeline: </h1>
    //   <Timeline />
    // </div>

  <>
  <Router>
    <Navbar />
    <Switch>
      <Route path='/' exact component={Home} />
      <Route path='/login' component={() => { 
        window.location.replace('https://accounts.muckrock.com/accounts/login/'); 
        return null;
      }}/>
      <Route path='/calendar' exact component={CalendarView} />
    </Switch>
  </Router>
  </>
  );
}

export default App;
