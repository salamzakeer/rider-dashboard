import React, { useState, useEffect } from "react";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import Sidebar from "../../../components/sidebar/sidebar";
import Navbar from "../../../components/navbar/navbar";
import AddRider from "../../../components/Modal/AddRiderPopup";

import ProfilePic from "../../../assets/Mask Group 5.png";
import DeleteBtn from "../../../assets/delete.png";

import "./style.css";

const theme = createTheme();

theme.typography.h3 = {
  typography: {
    fontFamily: ["Poppins"].join(","),
  },

  fontSize: "1.8rem",
  fontWeight: 400,
  fontStyle: "normal",

  "@media (max-width:850px)": {
    fontSize: "1.5rem",
  },
  "@media (max-width:400px)": {
    fontSize: "1rem",
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "1.8rem",
  },
};
theme.typography.h1 = {
  typography: {
    fontFamily: ["Poppins"].join(","),
  },

  fontSize: "2.5rem",
  color: "#5016BF",
  "@media (max-width:800px)": {
    fontSize: "1.5rem",
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "2.4rem",
  },
};
function createData(I, ID, Name, Email) {
  return { I, ID, Name, Email };
}

const rows = [
  createData("001", "RD001", "Banna Andrian", "Bannaandrian@gmail.com"),
  createData("001", "RD002", "Elver Andries", "Elverandries@gmail.com"),
  createData("001", "RD003", "Andria Elvera", "Andriaelvera@gmail.com"),
  createData("001", "RD004", "Bangaly Andriana", "Bangalyandriana@gmail.com"),
  createData("001", "RD005", "Andris Banta", "Andrisbanta@gmail.com"),
];
const data = [
  {
    id: "ID",
    IdNo: "001",
    C: "IS Name Correct",
    CNo: "Yes",

    Arrears: "Arrears",
    ArrearsNo: "RM1000.00",
    Sum: "",
  },
  {
    id: "Account Number",
    IdNo: "1000100",
    C: "Nationality(m/f)",
    CNo: "M",
    // I: "Current balance",
    Arrears: "Current balance",
    ArrearsNo: "RM1000.00",
    Sum: "",
  },
  {
    id: "Bill No",
    IdNo: "X1010001",
    C: "Owner's Tel No 1",
    CNo: "032232322",
    Arrears: "Status Droupdown",
    ArrearsNo: "New",
    Sum: "",
  },
  {
    id: "LA Name",
    IdNo: "KAMPAR",
    C: "Owner's Tel No2",
    CNo: "032232322",
    Arrears: "",
    ArrearsNo: "PTP",
    Sum: "If ptf must display date when",
  },
  {
    id: "Owner 1",
    IdNo: "Abu bin Basker",
    C: "Oner's tel no 3",
    CNo: "",
    Arrears: "",
    ArrearsNo: "Paid",
    Sum: "",
  },
  {
    id: "props Add1",
    IdNo: "C-01-05",
    C: "Tanant Phone1",
    CNo: "",
    Arrears: "",
    ArrearsNo: "",
    Sum: "",
  },
  {
    id: "props Add2",
    IdNo: "C-01-05",
    C: "Tanant Phone1",
    CNo: "",
    Arrears: "",
    ArrearsNo: "",
    Sum: "",
  },
  {
    id: "props Add3",
    IdNo: "C-01-05",
    C: "Tanant Phone1",
    CNo: "",
    Arrears: "",
    ArrearsNo: "",
    Sum: "",
  },
  {
    id: "props Add4",
    IdNo: "C-01-05",
    C: "",
    CNo: "",
    Arrears: "",
    ArrearsNo: "",
    Sum: "",
  },
  {
    id: "Arrears Date",
    IdNo: "1/03/2022",
    C: "property Usage",
    CNo: "",
    Arrears: "Arrears",
    ArrearsNo: "Others",
    Sum: "",
  },
  {
    id: "Date of visit",
    IdNo: "1/03/2022",
    C: "property Usage",
    CNo: "",
    Arrears: "Range",
    ArrearsNo: "Range 5",
    Sum: "",
  },
  {
    id: "Owner Correct",
    IdNo: "Yes",
    C: "Name of shop / Company",
    CNo: "",
    Arrears: "Remark",
    ArrearsNo: "",
    Sum: "",
  },
  {
    id: "Owner /Tenat",
    IdNo: "OWNER",
    C: "",
    CNo: "",
    Arrears: "Outstanding",
    ArrearsNo: "900",
    Sum: "",
  },
  {
    id: "class[D,C,I,G]",
    IdNo: "commercial",
    C: "",
    CNo: "",
    Arrears: "Payment",
    ArrearsNo: "100",
    Sum: "",
  },
  {
    id: "DR code",
    IdNo: "DR05",
    C: "",
    CNo: "",
    Arrears: "",
    ArrearsNo: "",
    Sum: "",
  },
];
function Newrider() {
  const [openModel, setOpenModel] = useState(false);
  // const [data, setData] = useState([]);

  return (
    <div className="rider-table table table-bordered border-primary">
      <table className="rider-table-head ">
        {data.map((row, i) => (
          <tr key={i}>
            <td>
              <p variant="body">{row.id}</p>
            </td>
            <td>
              <p variant="body">{row.IdNo}</p>
            </td>
            <td>
              <p variant="body">{row.C}</p>
            </td>
            <td>
              <p variant="body">{row.CNo}</p>
            </td>

            <td>
              <p variant="body">{row.Arrears}</p>
            </td>
            <td>
              <p variant="body">{row.ArrearsNo}</p>
            </td>
            <td>
              <p variant="body">{row.Sum}</p>
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
}

export default Newrider;
