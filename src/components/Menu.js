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

import { TransitionGroup, CSSTransition } from "react-transition-group";

import './main.css';
import '../resources/skill_icons.css'


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

const code = {
  col2: ["#EBEAE8", "black"],
  col: ["#191D34", "white"],
  icons: ["a", "b", "c"],
  titles: ["App Development", "Web Development", "Programming"],
  descs: [["Java", "JavaFX","Java Android"], 
  ["HTML,CSS","Javascript", "React", "Node", "Bootstrap"], 
  ["OOP","Python","Turing","C","Racket"]],

  projects: 
    [
    {
      image: '/images/projectimage1.png',
      title: "FeatherFinder",
      tagline:"A short personality quiz that gives them a bird that matches their personality",
      madewith: ["HTML","CSS", "Javascript", "React", "Node"],
      desc: ["Used object oriented programming principles to make quiz dynamic for easy updates",
        "Used ParticleJs, PaperJs, & TiltJs to add flair to the site to enhance the user-experience"
      ],
      links: {
        demo: "https://featherfinder.herokuapp.com/",
        github: "https://github.com/annxiesun/birdquiz",
        behance: "https://www.behance.net/gallery/105025295/FeatherFinder"
      }
    },

    {
      image: '/images/projectimage2.png',
      title: "MyMakeupManager",
      tagline:"Java app that helps people to keep track of their makeup collection",
      madewith: ["Java", "JavaSwing", "Guava"],
      desc: ["Used Guava data structures to organize products",
        "Used object oriented programming to interwine the UI with the data & store the data",
      ],
      links: {
        github: "https://github.com/annxiesun/makeupmanager",
      }

    },

    {
      image: '/images/projectimage2.png',
      title: "Safeways",
      tagline:"(Oxford Hacks Winner) A web-app that shows people the least busiest times to perform everyday tasks to minimize spread of COVID-19.",
      madewith: ["HTML", "CSS", "Javascript", "Node", "HERE API"],
      desc: [
        "Created a functional front-end and integrated it with the back-end",
        "Utilized the HereTechnologies API",
        "Effectively collaborated with a team"
      ],
      links: {
        github: "https://github.com/rbrtknwls/OxfordHacks-2020",
        behance: "https://www.behance.net/gallery/105025295/FeatherFinder"
      }

    }
    ]

}

const design = {
  col2: ["#191D34", "white"],
  col: ["#EBEAE8", "black"],
  icons: ["p", "e", "d"],
  titles: ["UI Design", "Branding", "Graphics"],
  descs: [["Adobe XD","Figma","Code Integration"], 
  ["Logo Design", "Icons","Brand Identities"], 
  ["Photoshop","Illustrator","InDesign","AfterEffects"]],

  projects: [
    {
      image: '/images/projectimage1_2.png',
      title: "FeatherFinder",
      madewith: ["Adobe Illustrator", "Adobe XD"],
      desc: ["Used object oriented programming principles to make quiz dynamic for easy updates",
        "Used ParticleJs, PaperJs, & TiltJs to add flair to the site to enhance the user-experience"
      ],
      links: {
        demo: "https://featherfinder.herokuapp.com/",
        github: "https://github.com/annxiesun/birdquiz",
        behance: "https://www.behance.net/gallery/105025295/FeatherFinder"
      }
    },

    {
      image: '/images/projectimage2_2.png',
      title: "MyMakeupManager",
      madewith: ["Java", "JavaSwing", "Guava"],
      desc: ["Used object oriented programming principles to make quiz dynamic for easy updates",
        "Used ParticleJs, PaperJs, & TiltJs to add flair to the site to enhance the user-experience"
      ],
      links: {
        github: "https://github.com/annxiesun/birdquiz",
        behance: "https://www.behance.net/gallery/105025295/FeatherFinder"
      }

    },

    {
      image: '/images/projectimage2.png',
      title: "Safeways",
      madewith: ["HTML","CSS", "Javascript", "Node", "HERE API"],
      desc: ["Used object oriented programming principles to make quiz dynamic for easy updates",
        "Used ParticleJs, PaperJs, & TiltJs to add flair to the site to enhance the user-experience"
      ],
      links: {
        github: "https://github.com/annxiesun/birdquiz",
        behance: "https://www.behance.net/gallery/105025295/FeatherFinder"
      }
    }

    ]

  }

class Menu extends React.Component {
    constructor() {
      super();

      this.state = {
        checkedA: true,
        mode: code
      }

      this.handleChange = this.handleChange.bind(this)
    }


  handleChange(event) {
      this.setState({ [event.target.name]: event.target.checked });


      if (this.state.mode == code) {
        this.setState({
          mode: design
        })
      } else {
        this.setState({
          mode: code
        })
      }
    };


render() {
  console.log(this.state.mode.titles)
  return (

    <Router>
      <div>

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
          <Link style={{
            color: this.state.mode.col[1]
          }} className="nav-item nav-link" to="/skills">Skills</Link>
          <Link style={{
            color: this.state.mode.col[1]
          }}
            className="nav-item nav-link" to="/projects">Projects</Link>
          <Link style={{
            color: this.state.mode.col[1]
          }}

            className="nav-item nav-link active" to="/">Home <span className="sr-only">(current)</span></Link>


          <FormControlLabel
            control={<Toggle checked={this.state.checkedA} onChange={this.handleChange} name="checkedA" />}
          />
        </div>


        <SwitchRoute>

          <Route path="/projects">
            <ProjectPage
              mode={this.state.mode}
            />
          </Route>
          <Route path="/skills">
            <Skills mode={this.state.mode} />
          </Route>
          <Route path="/">
            <Home col1={this.state.mode.col} col2={this.state.mode.col2} />
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
