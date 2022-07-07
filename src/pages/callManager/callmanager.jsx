import React, { useState } from "react";
import "react-toastify/dist/ReactToastify.css"; // import first
// import { useToasts } from "react-toast-notifications";
import DetailView from "./tables/details";
import SiteView from "./tables/siteview";
import CallDetails from "./tables/callDetails";
import Instruction from "./tables/instruction";
import Layout from "../../components/layout/Navbar";
import { Typography } from "@mui/material";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  formMain: {
    display: "flex",
    justifyContent: "space-around",

    // backgroundColor: "red",
    [theme.breakpoints.down("md")]: {
      // backgroundColor: "green",
      flexDirection: "column",
    },
  },
  select1: {
    width: "200px",
  },
  subDiv: {
    display: "flex",
    justifyContent: "space-around",
  },
  label: {
    paddingLeft: "40px",
    fontSize: "16px",
    color: "#00000A",
    opacity: "0.6",
    fontWeight: 600,
    paddingBottom: "4px",
  },
  filter: {
    width: "200px",
    border: "1px solid #ccc",
    height: "60px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "16px",
    fontFamily: "Poppins",
    opacity: " 0.7",
    borderRadius: "50px",
    [theme.breakpoints.down("md")]: {
      // backgroundColor: "green",
      flexDirection: "column",
    },
  },
}));
function CallManager() {
  const classes = useStyles();
  const [GetId, setGetId] = useState("");
  const [SelectUserObject, setSelectUserObject] = useState(null);
  const [SelectInput, setSelectInput] = useState("Details");

  const handleInputChange = (e) => {
    const { value } = e.target;
    setSelectInput(value);
  };
  const rows = [
    {
      id: "001",
      accountNo: "00011920",
      debtor: "rushanth",
      address: "Jaffna",
      jobId: "2021-ND-NC21-F16-RCF12",
      status: "new",
      arrears: "RM 1000.00",
      range: "Range 01",
      dcaName: "PIN SDN BHD",
    },
    {
      id: "002",
      accountNo: "00011920",
      debtor: "rushanth",
      address: "Jaffna",
      jobId: "2021-ND-NC21-F16-RCF12",
      status: "new",
      arrears: "RM 1000.00",
      range: "Range 01",
      dcaName: "PIN SDN BHD",
    },
    {
      id: "003",
      accountNo: "00011920",
      debtor: "rushanth",
      address: "Jaffna",
      jobId: "2021-ND-NC21-F16-RCF12",
      status: "new",
      arrears: "RM 1000.00",
      range: "Range 01",
      dcaName: "PIN SDN BHD",
    },
  ];
  const findUser = (e) => {
    setGetId(e.id);
    setSelectUserObject(e);
  };
  return (
    <Layout>
      <div>
        <div className="rider-info">Call Manager</div>
      </div>

      <div
        style={{
          overflowX: "auto",
          marginTop: "2rem",
        }}
        className="table-telecaller"
      >
        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
            borderSpacing: 0,
          }}
        >
          <tr>
            <th style={{ textAlign: "left" }}>
              {" "}
              <Typography variant="body">ID</Typography>{" "}
            </th>
            <th>
              <span variant="body">Account Number</span>{" "}
            </th>
            <th>
              <span variant="body">Debtor Name</span>{" "}
            </th>
            <th>
              <span variant="body">Address</span>{" "}
            </th>
            <th>
              <span variant="body">Job Id</span>{" "}
            </th>
            <th>
              <span variant="body">Status</span>{" "}
            </th>
            <th>
              <span variant="body">Arrears</span>{" "}
            </th>
            <th>
              <span variant="body">Range</span>{" "}
            </th>
            <th>
              <span variant="body">DCA Name</span>{" "}
            </th>
          </tr>
          {rows &&
            rows.map((row, i) => (
              <tr key={i} onClick={() => findUser(row)}>
                <td>
                  <span variant="body">{row.id}</span>
                </td>
                <td>
                  <span variant="body">{row.accountNo}</span>
                </td>
                <td>
                  <span variant="body">{row.debtor}</span>
                </td>
                <td>
                  <span variant="body">{row.address}</span>
                </td>
                <td>
                  <span variant="body">{row.jobId}</span>
                </td>
                <td>
                  <span variant="body">{row.status}</span>
                </td>
                <td>
                  <span variant="body">{row.arrears}</span>
                </td>
                <td>
                  <span variant="body">{row.range}</span>
                </td>
                <td>
                  <span variant="body">{row.dcaName}</span>
                </td>
              </tr>
            ))}
        </table>
      </div>

      <div style={{ margin: "2rem" }}>
        {GetId !== "" && (
          <>
            <div
              style={{
                width: "400px",
                margin: "0 0 2rem auto",
                height: "4rem",
              }}
            >
              <select
                style={{
                  width: "370px",
                  height: "100%",
                  color: "#501ABF",
                  border: "1px solid #501ABF",
                }}
                class="form-select"
                aria-label="Default select example"
                name=""
                onChange={handleInputChange}
              >
                <option name="Details" value="Details">
                  Details Veiw
                </option>
                <option name="Site" value="Site">
                  Site View Details
                </option>
                <option name="Call" value="Call">
                  Call Details
                </option>
                <option name="Instruction" value="Instruction">
                  Instruction
                </option>
              </select>
            </div>
            {/* {JSON.stringify(SelectUserObject)} */}
            <div class="tab-content" id="pills-tabContent">
              {SelectInput === "Details" && (
                <DetailView SelectUserObject={SelectUserObject} />
              )}
              {SelectInput === "Site" && (
                <SiteView SelectUserObject={SelectUserObject} />
              )}
              {SelectInput === "Call" && (
                <CallDetails SelectUserObject={SelectUserObject} />
              )}
              {SelectInput === "Instruction" && (
                <Instruction SelectUserObject={SelectUserObject} />
              )}
            </div>
          </>
        )}
      </div>
    </Layout>
  );
}
export default CallManager;
