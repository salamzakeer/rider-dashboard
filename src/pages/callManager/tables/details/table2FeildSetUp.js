import { makeStyles } from "@material-ui/core";
import { createStyles } from "@material-ui/core";
import React from "react";
import Datapicker from "../../../../components/customCore/datapickerCallManger";
const useStyles = makeStyles(
  (theme) =>
    createStyles({
      // [theme.breakpoints.down("sm")]: {
      //     fontSize: "1.5rem",
      //   },
      // return <AddRider closeModel={setOpenModel} />;
      inputDiv: {
        borderBottom: "4px solid #fff",
        "&:n+1": {
          backgroundColor: "#d6eeee",
        },
      },
      input: {
        // width: "200px",
        backgroundColor: "inherit",
        border: "none",
        outline: "none",
        width: "100%",
        padding: "10px",
      },

      keys: {
        background: "#501abf",
        // marginBottom: 2,
        borderBottom: "4px solid #fff",
        color: "#fff",
      },
      select: {
        border: "none",
        paddingLeft: "4px !important",
        backgroundPosition: "right 14px center !important",
        backgroundColor: "inherit !important",
      },
    }),
  { withTheme: true }
);

function Dashboard(props) {
  const classes = useStyles();
  const {
    keys,
    value,
    onChange,
    name,
    id,
    options,
    disabled,
    datepicker,
    datepickerC,
  } = props;

  return (
    <>
      <td className={classes.keys}>{keys}</td>
      {!datepicker && !options && (
        <td className={classes.inputDiv}>
          <input
            value={value}
            onChange={onChange}
            name={name}
            id={id}
            className={classes.input}
          ></input>
        </td>
      )}
      {!datepicker && options && options.length > 0 && (
        <td>
          <div className={classes.select1}>
            {/* <label className={classes.label}>Job Name</label> */}
            <select
              className={`${classes.select} form-select`}
              aria-label="Default select example"
              onChange={onChange}
              name={name}
              disabled={disabled}
              defaultValue={value}
            >
              <option value={value} disabled>
                {value}
              </option>{" "}
              {options.map((item, i) => (
                <option
                  key={i}
                  name={item.name}
                  value={item.name}
                  style={
                    item.name == value || value == null
                      ? { display: "none" }
                      : { display: "block" }
                  }
                >
                  {item.name}
                </option>
              ))}
            </select>
          </div>
        </td>
      )}
      {datepicker && <td className={classes.inputDiv}>{datepickerC}</td>}
    </>
  );
}
export default Dashboard;
