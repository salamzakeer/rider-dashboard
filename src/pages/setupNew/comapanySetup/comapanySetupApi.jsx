import Layout from "../../../components/layout/Navbar";
import { CircularProgress, makeStyles } from "@material-ui/core";
import { createStyles } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import axios from "../../../axios";
import CompanySetup from "./comapanySetup";

const useStyles = makeStyles(
  (theme) =>
    createStyles({
      [theme.breakpoints.down("md")]: {
        // backgroundColor: "green",
        flexDirection: "column",
      },
     
      MainContent: {
        fontSize: "2rem",
        color: "#000",
        fontWeight: 600,
      },
      center: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height: "90%",
      },
    }),
  { withTheme: true }
);

function SetUp() {
  const classes = useStyles();

  const [Loading, setLoading] = useState(false);
  const [Loading1, setLoading1] = useState(false);

  const AdminId = JSON.parse(localStorage.getItem("auth")).message.id || "";
  const [AllData, setAllData] = useState([]);
  const [AllDataArray, setAllDataArray] = useState([]);

  useEffect(() => {
    axios
      .get("/admindetails/getByAdminId/" + AdminId)
      .then((res) => {
        setAllData(res.data);
        setLoading(true);
      })
      .catch((err) => {
        setLoading(true);
      });
  }, [AdminId]);
  useEffect(() => {
    axios
      .get("/principals/getByAdminDetailsId/" + AdminId)
      .then((res) => {
        setAllDataArray(res.data);
        setLoading1(true);
      })
      .catch((err) => {
        setLoading1(true);
      });
  }, [AdminId]);
  // principals/getByAdminDetailsId/2
  return (
    <>
      <Layout title="Dashboard">
        <div>
          <div className={classes.MainContent}>Setup</div>
        </div>
        <br />
        <br />
        <br />
        {Loading && Loading1 ? (
          <CompanySetup AllData={AllData} AllDataArray={AllDataArray} />
        ) : (
          <div className={classes.center}>
            <CircularProgress style={{ color: "#501abf" }} />
          </div>
        )}
      </Layout>
    </>
  );
}
export default SetUp;
