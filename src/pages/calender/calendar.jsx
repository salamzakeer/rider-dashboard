import React, { useEffect, useState } from "react";
import "react-toastify/dist/ReactToastify.css"; // import first
import { useToasts } from "react-toast-notifications";
import axios from "../../axios";
// import "./importManger.css"
import Layout from "../../components/layout/Navbar";
import moment from "moment";
import { makeStyles } from "@material-ui/core";
import { CircularProgress } from "@mui/material";
import Datapicker from "../../components/customCore/datapicker";

const useStyles = makeStyles((theme) => ({
  Progress: {
    // margin: "9px",
    width: "24px !important",
    height: "24px !important",
  },
  formMain: {
    display: "flex",
    justifyContent: "center",

    // backgroundColor: "red",
    [theme.breakpoints.down("md")]: {
      // backgroundColor: "green",
      // flexDirection: "column",
    },
  },
  formMainLeft: {
    // display: "flex",
    // justifyContent: "space-between",
    maxWidth: "500px",
    width: "100%",
    // backgroundColor: "red",
    [theme.breakpoints.up("lg")]: {
      // backgroundColor: "green",
      // flexDirection: "column"
      maxWidth: "350px",
      width: "100%",
    },
  },
  label: {
    paddingLeft: "20px",
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
    width: "400px",
    height: "45px",
    marginTop: "35px",
    background: "#5016BF 0% 0 % no - repeat padding- box",
    backgroundColor: "#5016BF",
    borderRadius: "44px",
    fontSize: "30px",
    font: "normal 600 30px Poppins",
    color: "#FFFFFF",
    fontWeight: "500 !important",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    border: "2px solid #501abf !important",
    outline: "none",
    fontSize: "16px !important",
    fontWeight: "500 !important",
    width: "300px  !important",
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
  const [LeaveTypeName, setLeaveTypeName] = useState("");
  const [Disabled, setDisabled] = React.useState(false);

  const [fromDate, setfromDate] = React.useState(new Date());
  const [toDate, settoDate] = React.useState(new Date());

  useEffect(() => {
    setDisabled(true);
    axios
      .get("/rider")
      .then((res) => {
        setRiderData(res.data);
        setDisabled(false);
      })
      .catch((err) => {
        setDisabled(false);
      });
  }, []);

  // Handles file upload event and updates state

  //end-upload file

  let handleSubmit = (event) => {
    setDisabled(true);
    event.preventDefault();
    // alert(JSON.stringify(formValues));
    const AdminId = JSON.parse(localStorage.getItem("auth")).message.id || "";

    const jsonData = {
      typeOfLeave: LeaveTypeName,
      riderId: RiderId,
      createdDate: moment(fromDate).format("YYYY-MM-DD"),
      // "endDate": moment(toDate).format("YYYY-MM-DD"),
      adminId: AdminId,
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
      .post(`/attendances`, jsonData, {
        headers: { "Content-Type": "application/json" },
      })
      .then((res) => {
        addToast("Leave add Successfully", {
          appearance: "success",
          autoDismiss: "true",
          autoDismissTimeout: 2000,
        });
        setDisabled(false);
      })
      .catch((error) => {
        addToast("Please select correct feild", {
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
  const handleLeaveTypeChange = (e) => {
    const { value } = e.target;
    setLeaveTypeName(value);
  };

  const handleCategoryChange = (e) => {
    const { value, name } = e.target;
    // console.log(e.target, "date")
    // console.log(name, "date")
    const date =
      Category.find((item) => item.id == e.target.value).createdDate || "";
    // console.log(moment(date).format("YYYY-MM-DD"))
    setUserSelectCategory(value);
    setUserSelectCategoryCDate(moment(date).format("YYYY-MM-DD"));
  };

  const handleInputChange = (e) => {
    const { value } = e.target;
    setOption(value);
    // setUserSelectCategoryCDate(Category.find(item => (item.id == e.target.value))) )
  };
  const leaveType = [
    { id: "Public holidays", name: "Public holidays" },
    { id: "Annual Leave", name: "Annual Leave" },
    { id: "Medical Leave", name: "Medical Leave" },
    { id: "Maternity Leave", name: "Maternity Leave" },
    { id: "Paternity leave", name: "Paternity leave" },
    { id: "Half a day leave", name: "Half a day leave" },
    { id: "Emergency leave", name: "Emergency leave" },
    { id: "Optional leave entitlements", name: "Optional leave entitlements" },
  ];
  return (
    <Layout>
      {/* ========== form ==========*/}
      <div className="newFile2  form">
        <div className="rider-info">Assign Leave</div>
        <form onSubmit={handleSubmit}>
          <div className={classes.formMain}>
            <div className={classes.formMainLeft}>
              <label className={classes.label}>{"Staff Name"}</label>

              <select
                className="form-select"
                aria-label="Default select example"
                onChange={handleStaffChange}
                defaultValue="Select"
              >
                <option value={"Select"} selected>
                  Select
                </option>
                {RiderData &&
                  RiderData.length > 0 &&
                  RiderData.map((item, i) => (
                    <option key={i + item.id} name={item.id} value={item.id}>
                      {item.fullName}
                    </option>
                  ))}
              </select>
              <br />
              <label className={classes.label}>{"Type Of Leave"}</label>

              <select
                className="form-select"
                aria-label="Default select example"
                name=""
                onChange={handleLeaveTypeChange}
                defaultValue="Select"
              >
                {/* leaveType */}
                <option value={"Select"} selected>
                  Select
                </option>

                {leaveType &&
                  leaveType.length > 0 &&
                  leaveType.map((item, i) => (
                    <option key={i} name={item.id} value={item.id}>
                      {item.name}
                    </option>
                  ))}
              </select>
              <br />
              <Datapicker
                name="fromDate"
                value={fromDate}
                label="Leave start Date"
                onChange={(e) => setfromDate(e)}
                required
              />
              <br />
            </div>
            <br />
            <hr />
            <br />
            <br />
          </div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <button type="submit" className={classes.btn} disabled={Disabled}>
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
