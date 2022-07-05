import React from "react";
import { makeStyles } from "@material-ui/core";
import "react-datepicker/dist/react-datepicker.css";
// import DatePicker from "react-datepicker";
import { default as DatePick } from "react-date-picker";

const useStyles = makeStyles({
  input: {
    fontFamily: "sans-serif",
    fontSize: "16px",
    height: "60px",
    // maxWidth: "640px !important",
    width: "100%",
    color: "#ccc",
    "& .react-date-picker__wrapper": {
      padding: "0 40px",
      borderColor: "#ccc",
      borderRadius: "50px",
    },
    "& .react-date-picker--open": {
      borderColor: "red",
    },
    "& .react-date-picker__inputGroup__input": {
      color: "#ccc",
      fontWeight: "600",
    },
    "& .react-date-picker__clear-button $svg": {
      color: "#5016BF ",
      stroke: "red !important",
    },
    "& .react-date-picker__button $svg": {
      //   color: "#5016BF ",
      stroke: "#5016BF ",
    },
    // react-date-picker__button
  },
  label: {
    paddingLeft: "40px",
    fontSize: "16px",
    color: "#00000A",
    opacity: "0.6",
    // fontWeight: 00,
  },
});

export default function App(props) {
  const classes = useStyles();
  const { value, onChange, label, required } = props;
  return (
    <div>
      <label className={classes.label}>{label}</label>
      <div>
        <DatePick
          minDate={new Date()}
          value={value}
          onChange={onChange}
          className={classes.input}
          required={required}
        />
      </div>
    </div>
  );
}
