import React, { Component } from 'react';
import SkillBlock from './SkillBlock'



class SkillsPageCode extends React.Component {
  constructor(props) {
    super(props);



  }

  render() {
    console.log(this.props.descs+" "+this.props.titles+" n"+this.props.icons)
    return (
      <div style={{ backgroundColor: "#EBEAE8" }}>
        <div className="skills-container" >
          <div className="row skill-row">
            <SkillBlock title={this.props.titles[0]} desc={this.props.descs[0]} 
            style={{ position: "relative", left: "20px" }}
              col={this.props.col} icon={this.props.icons[0]}/>

            <SkillBlock title={this.props.titles[1]} desc={this.props.descs[1]}
            style={{ position: "relative", left: "20px" }
            } col={this.props.col} icon={this.props.icons[1]} />

            <SkillBlock title={this.props.titles[2]} desc={this.props.descs[2]}
            style={{ position: "relative", left: "20px" }}
              col={this.props.col} icon={this.props.icons[2]}/>
          </div>

        </div>
      </div>
    );
  }
}


export default SkillsPageCode;