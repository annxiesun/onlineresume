import React, { Component } from 'react';
import ProjectBlock from './ProjectBlock'
import './Project.css'

class ProjectPage extends React.Component {
    constructor(props) {
        super(props);

        this.componentDidMount = this.componentDidMount.bind(this)
    }
    componentDidMount(){

    }


    render() {
        let slide = (this.props.mode.col[0] == "#191D34") ?  "0%" : "100%"


        return (


            <div className="wrapper page" style={
                {
                    width: "100vw",
                    height: "calc(100vh)",
                    backgroundColor: "#EBEAE8"
                }}>

                <div className="project-slide"

                    style={{ transform: "translateX(" + slide + ")" ,}}
                />
                
                <div id="carouselExampleIndicators" class="carousel slide project-carousel" data-ride="carousel">
                    <ol class="carousel-indicators">
                        <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>

                    </ol>
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <div className="project-container">
                                <ProjectBlock project={this.props.mode.projects[0]}
                                    col={this.props.mode.col}
                                />
                            </div>
                        </div>
                        <div class="carousel-item">
                            <div className="project-container">
                                <ProjectBlock project={this.props.mode.projects[1]}
                                    col={this.props.mode.col}
                                />
                            </div>
                        </div>
                        <div class="carousel-item">
                            <div className="project-container">
                                <ProjectBlock project={this.props.mode.projects[2]}
                                    col={this.props.mode.col} />
                            </div>
                        </div>
                    </div>
                    <a style={{ display: "none" }} class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="sr-only">Previous</span>
                    </a>
                    <a style={{ display: "none" }} class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="sr-only">Next</span>
                    </a>
                </div>
            </div>

        );
    }
}

export default ProjectPage;