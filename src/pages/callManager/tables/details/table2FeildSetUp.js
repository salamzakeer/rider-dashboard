import { makeStyles } from "@material-ui/core";
import { createStyles } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles(
  (theme) =>
    createStyles({
      // [theme.breakpoints.down("sm")]: {
      //     fontSize: "1.5rem",
      //   },
      inputDiv: {
        borderBottom: "4px solid #fff",
        "&:n+1": {
          backgroundColor: "#d6eeee",
        },
      },
      input: {
        backgroundColor: "inherit",
        border: "none",
        outline: "none",
      },

      keys: {
        background: "#501abf",
        // marginBottom: 2,
        borderBottom: "4px solid #fff",
        color: "#fff",
      },
    }),
  { withTheme: true }
);

function Dashboard(props) {
  const classes = useStyles();
  const { keys, value, onChange, name, id } = props;
  return (
    <>
      <td className={classes.keys}>{keys}</td>
      <td className={classes.inputDiv}>
        <input
          value={value}
          onChange={onChange}
          name={name}
          id={id}
          className={classes.input}
        ></input>
      </td>
    </>
  );
}
export default Dashboard;
