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
                <h1>Component: UserSignUpPage | Parent Component: none</h1>
                <form onSubmit={this._handleSubmit}>
                    <div>
                        <label>First Name</label>
                        <input type="text" name="first_name" value={first_name} onChange={this._handleChange}></input>
                        {/* <input type="text" name="first_name" value={first_name} /> */}

                    </div>

                    <div>
                        <label>Last Name</label>
                        <input type="text" name="last_name" value={last_name} onChange={this._handleChange}></input>
                        {/* <input type="text" name="last_name" value={last_name} /> */}

                    </div>


                    <div>
                        <label>Gender</label>
                        <input type="text" name="gender" value={gender} onChange={this._handleChange}></input>
                        {/* <input type="text" name="email" value={email} /> */}

                    </div>


                    <div>
                        <label>Email</label>
                        <input type="text" name="email" value={email} onChange={this._handleChange}></input>
                        {/* <input type="text" name="email" value={email} /> */}

                    </div>


                    <div>
                        <label>Account Theme</label>
                        <input type="text" name="theme_color" value={theme_color} onChange={this._handleChange}></input>
                        {/* <input type="text" name="email" value={email} /> */}

                    </div>

                    <div>
                        <label>Frequency</label>
                        <input type="text" name="reminder_frequency" value={reminder_frequency || ``} onChange={this._handleChange}></input>
                        {/* <input type="text" name="email" value={email} /> */}

                    </div>

                    <div>
                        <label>Pin #</label>
                        <input type="text" name="pin_number" value={pin_number} onChange={this._handleChange}></input>
                        {/* <input type="text" name="email" value={email} /> */}

                    </div>

                    <div>
                        <label>Password</label>
                        <input type="text" name="password" value={password} onChange={this._handleChange}></input>
                        {/* <input type="text" name="password" value={password} /> */}

                    </div>
                    <div>
                        <button type="submit">Sign Up</button>
                    </div>
                </form>

                {/* Sign-Up Page Using Bootstrap */}

                <div className="sign-up-container">
                    <div className="row-1">
                        <div className="col-10">
                        <form onSubmit={this._handleSubmit}>

                            <div class="form-row">
                                <div class="col">
                                    <input type="text" class="form-control" placeholder="First name"/>
                                </div>
                                <div class="col">
                                    <input type="text" class="form-control" placeholder="Last name"/>
                                </div>
                            </div>
                            <div class="form-row">
                                <div class="form-group col-md-6">
                                <label for="inputEmail4">Email</label>
                                <input type="email" class="form-control" id="inputEmail4" placeholder="Email"/>
                                </div>
                                <div class="form-group col-md-6">
                                <label for="inputPassword4">Password</label>
                                <input type="password" class="form-control" id="inputPassword4" placeholder="Password"/>
                                </div>
                            </div>
                            <div class="form-group">
                                <label for="inputAddress">Address</label>
                                <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St"/>
                            </div>
                            <div class="form-group">
                                <label for="inputAddress2">Address 2</label>
                                <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor"/>
                            </div>
                            <div class="form-row">
                                <div class="form-group col-md-6">
                                <label for="inputCity">City</label>
                                <input type="text" class="form-control" id="inputCity"/>
                                </div>
                                <div class="form-group col-md-4">
                                <label for="inputState">State</label>
                                <select id="inputState" class="form-control">
                                    <option selected>Choose...</option>
                                    <option>...</option>
                                </select>
                                </div>
                                <div class="form-group col-md-2">
                                    <label for="inputZip">Zip</label>
                                <input type="text" class="form-control" id="inputZip"/>
                                </div>
                            </div>
        
                            <button type="submit" class="btn btn-primary">Sign in</button>
                        </form>

                            
                        </div>
                    </div>
                </div>
                <Footer />
                
            </div>
        )
    }
}

export default UserSignUpPage;

