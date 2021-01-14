import React, { Component } from 'react';
import './Home.css'

const titleStyle = {

    fontFamily: "Nomark",
    lineHeight: "0.5em",
    fontSize: "20vw",
    textAlign: "right",
    position: "relative",
    top: "40%",
    msTransform: "translateY(-40%)",
    transform: "translateY(-40%)"
}

const descStyle = {
    position: "absolute",
    top: "40%",
    msTransform: "translateY(-40%)",
    transform: "translateY(-40%)"
}

const sectionStyle = {
    height: "calc(100%)",
    cssFloat: "left",
}
class Homepage extends React.Component {
    constructor(props) {
        super(props);

    }


    render() {

        let slide  = (this.props.col2[0]=="#191D34") ? "0%" : "100%"

        return (

            <div className="page" style={{ color: this.props.col1[1] }}>
<div className="home-slide"

style={{transform: "translateX("+slide+")"}}
></div>

<div className="home-slide2"

style={{transform: "translateY("+slide+")"}}
></div>
        
                <span style={{ ...sectionStyle, backgroundColor:"none" }}>
                    <div className="section">
                        <h1 class="title"
                            style={{ ...titleStyle,color: this.props.col2[1] }}>Annie</h1>
                        <h1 class="title"
                            style={{ ...titleStyle, color: this.props.col2[1] }}
                        >Sun</h1>
                    </div>
                </span>

                <span style={{ ...sectionStyle, backgroundColor: this.props.col1[0] }}>
                    <div className="section">
                        <div className="my-desc">
                            <b>Computer Science Student at the University of Waterloo</b>
                            <p>The purpose of this site is to showcase my passion for
                                design & bringing it alive through code!
                            </p>
                            <p>
                            </p>


                        </div>
                    </div>
                </span>



            </div>

        );
    }
}

export default Homepage;