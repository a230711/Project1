import React, { Component } from "react";
// import image1 from '../Images/21.svg'

export default class About extends Component{
    constructor(){
        super()
    }
    render(){
        return(
            <div className="about-item">
                <div className="about-icon">
                    <img src={this.props.image} alt="" />
                </div>
                <div className="about-context">
                    <h3>{this.props.title}</h3>
                    <p>{this.props.children}</p>
                    <a href="#">LEARN COST ANALYSIS</a>
                </div>
            </div>
        )
    }
}