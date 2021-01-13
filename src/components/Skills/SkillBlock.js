import React, { Component } from 'react';
import css from './SkillBlock.css'

const regularTitleStyle = {
    position: "relative",
    transform: "translateY(160%)",
    transition: "0.5s",
    fontSize: "1em"

}

const hoverTitleStyle = {
    position: "relative",
    transform: "translateY(70%)",
    transition: "0.5s",
    fontSize: "1em",
}

const regularDescStyle = {
    opacity: "0",
    top: "20%",
    textAlign: "left",

}

const hoverDescStyle = {
    position: "relative",
    top: "20%",
    opacity: "1",
    transition: "0.5s",
    textAlign: "left",
    position: "relative",
    left: "50%",
    transform: "translateX(-25%)",

}

const regularBlockStyle = {
    boxShadow: "0px 0px",
    width: "250px",
    height: "400px",
    border: "2px solid",
    transition: "0.5s",
    margin: "1em",


}

const hoverBlockStyle = {
    boxShadow: "5px 5px",
    width: "250px",
    height: "400px",
    border: "2px solid",
    transform: "translate(-2%, -2%)",
    transition: "2s",
    margin: "1em",

}

class SkillBlock extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            blockStyle: regularBlockStyle,
            titleStyle: regularTitleStyle,
            descStyle: regularDescStyle,

        }

        this.onMouseEnter = this.onMouseEnter.bind(this)
        this.onMouseLeave = this.onMouseLeave.bind(this)
        //this.state.blockStyle.margin=this.props.style.margin;

    }


    onMouseEnter() {
        this.setState({
            blockStyle: hoverBlockStyle,
            descStyle: hoverDescStyle,
            titleStyle: hoverTitleStyle
        })

    }


    onMouseLeave() {

        this.setState(
            {
                blockStyle: regularBlockStyle,
                descStyle: regularDescStyle,
                titleStyle: regularTitleStyle
            }
        );

    }

    render() {

        const desc = []

        for (var i = 0; i < this.props.desc.length; i++) {
            desc.push(<li>{this.props.desc[i]}</li>)
        }

        let slide = (this.props.col[0] == "#191D34") ? "0%" : "100%"

        return (


            <div className="skill-block"
                style={{
                    ...this.state.blockStyle, backgroundColor: "none",
                    borderColor: this.props.col[1], color: this.props.col[1]
                }} >



                <div style={{ width: "250px", height: "400px", position: "absolute", zIndex: "3" }}
                    onMouseEnter={this.onMouseEnter} onMouseLeave={this.onMouseLeave} />

                <h3 style={
                    { ...this.state.titleStyle, color: this.props.col[1] }
                }
                    className="skill-name">
                    <div>
                        <i class="skill-icon">{this.props.icon}</i></div>
                    <h3 class="skill-title">{this.props.title}</h3></h3>
                <div className="skill-desc"
                    style={
                        { ...this.state.descStyle, color: this.props.col[1] }
                    }>{desc} </div>
            </div>

        );
    }
}

export default SkillBlock;