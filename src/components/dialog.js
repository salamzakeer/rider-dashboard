import * as React from "react";
import { makeStyles } from "@mui/styles";
import {
  createStyles,
  DialogContent,
  DialogContentText,
} from "@material-ui/core";
import CloseIcon from "@mui/icons-material/Close";

import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";
const useStyles = makeStyles(() =>
  createStyles({
    Dialog: {
      // padding: "3rem",
    },
    ColDiv: {
      border: "2px solid #d9e1e7",
      background: "#F2F2F2 0% 0% no-repeat padding-box",
      borderRadius: "16px",
      width: "132px",
      height: " 52px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    Para: {
      color: "#809FB8",
      letterSpacing: "0.26px",
      textAlign: "left",
    },
    LotStart: {
      display: "flex",
      justifyContent: "space-between",
      marginBottom: "4rem",
    },
    MainDiv: {
      // display: "flex",
      justifyContent: "center",
      flexDirection: "column",
      margin: "10px",
    },
    DialogContent: {
      padding: "3rem",
      margin: "0rem 5rem",
    },
    TableCol: {
      display: "flex",
      // flexDirection: "Column",
      margin: "0 auto",
      justifyContent: "space-between",
    },
    Status: {
      color: "#000000 !important",
      // padding: "20px",
      letterSpacing: "0.26px",
      textAlign: "center",
    },
    StatusDiv: {
      width: "66px",
      height: "28px",
      background: "#C7D51A66 0% 0% no-repeat padding-box",
      borderRadius: "16px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      marginTop: "10px",
      COLOR: "#1AD598",
    },

    Close: {
      // margin: "10px",
      width: "96px",
      height: "94px",
      // border: "3px solid red",
      borderRadius: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      margin: "12px",
      background: "#ffffff",
      cursor: "pointer",
    },
    CloseDiv: {
      display: "flex",
      justifyContent: "flex-end",
    },
    Select: {
      borderRadius: "8px !important",
    },
    StartLotDiv: {
      display: "flex",
      justifyContent: "flex-end",
      alignItems: "center",
    },
    StartLot: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: "162px",
      height: "32px",
      background: "#55815C 0% 0% no-repeat padding-box",
      borderRadius: "8px",
      cursor: "pointer",
    },
    Heading: {
      color: "#3C9061",
      textTransform: "capitalize",
      fontSize: "5rem",
      margin: "0 auto",
      fontWeight: "600",
      textAlign: "center",
      marginBottom: "20px",
    },
  })
);

export default function DialogComponenet(props) {
  const { open,handleClose, children, title } = props;
  const classes = useStyles();
  // const [year, setYear] = React.useState("");
  // const handleChange = (event) => {
  //   setYear(event.target.value);
  // };
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      classes={{ paper: classes.DialogRoot }}
    >
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <DialogTitle
          sx={{
            // margin: "0 important",
            padding: "0 important",
            color: "#3C9061",
            fontSize: "40px",
            margin: "0 auto",
          }}
        >
          Week 1
        </DialogTitle>
        <DialogContent sx={{ margin: "0 important", padding: "0 important" }}>
          <DialogContentText>
            {/* To subscribe to this website, please enter your email address
          here. We will send updates occasionally. */}
          </DialogContentText>

          <DialogContentText
            sx={{
              opacity: "1",
              paddingTop: "20px",
              textTransform: "capitalize",
              fontWeight: 600,
              color: "#000000",
              fontSize: "20px",
            }}
          >
            Week 1 Data Was Created Successfully!
          </DialogContentText>
        </DialogContent>
      </form>
    </Dialog>
  );
}
