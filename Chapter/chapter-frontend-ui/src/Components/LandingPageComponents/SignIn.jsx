import React from "react";

class SignInPage extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            email: props.initialText || ``,
            password: props.initialText || ``
        }
    }


    render(){
        const {email, password} = this.state;

        return(
            <div>
                <h1>Component: UserSignUpPage | ParentComponent: n/a</h1>

                <div className="input-container">
                                <h3>Sign In</h3>
                                    <div className="centered-input">
          


                                    <input 
                                        type="text"
                                        placeholder="Enter email"
                                        name="email"
                                        value={email}
                                        // onChange={this._handleChange}
                                    />
                                    
                                    <input
                                        type="password"
                                        placeholder="Password"
                                        name="password"
                                        value={password}
                                        // onChange={this._handleChange}
                                    />

                                    
                                    <div className="centered-btn">

                                    <button className="btn" type="submit">
                                        Sign In
                                    </button>
                                    </div>

                                </div>
                            </div>

            </div>
        )
    }
}

export default SignInPage;