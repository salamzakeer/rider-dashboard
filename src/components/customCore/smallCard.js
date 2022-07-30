import { makeStyles } from "@material-ui/core";
import { createStyles } from "@material-ui/core";
import React from "react";
const useStyles = makeStyles(
  (theme) =>
    createStyles({
      cardmain: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "300px",
        padding: "20px",
        color: "#fff",
        background: "#5016bf ",
        flexDirection: "column",
        borderRadius: "1rem",
        margin: "12px",
        backgroundImage:
          "linear-gradient(to right top, #5016bf, #7140ce, #8e64dd, #aa86eb, #c5a9f9)",
        // background:
        //   "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(80,22,191,1) 0%, rgba(37,148,176,1) 0%, rgba(0,79,101,1) 0%, rgba(0,130,167,1) 60%, rgba(0,128,164,1) 100%, rgba(255,255,0,1) 100%)",
      },
      cardHeading: {
        fontSize: "1.18rem",
      },
      cardNumber: {},
      [theme.breakpoints.down("md")]: {
        // backgroundColor: "green",
        flexDirection: "column",
      },
    }),
  { withTheme: true }
);

function AdminCard(props) {
  const classes = useStyles();
  const { title, number } = props;
  return (
    <div className={classes.cardmain}>
      <div className={classes.cardHeading}>{title}</div>
      <div className={classes.cardNumber}>{number}</div>
    </div>
  );
}
export default AdminCard;
