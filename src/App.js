import React, { Component } from "react";
import {BrowserRouter} from "react-router-dom";
import './App.scss';
import NavBar from './Navbar/Navbar';
import About from './About/About';
import Info from './Info/Info';
import Spec from "./Spec/Spec";
import image1 from './Images/21.svg';
import image2 from './Images/22.svg';
import image3 from './Images/23.svg';

export default class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      view : true,
      about : [
        {image : image1,title : "Purchase", text : "In the market for a new home? Let us know the details so we can best help you with your financing options."},
        {image : image2,title : "Refinance", text : "We would love to help you refinance but want to make sure it’s best for you! Let’s talk details."},
        {image : image3,title : "Refinance Cash Out", text : "Let’s strategize together to make sure you’re accomplishing all of your goals in one fell swoop."},
      ] 
    }
  }

  
  navbarcolor(){
    if(window.scrollY > 10){
      this.setState({
        view:false
      })
    }
    if(window.scrollY < 10){
      this.setState({
        view:true
      })
    }
    
  }

  componentDidMount(){
    window.addEventListener('scroll', ()=>this.navbarcolor());
  }

  render(){
    const about = this.state.about;
    // console.log(about);
    return (
      <div className="App">
        <BrowserRouter>
          <NavBar value={this.state.view}/>
        </BrowserRouter>
        <div className="index">
          <h1>Let's Talk Mortgages</h1>
        </div>
        <div className="about">
          {/* {about.map((value, index)=>{
            <About title={value.title} image={value.image} key={index}>
              {value.text}
            </About>
          })} */}
          <About title={about[0].title} image={about[0].image}>
            {about[0].text}
          </About>
          <About title={about[1].title} image={about[1].image}>
            {about[1].text}
          </About>
          <About title={about[2].title} image={about[2].image}>
            {about[2].text}
          </About>
        </div>
        <Info />
        <Spec/>
      </div>
    );
  }
  
}

