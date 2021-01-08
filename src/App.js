import React, { useEffect }  from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//components
import Nav from './components/Nav';
import Homepage from './components/Homepage';
import Intro from './components/Intro';
import Project from './components/Project';
import About from './components/About';
import Contact from './components/Contact';
import List from './components/List';

//style
import './App.css';
import './Reset.css';


export default function App() {
  return (
    <Router>
        <Nav />
        <Switch>
        {/* <Route path={process.env.PUBLIC_URL + '/'} exact component={Home}>
            <Home />
          </Route> */}
          <Route path="/" exact component={Home}>
            <Home />
          </Route>
          <Route path="/Intro" exact component={Intro}>
            <Intro />
          </Route>
          <Route path="/About" component={About}>
            <About />
          </Route>
          <Route path="/Project" exact component={Project}>
            <Project />
          </Route>
          <Route path="/Contact" component={Contact}>
            <Contact />
          </Route>
        </Switch>
      </Router>
  );
}

const Home = () => (
  <Homepage />
);

