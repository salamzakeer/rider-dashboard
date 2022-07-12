import React, { useState } from "react";
import axios from "../../axios";
// import axios from 'axios';
import "./AddRider.css";
import CloseIcon from "@mui/icons-material/Close";
// import CancelBtn from '../../assets/cancel.png'

import FileUploader from "../../components/buttons/FileUploader";
import { useToasts } from "react-toast-notifications";

function AddRiderPopup({ closeModel }) {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [CPassword, setCPassword] = useState("");
  const [CPasswordTouch, setCPasswordTouch] = useState(false);
  const [password, setPassword] = useState("");
  const [UserPic, setUserPic] = useState("");
  const { addToast } = useToasts();

  const handleName = (e) => {
    setFullName(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  const handleCPassword = (e) => {
    setCPasswordTouch(true);
    setCPassword(e.target.value);
  };

  const handleApi = () => {
    console.log({ fullName, email, password });
    const AdminId = JSON.parse(localStorage.getItem("auth")).message.id || "";
    const data = new FormData();
    data.append("fullName", fullName);
    data.append("email", email);
    data.append("password", password);
    data.append("adminId", AdminId);
    data.append("image", UserPic);

    const json = {
      fullName: fullName,
      email: email,
      password: password,
      adminId: AdminId,
    };
    axios
      .post("/rider/register", data)
      .then((result) => {
        // console.log(result)
        // if(result.errorMessage == false){
        console.log(result);
        addToast("Successfully Login", {
          appearance: "success",
          autoDismiss: "true",
          autoDismissTimeout: 2000,
        });
        // closeModel(false)
        window.location.reload(false);

        // window.location = "/dashboard"
        // }else{
        //     console.log("logged error")
        // }
      })
      .catch((error) => {
        console.log(error);
        addToast("username or password is incorrcet", {
          appearance: "error",
          autoDismiss: "true",
          autoDismissTimeout: 2000,
        });
        // console.log("not ok")
      });
  };

  function handleUpload(event) {
    setUserPic(event.target.files[0]);

    // Add code here to upload file to server
    // ...
  }

  return (
    <div className="card-background">
      <div className="Addrider-card">
        <div className="card-head" style={{ display: "block" }}>
          {/* <i class="fa fa-times" aria-hidden="true"></i> */}
          <div class="icon-div" onClick={() => closeModel(false)}>
            <CloseIcon style={{ color: "#501ABF" }} />
          </div>
          <h1>Add New Rider</h1>
          {/* 0  0 0 auto */}
        </div>

        <div className="frm">
          <input
            type="text"
            className="input"
            placeholder="Name"
            value={fullName}
            onChange={handleName}
          />
          <input
            type="text"
            className="input"
            placeholder="Email"
            value={email}
            onChange={handleEmail}
          />
          <input
            type="password"
            className="input"
            placeholder="Password"
            value={password}
            onChange={handlePassword}
          />
          <input
            type="password"
            className="input"
            placeholder="Confirm Password"
            value={CPassword}
            onChange={handleCPassword}
          />
          {password !== CPassword && CPasswordTouch && (
            <p
              style={{
                textAlign: "start",
                paddingLeft: "44px",
                paddingTop: "6px",
                color: "red",
                opacity: 0.7,
              }}
            >
              You are entering the wrong password
            </p>
          )}

          <div className="upload-pic">
            <h2 className="uploadTxt">Rider Profile Picture</h2>
            <FileUploader
              onChange={handleUpload}
              placeholder={UserPic.name || "Upload"}
              type="file"
              id="upload"
              className="uploadbtn"
            />
          </div>

          <button className="login-submit" onClick={handleApi}>
            ADD
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddRiderPopup;
