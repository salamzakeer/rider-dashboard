import { makeStyles } from "@material-ui/core";
import { createStyles } from "@material-ui/core";
import React from "react";
import "./layoutInput.css";
// import "./telecaller.css"
//
const useStyles = makeStyles(
  (theme) =>
    createStyles({
      Main: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        margin: "12px",

        //     padding: "12px 2px",
      },
      MainToggle: {
        display: "flex",
        alignItems: "center",
        // justifyContent: "center",
        margin: "12px",
        display: "flex",

        width: "380px",
        paddingLeft: "8px",
        [theme.breakpoints.down("sm")]: {
          //   width: "300px",
          width: "280px",
        },
        //     padding: "12px 2px",
      },
      i: {
        position: "absolute",
        right: 0,
        margin: "15px 20px 0px 0px",
        color: "#501abf",
        "& svg": {
          color: "#501abf !important",
        },
      },
      inputContainer: {
        width: "100%",
        maxWidth: "150px",
        position: "relative",
        // marginBottom: "10px",
      },
      icon: {
        padding: "15px",
        color: "rgb(49, 0, 128)",
        width: "70px",
        textAlign: "left",

        //300
      },
      Field: {
        width: "100%",
        padding: "10px 30px 10px 20px",
        fontSize: "1rem",
        fontWeight: 500,
        borderRadius: "3rem",
        outline: "none",
        border: "1px solid #ccc",
        height: "45px",
        color: " #ccc",

        "&:focus": {
          // background: "blue",
          border: "1px solid #5016bf",
        },
      },
      label: {
        paddingLeft: "30px",
        fontSize: "16px",
        color: "#00000",
        opacity: "0.9",
        fontWeight: 600,
        // paddingBottom: "4px",
        display: "flex",
        alignItems: "center",
        width: "230px",
        [theme.breakpoints.down("sm")]: {
          //   width: "300px",
          width: "130px",
        },
      },
      heading: {
        fontSize: 16,
        color: "#00000",
        fontWeight: 600,
      },
      para: {
        fontSize: 16,
        color: "#ccc",
      },
      flexDiv: {
        display: "flex",
        justifyContent: "space-between",
        maxWidth: "900px",
        width: "100%",
        flexWrap: "wrap",
        [theme.breakpoints.down("sm")]: {
          //   width: "300px",
          width: "55%",
        },
      },
      contentDiv: {
        maxWidth: "450px",
        width: "100%",
        margin: "12px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      },
    }),
  { withTheme: true }
);

function SearchInput(props) {
  const classes = useStyles();
  const {
    icon,
    onChange,
    value,
    placeholder,
    label,
    name,
    type,
    heading,
    para,
    toggle,
  } = props;
  return (
    <div className={classes.flexDiv}>
      <div className={classes.contentDiv}>
        <div className={classes.heading}>{heading}</div>
        <div className={classes.para}>{para}</div>
      </div>
      {!toggle && (
        <div className={classes.Main}>
          <div className={classes.inputContainer}>
            <div className={classes.i}>{icon}</div>
            <input
              className={classes.Field}
              type={type ? type : "text"}
              placeholder={placeholder}
              onChange={onChange}
              value={value}
              name={name}
            />
          </div>
          <label className={classes.label}>{label}</label>
        </div>
      )}
      {toggle && (
        <div className={classes.MainToggle}>
          <label class="switch">
            <input
              type="checkbox"
              onChange={onChange}
              checked={!value}
              name={name}
            />
            <span class="slider round"></span>
          </label>
        </div>
      )}
    </div>
  );
}

// export handleInputChange;
export default SearchInput;
