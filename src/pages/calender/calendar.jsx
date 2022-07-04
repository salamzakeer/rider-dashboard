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
            maxWidth: "500px",
            width: "100%",
        },
    },
    label: {
        paddingLeft: "40px",
        fontSize: "24px",
        color: "#00000A",
        opacity: "0.6",
        fontWeight: 600,
    },
    lnds: {
        // display: "flex"
        maxWidth: "500px",
    },
    btn: {
        width: "400px",
        height: "60px",
        marginTop: "35px",
        background: "#5016BF 0% 0 % no - repeat padding- box",
        backgroundColor: "#5016BF",
        borderRadius: "44px",
        fontSize: "30px",
        font: "normal 600 30px Poppins",
        color: "#FFFFFF",
        border: "none",
    }
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

    const [fromDate, setfromDate] = React.useState(new Date("02/22/2021"));
    const [toDate, settoDate] = React.useState(new Date("02/22/2021"));

    useEffect(() => {
        setDisabled(true);
        axios
            .get("/rider")
            .then((res) => {
                // console.log(res.data, 'data=============')
                setRiderData(res.data);
                setDisabled(false);
            })
            .catch((err) => {
                console.log(err, "error");
                setDisabled(false);
            });
    }, []);

    // Handles file upload event and updates state

    //end-upload file

    console.log(Option, "Option");
    let handleSubmit = (event) => {
        setDisabled(true);
        event.preventDefault();
        // alert(JSON.stringify(formValues));
        // console.log(Option, Form, To);
        const AdminId = JSON.parse(localStorage.getItem("auth")).message.id || "";

        const jsonData = {
            typeOfLeave: LeaveTypeName,
            riderId: RiderId,
            createdDate: moment(fromDate).format("YYYY-MM-DD"),
            // "endDate": moment(toDate).format("YYYY-MM-DD"),
            adminId: AdminId,
            // "category": Option
        };
        console.log(jsonData, "jsonData=====");
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
        console.log(
            Category.find((item) => item.id == e.target.value).createdDate || ""
        );
    };

    const handleInputChange = (e) => {
        const { value } = e.target;
        setOption(value);
        // setUserSelectCategoryCDate(Category.find(item => (item.id == e.target.value))) )
    };
    const leaveType = [
        { id: "Full day", name: "Full day" },
        { id: "Half day", name: "Half day" },
        { id: "Absence", name: "Absence" },
        { id: "Medical Leave", name: "Medical Leave" },
        { id: "Leave", name: "Leave" },
    ];
    return (
        <Layout>
            {/* ========== form ==========*/}
            <div className="newFile2  form">
                <h1>Assign Data</h1>
                <form onSubmit={handleSubmit}>
                    <div className={classes.formMain}>
                        <div className={classes.formMainLeft}>
                            <label className={classes.label}>{"Staff Name"}</label>

                            <select
                                class="form-select"
                                aria-label="Default select example"
                                onChange={handleStaffChange}
                            >
                                <option selected>Select</option>
                                {RiderData &&
                                    RiderData.length > 0 &&
                                    RiderData.map((item) => (
                                        <option name={item.id} value={item.id}>
                                            {item.fullName}
                                        </option>
                                    ))}
                            </select>
                            <br />
                            <label className={classes.label}>{"Type Of Leave"}</label>

                            <select
                                class="form-select"
                                aria-label="Default select example"
                                name=""
                                onChange={handleLeaveTypeChange}
                            >
                                {/* leaveType */}
                                {leaveType &&
                                    leaveType.length > 0 &&
                                    leaveType.map((item) => (
                                        <option name={item.id} value={item.id}>
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
                                <CircularProgress style={{ margin: "9px" }} />
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
