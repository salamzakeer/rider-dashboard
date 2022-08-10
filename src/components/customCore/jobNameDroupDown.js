import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core";
import { createStyles } from "@material-ui/core";
import "./select.css";
import DownArrow from "../../assets/down.png";

const useStyles = makeStyles(
  (theme) =>
    createStyles({
      dropbtn2: {
        width: 300,
        "&:hover > div": {
          // display: (props) =>
          //   props.Open === true ? "block !important" : "block !important",
          display: "block !important",
          borderTop: "none !important",
        },
        "&:hover > .dropbtn1": {
          borderBottom: "none !important",
          borderRadius: "24px 24px  0px 0px  !important",
        },
        "&:hover > button .img-down": {
          transform: "rotate(0.5turn)",
          transition: "0.5",
          transitionDuration: "500ms",

          // borderRadius: "24px 24px  0px 0px  !important",
        },
        //
        // transform: rotate(0.5turn);
        "& .dropbtn1": {
          // background: "blue !important",
        },
      },
    }),
  { withTheme: true }
);
function BasicSelect2(props) {
  const { options } = props;
  const [dropdown, setdropdown] = useState(0);
  const [Open, setOpen] = useState(false);

  const classes = useStyles({ Open });

  const dropdownListClick = (index, e) => {
    setdropdown(index);
    props.onSelectValue(options[dropdown].jobName, e);
  };

  useEffect(() => {
    // alert(1);
    console.log(1);
    if (options && options.length > 0) {
      props.onSelectValue(options[dropdown].id);
    }
  }, [props]);

  const handleKeyDown = (index) => (e) => {
    switch (e.key) {
      case " ":
      case "SpaceBar":
      case "Enter":
        e.preventDefault();
        // setSelectedOption(index);
        // setIsOptionsOpen(false);
        break;
      default:
        break;
    }
  };
  console.log(
    options && options.length > 0
      ? options[dropdown] &&
          (options[dropdown].jobName.length < 16
            ? options[dropdown].jobName
            : options[dropdown].jobName.replace(
                /^(.{19}[^\s]*).*/,
                "$1" + "..."
              ))
      : //
        "Select"
  );
  return (
    <>
      <div
        className={`dropdown1 ${classes.dropbtn2}`}
        onClick={() => setOpen(!Open)}
      >
        {/* {JSON.stringify(options)} */}
        <button className={`dropbtn1 ${classes.dropbtn1}`}>
          {options && options.length > 0
            ? options[dropdown] &&
              (options[dropdown].jobName.length < 16
                ? options[dropdown].jobName
                : options[dropdown].jobName.replace(
                    /^(.{19}[^\s]*).*/,
                    "$1" + "..."
                  ))
            : //
              "Select"}
          <img src={DownArrow} className="img-down" />
        </button>
        <div className={`dropdown-content1`}>
          {/* <a
            style={options ? {display:"none"}:{display:"block"}}
          >
            Select
          </a> */}
          {options &&
            options.length > 0 &&
            options.map((value, index) => (
              <a
                onClick={(e) => dropdownListClick(index, e)}
                key={index}
                name={value}
                onKeyDown={handleKeyDown(index)}
              >
                {value.jobName}
              </a>
            ))}
        </div>
      </div>

      {/* <div className="dropdown">
        <button
          className="btn btn-secondary dropdown-toggle"
          type="button"
          id="dropdownMenuButton"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        ></button>
        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
          {options.map((value, index) => {
            return (
              <>
                <a
                  className="dropdown-item"
                  href="#"
                  onClick={() => dropdownListClick(index)}
                  key={index}
                >
                  {value}
                </a>
              </>
            );
          })}
        </div>
      </div> */}
    </>
  );
}

export default BasicSelect2;
