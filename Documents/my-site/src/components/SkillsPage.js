import React, { Component } from 'react';
import SkillsPageCode from './SkillsPageCode'

class SkillsPage extends React.Component {
  constructor(props) {
    super(props);

   }

   

  render() {
    let col;
    console.log(this.props.mode)
    if (this.props.mode=="dark"){
        col=["#191D34", "white"]
        console.log("gi")
    } else {
        col=["#EBEAE8", "black"]
      
    }

    return (
      <div>
        <SkillsPageCode col={col}/>
    </div>
    );
  }
}

export default SkillsPage;