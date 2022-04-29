import React, { useState } from 'react'
import CancelBtn from '../../../assets/cancel.png'

import SuccessPassword from './confirmChange';

import "./changepassword.css"

function ChangePassword({closeModel}) {
    const [openModelSuccess, setOpenModelSuccess] = useState(false);
  return (
    <>
    {!openModelSuccess ? <div className="card-background">

        <div className="Addrider-card">

            <div className="card-head"> 
            <h1>Change Password</h1>
            <img src={CancelBtn} alt="" onClick={() => closeModel(false)}/>
            </div>

            <div className="form-card-new">
                <input type="text" className="input" placeholder="Current Password" />
                <input type="text" className="input" placeholder="New Password" />
                <input type="password" className="input" placeholder="Confirm New Password" />


                <button type="#" className="login-submit" onClick={() => {
                      setOpenModelSuccess(true)}}  >Confirm</button>
            </div>
        </div>
     
        
    </div>
    :<SuccessPassword closeModel={closeModel} />}
    </>
    
  )
}

export default ChangePassword