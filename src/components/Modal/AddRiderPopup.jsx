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
  const [NRIC, setNRIC] = useState("");
  const [Position, setPosition] = useState("");
  const [Status, setStatus] = useState("");
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

    data.append("NRIC", NRIC);
    data.append("position", Position);
    data.append("status", Status);

    const json = {
      fullName: fullName,
      email: email,
      password: password,
      adminId: AdminId,
      NRIC: NRIC,
      Position: Position,
      Status: Status,
    };
    console.log(json, "json");
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
  }
  const handlePositionChanges = (e) => {
    const { value } = e.target;
    setPosition(value);
  };
  const handleStatusChanges = (e) => {
    const { value } = e.target;
    setStatus(value);
  };

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
            type="text"
            className="input"
            placeholder="NRIC"
            value={NRIC}
            onChange={(e) => setNRIC(e.target.value)}
          />
          <div className={"select1"}>
            {/* <label className={classes.label}>{"Type"}</label> */}
            <select
              class="form-select"
              aria-label="Default select example"
              name=""
              onChange={handlePositionChanges}
              required="required"
              style={{ marginTop: "1rem" }}
            >
              <option name="" value="" selected>
                Position
              </option>
              <option name="Field Rider" value="Field Rider">
                Field Rider
              </option>
              <option name="Telecaller" value="Telecaller">
                Telecaller
              </option>
              <option name="Administration" value="Administration">
                Administration
              </option>
            </select>
          </div>
          <div className={"select1"}>
            <select
              class="form-select"
              aria-label="Default select example"
              name=""
              onChange={handleStatusChanges}
              required="required"
              style={{ marginTop: "1rem" }}
            >
              <option name="" value="" selected>
                Status
              </option>
              <option name="Active" value="Active">
                Active
              </option>
              <option name="Inactive" value="Inactive">
                Inactive
              </option>
            </select>
          </div>
         
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
