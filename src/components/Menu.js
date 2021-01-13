import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch as SwitchRoute,
  Route,
  Link
} from "react-router-dom";

import Skills from './Skills/SkillsPage'
import Home from './Home'
import ProjectPage from './Projects/ProjectPage.js'

import { Switch } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';

import './main.css'

const Toggle = withStyles({
  switchBase: {
    color: "white",
    '&$checked': {
      color: "black",
    },
    '&$checked + $track': {
      backgroundColor: "black",
    },
  },
  checked: {},
  track: {backgroundColor:"grey",},
})(Switch);


class Menu extends React.Component {
  constructor() {
  super();
  
  this.state={
    checkedA:true,
    mode:"dark",
    col:["#191D34", "white"],
    col2:["#EBEAE8", "black"]
  }

  this.handleChange= this.handleChange.bind(this)
   }


   handleChange (event) {
    this.setState({[event.target.name]: event.target.checked});


    if (this.state.mode=="dark"){
      this.setState({mode:"light", col:["#EBEAE8", "black"],
      col2:["#191D34", "white"]})
    } else {
      this.setState({mode:"dark",col:["#191D34", "white"],
      col2:["#EBEAE8", "black"]})
    }
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

          <Route path="/projects">
            <ProjectPage />
          </Route>
          <Route path="/skills">
            <Skills col={this.state.col}/>
          </Route>
          <Route path="/">
            <Home col1={this.state.col} col2={this.state.col2}/>
          </Route>
        </SwitchRoute>
</div>
</Router>

    
    );
  }
}


function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}

export default Menu;