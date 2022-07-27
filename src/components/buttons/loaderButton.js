import { CircularProgress, makeStyles } from "@material-ui/core";
import { createStyles } from "@material-ui/core";
import React from "react";
const useStyles = makeStyles(
  (theme) =>
    createStyles({
      filter: {
        outline: "none",
        width: "100%",
        margin: "12px",
        border: "1px solid #ccc",
        height: "55px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "16px",
        fontFamily: "Poppins",
        borderRadius: "50px",
        [theme.breakpoints.down("md")]: {
          //   width: "300px",
          flexDirection: "column",
        },
        backgroundColor: "#501abf",
        color: "#fff",
        "&:hover": {
          "& div": {
            "& svg": {
              color: "#501abf !important",
            },
          },
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

        "& div": {
          "& svg": {
            color: "#fff",
          },
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

function LoadButton(props) {
  const classes = useStyles();
  const { Disabled, onClick, name } = props;
  return (
    <button
      type="submit"
      onClick={onClick}
      className={classes.filter}
      disabled={Disabled}
    >
      {" "}
      {Disabled ? <CircularProgress className={classes.Progress} /> : name}
    </button>
  );
}

// export handleInputChange;
export default LoadButton;
