import React, { Component } from 'react';
import SkillsPageCode from './SkillsPageCode'

class SkillsPage extends React.Component {
  constructor(props) {
    super(props);

   }

   

  render() {
    let slide = (this.props.mode.col[0] == "#191D34") ?  "0%" : "100%"
    
    return (
      <div>
                        <div className="project-slide"

                    style={{ transform: "translateX(" + slide + ")" ,}}
                />
        <SkillsPageCode col={this.props.mode.col} icons={this.props.mode.icons} 
              titles={this.props.mode.titles} descs={this.props.mode.descs}/>
    </div>
    );
  }
}

export default SkillsPage;