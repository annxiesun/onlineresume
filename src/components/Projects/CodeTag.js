import React, { Component } from 'react';

class CodeTag extends React.Component {
  constructor(props) {
	super(props);
   }


  render() {
    return (
<div 
className="codetag">{this.props.tag}</div>
    
    );
  }
}

export default CodeTag;