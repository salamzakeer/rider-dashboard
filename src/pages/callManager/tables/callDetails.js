import React from "react";
import Typography from "@mui/material/Typography";
import { createTheme } from "@mui/material/styles";
// import AddRider from "../../../components/Modal/AddRiderPopup";
// import ProfilePic from "../../../assets/Mask Group 5.png";
// import DeleteBtn from "../../../assets/delete.png";

import "./style.css";
// callManager.module.css
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

const data = [
  {
    tele: "sheila",
    date: "19/02/2022",
    duration: "5min",
    Status: "PTP",
    remark: "nice Client",
    outstanding: "RM220",
  },
  {
    tele: "Devi",
    date: "28/02/2022",
    duration: "3min",
    Status: "RTP",
    remark: "Refuse to pay",
    outstanding: "RM200",
  },
  {
    tele: "sheila",
    date: "19/02/2022",
    duration: "5min",
    Status: "PTP",
    remark: "nice Client",
    outstanding: "RM220",
  },
  {
    tele: "Devi",
    date: "28/02/2022",
    duration: "3min",
    Status: "RTP",
    remark: "Refuse to pay",
    outstanding: "RM200",
  },
  {
    tele: "sheila",
    date: "19/02/2022",
    duration: "5min",
    Status: "PTP",
    remark: "nice Client",
    outstanding: "RM220",
  },
  {
    tele: "Devi",
    date: "28/02/2022",
    duration: "3min",
    Status: "RTP",
    remark: "Refuse to pay",
    outstanding: "RM200",
  },
  {
    tele: "sheila",
    date: "19/02/2022",
    duration: "5min",
    Status: "PTP",
    remark: "nice Client",
    outstanding: "RM220",
  },
  {
    tele: "Devi",
    date: "28/02/2022",
    duration: "3min",
    Status: "RTP",
    remark: "Refuse to pay",
    outstanding: "RM200",
  },
];
const paraLeft = {
  textAlign: "left",
  fontWeight: "600",
  backgroundColor: "#5016BF",
  color: "#fff",
  paddingLeft: "10px",
};
function Newrider() {
  // const [openModel, setOpenModel] = useState(false);
  // const [data, setData] = useState([]);

  return (
    <div className="rider-table table-bordered border-primary">
      <table className="rider-table-head ">
        <tr style={paraLeft}>
          <th className="">
            <Typography variant="body">Telecaller</Typography>{" "}
          </th>
          <th>
            {" "}
            <Typography variant="body">Date</Typography>{" "}
          </th>
          <th>
            <Typography variant="body">Duration</Typography>{" "}
          </th>
          <th>
            <Typography variant="body">Status</Typography>{" "}
          </th>
          <th>
            <Typography variant="body">Remark</Typography>{" "}
          </th>
          <th>
            <Typography variant="body">Outstanding</Typography>{" "}
          </th>
        </tr>
        {data.map((row, i) => (
          <tr
            key={i}
            style={{ backgroundColor: "#cccc", border: "1px solid #fff" }}
          >
            <td>
              <p variant="body">{row.tele}</p>
            </td>
            <td>
              <p variant="body">{row.date}</p>
            </td>
            <td>
              <p variant="body">{row.duration}</p>
            </td>
            <td>
              <p variant="body">{row.Status}</p>
            </td>

            <td>
              <p variant="body">{row.remark}</p>
            </td>
            <td>
              <p variant="body">{row.outstanding}</p>
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
}

export default Newrider;
