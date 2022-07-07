import React, { useState } from "react";
import axios from "../../axios";
// import axios from 'axios';
import "./AddRider.css";
import CloseIcon from "@mui/icons-material/Close";
// import CancelBtn from '../../assets/cancel.png'

import FileUploader from "../buttons/FileUploader";
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

        <div className="frm">dfhoshdfo</div>
      </div>
    </div>
  );
}

export default AddRiderPopup;
