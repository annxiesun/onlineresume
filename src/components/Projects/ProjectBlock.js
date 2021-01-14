import React, { Component } from 'react';
import CodeTag from './CodeTag'

const projectStyle = {
    border: "2px solid",
    height: "100%",
    width: "100%",
}

class ProjectBlock extends React.Component {
    constructor(props) {
        super(props);


        this.state = {
            blockStyle: projectStyle
        }
    }


    render() {

        const desc = []

        for (var i = 0; i < this.props.project.desc.length; i++) {
            desc.push(<li className="li-desc">{this.props.project.desc[i]}</li>)
        }

        const tags = []
        for (var i = 0; i < this.props.project.madewith.length; i++) {
            tags.push(<CodeTag tag={this.props.project.madewith[i]} />)
        }

        return (
            <div style={{ ...this.state.blockStyle, color: this.props.col[1] }}>
                <div className="project-image"><img style={{
                    borderRightStyle: "solid", borderRightWidth: "2px", width: "100%", height: "100%",
                    objectFit: "cover"
                }}
                    src={this.props.project.image} /></div>
                <div className="project-text">
                    <h3 className="proj-title" tyle={{ color: this.props.col[1] }}>{this.props.project.title}</h3>
                    <p>{this.props.project.tagline}</p>
                    <div className="proj-row row">{tags}</div>
                    <p style={{ color: this.props.col[1] }}>{desc}</p>

                    <a href={this.props.project.links.github}>{this.props.project.links.name}</a>
                </div>
            </div>

        );
    }
}

export default ProjectBlock;
