import React from 'react'
import './AddRider.css'

import CancelBtn from '../../assets/cancel.png'

import FileUploader from '../../components/buttons/FileUploader';

function AddRiderPopup({closeModel}) {


  return (
    <div className="card-background">

        <div className="Addrider-card">

            <div className="card-head"> 
            <h1>Add New Rider</h1>
            <img src={CancelBtn} alt="" onClick={() => closeModel(false)}/>
            </div>

            <form action="/dashboard">
                <input type="text" className="input" placeholder="Name" />
                <input type="text" className="input" placeholder="Email" />
                <input type="password" className="input" placeholder="Password" />
                <input type="password" className="input" placeholder="Confirm Password" />

                <div className="upload-pic">
                    <h2 className="uploadTxt">Rider Profile Picture</h2>
                    
                    
                    <FileUploader placeholder="Upload" type="file" id="upload"/>
                    


                </div>

                <button type="#" className="login-submit" >Add</button>
            </form>
        </div>
    </div>
    
  )
  
}

export default AddRiderPopup