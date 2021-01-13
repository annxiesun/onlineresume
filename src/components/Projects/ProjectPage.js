import React, { Component } from 'react';
import ProjectBlock from './ProjectBlock'
import './Project.css'

class ProjectPage extends React.Component {
  constructor(props) {
    super(props);

   }


  render() {
    return (
        <div>
 <div class="project-container">       
<ProjectBlock title="hello" desc="hello"/>
   </div> 

<div class="project-container">       
<ProjectBlock title="hello" desc="hello"/>
   </div> 

<div class="project-container">       
<ProjectBlock title="hello" desc="hello"/>
   </div> 
   </div>
    );
  }
}

export default ProjectPage;