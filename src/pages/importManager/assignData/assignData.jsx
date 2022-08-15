import React, { useEffect, useState } from "react";
import "react-toastify/dist/ReactToastify.css"; // import first
import { useToasts } from "react-toast-notifications";
import axios from "../../../axios";
import "./importManger.css";
import Layout from "../../../components/layout/Navbar";
import moment from "moment";
import { makeStyles } from "@material-ui/core";
import { CircularProgress } from "@mui/material";

const useStyles = makeStyles((theme) => ({
  Progress: {
    // margin: "9px",
    width: "24px !important",
    height: "24px !important",
  },
  formMain: {
    display: "flex",
    justifyContent: "space-evenly",
    maxWidth: "800px",
    margin: "0 auto",
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
  },
  lnds: {
    // display: "flex"
    maxWidth: "500px",
  },
  btn: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "200px !important",
    border: "2px solid #501abf !important",
    outline: "none",
    "&:hover": {
      color: "#501abf !important",

      "& svg": {
        color: "#501abf !important",
      },
      background: "#fff !important",
    },
    "& svg": {
      color: "#fff !important",
    },
  },
}));
function Dashboard() {
  const { addToast } = useToasts();
  const classes = useStyles();

  //upload file
  const [Form, setForm] = React.useState("");
  const [To, setTo] = React.useState("");
  const [RiderId, setRiderId] = React.useState("");
  const [RiderData, setRiderData] = useState([]);
  const AdminId = JSON.parse(localStorage.getItem("auth")).message.id || "";
  const [Category, setCategory] = React.useState([]);
  const [UserSelectCategory, setUserSelectCategory] = React.useState("");
  const [UserSelectCategoryCDate, setUserSelectCategoryCDate] =
    React.useState("");
  const [Option, setOption] = useState("");
  const [Disabled, setDisabled] = React.useState(false);

  useEffect(() => {
    axios
      .get("/rider")
      .then((res) => {
        // console.log(res.data, 'data=============')
        setRiderData(res.data);
      })
      .catch((err) => {
        console.log("error");
      });
  }, []);

  useEffect(() => {
    if (Option) {
      setDisabled(true);
      axios
        .get(`/jobname/${Option}/${AdminId}`)
        .then((res) => {
          setDisabled(false);
          // console.log(res.data, 'data')
          setCategory(res.data);
        })
        .catch((err) => {
          setDisabled(false);
          setCategory([]);
          // console.log(err, 'error')
        });
    }
  }, [Option, AdminId]);

  // Handles file upload event and updates state

  //end-upload file

  //   console.log(Option, "Option");
  let handleSubmit = (event) => {
    setDisabled(true);
    event.preventDefault();
    // alert(JSON.stringify(formValues));
    // console.log(Option, Form, To);
    // const AdminId = JSON.parse(localStorage.getItem("auth")).message.id || "";

    const jsonData = {
      type: Option,
      dataFrom: Form,
      dataTo: To,
      riderId: RiderId,
      createdDate: "2021-12-01",
      dueDate: "2021-12-01",
      jobId: UserSelectCategory,
      // "category": Option
    };
    // var array = [];
    // optionSelected.map((item) => {

    //     array.push(item.value)
    // })
    // data.append("data", file);
    // data.append("columns", `"${array}"`);
    axios
      // detailIndex
      .post(`/riderdata`, jsonData, {
        headers: { "Content-Type": "application/json" },
      })
      .then((res) => {
        // Some data already assigned to riders
        // res.data.message
        addToast(
          res.data.errorMessage === true
            ? "Some data already assigned to riders"
            : "Assign Data Successfully",
          {
            appearance: res.data.errorMessage === true ? "error" : "success",
            autoDismiss: "true",
            autoDismissTimeout: 2000,
          }
        );
        setDisabled(false);
      })
      .catch((error) => {
        addToast("please select correct feild", {
          appearance: "error",
          autoDismiss: "true",
          autoDismissTimeout: 2000,
        });
        setDisabled(false);
      });
  };
  const handleStaffChange = (e) => {
    const { value } = e.target;
    setRiderId(value);
  };
  const handleCategoryChange = (e) => {
    const { value } = e.target;
    const date =
      Category.find((item) => item.id == e.target.value).createdDate || "";
    setUserSelectCategory(value);
    setUserSelectCategoryCDate(moment(date).format("YYYY-MM-DD"));
    };

  const handleInputChange = (e) => {
    const { value } = e.target;
    setOption(value);
    // setUserSelectCategoryCDate(Category.find(item => (item.id == e.target.value))) )
  };
  return (
    <Layout>
      {/* ========== form ==========*/}
      <div className="newFile2  form">
        <div className="rider-info">Assign Data</div>
        <form onSubmit={handleSubmit}>
          <div className={classes.formMain}>
            <div>
              <label className={classes.label}>Category</label>
              <select
                className="form-select"
                aria-label="Default select example"
                name=""
                onChange={handleInputChange}
                defaultValue=""
              >
                <option name="" value="" disabled>
                  Select
                </option>
                <option name="LND" value="lnds">
                  LANDED
                </option>
                <option name="VACAT" value="vacants">
                  VACANTS
                </option>
                <option name="COMMERCIAL" value="commercials">
                  COMMERCIAL
                </option>
                <option name="HIGHRISES" value="highrises">
                  HIGHRISES
                </option>
              </select>
              <br />

              <label className={classes.label}>Job Name</label>
              <select
                className="form-select"
                aria-label="Default select example"
                onChange={handleCategoryChange}
                defaultValue=""
              >
                <option name="" value="" disabled>
                  Select
                </option>
                {Category &&
                  Category.length > 0 &&
                  Category.map((item, i) => (
                    <option key={i} name={item.createdAt} value={item.id}>
                      {item.jobName}
                    </option>
                  ))}
              </select>
              <br />
              {/* {JSON.stringify(Category)} */}
              <label className={classes.label}>Date</label>
              <div className="input-div">
                <input
                  type="text"
                  className="input-div-input"
                  placeholder="Date"
                  value={UserSelectCategoryCDate}
                  onChange={() => null}
                />
                {/* <img src={AddIcon} alt="" className="input-div-botton" /> */}
              </div>
              <br />
              <label className={classes.label}>Staff Name</label>

              <select
                className="form-select"
                aria-label="Default select example"
                onChange={handleStaffChange}
                defaultValue=""
              >
                <option name="" value="" disabled>
                  Staff Name
                </option>
                {RiderData &&
                  RiderData.length > 0 &&
                  RiderData.map((item, i) => (
                    <option key={i} name={item.id} value={item.id}>
                      {item.fullName}
                    </option>
                  ))}
              </select>
            </div>
            <br />
            <hr />
            <br />
            <br />

            <div>
              <label className={classes.label}> Type Of Task Assign</label>

              <select
                className="form-select"
                aria-label="Default select example"
                defaultValue=""
              >
                <option name="" value="" disabled>
                  Select{" "}
                </option>
                <option>New</option>
                <option>Replace</option>
                <option>Re Assign(Task Completed)</option>
                <option>Un Assign</option>
              </select>
              <br />
              <label className={classes.label}>From</label>

              <div className="input-div">
                <input
                  type="text"
                  className="input-div-input"
                  placeholder="From"
                  value={Form}
                  onChange={(e) => setForm(e.target.value)}
                />
                {/* <img src={AddIcon} alt="" className="input-div-botton" /> */}
              </div>
              <br />
              <label className={classes.label}>To</label>

              <div className="input-div">
                <input
                  type="text"
                  className="input-div-input"
                  placeholder="To"
                  value={To}
                  onChange={(e) => setTo(e.target.value)}
                />
                {/* <img src={AddIcon} alt="" className="input-div-botton" /> */}
              </div>
            </div>
          </div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <button
              type="submit"
              className={`submit3  ${classes.btn} `}
              disabled={Disabled}
            >
              {" "}
              {Disabled ? (
                <CircularProgress className={classes.Progress} />
              ) : (
                "Submit"
              )}
            </button>
          </div>
        </form>
      </div>
      {/* ========== form ==========*/}
    </Layout>
  );
}
export default Dashboard;
