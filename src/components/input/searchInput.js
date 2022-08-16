import { makeStyles } from "@material-ui/core";
import { createStyles } from "@material-ui/core";
import React from "react";
const useStyles = makeStyles(
  (theme) =>
    createStyles({
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
        padding: "10px 60px 10px 20px",
        fontSize: "1rem",
        fontWeight: 500,
        borderRadius: "1rem",
        outline: "none",
        border: "1px solid #ccc",
        height: "55px",
        color: " #ccc",

        "&:focus": {
          // background: "blue",
          border: "1px solid #5016bf",
        },
      },
    }),
  { withTheme: true }
);

function SearchInput(props) {
  const classes = useStyles();
  const { icon, onChange, value, placeholder } = props;
  return (
    <div className={classes.inputContainer}>
      <div className={classes.i}>{icon}</div>
      <input
        className={classes.Field}
        type="text"
        placeholder={placeholder}
        onChange={onChange}
        value={value}
      />
    </div>
  );
}
export default SearchInput;
