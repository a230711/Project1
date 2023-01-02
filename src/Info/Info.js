import React, {Component} from "react";
import BtnA, { BtnB } from "../Btn/Btn"

export default class Info extends Component{
    constructor(){
        super()
    }
    render(){
        return(
            <div className="info">
                <div className="infoimage">
                    {/* <img src='happy.jpg' /> */}dd
                </div>
                <div className="infocontext">
                    <h1>Financial Security Starts at Home</h1>
                    <p>We are here to help you every step of the way.</p>
                    <p>From initial conversations to closing, we are committed to providing you a painless mortgage experience. We provide local, in-house processing and underwriting on every individual loan with the highest level of personal service. Rest easy knowing Animas Mountain Mortgage is working to ensure you obtain the best loan possible for each unique situation.</p>
                    <div className="btn">
                        <BtnA value={'GET PRE-QUALIFIED!'}/>
                        <BtnB value={'CALL US! 970-828-1610'}/>
                    </div>
                </div>
            </div>
        )
    }
}