import { makeStyles } from "@material-ui/core";
import { createStyles } from "@material-ui/core";
import React from "react";
const useStyles = makeStyles(
  (theme) =>
    createStyles({
      Main: {
        padding: "12px 5px",
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
        maxWidth: "300px",
        position: "relative",
        // marginBottom: "10px",
      },
      icon: {
        padding: "15px",
        color: "rgb(49, 0, 128)",
        width: "70px",
        textAlign: "left",

        //
      },
      Field: {
        width: "100%",
        padding: "10px 60px 10px 40px",
        fontSize: "1rem",
        fontWeight: 500,
        borderRadius: "3rem",
        outline: "none",
        border: "1px solid #ccc",
        height: "55px",
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
        paddingBottom: "4px",
      },
    }),
  { withTheme: true }
);

function SearchInput(props) {
  const classes = useStyles();
  const { icon, onChange, value, placeholder, label, name, type } = props;
  return (
    <div className={classes.Main}>
      <label className={classes.label}>{label}</label>
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
    </div>
  );
}

// export handleInputChange;
export default SearchInput;
