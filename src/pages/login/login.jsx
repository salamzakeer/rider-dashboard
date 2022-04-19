import React from "react";

import "./login.css"


function Login() {
    return (

        <div className="login-card">
            <h1>Login</h1>
            <form action="/dashboard">
                <input type="text" className="input" placeholder="Email" />

                <input type="password" className="input" placeholder="Password" />

                <button type="#" className="login-submit" >Login</button>
            </form>
            <div className="reset">
                <a href="#">Forgot Password?</a>
            </div>


        </div>
    )
}
export default Login