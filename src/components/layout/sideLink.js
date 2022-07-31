import React from "react";
import "./navbar.css";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";

export default function SideNavigation(props) {
  const location = useLocation();
  const path = location.pathname;
  const [open, setOpen] = React.useState(false);
  const [open2, setOpen2] = React.useState(true);
  const [open3, setOpen3] = React.useState(true);
  const Logout = () => {
    localStorage.removeItem("userInfor");
    localStorage.removeItem("auth");
    window.location = "/login";
  };
  return (
    <ul className="nav-links">
      {/* {path} */}
      <Link to="/dashboard" style={{ textDecoration: "none" }}>
        <li
          className={`left-heading ${path === "/dashboard" ? "actived" : ""}`}
        >
          <span>Dashboard</span>
        </li>
      </Link>
      <Link
        to=""
        style={{ textDecoration: "none" }}
        onClick={() => setOpen(!open)}
      >
        <li
          className={`left-heading ${
            path === "/import-data-table" ||
            path === "/import-data" ||
            path === "/assign-data"
              ? "actived"
              : ""
          }`}
        >
          <span>Import Manager</span>
          <div className="icon-arrow-setup">
            {open ? <ArrowDropDownIcon /> : <ArrowDropUpIcon />}
          </div>

          {/*  */}
          {/* import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'; */}
        </li>
      </Link>
      {open && (
        <>
          <Link to="/import-data-table" style={{ textDecoration: "none" }}>
            <li
              className={`left-heading ${
                path === "/import-data-table" ? "s-active" : ""
              }`}
            >
              <div>
                <ArrowRightIcon />
              </div>
              <span style={{ paddingLeft: "20px" }}>Import Data</span>
            </li>
          </Link>
          {/* <Link to="/assign-data" style={{ textDecoration: "none" }}>
            <li
              className={`left-heading ${
                path === "/assign-data" ? "s-active" : ""
              }`}
            >
              <span style={{ paddingLeft: "20px" }}>Assign Data</span>
            </li>
          </Link> */}
          <Link to="/assigned-data" style={{ textDecoration: "none" }}>
            <li
              className={`left-heading ${
                path === "/assigned-data" ? "s-active" : ""
              }`}
            >
              {" "}
              <div>
                <ArrowRightIcon />
              </div>
              <span style={{ paddingLeft: "20px" }}>Assign Data</span>
            </li>
          </Link>
        </>
      )}
      <Link to="/export-data" style={{ textDecoration: "none" }}>
        <li
          className={`left-heading ${path === "/export-data" ? "actived" : ""}`}
        >
          <span>Export Manager</span>
        </li>
      </Link>
      {/* <Link to="/extend-search" style={{ textDecoration: "none" }}>
        <li
          className={`left-heading ${
            path === "/extend-search" ? "actived" : ""
          }`}
        >
          <span>Extend Search</span>
        </li>
      </Link> */}
      <Link to="/call-manager" style={{ textDecoration: "none" }}>
        <li
          className={`left-heading ${
            path === "/call-manager" ? "actived" : ""
          }`}
        >
          <span>Call Manager</span>
        </li>
      </Link>
      <Link to="/images" style={{ textDecoration: "none" }}>
        <li className={`left-heading ${path === "/images" ? "actived" : ""}`}>
          <span>Visual Manager</span>
        </li>
      </Link>

      {/* extend-search */}

      {/* <Link to="/calendar" style={{ textDecoration: "none" }}>
        <li className={`left-heading ${path === "/calendar" ? "actived" : ""}`}>
          <span>Calendar</span>
        </li>
      </Link> */}
      <Link
        to=""
        style={{ textDecoration: "none" }}
        onClick={() => setOpen2(!open2)}
      >
        <li
          className={`left-heading ${
            path === "/rider" || path === "/calendar" ? "actived" : ""
          }`}
        >
          <span>Human Rescource</span>
          <div className="icon-arrow-setup">
            {open2 ? <ArrowDropDownIcon /> : <ArrowDropUpIcon />}
          </div>
        </li>
      </Link>
      {open2 && (
        <>
          <Link to="/rider" style={{ textDecoration: "none" }}>
            <li
              className={`left-heading ${path === "/rider" ? "s-active" : ""}`}
            >
              {" "}
              <div>
                <ArrowRightIcon />
              </div>
              <span style={{ paddingLeft: "20px" }}> Employee Details</span>
            </li>
          </Link>
          {/* <Link to="/telecaller" style={{ textDecoration: "none" }}>
            <li
              className={`left-heading ${path === "/telecaller" ? "s-active" : ""}`}
            >
              <span style={{ paddingLeft: "20px" }}> Telecaller Details</span>
            </li>
          </Link> */}

          <Link to="/calendar" style={{ textDecoration: "none" }}>
            <li
              className={`left-heading ${
                path === "/calendar" ? "s-active" : ""
              }`}
            >
              {" "}
              <div>
                <ArrowRightIcon />
              </div>
              <span style={{ paddingLeft: "20px" }}>Employee Attendance</span>
            </li>
          </Link>
          {/* <Link to="#admin" style={{ textDecoration: "none" }}>
            <li
              className={`left-heading ${path === "/demo" ? "s-active" : ""}`}
            >
              {" "}
              <div>
                <ArrowRightIcon />
              </div>
              <span style={{ paddingLeft: "20px" }}> Administrator</span>
            </li>
          </Link> */}
        </>
      )}
      <Link
        to=""
        style={{ textDecoration: "none" }}
        onClick={() => setOpen3(!open3)}
      >
        <li
          className={`left-heading ${
            path === "/setup/company" || path === "/setup/policy"
              ? "actived"
              : ""
          }`}
        >
          <span>Setup</span>
          <div className="icon-arrow-setup">
            {open3 ? <ArrowDropDownIcon /> : <ArrowDropUpIcon />}
          </div>
        </li>
      </Link>
      {open3 && (
        <>
          <Link to="/setup/company" style={{ textDecoration: "none" }}>
            <li
              className={`left-heading ${
                path === "/setup/company" ? "s-active" : ""
              }`}
            >
              {" "}
              <div>
                <ArrowRightIcon />
              </div>
              <span style={{ paddingLeft: "20px" }}> Company</span>
            </li>
          </Link>

          <Link to="/setup/policy" style={{ textDecoration: "none" }}>
            <li
              className={`left-heading ${path === "/policy" ? "s-active" : ""}`}
            >
              {" "}
              <div>
                <ArrowRightIcon />
              </div>
              <span style={{ paddingLeft: "20px" }}>Policy</span>
            </li>
          </Link>
        </>
      )}
      {/* <Link to="/rider" style={{ textDecoration: "none" }}>
        <li className={`left-heading ${path === "/rider" ? "actived" : ""}`}>
          <span>Riders Information's</span>
        </li>
      </Link> */}

      {/* <Link to="/telecaller" style={{ textDecoration: "none" }}>
        <li
          className={`left-heading ${path === "/telecaller" ? "actived" : ""}`}
          to="/telecaller"
        >
          <span>Telecallers </span>
        </li>
      </Link> */}

      {/* <Link to="/setup" style={{ textDecoration: "none" }}>
        <li className={`left-heading ${path === "/setup" ? "actived" : ""}`}>
          <span>Setup</span>
        </li>
      </Link> */}
      <div onClick={Logout}>
        <li className={`left-heading`}>
          <span>Logout</span>
        </li>
      </div>
    </ul>
  );
}
