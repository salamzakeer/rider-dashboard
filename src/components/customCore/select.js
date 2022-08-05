import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";

const genders = [
  {
    value: "M",
    label: "Male",
  },
  {
    value: "F",
    label: "Female",
  },
  {
    value: "O",
    label: "Other",
  },
];

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexWrap: "wrap",
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 100,
    "& div": {
      "& fieldset": {
        height: "45px",
      },
    },
  },
  dense: {
    marginTop: theme.spacing(2),
  },
  menu: {
    width: 100,
    "& div": {
      background: "red !important",
      background: "blue",
      top: "124px !important",
    },
  },
}));

export default function OutlinedTextFields() {
  const classes = useStyles();
  const [gender, setGender] = React.useState("");

  const handleChange = (event) => {
    setGender(event.target.value);
  };

  return (
    <form className={classes.container} noValidate autoComplete="off">
      <TextField
        id="outlined-select-gender"
        select
        label={gender === "" ? "Gender" : ""}
        className={classes.textField}
        value={gender}
        onChange={handleChange}
        InputLabelProps={{ shrink: false }}
        SelectProps={{
          MenuProps: {
            className: classes.menu,
          },
        }}
        margin="normal"
        variant="outlined"
      >
        {genders.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>
    </form>
  );
}
