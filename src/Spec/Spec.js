import React, {Component} from 'react';
import About from '.././About/About'

export default class Spec extends Component{
    constructor(){
        super()
    }

    render(){
        return(
            <div className='spec'>
                <h1>Our Specialties</h1>
                <div className='speccontent'>
                    <div className='sepectitle'>
                        <div className='spec-tt'>
                            <div className='icon'>

                            </div>
                            <div>
                                <h2>Unmatched Customer Service</h2>
                                <p>We take pride in our customers, and quality customer service is our upmost highest priority. Our staff is available at all times to help you with any questions or concerns you may have.</p>
                            </div>
                        </div>
                        <div className='spec-tt'>
                            <div className='icon'>

                            </div>
                            <div>
                                <h2>Exceptional Loans and Mortgages</h2>
                                <p>We work with multiple lenders, allowing us to provide our clients with extremely competitive pricing. When you work with us, we do all of your comparison shopping for you and keep you notified along the way. Rest easy knowing you are getting the best rate available.</p>
                            </div>
                        </div>
                        <div className='spec-tt'>
                            <div className='icon'>

                            </div>
                            <div>
                                <h2>Clients Come First</h2>
                                <p>Our clients come first every step of the way. Our staff is always available to answer any questions or concerns throughout the entire mortgage process.</p>
                            </div>
                        </div>
                    </div>
                    <div className='sepecimage'>

                    </div>
                </div>
            </div>
        )
    }
}