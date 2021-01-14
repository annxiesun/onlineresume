import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import logo from './logo.svg';
import './App.css';

import Menu from './components/Menu.js'
import { Switch, Route, withRouter } from "react-router-dom";

import { TransitionGroup, CSSTransition } from "react-transition-group";

import Skills from './components/Skills/SkillsPage'
import Home from './components/Home'
import ProjectPage from './components/Projects/ProjectPage.js'

const code = {
  name:"Dev",
  col2: ["#EBEAE8", "black"],
  col: ["#191D34", "white"],
  icons: ["a", "b", "c"],
  titles: ["App Development", "Web Development", "Programming"],
  descs: [["Java", "JavaFX", "Java Android"],
  ["HTML,CSS", "Javascript", "React", "Node", "Bootstrap"],
  ["OOP", "Python", "Turing", "C", "Racket"]],

  projects:
  [
    {
      image: '/images/projectimage1_2.png',
      title: "Feather Finder",
      tagline: "A short personality quiz that gives them a bird that matches their personality",
      madewith: ["HTML", "CSS", "Javascript", "React", "Node"],
      desc: ["Used object oriented programming principles to make quiz dynamic for easy updates",
        "Used ParticleJs, PaperJs, & TiltJs to add flair to the site to enhance the user-experience"
      ],
      links: {
        demo: "https://featherfinder.herokuapp.com/",
        github: "https://github.com/annxiesun/birdquiz",
        name:"Github"
      }
    },

    {
      image: '/images/projectimage2.png',
      title: "MyMakeup Manager",
      tagline: "Java app that helps people to keep track of their makeup collection",
      madewith: ["Java", "JavaSwing", "Guava"],
      desc: ["Used Guava data structures to organize products",
        "Used object oriented programming to interwine the UI with the data & store the data",
      ],
      links: {
        github: "https://github.com/annxiesun/makeupmanager",
        name:"Github"
      }

    },

    {
      image: '/images/projectimage3_2.png',
      title: "Hackathons",
      tagline: "Created many web applications through hackathons, a winner of Oxford hacks",
      madewith: ["MERN Stack","APIs"],
      desc: [
        "Focused on the front-end and integrating it with the back-end",
        "Quickly learned new languages and concepts"
      ],
      links: {
        github: "https://devpost.com/anniesun?ref_content=user-portfolio&ref_feature=portfolio&ref_medium=global-nav",
        behance: "https://www.behance.net/gallery/105025295/FeatherFinder",
        name:"Devpost"
      }

    }
  ]

}

const design = {
  name: "Design",
  col2: ["#191D34", "white"],
  col: ["#EBEAE8", "black"],
  icons: ["p", "e", "d"],
  titles: ["UI Design", "Branding", "Graphics"],
  descs: [["Adobe XD", "Figma", "Code Integration"],
  ["Logo Design", "Icons", "Brand Identities"],
  ["Photoshop", "Illustrator", "InDesign", "AfterEffects"]],

  projects: [
    {
      image: '/images/projectimage1.png',
      tagline: "A short personality quiz that gives them a bird that matches their personality",
      title: "Feather Finder",
      madewith: ["Adobe Illustrator", "Adobe XD"],
      desc: ["Implemented features that enhanced user pleasure like animations, a special cursor & interactive cards",
        "Created modern & light illustrations inspired by tarot cards"
      ],
      links: {
        demo: "https://featherfinder.herokuapp.com/",
        github: "https://github.com/annxiesun/birdquiz",
        behance: "https://www.behance.net/gallery/105025295/FeatherFinder"
      }
    },

    {
      image: '/images/projectimage2_2.png',
      title: "MyMakeup Manager",
      tagline: "Java app that helps people to keep track of their makeup collection",
      madewith: ["AdobeXD", "After Effects"],
      desc: ["Implemented a dynamic layout that displays many products and their key info, effectively using space",
        "Combined bold serif fonts and light outlines to mimic fashion magazines"
      ],
      links: {
        github: "https://github.com/annxiesun/birdquiz",
        behance: "https://www.behance.net/gallery/105025295/FeatherFinder"
      }

    },

    {
      image: '/images/projectimage3.png',
      title: "Hackathons",
      tagline: "Created many web applications through hackathons, winner in Oxford hacks",
      madewith: ["Adobe Suite"],
      desc: [
        "Designed easy to use UI and recreated designs using code",
        "Created unique branding & presentations for each project"
      ],
      links: {
        github: "https://github.com/rbrtknwls/OxfordHacks-2020",
        behance: "https://www.behance.net/gallery/105025295/FeatherFinder"
      }
    }

  ]

}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      prevDepth: this.getPathDepth(this.props.location),
      mode: code,
    };
    this.handleChange=this.handleChange.bind(this)
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

  componentWillReceiveProps() {
    this.setState({ prevDepth: this.getPathDepth(this.props.location) });
  }

  getPathDepth(location) {
    let pathArr = location.pathname.split("/")[1];
    console.log(pathArr)
    if (pathArr=="skills"){
        return 3;
    } else if (pathArr="projects"){
      return 2;

    } else{
      return 1;
    }
  }

  render() {
    const { location } = this.props;

    const currentKey = location.pathname.split("/")[1] || "/";
    const timeout = { enter: 800, exit: 400 };

    return (
      <div>
        <Menu mode={this.state.mode} handleChange={this.handleChange}/>
        <TransitionGroup component="div" className="App">
          <CSSTransition
            key={currentKey}
            timeout={timeout}
            classNames="pageSlider"
            mountOnEnter={false}
            unmountOnExit={true}
          >
            <div
              className={
                this.getPathDepth(location) - this.state.prevDepth >= 0
                  ? "left"
                  : "right"
              }

              style={
                {backgroundColor: this.state.mode.col[0]}
              }
            >
              <Switch location={location}>
                <Route path="/projects">
                  <ProjectPage
                    mode={this.state.mode}
                  />
                </Route>
                <Route path="/skills">
                  <Skills mode={this.state.mode} />
                </Route>
                <Route path="/" >
                  <Home col1={this.state.mode.col} col2={this.state.mode.col2} />
                </Route>
              </Switch>
            </div>
          </CSSTransition>
        </TransitionGroup>
      </div>
    );
  }
}

export default withRouter(App);