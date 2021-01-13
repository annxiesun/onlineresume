import React, { Component } from 'react';

const projectStyle = {
    border: "2px solid",
    height:"300px",
    width:"100%",
    }

class ProjectBlock extends React.Component {
  constructor(props) {
    super(props);
    
        
    this.state={
        blockStyle:projectStyle
    }
   }


  render() {
    return (
        <div style={this.state.blockStyle}>
        <div className="project-image"></div>
        <div className="project-text">
        <h3 style={{color:this.props.col[1]}}>{this.props.title}</h3>
        <p style={{color:this.props.col[1]}}>{this.props.desc}</p>
        </div>
        </div>
    
    );
  }
}

export default ProjectBlock;
