import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch as SwitchRoute,
  Route,
  Link,
  withRouter
} from "react-router-dom";

import Skills from './Skills/SkillsPage'
import Home from './Home'
import ProjectPage from './Projects/ProjectPage.js'

import { Switch, Tooltip } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';

import { TransitionGroup, CSSTransition } from "react-transition-group";

import './main.css';
import '../resources/skill_icons.css'
import './transitions.scss';

const Toggle = withStyles({
  switchBase: {
    color: "#ffc526",
    '&$checked': {
      color: "#a8d8ff;",
    },
    '&$checked + $track': {
      backgroundColor: "#6ebeff",
    },
  },
  checked: {},
  track: { backgroundColor: "#baa377", },
})(Switch);


class Menu extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      checkedA: true,
    }

  }


  render() {
    
    return (

          <div class="row flex-row-reverse" style={
            {
              position: "fixed",
              top: "0",
              right: "0",
              height: "62px",
              width: "100%",
              padding: "1em",
              zIndex: "1",

            }
          }>
            <Link className="nav-item nav-link" to="/skills">Skills</Link>
            <Link 
              className="nav-item nav-link" to="/projects">Projects</Link>
            <Link 

              className="nav-item nav-link active" to="/">Home <span className="sr-only">(current)</span></Link>


              <Tooltip title={"Change to "+this.props.mode.name} arrow>
            <FormControlLabel
              control={<Toggle checked={this.props.checkedA} onChange={this.props.handleChange} name="checkedA" />}
            />
            </Tooltip>
          </div>


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
