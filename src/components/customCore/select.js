import React, { useState } from "react";
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
function App(props) {
  const { options } = props;
  const [dropdown, setdropdown] = useState(0);
  const [Open, setOpen] = useState(false);

  const classes = useStyles({ Open });

  const dropdownListClick = (index, e) => {
    setdropdown(index);
    props.onSelectValue(options[dropdown].name, e);
  };

  return (
    <>
      <div
        class={`dropdown1 ${classes.dropbtn2}`}
        onClick={() => setOpen(!Open)}
      >
        <button class={`dropbtn1 ${classes.dropbtn1}`}>
          {options[dropdown].name.length < 16
            ? options[dropdown].name
            : options[dropdown].name.replace(
                /^(.{19}[^\s]*).*/,
                "$1" + "..."
              ) || "Dropdown"}
          <img src={DownArrow} class="img-down" />
        </button>
        <div class={`dropdown-content1`}>
          {options &&
            options.length > 0 &&
            options.map((value, index) => (
              <a
                onClick={(e) => dropdownListClick(index, e)}
                key={index}
                name={value}
              >
                {value.name}
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

export default App;
