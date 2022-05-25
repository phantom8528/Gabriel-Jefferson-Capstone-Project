import React from "react";

class UserSignUpPage extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            first_name: props.initialText || ``,
            last_name: props.initialText || ``,
            email: props.initialText || ``,
            theme: props.initialText || ``,
            frequency: props.initialText || ``,
            pin: props.initialText || ``,
            password: props.initialText || ``
        }
    }


    render(){
        const {first_name, last_name, email, theme, frequency, pin,  password} = this.state;

        return(
            <div>
                <h1>Component: UserSignUpPage | ParentComponent: n/a</h1>

                <div className="input-container">
                                <h3>Sign Up</h3>
                                    <div className="centered-input">
                                    <input 
                                        type="text"
                                        placeholder="First Name"
                                        name="first_name"
                                        value={first_name}
                                        // onChange={this._handleChange}
                                    />

                                    <input 
                                        type="text"
                                        placeholder="Last Name"
                                        name="last_name"
                                        value={last_name}
                                        // onChange={this._handleChange}
                                    />

                                    <input 
                                        type="text"
                                        placeholder="Enter email"
                                        name="email"
                                        value={email}
                                        // onChange={this._handleChange}
                                    />

                                    <input 
                                        type="integer"
                                        placeholder="theme"
                                        name="theme"
                                        value={theme}
                                        // onChange={this._handleChange}
                                    />

                                    <input 
                                        type="text"
                                        placeholder="Number of Reminders per Day"
                                        name="frequency"
                                        value={frequency}
                                        // onChange={this._handleChange}
                                    />

                                    <input 
                                        type="integer"
                                        placeholder="4 Digit Pin#"
                                        name="pin"
                                        value={pin}
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
                                        Sign up
                                    </button>
                                    </div>

                                </div>
                            </div>

            </div>
        )
    }
}

export default UserSignUpPage;