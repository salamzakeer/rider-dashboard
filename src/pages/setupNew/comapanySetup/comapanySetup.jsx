import Layout from "../../../components/layout/Navbar";
import { makeStyles } from "@material-ui/core";
import { createStyles } from "@material-ui/core";
import React from "react";
import AdminCard from "../../../components/customCore/smallCard";
import Input from "../../../components/input/input";

const useStyles = makeStyles(
  (theme) =>
    createStyles({
      [theme.breakpoints.down("md")]: {
        // backgroundColor: "green",
        flexDirection: "column",
      },
      MainCardDiv: {
        display: "flex",
        flexWrap: "wrap",
      },
      MainContent: {
        fontSize: "2rem",
        color: "#000",
        fontWeight: 600,
      },
      SubContent: {
        fontSize: "1.5rem",
        color: "#501abf",
        fontWeight: 500,
      },
      Container: {
        maxWidth: "1100px",
        width: "100%",
        margin: "0 auto",
      },
      flexInputDivs: {
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        flexWrap: "wrap",
      },
    }),
  { withTheme: true }
);

function Dashboard() {
  const classes = useStyles();
  return (
    <Layout title="Dashboard">
      <div>
        <div className={classes.MainContent}>Setup</div>
      </div>
      <br />
      <br />
      <div>
        <div className={classes.SubContent}>Company</div>
      </div>
      <div className={classes.MainCardDiv}>
        <div className={classes.Container}>
          <div className={classes.flexInputDivs}>
            <Input
              placeholder="asasd"
              type="text"
              className="input-div-input"
              label="Company Name"
            />
            <Input
              placeholder="asasd"
              type="text"
              className="input-div-input"
              label="Company Short Name"
            />
            <Input
              placeholder="asasd"
              type="text"
              className="input-div-input"
              label="Registration number"
            />
            <Input
              placeholder="asasd"
              type="text"
              className="input-div-input"
              label="Contact Person Name"
            />
            <Input
              placeholder="asasd"
              type="text"
              className="input-div-input"
              label="Contact :Number -Land Line"
            />
            <Input
              placeholder="asasd"
              type="text"
              className="input-div-input"
              label="Contact Number -mobile"
            />
            <Input
              placeholder="asasd"
              type="text"
              className="input-div-input"
              label="Email"
            />
          </div>
        </div>
      </div>
      {/* </div> */}
    </Layout>
  );
}
export default Dashboard;
