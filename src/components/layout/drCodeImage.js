import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core";
import { createStyles } from "@material-ui/core";
import { CircularProgress } from "@mui/material";
import { Qrcode } from "../../api/qrcode";
import axios from "../../axios";
import BasicSelect2 from "../customCore/jobNameDroupDown";
import BasicSelect3 from "../customCore/qrCodeSelect";
import BasicSelect from "../customCore/select";
import { categoryType } from "../../api/detailsApi";

const useStyles = makeStyles(
  (theme) =>
    createStyles({
      Main: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        margin: "10rem 0 0 0 ",
        fontSize: "2rem",
        fontWeight: 500,
        [theme.breakpoints.down("sm")]: {
          // backgroundColor: "red",
          fontSize: "1.5rem",
        },
      },
      cardmain: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "300px",
        padding: "20px",
        color: "#fff",
        background: "red",
        flexDirection: "column",
        borderRadius: "1rem",
      },
      cardHeading: {
        fontSize: "1.5rem",
      },
      cardNumber: {},
      [theme.breakpoints.down("md")]: {
        // backgroundColor: "green",
        flexDirection: "column",
      },
      MainCardDiv: {
        display: "flex",
        flexWrap: "wrap",
      },
      mainSearchDiv: {
        display: "flex",
        justifyContent: "space-between",
        alignContent: "center",
        flexWrap: "wrap",
        [theme.breakpoints.down("xs")]: {
          // backgroundColor: "green",
          width: "100%",
          flexDirection: "column",
          // backgroundColor: "red",
        },
      },
      SearchDiv: {
        display: "flex",
        justifyContent: "center",
        alignContent: "center",
        width: "300px",
        [theme.breakpoints.down("xs")]: {
          width: "75%",
        },
      },
      subDiv: {
        display: "flex",
        justifyContent: "space-between",
        maxWidth: "900px",
        [theme.breakpoints.down("md")]: {
          // backgroundColor: "green",
          flexDirection: "column",
          width: "300px",
          margin: "0 auto",
        },
      },
      filter: {
        width: "140px",
        margin: "12px",
        border: "1px solid #ccc",
        height: "45px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "16px",
        fontFamily: "Poppins",
        // opacity: " 0.8",
        borderRadius: "50px",
        [theme.breakpoints.down("md")]: {
          // backgroundColor: "green",
          width: "300px",
          flexDirection: "column",
        },
        backgroundColor: "#501abf",
        color: "#fff",
        "&:hover": {
          backgroundColor: "#fff",
          color: "#501abf",
          border: "2px solid #501abf",
          fontWeight: "600",
          "& span": {
            color: "#501abf !important",
          },
        },
        "& span": {
          color: "#fff !important",
        },
      },
      select1: {
        margin: "12px",
      },

      select3: {
        margin: "12px",
        [theme.breakpoints.down("md")]: {
          width: "300px",
        },
      },
      Progress: {
        margin: "9px",
        width: "24px !important",
        height: "24px !important",
      },
    }),
  { withTheme: true }
);

function QRCodeImages() {
  const classes = useStyles();
  const [Option, setOption] = useState("");
  const [UpdateValue, setUpdateValue] = useState("2");
  const [UserSelectCategory, setUserSelectCategory] = React.useState("");
  const [Category, setCategory] = React.useState([]);
  const [Disabled, setDisabled] = React.useState(false);

  const handleFiltering = () => {};
  const handleInputChanges = (e) => {
    const { value } = e.target;
    setOption(value);
  };
  const handleUpdateChanges = (e) => {
    const { value } = e.target;
    setUpdateValue(value);
  };
  const handleCategoryChange = (e) => {
    const { value } = e.target;
    setUserSelectCategory(value);
  };

  const AdminId = JSON.parse(localStorage.getItem("auth")).message.id || "";
  useEffect(() => {
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
  }, [Option, AdminId]);
  const onSelectValue = (value, event) => {
    setOption(value);
    // alert(value);
  };
  const onSelectValue2 = (value, event) => {
    setUserSelectCategory(value);
    // alert(value);
  };
  const onSelectValue3 = (value, event) => {
    // setUpdateValue(value);
    // alert(value);
  };
  return (
    <div>
      <div className={classes.mainSearchDiv}>
        <div className="rider-info">DR Code Images </div>
      </div>
      <br />
      <div className={classes.subDiv}>
        {/* subDiv */}
        <div className={classes.select1}>
          {/* <label className={classes.label}>{"Type"}</label> */}
          <BasicSelect
            options={categoryType}
            value
            onSelectValue={onSelectValue}
            width="250"
          />
          {/* <select
            className="form-select"
            aria-label="Default select example"
            name=""
            onChange={handleInputChanges}
            required="required"
          >
            <option name="" value="" selected>
              Type
            </option>
            <option name="lnds" value="lnds">
              LANDED
            </option>
            {/* <option name="vacants" value="vacants">
              VACANTS
            </option> 
            {/* lnds same data to comercial and highrises commercials  
            <option name="commercials" value="commercials">
              COMMERCIAL
            </option>
            <option name="highrises" value="highrises">
              HIGHRISES
            </option>
          </select> */}
        </div>
        <div className={classes.select1}>
          <BasicSelect2
            options={Category}
            value
            onSelectValue={onSelectValue2}
            // width="250"
          />
          {/* <select
            className="form-select"
            aria-label="Default select example"
            onChange={handleCategoryChange}
          >
            <option selected>Select</option>
            {Category &&
              Category.length > 0 &&
              Category.map((item) => (
                <option name={item.createdAt} value={item.id}>
                  {item.jobName}
                </option>
              ))}
          </select> */}
        </div>
        <div className={classes.select3}>
          <BasicSelect3
            options={Qrcode}
            value
            onSelectValue={onSelectValue}
            width="250"
          />
        </div>
        <button
          type="submit"
          onClick={handleFiltering}
          className={classes.filter}
          disabled={Disabled}
          style={{ padding: "10px" }}
        >
          {" "}
          {Disabled ? (
            <CircularProgress className={classes.Progress} />
          ) : (
            <div>
              {/* <FilterListIcon /> */}
              Download
            </div>
          )}
        </button>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
}
export default QRCodeImages;
