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
    width: "280px !important",
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 100,
    "& label": {
      marginTop: "-7px",
    },
    "& div": {
      "& .MuiSelect-outlined &.MuiSelect-outlined": {},
      paddingTop: "18px !important",
      height: "38px",

      "& fieldset": {
        height: "45px",
        borderRadius: "100px",
      },
    },
  },
  dense: {
    marginTop: theme.spacing(2),
  },
  menu: {
    width: 300,
    "& div": {
      background: "blue",
      top: "110px !important",
      left: "294 !important",
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
