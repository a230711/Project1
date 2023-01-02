import React, { Component } from "react";
import {Routes, Route, Link} from "react-router-dom";
import BtnA, { BtnB } from "../Btn/Btn"

class Navbar extends Component{
    constructor(props){
        super(props)
    }

    // shouldComponentUpdate(){
    //     console.log('shouldComponentUpdate');
    //     console.log(this.sreen());
    //     return true;
    // }

    render(){
        return(
            <div className={this.props.value ? 'Nav' : 'Nav active'}>
            <div className="navWrap">
                <div className="logo">Logo</div>
                <ul>
                    <li><Link to="puchase">Purchase</Link></li>
                    <li><Link to="refinance">Refinance</Link></li>
                    <li><Link to="loantypes">Loan Types</Link></li>
                    <li><Link to="caluclators">Caluclators</Link></li>
                    <li><Link to="info">Info</Link></li>
                    <li><Link to="blog">Blog</Link></li>
                </ul>
                <div className="btn">
                    <BtnA value={'REALTOR PORTAL'}/>
                    <BtnB value={'ARRLY NOW'}/>
                    {/* <p onClick={()=>{}}>REALTOR PORTAL</p> */}
                    {/* <p>ARRLY NOW</p> */}
                </div>
                </div>
            </div>
        )
    }
}

export default Navbar