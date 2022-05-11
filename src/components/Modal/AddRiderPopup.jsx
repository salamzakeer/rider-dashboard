import React, { useState } from 'react';
import axios from 'axios';
import './AddRider.css'

import CancelBtn from '../../assets/cancel.png'

import FileUploader from '../../components/buttons/FileUploader';

function AddRiderPopup({ closeModel }) {

    const [fullName, setFullName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleName = (e) => {
        setFullName(e.target.value)
    }
    const handleEmail = (e) => {
        setEmail(e.target.value)
    }
    const handlePassword = (e) => {
        setPassword(e.target.value)
    }

    const handleApi = () => {
        console.log({ fullName, email, password })
        const json = {
            fullName: fullName,
            email: email,
            password: password

        };
        axios.post('https://dcaapi.moodfor.codes/rider/register', json)
            .then(result => {
                // console.log(result)
                // if(result.errorMessage == false){
                console.log(result)
                alert("success")
                window.location = "/dashboard"
                // }else{
                //     console.log("logged error")
                // }


            })
            .catch(error => {
                console.log(error)
                alert("fail")
                // console.log("not ok")
            })


    }

    return (
        <div className="card-background">

            <div className="Addrider-card">

                <div className="card-head">
                    <h1>Add New Rider</h1>
                    <img src={CancelBtn} alt="" onClick={() => closeModel(false)} />
                </div>

                <div className="frm">
                    <input type="text" className="input" placeholder="Name" value={fullName} onChange={handleName} />
                    <input type="text" className="input" placeholder="Email" value={email} onChange={handleEmail} />
                    <input type="password" className="input" placeholder="Password" />
                    <input type="password" className="input" placeholder="Confirm Password" value={password} onChange={handlePassword} />

                    <div className="upload-pic">
                        <h2 className="uploadTxt">Rider Profile Picture</h2>


                        <FileUploader placeholder="Upload" type="file" id="upload" className="uploadbtn" />



                    </div>

                    <button className="login-submit" onClick={handleApi}>Add</button>
                </div>
            </div>
        </div>

    )

}

export default AddRiderPopup