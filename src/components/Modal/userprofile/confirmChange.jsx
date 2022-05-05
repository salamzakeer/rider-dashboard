import React, { useState } from 'react'
import successImg from '../../../assets/check.png'
import CancelBtn from '../../../assets/cancel.png'

function ConfirmChange({closeModel}) {
  const [openModel, setOpenModel] = useState(false); 
  return (
    <>
    {!openModel ? <div className="card-background">

 <div className="Addrider-card">

        <div className="card-head"> 
        <h1>Password Changed</h1>
        <img src={CancelBtn} alt="" onClick={() => {closeModel(true); setOpenModel(true)}}/>
        </div>
        <div className="context"><p>Your password has been changed successfully</p></div>
        <div className="success-img">
            <img src={successImg} alt="" />
        </div>


    
    </div>
    </div>:console.log("check true")}
    </>

  )
}

export default ConfirmChange