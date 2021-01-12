import React, { Component } from 'react';
import SkillBlock from './SkillBlock'



class SkillsPageCode extends React.Component {
  constructor(props) {
  super(props);
  


  }

  render() {
    
    return (
      <div id="hi" style={{backgroundColor:this.props.col[0]}}>
      <div className="skills-container" >
      <div className="row">
<SkillBlock title="Application Development" desc="Hello" style={{position:"relative", left:"20px"}}
col={this.props.col}/>

<SkillBlock title="Application Development" desc="Hello" style={{position:"relative", left:"20px"}
} col={this.props.col}/>

<SkillBlock title="Application Development" desc="Hello" style={{position:"relative", left:"20px"}}
col={this.props.col}  />
</div>

    </div>
    </div>
    );
  }
}


export default SkillsPageCode;