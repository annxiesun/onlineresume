import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

class Menu extends React.Component {
  constructor() {
	super();
   }


  render() {
    return (
      <Router>
        <div>
<nav className="navbar navbar-expand-lg navbar-light bg-light">

  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div className="navbar-nav">
      <Link className="nav-item nav-link active" to="/">Home <span className="sr-only">(current)</span></Link>
      <Link  className="nav-item nav-link" to="/projects">Projects</Link>
      <Link className="nav-item nav-link" to="/skills">Skills</Link>
    </div>
  </div>
</nav>

<Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/projects">
            <Users />
          </Route>
          <Route path="/skills">
            <Home />
          </Route>
        </Switch>
</div>
</Router>

    
    );
  }
}

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}

export default Menu;