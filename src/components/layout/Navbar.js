import React from "react";
import "./navbar.css";
import MenuIcon from "@mui/icons-material/Menu";
import Avatar from "@mui/material/Avatar";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import SideNavigation from "./sideLink";
import { Link } from "react-router-dom";

import ProfilePic from "../../assets/Mask Group 5.png";
import { Tooltip } from "@mui/material";
// import DownPic from "../../assets/down-filled-triangular-arrow.png";

class Layout extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      leftOpen: window.matchMedia("(min-width: 840px)").matches ? true : false,
      rightOpen: true,
      color: window.matchMedia("(min-width: 768px)").matches ? "green" : "red",
      userName: "",
    };
  }

  toggleSidebar = (event) => {
    let key = `${event.currentTarget.parentNode.id}Open`;
    this.setState({ [key]: !this.state[key] });
  };
  componentDidMount() {
    const adjustScreenSize = (e) => this.setState({ color: "blue" });
    const adjustScreenSizes = (e) =>
      this.setState({ color: "blue", leftOpen: false });
    // window
    //   .matchMedia("(min-width: 768px)")
    //   .addEventListener("change", adjustScreenSize);
    // window
    //   .matchMedia("(max-width: 840px)")
    //   .addEventListener("change", adjustScreenSizes);
  }

  render() {
    let leftOpen = this.state.leftOpen ? "open" : "closed";
    let rightOpen = this.state.rightOpen ? "open" : "closed";
    let color = this.state.color;

    const Auth = localStorage.getItem("userInfor");
    const message = JSON.parse(Auth);
    const token = message.message.token;
    const AdminName = message.message.email;
    return (
      <div id="layout">
        <div id="left" className={leftOpen}>
          <div className="icon" onClick={this.toggleSidebar}>
            {/* &equiv; */}
            <MenuIcon />
          </div>
          <div className={`sidebar ${leftOpen}`}>
            <div className="header">
              <h3 className="title" style={{ backgroundColor: color }}>
                {/* Left header */}
              </h3>
            </div>
            <div className="content">
              {/* <h3 className="left-heading-profile"> */}
              <div className="mainNav">
                {/* <div className="close-menubtn">
                <Link to='#' className='menu-bars'>
                    <img src={MenuPic} alt="Menu" onClick={showSidebar} />
                </Link>
            </div> */}

                <div className="main-right-profile">
                  <div to="/userprofile">
                    <Avatar
                      sx={{ width: "60px", height: "60px" }}
                      src={ProfilePic}
                      alt="user"
                    >
                      R
                    </Avatar>
                  </div>
                  {/* <div
                    className="main-right-profile-name"
                    // style={{ backgroundColor: color }}
                  >
                    {AdminName}
                   
                  </div> */}
                  <Tooltip
                    title={AdminName}
                    className="main-right-profile-name"
                    arrow
                  >
                    <div> {AdminName}</div>
                  </Tooltip>
                  <div to="/userprofile">
                    <ArrowDropDownIcon
                      sx={{ color: "#5016BF" }}
                      color="#5016BF"
                    />
                  </div>
                </div>
              </div>
              {/* </h3> */}

              {leftOpen && <SideNavigation />}
            </div>
          </div>
        </div>

        <div id="main">
          {/* <div className="header">
            <h3
              className={`
              title
              ${"left-" + leftOpen}
              ${"right-" + rightOpen}
              `}
              style={
                {
                  // fontSize: "40px",
                }
              }
            >
              {this.props.title}
            </h3> */}
          {/* <div className="main-right-profile">
              <Avatar sx={{ width: "60px", height: "60px" }}>R</Avatar>

              <p className="main-right-profile-name">Name</p>
              <ArrowDropDownIcon sx={{ color: "#5016BF" }} color="#5016BF" />
          </div>
            </div> */}
          <div className="content2">{this.props.children}</div>
        </div>
      </div>
    );
  }
}

export default Layout;
