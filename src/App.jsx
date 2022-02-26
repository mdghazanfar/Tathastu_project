import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import { Redirect, Route, Switch } from "react-router-dom"

import Home from "./MyComponents/Home";
import Contact from './MyComponents/Contact';
import About from './MyComponents/About';
import Service from './MyComponents/Service';
import Navbar from './MyComponents/navbar';

function App() {
  return (
    <><Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/Service" component={Service} />
        <Redirect to="/" />
      </Switch>
    </>

  );
}

export default App;
