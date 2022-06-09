
import React, { useState } from 'react';
import axios from '../../axios';
import "./login.css"
import { Link } from 'react-router-dom';
import { useToasts } from 'react-toast-notifications';

function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    // add toster hook
    const { addToast } = useToasts();

    //save user in local
    const saveTokenLocalStorage = (tokenDetails) => {
        localStorage.setItem('userInfor', JSON.stringify(tokenDetails))
        localStorage.setItem('auth', JSON.stringify(tokenDetails))
    }

    //====================
    console.log({ email, password })
    const handleEmail = (e) => {
        setEmail(e.target.value)

    }
    const handlePassword = (e) => {
        setPassword(e.target.value)
    }
    const handleApi = () => {
        console.log({ email, password })
        const json = {
            email: email,
            password: password

        };
        axios.post('admin/login', json)
            .then(result => {
                saveTokenLocalStorage(result.data);
                addToast("Successfully Login", { appearance: 'success', autoDismiss: "true", autoDismissTimeout: 2000 });
                // console.log(result)
                window.location = "/dashboard"


            })
            .catch(error => {
                // console.log(error)
                addToast("username or password is incorrcet", { appearance: 'error', autoDismiss: "true", autoDismissTimeout: 2000 });
                // console.log("not ok")
            })


    }

    return (

        <div className="login-card">
            <h1>Login</h1>
            <div className="frm">
                <input type="text" className="input" placeholder="Email" value={email} onChange={handleEmail} />

                <input type="password" className="input" placeholder="Password" value={password} onChange={handlePassword} />

                <button className="login-submit" onClick={handleApi} >Login</button>
            </div>
            <div className="reset">
                <Link to="" >
                    Forgot Password?
                </Link>
            </div>


        </div>
    )

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
export default Login