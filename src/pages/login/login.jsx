import React, { useState } from "react";
import axios from "../../axios";
import "./login.css";
import { Link } from "react-router-dom";
import { useToasts } from "react-toast-notifications";
import { CircularProgress } from "@mui/material";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [Disabled, setDisabled] = useState(false);
  // add toster hook
  const { addToast } = useToasts();

  //save user in local
  const saveTokenLocalStorage = (tokenDetails) => {
    localStorage.setItem("userInfor", JSON.stringify(tokenDetails));
    localStorage.setItem("auth", JSON.stringify(tokenDetails));
  };

  //====================
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  const handleApi = (e) => {
    setDisabled(true);
    e.preventDefault();

    const json = {
      email: email,
      password: password,
    };
    axios
      .post("admin/login", json)
      .then((result) => {
        saveTokenLocalStorage(result.data);
        addToast("Successfully Login", {
          appearance: "success",
          autoDismiss: "true",
          autoDismissTimeout: 2000,
        });
        window.location = "/dashboard";
      })
      .catch((error) => {
        addToast("username or password is incorrcet", {
          appearance: "error",
          autoDismiss: "true",
          autoDismissTimeout: 2000,
        });
        setDisabled(false);

        // setEmail("");
        // setPassword("");
      });
  };

  return (
    <div className="login-card">
      <h1>Login</h1>
      <form onSubmit={handleApi} className="frm">
        <input
          type="email"
          className="input"
          placeholder="Email"
          value={email}
          onChange={handleEmail}
          required
        />
        <input
          type="password"
          className="input"
          placeholder="Password"
          value={password}
          onChange={handlePassword}
          required
        />
        <button className="login-submit" type="submit" disabled={Disabled}>
          {Disabled ? (
            <CircularProgress className="login-submit-loader" />
          ) : (
            "Login"
          )}
        </button>
      </form>
      <div className="reset">
        <Link to="" className="reset-a">
          Forgot Password?
        </Link>
      </div>
    </div>
  );
}
// const useFormInput = initialValue => {
//     const [value, setValue] = useState(initialValue);

//     const handleChange = e => {
//       setValue(e.target.value);
//     }
//     return {
//       value,
//       onChange: handleChange
//     }
//   }
export default Login;
