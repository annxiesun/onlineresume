import React, { Component } from 'react';
import css from './SkillBlock.css'

const regularTitleStyle = {
    position:"relative",
    transform:"translateY(200%)",
    transition: "0.5s",
    fontSize:"1em"
   
}

const hoverTitleStyle = {
    position:"relative",
    transform:"translateY(0)",
    transition: "0.5s",
    fontSize:"1em",
}

const regularDescStyle = {
    opacity:"0",
    top:"10%",
}

const hoverDescStyle = {
    position:"relative",
    top:"10%",
    opacity:"1",
    transition: "0.5s",
    
}

const regularBlockStyle ={
    boxShadow: "0px 0px",
    width:"250px",
    height:"400px",
    border: "2px solid",
    transition: "0.5s",
    margin:"1em",


}

const hoverBlockStyle ={
    boxShadow: "5px 5px",
    width:"250px",
    height:"400px",
    border: "2px solid",
    transform: "translate(-2%, -2%)",
    transition: "2s",
    margin:"1em",

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
            descStyle : hoverDescStyle,
            titleStyle: hoverTitleStyle
          })
        
    }


    onMouseLeave() {

        this.setState(
            {
            blockStyle: regularBlockStyle,
            descStyle : regularDescStyle,
            titleStyle : regularTitleStyle
        }
        );
        
    }

    render() {

        return (

           
            <div className="skill-block" 
            style={{...this.state.blockStyle, backgroundColor: this.props.col[0],
            borderColor:this.props.col[1], color:this.props.col[1]}} >

<div style={{width:"250px",height:"400px", position:"absolute"}}
onMouseEnter={this.onMouseEnter} onMouseLeave={this.onMouseLeave}/>
                <h3 style={
                        {...this.state.titleStyle, color:this.props.col[1]}
                    }
                className="skill-name">{this.props.title}</h3>
                <p className="skill-desc"
                    style={
                     {...this.state.descStyle,  color:this.props.col[1]}
                    }>{this.props.desc} </p>
            </div>

        );
    }
}

export default SkillBlock;