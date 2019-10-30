import React from 'react';
import './App.css';
import {Route, Switch} from 'react-router-dom';


import Home from './pages/Home';
import Rooms from './pages/Rooms';
import Room from './pages/Room';
import NotFound from './pages/NotFound';

import NavBar from './components/NavBar';


function App() {
  return (
    <>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/rooms/" component={Rooms} />
        <Route exact path="/rooms/:room" component={Room} />
        <Route component={NotFound} />
      </Switch>
    </>
  );
}

export default App;
