import ControlPointIcon from "@mui/icons-material/ControlPoint";
import Layout from "../../../components/layout/Navbar";
import { CircularProgress, makeStyles } from "@material-ui/core";
import { createStyles } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import Input from "../../../components/input/input";
import LoadButton from "../../../components/buttons/loaderButton";
import axios from "../../../axios";
import { useToasts } from "react-toast-notifications";
import CompanySetup from "./comapanySetup";
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
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap",
      },
      btnDiv: {
        margin: "auto",
        width: "200px",
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
        {(Loading && Loading1) ? (
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
