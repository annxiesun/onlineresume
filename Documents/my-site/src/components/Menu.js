import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch as SwitchRoute,
  Route,
  Link
} from "react-router-dom";
import Skills from './SkillsPage'
import { Switch } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { purple } from '@material-ui/core/colors';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';

const Toggle = withStyles({
  switchBase: {
    color: purple[300],
    '&$checked': {
      color: purple[500],
    },
    '&$checked + $track': {
      backgroundColor: purple[500],
    },
  },
  checked: {},
  track: {backgroundColor: purple[500],},
})(Switch);


class Menu extends React.Component {
  constructor() {
  super();
  
  this.state={
    checkedA:true,
    mode:"dark"
  }

  this.handleChange= this.handleChange.bind(this)
   }


   handleChange (event) {
    this.setState({[event.target.name]: event.target.checked,  mode:"light"});
  };


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
      <FormControlLabel
        control={<Toggle checked={this.state.checkedA} onChange={this.handleChange} name="checkedA" />}
      />
    </div>
  </div>
</nav>

<SwitchRoute>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/projects">
            <Users />
          </Route>
          <Route path="/skills">
            <Skills mode={this.state.mode}/>
          </Route>
        </SwitchRoute>
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