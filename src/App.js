import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

//components
import Nav from './components/Nav';
import Homepage from './components/Homepage';
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
          <Route path="/" exact component={Home}>
            <Home />
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
          <Route path="/Project/:id" component={List} />
        </Switch>
      </Router>
  );
}

const Home = () => (
  <Homepage />
);

