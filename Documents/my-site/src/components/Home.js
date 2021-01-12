import React, { Component } from 'react';
import './Home.css'

const titleStyle ={

    fontFamily: "Nomark",
    lineHeight: "0.5em",
    fontSize: "20vw",
    textAlign: "right",
    position: "relative",
    top: "40%",
    msTransform: "translateY(-40%)",
    transform: "translateY(-40%)"
}

const descStyle ={
    position: "absolute",
    top: "40%",
    msTransform: "translateY(-40%)",
    transform: "translateY(-40%)"
}

const sectionStyle={
    height: "calc(100vh - 62px)",
    cssFloat: "left"
}
class Homepage extends React.Component {
    constructor(props) {
        super(props);

    }


    render() {
        return (
            <div style={{color:this.props.col2[1]}}>
                <span style={{...sectionStyle,backgroundColor: this.props.col1[0] }}>
                    <div className="section">
                        <h1 class="title"
                        style={{...titleStyle, color:this.props.col1[1]}}>Annie</h1>
                        <h1 class="title"
                        style={{...titleStyle, color:this.props.col1[1]}}
                        >Sun</h1>
                    </div>
                </span>

                <span style={{...sectionStyle,backgroundColor: this.props.col2[0] }}>
                    <div className="section">
                        <p class="my-desc">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    </p>
                    </div>
                </span>



            </div>

        );
    }
}

export default Homepage;