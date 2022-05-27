import React from "react";
import axios from 'axios';
import './SignIn.css'

class SignIn extends React.Component{

    // 1. This will hold all of out login data (i.e. email, passwords)
    constructor(props){
        super(props);
        this.state = {
            email: props.initialText || ``,
            password: props.initialText || ``,
            loginStatus: ``
        }
    }

    _handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    _handleLogin = (event) => {
        event.preventDefault(); //<-- prevents the page from refreshing
        // console.log(event.target)
        // console.log(this.state);
        axios.post('http://127.0.0.1:5000/', this.state)
            .then(response => {
                console.log(response)
                if(response.data.message){
                    this.setState({loginStatus: response.data.message})
                    console.log(response.data.message)
                }
            })

    }

    render(){
        const {email, password, loginStatus} = this.state;
        return(
            <div className="sign-in-container">
                <div className="sign-in-block">
                <h1 id="sign-in-label">Sign-In Here</h1>
                {/* Bootstrap Version of Sign-In Component Below */}
                <form onSubmit={this._handleLogin}>
                <div className="form-group row" id="sign-in-email">
                    {/* <label for="inputEmail3" class="col-sm-2 col-form-label">Email</label> */}
                    <div className="col-sm-10">
                        <input type="email" className="form-control" id="inputEmail3" placeholder="Email" name="email" value={email} onChange={this._handleChange}/>
                    </div>
                </div>
                <div className="form-group row" id="sign-in-password">
                    {/* <label for="inputPassword3" class="col-sm-2 col-form-label">Password</label> */}
                        <div className="col-sm-10">
                            <input type="password" className="form-control" id="inputPassword3" placeholder="Password" name="password" value={password} onChange={this._handleChange}/>
                        </div>
                </div>
                    <div className="form-group row" id="sign-in-button">
                        <div className="col-sm-10">
                            <button type="submit" className="btn" id="sign-in-button-color">Sign in</button>
                        </div>
                    </div>
                </form>

                </div>

            </div>
        )
    }
}

export default SignIn;



