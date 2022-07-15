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
        <div className="rider-info">Dashboard</div>
      </div>
      <br />
      <br />
      <div className={classes.MainCardDiv}>
        <AdminCard title="administration" number="03" />
        <AdminCard title="All Rider" number="10 K" />
        <AdminCard title="All Telecaller" number="3K" />
      </div>
      {/* </div> */}
    </Layout>
  );
}
export default Dashboard;
