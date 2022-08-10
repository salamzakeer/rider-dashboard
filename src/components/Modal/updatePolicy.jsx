import React, { useState } from 'react'
import './updatepolicy.css'
import CloseIcon from '@mui/icons-material/Close';

import ChangePassword from '../../components/Modal/userprofile/changePassword';

// import CancelBtn from '../../assets/cancel.png'

// import FileUploader from '../../components/buttons/FileUploader';

function UpdatePolicy({ closeModel }) {
  const [openModel, setOpenModel] = useState(false);

  const handleOnClick = async () => {

    await closeModel(false);
    setOpenModel(true);
  }

  return (

    <div className="card-background">

      <div className="updatepolicy-card">

        <div className="card-head">
          <h1>Update policy</h1>
          <div className="icon-div" onClick={() => closeModel(false)}  >
            <CloseIcon style={{ color: "#501ABF" }} />
          </div>
        </div>

        <div className="form-card">
          <textarea type="text" className="input" placeholder="Policy" />
          <button type="#" className="login-submit" onClick={handleOnClick}>update</button>
        </div>
      </div>
      {openModel ? <ChangePassword closeModel={setOpenModel} /> : console.log("pressed")}
    </div>

  )

}

export default UpdatePolicy