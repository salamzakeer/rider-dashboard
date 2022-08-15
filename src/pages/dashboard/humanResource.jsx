import Layout from "../../components/layout/Navbar";
import { makeStyles } from "@material-ui/core";
import { createStyles } from "@material-ui/core";
import React from "react";
import AdminCard from "../../components/customCore/smallCard";
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
      TotalRecordDiv: {
        maxWidth: "300px",
        padding: "20px",
        background: "#FEFEFE 0% 0% no-repeat padding-box",
        boxShadow: "0px 10px 20px #4A4A4A66",
        borderRadius: "20px",
        width: "100%",
      },
      TotalRecordDivHeading: {
        color: "#5016BF",
        // font: "normal normal medium 18px/27px Poppins",
        fontSize: "14px",
        margin: "0px",
      },
      TotalRecordDivNo: {
        color: "#000000",
        fontSize: "28px",
        margin: "0px",
        letterSpacing: "1px",
        fontWeight: 600,
      },
      TotalRecordTable: {
        maxWidth: "300px",
        width: "100%",
        margin: "1rem 0rem",
      },
      TotalRecordTableTr: {
        fontSize: "16px",

        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        "& p": {
          margin: "4px",
        },
      },
      TotalRecordTableTrText: {
        color: "#000000",
      },

      TotalRecordTableTrNo: {
        color: "#000000",
        fontWeight: "600",

      
      },
    }),
  { withTheme: true }
);

export default function HumanResource() {
  const classes = useStyles();
  return (
    <>
      <div className={classes.TotalRecordDiv}>
        <p className={classes.TotalRecordDivHeading}>Human Resource</p>
        <div className={classes.TotalRecordTable}>
          <div className={classes.TotalRecordTableTr}>
            <p className={classes.TotalRecordTableTrText}>CEO/COO</p>
            <p className={classes.TotalRecordTableTrNo}>2</p>
          </div>
          <div className={classes.TotalRecordTableTr}>
            <p className={classes.TotalRecordTableTrText}>Director</p>
            <p className={classes.TotalRecordTableTrNo}>2</p>
          </div>
          <div className={classes.TotalRecordTableTr}>
            <p className={classes.TotalRecordTableTrText}>Manager</p>
            <p className={classes.TotalRecordTableTrNo}>10</p>
          </div>
          <div className={classes.TotalRecordTableTr}>
            <p className={classes.TotalRecordTableTrText}>Field Visit Staffs</p>
            <p className={classes.TotalRecordTableTrNo}>2</p>
          </div>
          <div className={classes.TotalRecordTableTr}>
            <p className={classes.TotalRecordTableTrText}>Administration</p>
            <p className={classes.TotalRecordTableTrNo}>20</p>
          </div>
          <div className={classes.TotalRecordTableTr}>
            <p className={classes.TotalRecordTableTrText}>Call Manager</p>
            <p className={classes.TotalRecordTableTrNo}>250</p>
          </div>
          <div className={classes.TotalRecordTableTr}>
            <p className={classes.TotalRecordTableTrText}>Tellecaller</p>
            <p className={classes.TotalRecordTableTrNo}>250</p>
          </div>
          <div className={classes.TotalRecordTableTr}>
            <p className={classes.TotalRecordTableTrText}>Field Visit Staffs</p>
            <p className={classes.TotalRecordTableTrNo}>250</p>
          </div>
        </div>
      </div>
    </>
  );
}
// export default TotalRecord;
