import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

//components
import Nav from './components/Nav';
import Project from './components/Project';
import About from './components/About';
import Contact from './components/Contact';

//style
import './App.css';

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
          <Route path="/Project" component={Project}>
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
  <div>
    <h1>Home page</h1>
  </div>
);

