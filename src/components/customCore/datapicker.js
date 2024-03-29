import React from "react";
import { makeStyles } from "@material-ui/core";
import "react-datepicker/dist/react-datepicker.css";
// import DatePicker from "react-datepicker";
import { default as DatePick } from "react-date-picker";

const useStyles = makeStyles((theme) => ({
  input: {
    fontFamily: "sans-serif",
    fontSize: "16px",
    [theme.breakpoints.down("lg")]: {
      fontSize: "14px !important",
    },
    height: "45px",
    // maxWidth: "640px !important",
    width: "100%",
    color: "#ccc",
    "& .react-date-picker__wrapper": {
      padding: "0 22px",
      borderColor: "#ccc",
      borderRadius: "50px",
      minWidth: "248px",
    },
    "& .react-date-picker--open": {
      borderColor: "red",
    },
    "& .react-date-picker__inputGroup__input": {
      color: "#ccc",
      fontWeight: "600",
    },
    "& .react-date-picker__clear-button svg": {
      color: "#5016BF ",
      stroke: "red !important",
    },
    "& .react-date-picker__button svg": {
      stroke: "#5016BF ",
    },
    // react-date-picker__button
  },
  label: {
    paddingLeft: "22px",
    fontSize: "16px",
    color: "#00000A",
    opacity: "0.6",
    fontWeight: 600,
    paddingBottom: "4px",

    [theme.breakpoints.down("lg")]: {
      fontSize: "14px !important",
    },
  },
}));

export default function App(props) {
  const classes = useStyles();
  const { value, onChange, label, required } = props;
  return (
    <div>
      <label className={classes.label}>{label}</label>
      <div>
        <DatePick
          // minDate={new Date()}
          value={value}
          onChange={onChange}
          className={classes.input}
          required={required}
          // dateFormayyy="yyyy-mm-dd"
          format="dd-MM-yyyy"
        />
      </div>
    </div>
  );
}
