import React, { useRef } from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
export default function FileUploader(props) {

  const fileInput = useRef(null);
  const Input = styled("input")({
    // display: "none",
    background: "red",
    height: "70px",
    paddingTop: "22px",
  });
  
  return (
    <div style={{ position: "relative", height: "50px", display: "block ruby" }}>
      <label
        htmlFor={props.id}
        // style={{ height: "50px", paddingTop: "49px", margin: "40px 10px 40px" }}
      >
        <div className = "uploadbtn"
          style={{
            // width: "157px",
            // height: "49px",
            border: "2px solid #501ABF",
            opacity: "0.5",
            display: "flex",
            alignItems: "center",
            borderRadius: "44px",
            justifyContent: "center",
            // font: "normal 600 21px Poppins",
            color: "#501ABF"
            
          }}
          variant="contained"
          component="span"
        >
          {props.placeholder}
        </div>
      </label>
      <input
        style={{
          display: "none",
          background: "red",
          height: "50px",
          paddingTop: "22px",
          position: "absolute",
          left: 0,
          opacity: 0,
          top: "0px",
          width: "157px",
        }}
        accept={props.accept}
        id={props.id}
        multiple
        type="file"
        onChange={props.onChange}
        name={props.name}
        value={props.value}
      />
    </div>
  );
}