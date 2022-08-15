import Layout from "../../components/layout/Navbar";
import { makeStyles } from "@material-ui/core";
import { createStyles } from "@material-ui/core";
import React from "react";
import TotalRecord from "./totalRecord";
import HumanResource from "./humanResource";
import JobTable from "./table";
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
      cardmain: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "300px",
        padding: "20px",
        color: "#fff",
        background: "red",
        flexDirection: "column",
        borderRadius: "1rem",
      },
      cardHeading: {
        fontSize: "1.5rem",
      },
      cardNumber: {},
      [theme.breakpoints.down("md")]: {
        // backgroundColor: "green",
        flexDirection: "column",
      },
      MainCardDiv: {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between",
        maxWidth: "1000px",
      },
      MainDiv: {
        display: "flex",
        maxWidth: "1000px",
        flexDirection: "column",
      },
    }),
  { withTheme: true }
);

function Dashboard() {
  const classes = useStyles();
  return (
    <Layout title="Dashboard">
      {/* <div className={classes.Main}> */}
      <div>
        <div className="rider-info">Productivity Report</div>
      </div>
      <br />
      <br />
      <div className={classes.MainDiv}>
        <div className={classes.MainCardDiv}>
          <TotalRecord />
          <HumanResource />
        </div>
        <JobTable />
      </div>
    </Layout>
  );
}
export default Dashboard;
