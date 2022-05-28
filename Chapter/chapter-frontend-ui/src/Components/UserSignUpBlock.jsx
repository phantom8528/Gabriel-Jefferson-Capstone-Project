import React from "react";
import axios from 'axios';
import LandingPageNav from "./LandingPageComponents/LandingPageNav";
import './UserSignUpBlock.css';
import Footer from "./LandingPageComponents/Footer";
// import { response } from "express";
// import e from "express";

class UserSignUpPage extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            first_name: props.initialText || ``,
            last_name: props.initialText || ``,
            gender: props.initialText || ``,
            email: props.initialText || ``,
            theme_color: props.initialText || ``,
            reminder_frequncy: props.initialInt || ``,
            pin_number: props.initialText || ``,
            password: props.initialText || ``
        }
    }

    _handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    _handleSubmit = (event) => {
        event.preventDefault(); //<-- prevents the page from refreshing
        // console.log(event.target)
        // console.log(this.state);
        axios.post('http://127.0.0.1:5000/signup', this.state)
            .then(response => {
                console.log(response)
            })
    }


    render(){
        const {first_name, last_name, gender, email, theme_color, reminder_frequency, pin_number,  password} = this.state;
        return(
            <div>
                <LandingPageNav />
                {/* <h1>Component: UserSignUpPage | Parent Component: none</h1> */}
                {/* Sign-Up Page Using Bootstrap */}
                <div className="sign-up-container">

                    <div className="row-1">

                        <div id="level-3" className="col-10">
                            <form id="sign-up-box" onSubmit={this._handleSubmit}>
                            <h1 id="sign-up-page-title">Sign Up</h1>
                                    <input id="input-row-1" type="text" className="form-control" placeholder="First name" name="first_name" value={first_name} onChange={this._handleChange}/>
                                    <input id="input-row-2" type="text" className="form-control" placeholder="Last name" name="last_name" value={last_name} onChange={this._handleChange}/>
                                    <input id="input-row-3" type="text" className="form-control" placeholder="Gender" name="gender" value={gender} onChange={this._handleChange}/>
                                    <input id="input-row-4" type="email" className="form-control"  placeholder="Email" name="email" value={email} onChange={this._handleChange}/>
                                    <input id="input-row-5" type="text" className="form-control"  placeholder="Theme Color" name="theme_color" value={theme_color} onChange={this._handleChange}/>
                                    <input id="input-row-6" type="text" className="form-control" placeholder="Reminder Frequency" name="reminder_frequency" value={reminder_frequency || ``} onChange={this._handleChange}/>
                                    <input id="input-row-7" type="text" className="form-control" placeholder="Enter 4 Digit Pin" name="pin_number" value={pin_number} onChange={this._handleChange}/>
                                    <input id="input-row-8" type="password" className="form-control" placeholder="Password" name="password" value={password} onChange={this._handleChange}/>
                                <button id="button-row-9" type="submit" className="btn">Sign Up</button>
                            </form> 
                        </div>
                    </div>
                </div>


                {/* <Footer /> */}
                
            </div>
        )
    }
}

export default UserSignUpPage;

