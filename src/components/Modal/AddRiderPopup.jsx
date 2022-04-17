import React from 'react'
import './AddRider.css'
import CancelBtn from '../../assets/cancel.png'

function AddRiderPopup({closeModel}) {



  return (
    <div className="card-background">
        {/* <div className="add-new-rider-card">
            <div className="head">
                This is a sample
                <button onClick={() => closeModel(false)}>X</button>
            </div>
            <div className="context">
                lorem ipsom dong leee bonglee
            </div>
            <div className="footer">
                <button>submit</button>
            </div>
        </div> */}
        <div className="Addrider-card">

            <div className="card-head"> 
            <h1>Add New Rider</h1>
            <img src={CancelBtn} alt="" onClick={() => closeModel(false)}/>
            </div>

            <form action="/maindashboard">
                <input type="text" className="input" placeholder="Name" />
                <input type="text" className="input" placeholder="Email" />
                <input type="password" className="input" placeholder="Password" />
                <input type="password" className="input" placeholder="Confirm Password" />

                <button type="#" className="login-submit" >Add</button>
            </form>
        </div>
    </div>
  )
}

export default AddRiderPopup