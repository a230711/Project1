import { Component } from "react";

class BtnA extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div className="btnA">
                {this.props.value}
            </div>
        )
    }
}
export class BtnB extends Component{
    constructor(){
        super()
    }

    render(){
        return(
            <div className="btnB">
                {this.props.value}
            </div>
        )
    }
}

// export BtnB
export default BtnA