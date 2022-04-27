import React from 'react'
import './updatepolicy.css'

import CancelBtn from '../../assets/cancel.png'

import FileUploader from '../../components/buttons/FileUploader';

function UpdatePolicy({closeModel}) {


  return (
      
    <div className="card-background">

        <div className="updatepolicy-card">

            <div className="card-head"> 
            <h1>Update policy</h1>
            <img src={CancelBtn} alt="" onClick={() => closeModel(false)}/>
            </div>

            <form action="/dashboard">
                <textarea type="text" className="input" placeholder="Policy" />
                <button type="#" className="login-submit" >update</button>
            </form>
        </div>
    </div>
    
  )
  
}

export default UpdatePolicy