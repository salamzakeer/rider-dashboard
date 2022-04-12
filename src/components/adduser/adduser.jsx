import React from 'react'
import "./adduser.css"

function adduser(props) {
  return props.trigger ? (
    <div className="login-card">
    <h1>Login</h1>
    <form action="/maindashboard">
        <input type="text" className="input" placeholder="Email" />

        <input type="password" className="input" placeholder="Password" />

        <button type="#" className="login-submit" >Login</button>
        {props.childern}
    </form>


</div>
  ) : "";
}

export default adduser();