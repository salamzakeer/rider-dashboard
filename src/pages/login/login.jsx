import React from "react";

import "./login.css"
// import Button from '@mui/material/Button';

function Login() {
    return (

        <div className="login-card">
            {/* <Button variant="text">Text</Button>
            <Button variant="contained">Contained</Button>
            <Button variant="outlined">Outlined</Button> */}
            <h1>Login</h1>
            <form action="/maindashboard">
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