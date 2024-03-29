import React from "react";
import { createTheme } from "@mui/material/styles";

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
const data = [
  {
    date: "23/02/2020",
    officer: "Ang Lee",
    remark: "Client is not there",
  },
  {
    date: "10/02/2020",
    officer: "Chong Lee",
    remark: "Customer did not come out",
  },
  {
    date: "21/02/2020",
    officer: "David Lee",
    remark: "Deliverd the letter",
  },
  {
    date: "23/02/2020",
    officer: "Ang Lee",
    remark: "Client is not there",
  },
  {
    date: "10/02/2020",
    officer: "Chong Lee",
    remark: "Customer did not come out",
  },
  {
    date: "21/02/2020",
    officer: "David Lee",
    remark: "Deliverd the letter",
  },
  {
    date: "23/02/2020",
    officer: "Ang Lee",
    remark: "Client is not there",
  },
  {
    date: "10/02/2020",
    officer: "Chong Lee",
    remark: "Customer did not come out",
  },
  {
    date: "21/02/2020",
    officer: "David Lee",
    remark: "Deliverd the letter",
  },
];
const paraLeft = {
  textAlign: "left",
  fontWeight: "600",
  backgroundColor: "#5016BF",
  color: "#fff",
  paddingLeft: "10px",
  border: "1px solid #fff",
};

// const paraRight = {
//   textAlign: "left !important",
//   fontWeight: "600",
//   backgroundColor: "#5016BF",
//   color: "#fff",
//   paddingLeft: "3rem !important",
// };
const paraProps = {
  backgroundColor: "#CCCC",
};
function Newrider() {
  // const [openModel, setOpenModel] = useState(false);
  // const [data, setData] = useState([]);

  return (
    <div className="rider-table table table-bordered border-primary">
      <table
        className="rider-table-head "
        style={{
          width: "100%",
          borderCollapse: "collapse",
          borderSpacing: 0,
          background: "#fff",
          border: "1px solid #fff",
        }}
      >
        {data.map((row, i) => (
          <tr key={i}>
            <td style={paraLeft}>
              <p variant="body">Site Visit Date</p>
            </td>
            <td style={paraProps}>
              <p variant="body">{row.date}</p>
            </td>
            <td style={paraLeft}>
              <p variant="body">Field Officer</p>
            </td>
            <td style={paraProps}>
              <p variant="body">{row.officer}</p>
            </td>

            <td style={paraLeft}>
              <p
                variant="body"
                style={{ textAlign: "left", paddingLeft: "3rem" }}
              >
                Remark:{row.remark}
              </p>
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
}

export default Newrider;
