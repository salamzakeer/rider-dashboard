import React from "react";
import "./navbar.css";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

export default function SideNavigation(props) {
  const location = useLocation();
  const path = location.pathname;
  const [open, setOpen] = React.useState(true);
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
      <Link to="/export-data" style={{ textDecoration: "none" }}>
        <li
          className={`left-heading ${path === "/export-data" ? "actived" : ""}`}
        >
          <span>Export Data</span>
        </li>
      </Link>
      {/* extend-search */}
      <Link
        to=""
        style={{ textDecoration: "none" }}
        onClick={() => setOpen(!open)}
      >
        <li
          className={`left-heading ${
            path === "/import-data" || path === "/assign-data" ? "actived" : ""
          }`}
        >
          <span>Import Manager</span>
        </li>
      </Link>
      {open && (
        <>
          <Link to="/import-data" style={{ textDecoration: "none" }}>
            <li
              className={`left-heading ${
                path === "/import-data" ? "s-active" : ""
              }`}
            >
              <span style={{ paddingLeft: "20px" }}>Import Data</span>
            </li>
          </Link>
          <Link to="/assign-data" style={{ textDecoration: "none" }}>
            <li
              className={`left-heading ${
                path === "/assign-data" ? "s-active" : ""
              }`}
            >
              <span style={{ paddingLeft: "20px" }}>Assign Data</span>
            </li>
          </Link>
          <Link to="/assigned-data" style={{ textDecoration: "none" }}>
            <li
              className={`left-heading ${
                path === "/assigned-data" ? "s-active" : ""
              }`}
            >
              <span style={{ paddingLeft: "20px" }}>Assigned Data</span>
            </li>
          </Link>
        </>
      )}
      <Link to="/calendar" style={{ textDecoration: "none" }}>
        <li className={`left-heading ${path === "/calendar" ? "actived" : ""}`}>
          <span>Calendar</span>
        </li>
      </Link>
      <Link to="/rider" style={{ textDecoration: "none" }}>
        <li className={`left-heading ${path === "/rider" ? "actived" : ""}`}>
          <span>Riders Information's</span>
        </li>
      </Link>

      <Link to="/telecaller" style={{ textDecoration: "none" }}>
        <li
          className={`left-heading ${path === "/telecaller" ? "actived" : ""}`}
          to="/telecaller"
        >
          <span>Telecallers Information's</span>
        </li>
      </Link>

      <Link to="/setup" style={{ textDecoration: "none" }}>
        <li className={`left-heading ${path === "/setup" ? "actived" : ""}`}>
          <span>Setup</span>
        </li>
      </Link>
      <div onClick={Logout}>
        <li className={`left-heading`}>
          <span>Logout</span>
        </li>
      </div>
    </ul>
  );
}
