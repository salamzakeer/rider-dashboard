import { makeStyles } from "@material-ui/core";
import { createStyles } from "@material-ui/core";
import React from "react";
const useStyles = makeStyles(
  (theme) =>
    createStyles({
      Main: {
        padding: "12px 5px",
        marginLeft: "20px",
      },
      i: {
        position: "absolute",
        right: 0,
        margin: "10px 20px 0px 0px",
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
        padding: "10px 60px 10px 24px",
        fontSize: "14px",
        fontWeight: 500,
        borderRadius: "3rem",
        outline: "none",
        border: "1px solid #ccc",
        height: "45px",
        color: "#afafad",
        "&:focus": {
          // background: "blue",
          border: "1px solid #5016bf",
        },
      },
      label: {
        paddingLeft: "23px",
        fontSize: "14px",
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
  const {
    icon,
    onChange,
    value,
    placeholder,
    label,
    name,
    type,
    id,
    required,
  } = props;
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
          id={id}
          required={required}
        />
      </div>
    </div>
  );
}

// export handleInputChange;
export default SearchInput;
