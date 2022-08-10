import React, { useState } from "react";
import axios from "../../axios";
// import axios from 'axios';
import "./AddRider.css";
import CloseIcon from "@mui/icons-material/Close";
// import CancelBtn from '../../assets/cancel.png'

import FileUploader from "../../components/buttons/FileUploader";
import { useToasts } from "react-toast-notifications";

function AddRiderPopup({ closeModel, edit, editId }) {
  console.log(editId, "editId");
  const [fullName, setFullName] = useState(editId ? editId.fullName : "");
  const [email, setEmail] = useState(editId ? editId.email : "");
  const [CPassword, setCPassword] = useState("");
  const [CPasswordTouch, setCPasswordTouch] = useState(false);
  const [password, setPassword] = useState("");
  const [UserPic, setUserPic] = useState("");
  const [NRIC, setNRIC] = useState(editId ? editId.NRIC : "");
  const [Position, setPosition] = useState(editId ? editId.position : "");
  const [Status, setStatus] = useState(editId ? editId.status : "");
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
  const handleUpdateApi = () => {
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
      adminId: AdminId,
      NRIC: NRIC,
      Position: Position,
      Status: Status,
    };
    console.log(json, "json");
    axios
      .put("/rider/" + editId.id, json)
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
        // window.location.reload(false);

        // window.location = "/dashboard"
        // }else{
        //     console.log("logged error")
        // }
      })
      .catch((error) => {
        console.log(error);
        addToast("Username Already Fxists", {
          appearance: "error",
          autoDismiss: "true",
          autoDismissTimeout: 2000,
        });
        // console.log("not ok")
      });
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
      position: Position,
      status: Status,
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
          {/* <i className="fa fa-times" aria-hidden="true"></i> */}
          <div className="icon-div" onClick={() => closeModel(false)}>
            <CloseIcon style={{ color: "#501ABF" }} />
          </div>
          <h1>Add New Rider</h1>
          {/* 0  0 0 auto */}
        </div>

        <div className="frm">
          <input
            autocomplete="chrome-off"
            type="text"
            className="input"
            placeholder="Name"
            value={fullName}
            onChange={handleName}
          />
          <input
            autocomplete="chrome-off"
            type="email"
            className="input"
            placeholder="Email"
            value={email}
            onChange={handleEmail}
            name="email"
          />
          <input
            autocomplete="chrome-off"
            type="text"
            className="input"
            placeholder="NRIC"
            value={NRIC}
            onChange={(e) => setNRIC(e.target.value)}
            name="nic"
            // style={{ WebkitTextSecurity: "disc" }}
          />
          <div className={"select1"}>
            {/* <label className={classes.label}>{"Type"}</label> */}
            <select
              className="form-select"
              aria-label="Default select example"
              name=""
              onChange={handlePositionChanges}
              required="required"
              style={{ marginTop: "1rem" }}
            >
              <option name="" value="" selected>
                {editId ? Position : "Position"}
              </option>
              <option name="Director" value="Director">
                Director
              </option>
              <option name="CEO/COO" value="CEO/COO">
                CEO/COO
              </option>
              <option name="Manager" value="Manager">
                Manager
              </option>
              <option name="Call Center Staff" value="Call Center Staff">
                Call Center Staff
              </option>
              <option name="Admin" value="Admin">
                Admin
              </option>
              <option name="Field Visit Staff" value="Field Visit Staff">
                Field Visit Staff
              </option>
            </select>
          </div>
          <div className={"select1"}>
            <select
              className="form-select"
              aria-label="Default select example"
              name=""
              onChange={handleStatusChanges}
              required="required"
              style={{ marginTop: "1rem" }}
            >
              <option name="" value="" selected>
                {editId ? Status : "Status"}
              </option>
              <option name="Active" value="Active">
                Active
              </option>
              <option name="Inactive" value="Inactive">
                Inactive
              </option>
            </select>
          </div>
          {!edit && (
            <>
              <input
                autocomplete="chrome-off"
                type="password"
                className="input"
                placeholder="Password"
                value={password}
                onChange={handlePassword}
              />
              <input
                autocomplete="chrome-off"
                type="password"
                className="input"
                placeholder="Confirm Password"
                value={CPassword}
                onChange={handleCPassword}
              />
            </>
          )}
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
          {!edit && (
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
          )}
          {!edit && (
            <button className="login-submit" onClick={handleApi}>
              ADD
            </button>
          )}
          {edit && (
            <button className="login-submit" onClick={handleUpdateApi}>
              Update
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default AddRiderPopup;
