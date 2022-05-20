import { Typography } from "@mui/material";
import React from "react";
import Image from '../../assets/build.jpg'
export default function FileUploader(props) {

  return (
    <div >
      <img src={Image} alt="comming zoon " style={{ width: '100%' }} />
      <h4 style={{ textAlign: "center", color: "#5016BF" }}  >Comming soon</h4>

    </div>
  );
}