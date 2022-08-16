import React from "react";
import { makeStyles } from "@material-ui/core";
import { createStyles } from "@material-ui/core";
import { BorderLinearProgress } from "../../components/customCore/LinearProgress";
const useStyles = makeStyles(
  (theme) =>
    createStyles({
      Main: {
        marginRight: "4px",
        width: "60%",
        minWidth: "300px",
      },
      TotalRecordDiv: {
        padding: "20px",
        background: "#FEFEFE 0% 0% no-repeat padding-box",
        boxShadow: "0px 10px 20px #4A4A4A66",
        borderRadius: "20px",
        marginBottom: "1rem",
        // ""
      },
      "@media (max-width: 1050px)": {
        TotalRecordDiv: {
          width: "95%",
        },
      },
      "@media (max-width: 600px)": {
        TotalRecordDiv: {
          width: "80%",
        },
      },
      TotalRecordDivHeading: {
        fontSize: "16px",
        margin: "0px",
        color: "black",
      },
      TotalRecordDivHeadingNormal: {
        color: "#5016BF",
      },
      TotalRecordDivNo: {
        color: "#000000",
        fontSize: "28px",
        margin: "0px",
        letterSpacing: "1px",
        fontWeight: 600,
      },
      TotalRecordTable: {
        width: "100%",
        margin: "0.2rem 0rem",
        display: "flex",
        justifyContent: "space-between",
      },
      TotalRecordTableTr: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        maxWidth: "170px",
        width: "100%",

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
        marginTop: "0.5rem",
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
    <div className={classes.Main}>
      <div className={classes.TotalRecordDiv}>
        <div className={classes.TotalRecordDivHeadingNormal}>
          Total records &nbsp;
          <span className={classes.TotalRecordDivHeading}>- current jobs</span>
        </div>
        <p className={classes.TotalRecordDivNo}>26,117</p>
        <div className={classes.TotalRecordProgressText}>54.5% completed</div>
        <BorderLinearProgress variant="determinate" value={54.5} />
        <div className={classes.TotalRecordTable}>
          <div className={classes.TotalRecordTableTr}>
            <p className={classes.TotalRecordTableTrText}>Completed</p>
            <p className={classes.TotalRecordTableTrNo}>198</p>
          </div>
          <div className={classes.TotalRecordTableTr}>
            <p className={classes.TotalRecordTableTrText}>pending</p>
            <p className={classes.TotalRecordTableTrNo}>19,008</p>
          </div>
        </div>
      </div>
      <div className={classes.TotalRecordDiv}>
        <div className={classes.TotalRecordDivHeadingNormal}>
          Total records &nbsp;
          <span className={classes.TotalRecordDivHeading}>
            - break down by location
          </span>
        </div>
        <p className={classes.TotalRecordDivNo}>26,117</p>
        <div className={classes.TotalRecordProgressText}>54.5% completed</div>
        <BorderLinearProgress variant="determinate" value={54.5} />
        <div className={classes.TotalRecordTable}>
          <div className={classes.TotalRecordTableTr}>
            <p className={classes.TotalRecordTableTrText}>Completed</p>
            <p className={classes.TotalRecordTableTrNo}>198</p>
          </div>
          <div className={classes.TotalRecordTableTr}>
            <p className={classes.TotalRecordTableTrText}>pending</p>
            <p className={classes.TotalRecordTableTrNo}>198</p>
          </div>
        </div>
      </div>
    </div>
  );
}
// export default TotalRecord;
