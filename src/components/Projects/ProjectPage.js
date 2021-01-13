import React, { Component } from 'react';
import ProjectBlock from './ProjectBlock'
import './Project.css'

class ProjectPage extends React.Component {
  constructor(props) {
    super(props);

   }


  render() {
    return (
        <div style={
            {   width:"100vw",
                backgroundColor:this.props.col[0]}}>
 <div className="project-container">       
<ProjectBlock title="hello" desc="hello" col={this.props.col}/>
   </div> 

<div className="project-container">       
<ProjectBlock title="hello" desc="hello" col={this.props.col}/>
   </div> 

<div className="project-container">       
<ProjectBlock title="hello" desc="hello" col={this.props.col}/>
   </div> 
   </div>
    );
  }
}

export default ProjectPage;