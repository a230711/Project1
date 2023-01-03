import React, { Component } from "react";
import {Routes, Route, Link, NavLink} from "react-router-dom";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { fab } from "@fortawesome/free-brands-svg-icons";
// import { fas } from "@fortawesome/free-solid-svg-icons";
import BtnA, { BtnB } from "../Btn/Btn"

class Navbar extends Component{
    constructor(props){
        super(props)
        this.state = {
            navlink : false,
        }
    }

    handlink(){
        this.setState({navlink : true})
    }

    // shouldComponentUpdate(){
    //     console.log('shouldComponentUpdate');
    //     console.log(this.sreen());
    //     return true;
    // }

    render(){
        console.log(this.state.navlink);
        return(
            <div className={this.props.value ? 'Nav' : 'Nav active'}>
            <div className="navWrap">
                <div className="logo">Logo</div>
                <ul>
                    <li><Link to="puchase">Purchase</Link></li>
                    <li><Link to="refinance">Refinance</Link></li>
                    <li><Link to="loantypes">Loan Types</Link><i class="fa-solid fa-chevron-down"></i></li>
                    <li><Link to="caluclators">Caluclators</Link><i class="fa-solid fa-chevron-down"></i></li>
                    <li><Link to="info">Info</Link><i class="fa-solid fa-chevron-down"></i></li>
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