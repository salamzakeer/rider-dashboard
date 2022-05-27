import React from "react";
import "./style.css";
import { createTheme } from "@mui/material/styles";


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

function Instruction(Instruction) {
  const { SelectUserObject } = Instruction;
  // const [data, setData] = useState([]);
  // console.log(SelectUserObject);

  const spans = {
    fontWeight: "600",
  };
  return (
    <div className="instruction">
      <p>
        Dear Owner1,{" "}
        <span style={{ fontWeight: "600" }}>{SelectUserObject.debtor}</span>
      </p>
      <p>
        I am calling from on behalf{" "}
        <span style={spans}> {SelectUserObject.dcaName} </span> with regards to
        your outstanding payment for{" "}
        <span style={spans}>(Principal) (IWK)</span>
        Before we proceed, I would like to do some verification ,
      </p>
      <p>
        Owner1: <span style={spans}>{SelectUserObject.debtor}</span>
      </p>
      <p>
        Address:
        <span style={spans}>{SelectUserObject.address}</span>
      </p>
      <p>
        Account Number :{" "}
        <span style={spans}> {SelectUserObject.accountNo}</span>
      </p>
      <p>
        You have the following ,
        <span style={spans}>{SelectUserObject.arrears}</span> could you please
        make the payment as soon as possible.
      </p>
    </div>
  );
}

export default Instruction;
