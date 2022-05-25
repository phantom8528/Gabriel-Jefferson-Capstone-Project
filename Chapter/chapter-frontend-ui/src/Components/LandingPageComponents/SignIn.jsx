import React from "react";

class SignIn extends React.Component{
    render(){
        return(
            <div>
                <h1>Component: SignIn | ParentComponent: LandingPage</h1>

                {/* :::::::::::::::::::::::::::::::::BEFORE BOOTSTRAP:::::::::::::::::::::::::::::::::::::::: */}
                <div className="container">Sign In
                    <form>
                        <label>Email</label>
                        <input type="text" name="email" id="email-field" />

                        <label>Password</label>
                        <input type="password" name="password" id="password-field" />

                        <button type="submit">Sign In</button>
                        
                    </form>

                </div>
                {/* :::::::::::::::::::::::::::::::::AFTER BOOTSTRAP:::::::::::::::::::::::::::::::::::::::: */}

            </div>
        )
    }
}

export default SignIn;