import React, { Component } from 'react';
import SkillsPageCode from './SkillsPageCode'

class SkillsPage extends React.Component {
  constructor(props) {
    super(props);

   }

   

  render() {

    return (
      <div>
        <SkillsPageCode col={this.props.col}/>
    </div>
    );
  }
}

export default SkillsPage;