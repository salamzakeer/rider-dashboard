import { makeStyles } from "@material-ui/core";
import { createStyles } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles(
  (theme) =>
    createStyles({
      heading: {
        fontSize: "18px",
        color: "#501abf",
        textAlign: "center",
        fontWeight: "600",
      },
      paraDiv: {
        marginTop: "1.5rem",
        maxWidth: "600px",
        width: "100%",
      },
      para: {
        color: "#afafad",
        margin: "0",
      },
    }),
  { withTheme: true }
);

function AlertBox(props) {
  const { onClose, onClick } = props;
  const classes = useStyles();
  return (
    <div
      className="custom-ui"
      style={{
        background: "#fff",
        padding: "2rem",
        boxShadow: "rgb(130 131 133) 8px 11px 14px 4px",
        borderRadius: "22px",
      }}
    >
      <h1 className={classes.heading}>Are you sure ?</h1>
      <div className={classes.paraDiv}>
        <p className={classes.para}>Are you Sure to delete the Data ?</p>
        <p className={classes.para}>You can't undo this action</p>
      </div>
      <br />
      {/* <div style={{ display: "flex", justifyContent: "space-between" }}>
        <button onClick={onClose} className="btn btn-custom-style-no">
          No
        </button>
        <button
          onClick={onClick}
          className="btn btn-custom-style"
          style={{
            borderRadius: "12px !important",
            backgroundColor: "#501abf !important",
          }}
        >
          Yes
        </button>
      </div> */}
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <button
          onClick={onClose}
          className="btn btn-custom-new-curve custom-cancel"
        >
          Cancel
        </button>
        <button
          onClick={onClick}
          className="btn btn-custom-new-curve custom-delete"
          style={{
            borderRadius: "12px !important",
            backgroundColor: "#501abf !important",
          }}
        >
          Delete Data
        </button>
      </div>
    </div>
  );
}
export default AlertBox;
// {/* <div */}
// className="custom-ui"
// style={{
//   background: "#fff",
//   padding: "2rem",
//   boxShadow: "rgb(130 131 133) 8px 11px 14px 4px",
//   borderRadius: "12px",
// }}
// >
// <h1 className={classes.heading}>Are you sure ?</h1>
// <br />
// <div style={{ display: "flex", justifyContent: "space-between" }}>
//   <button onClick={onClose} className="btn btn-custom-style-no">
//     No
//   </button>
//   <button
//     onClick={onClick}
//     className="btn btn-custom-style"
//     style={{
//       borderRadius: "12px !important",
//       backgroundColor: "#501abf !important",
//     }}
//   >
//     Yes
//   </button>
// </div>
// </div>
