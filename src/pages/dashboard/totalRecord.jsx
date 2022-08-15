import React from "react";
import { makeStyles } from "@material-ui/core";
import { createStyles } from "@material-ui/core";
import { BorderLinearProgress } from "../../components/customCore/LinearProgress";
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
        maxWidth: "600px",
        padding: "20px",
        background: "#FEFEFE 0% 0% no-repeat padding-box",
        boxShadow: "0px 10px 20px #4A4A4A66",
        borderRadius: "20px",
        width: "100%",
      },
      TotalRecordDivHeading: {
        color: "#5016BF",
        // font: "normal normal medium 18px/27px Poppins",
        fontSize: "16px",
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
        margin: "2rem 0rem",
      },
      TotalRecordTableTr: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        "& p": {
          margin: "4px",
        },
      },
      TotalRecordTableTrText: {
        color: "#5016BF",
      },

      TotalRecordTableTrNo: {
        color: "#000000",
        fontWeight: "600",
        letterSpacing: "1px",
        fontWeight: 600,
      },
      TotalRecordProgressText: {
        color: "#00000",
        fontWeight: "600",
        textAlign: "right",
        fontFamily: "Poppins",
      },
    }),
  { withTheme: true }
);

export default function TotalRecord() {
  const classes = useStyles();
  return (
    <>
      <div className={classes.TotalRecordDiv}>
        <p className={classes.TotalRecordDivHeading}>Total records</p>
        <p className={classes.TotalRecordDivNo}>26,117</p>
        <div className={classes.TotalRecordProgressText}>54.5% completed</div>
        <BorderLinearProgress variant="determinate" value={54.5} />
        <div className={classes.TotalRecordTable}>
          <div className={classes.TotalRecordTableTr}>
            <p className={classes.TotalRecordTableTrText}>Completed</p>
            <p className={classes.TotalRecordTableTrNo}>198</p>
          </div>
          <div className={classes.TotalRecordTableTr}>
            <p className={classes.TotalRecordTableTrText}>Pending</p>
            <p className={classes.TotalRecordTableTrNo}>19,008</p>
          </div>
          {/* <div className={classes.TotalRecordTableTr}>
            <p className={classes.TotalRecordTableTrText}>Completed</p>
            <p className={classes.TotalRecordTableTrNo}>20 ,000</p>
          </div> */}
        </div>
      </div>
    </>
  );
}
// export default TotalRecord;
