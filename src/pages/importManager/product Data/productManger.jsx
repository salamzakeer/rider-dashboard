import React, { useEffect, useState } from "react";
import "react-toastify/dist/ReactToastify.css"; // import first
import makeAnimated from "react-select/animated";
import MySelect from "../../../components/select/select";
import { components } from "react-select";
import { useToasts } from "react-toast-notifications";
import Datapicker from "../../../components/customCore/datapicker";
import UploadIcon from "../../../assets/upload.png";
import axios from "../../../axios";
// import "./importManger.css";
import Layout from "../../../components/layout/Navbar";
import moment from "moment";
import { makeStyles } from "@material-ui/core";
import { CircularProgress } from "@mui/material";
import { categoryType, categoryTypeAll } from "../../../api/detailsApi";

import BasicSelect from "../../../components/customCore/select";
import BasicSelect2 from "../../../components/customCore/jobNameDroupDown";
const Option = (props) => {
  return (
    <div>
      <components.Option {...props}>
        <input
          type="checkbox"
          checked={props.isSelected}
          onChange={() => null}
        />
        <label>{props.label}</label>
      </components.Option>
    </div>
  );
};

const MultiValue = (props) => (
  <components.MultiValue {...props}>
    <span>{props.data.label}</span>
  </components.MultiValue>
);
const animatedComponents = makeAnimated();
const useStyles = makeStyles((theme) => ({
  alert: {
    display: "flex",
    color: "rgb(30, 70, 32)",
    background: "rgb(237, 247, 237)",
    maxWidth: "400px",
    width: "100%",
    padding: " 10px 24px 0px 24px",
    flexDirection: "column",
    borderRadius: "10px",
    // opacity: "0.9",
  },
  Progress: {
    // margin: "9px",
    width: "24px !important",
    height: "24px !important",
  },
  formMain: {
    display: "flex",
    justifyContent: "space-between",
    maxWidth: "750px",
    paddingLeft: "50px",
    // backgroundColor: "red",
    [theme.breakpoints.down("md")]: {
      // backgroundColor: "green",
      flexDirection: "column",
    },
  },
  label: {
    paddingLeft: "22px",
    fontSize: "16px",
    color: "#00000A",
    opacity: "0.6",
    fontWeight: 600,
    paddingBottom: "4px",

    [theme.breakpoints.down("lg")]: {
      fontSize: "14px !important",
    },
  },
  lnds: {
    // display: "flex"
    maxWidth: "750px",
    minWidth: "350px",
    [theme.breakpoints.down("md")]: {
      // backgroundColor: "red",
      maxWidth: "1500px",
      minWidth: "250px",
      // background: "red",
    },
  },
  btn: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "16px !important",
    fontWeight: "500 !important",
    width: "200px  !important",
    margin: "auto",
    "&:hover": {
      color: "#501abf !important",
      fontWeight: "600 !important",

      "& svg": {
        color: "#501abf !important",
      },
      background: "#fff !important",
    },
    "& svg": {
      color: "#fff !important",
    },
    border: "2px solid #501abf !important",
  },
  formMainDiv: {
    width: "350px",
    [theme.breakpoints.down("md")]: {
      width: "auto !important",
    },
  },
  MySelectDiv: {
    justifyContent: "space-between",
    maxWidth: "750px",
    with: "100%",
    paddingLeft: "50px",
  },
  select1: {
    // width: "100%",
    margin: "12px",
    marginTop: "2px",
  },
  // formMainDiv: {

  // },
}));
function Dashboard() {
  const { addToast } = useToasts();
  const classes = useStyles();

  //upload file
  const [file, setFile] = React.useState("");
  const [PFile, setPFile] = React.useState("");
  const [Response, setResponse] = React.useState(false);

  const [optionSelected, setOptionSelected] = React.useState(null);
  const [optionSelectedOr, setOptionSelectedOr] = React.useState(null);
  const [Disabled, setDisabled] = React.useState(false);
  const [JobType, setJobType] = React.useState("");
  const [DueDate, setDueDate] = React.useState(new Date());
  const [ReportDate, setReportDate] = React.useState(new Date());
  const [CurrentDate, setCurrentDate] = React.useState(new Date());
  const [Option, setOption] = useState("");
  const [UserSelectCategory, setUserSelectCategory] = React.useState("");
  const AdminId = JSON.parse(localStorage.getItem("auth")).message.id || "";
  const [Category, setCategory] = React.useState([]);

  useEffect(() => {
    setDisabled(true);
    if (Option) {
      axios
        .get(`/jobname/${Option}/${AdminId}`)
        .then((res) => {
          setDisabled(false);
          setCategory(res.data);
        })
        .catch((err) => {
          setDisabled(false);
          setCategory([]);
        });
    }
  }, [Option, AdminId]);

  const selecHandleChange = (selected) => {
    setOptionSelected(selected);
  };

  // Handles file upload event and updates state
  const data = new FormData();

  function handleUpload(event) {
    setFile(event.target.files[0]);
    setPFile(event.target.files[0]);
    // Add code here to upload file to server
    // ...
  }

  //end-upload file

  const dialogOpen = () => {
    setResponse(true);
    setTimeout(() => {
      setResponse(false);
    }, 6000);
  };
  let handleSubmit = (event) => {
    event.preventDefault();
    if (optionSelectedOr !== "" && optionSelectedOr !== "Type") {
      setDisabled(true);
      event.preventDefault();
      var array = [];
      optionSelected.map((item) => array.push(item.value));
      data.append("data", file);
      data.append("dueDate", moment(DueDate).format("YYYY-MM-DD"));
      data.append("createdDate", moment(CurrentDate).format("YYYY-MM-DD"));
      data.append("reportDate", moment(CurrentDate).format("YYYY-MM-DD"));

      data.append("jobName", JobType);
      data.append("columns", `${array}`);
      data.append("adminId", AdminId);
      data.append("category", optionSelectedOr);

      axios
        // detailIndex
        .post(`/${optionSelectedOr}`, data, {
          headers: { "Content-Type": "multipart/form-data" },
          //   onUploadProgress: (data) => {
          //     //Set the progress value to show the progress bar
          //     // setProgress(Math.round((100 * data.loaded) / data.total));
          //   },
        })
        .then((res) => {
          // var id = res.id;
          // setProgress("");
          addToast(
            res.data.message.includes("Jobname already exist")
              ? res.data.message
              : "Data add Successfully",
            {
              appearance: res.data.message.includes("Jobname already exist")
                ? "error"
                : "success",
              autoDismiss: "true",
              autoDismissTimeout: 2000,
            }
          );
          setDisabled(false);
          setResponse(true);

          dialogOpen();
        })
        .catch((error) => {
          addToast("please select correct file", {
            appearance: "error",
            autoDismiss: "true",
            autoDismissTimeout: 2000,
          });
          setDisabled(false);

          // sendNotification({ msg: "There was an error!", variant: "error" });
        });
    }
  };
  const handleInputChange = (e) => {
    const { value } = e.target;
    // console.log(name, 'name', value, 'value')
    setOptionSelectedOr(value);
  };
  // console.log('hi')
  // console.log(moment(DueDate).format("DD-MM-YYYY"));

  const handleNotChange = () => {
    return null;
  };
  const handleCurrentDate = (e) => {
    console.log(e);
    setCurrentDate(e);
  };
  const onSelectValue = (value, event) => {
    setOption(value);
    // alert(value);
  };
  const onSelectValue2 = (value, event) => {
    setUserSelectCategory(value);
    // alert(value);
  };
  return (
    <Layout>
      <div className="newFile2">
        <div className="rider-info">Payment List</div>
        <form onSubmit={handleSubmit}>
          <div className={classes.formMain}>
            <div className={classes.formMainDiv}>
              <label className={classes.label}>{"Type"}</label>
              <div className={classes.select1}>
                <BasicSelect
                  options={categoryTypeAll}
                  value
                  onSelectValue={onSelectValue}
                  width="300px"
                />
              </div>
              <label className={classes.label}>{"Job Name"}</label>
              <div className={classes.select1}>
                <BasicSelect2
                  options={Category}
                  value
                  onSelectValue={onSelectValue2}
                  // width="250"
                />
              </div>
            </div>

            <div>
              <label className={classes.label}>{"Upload File"}</label>
              <div className="input-div">
                <input
                  type="file"
                  className="input-div-3"
                  onChange={handleUpload}
                />
                {/* <input type="file" onChange={handleUpload} style = {{ display: "none"}}/> */}
                <input
                  type="text"
                  className="input-div-input"
                  placeholder={file.name || "Upload File"}
                  readOnly={"readOnly"}
                  onChange={handleNotChange}
                />
                <img
                  type="file"
                  src={UploadIcon}
                  alt=""
                  className="input-div-botton"
                />
              </div>
            </div>
          </div>
          <br />

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              maxWidth: "750px",
            }}
          >
            <button
              type="submit"
              className={`submit3  ${classes.btn} `}
              disabled={Disabled}
            >
              {Disabled ? (
                <CircularProgress className={classes.Progress} />
              ) : (
                "Submit"
              )}
            </button>
            <br />
            {/* <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}> */}
            <div style={{ maxWidth: "400px", margin: "0 auto" }}>
              {PFile && Response && (
                <div className={classes.alert}>
                  <>
                    <div>
                      {" "}
                      File Name :<strong>{PFile.name}</strong>{" "}
                    </div>
                    <div>
                      File Size {"  "} :<strong>{PFile.size} KB</strong>
                      <br />
                    </div>
                    <div style={{ textAlign: "center" }}>
                      <strong> Added</strong>
                    </div>
                    <br />
                  </>
                </div>
              )}
            </div>
            {/* </Snackbar> */}

            {/* file.name */}
          </div>
        </form>
      </div>
    </Layout>
  );
}
export default Dashboard;
