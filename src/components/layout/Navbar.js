import React from "react";
import "./navbar.css";
import MenuIcon from "@mui/icons-material/Menu";
import Avatar from "@mui/material/Avatar";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import SideNavigation from "./sideLink";
import { Link } from "react-router-dom";

import ProfilePic from "../../assets/Mask Group 5.png";
import DownPic from "../../assets/down-filled-triangular-arrow.png";

class Layout extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      leftOpen: true,
      rightOpen: true,
    };
  }

  toggleSidebar = (event) => {
    let key = `${event.currentTarget.parentNode.id}Open`;
    this.setState({ [key]: !this.state[key] });
  };

  render() {
    let leftOpen = this.state.leftOpen ? "open" : "closed";
    let rightOpen = this.state.rightOpen ? "open" : "closed";

    return (
      <div id="layout">
        <div id="left" className={leftOpen}>
          <div className="icon" onClick={this.toggleSidebar}>
            {/* &equiv; */}
            <MenuIcon />
          </div>
          <div className={`sidebar ${leftOpen}`}>
            <div className="header">
              {/* <h3 className="title">Left header</h3> */}
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
                  <Link to="/userprofile">
                    <Avatar
                      sx={{ width: "60px", height: "60px" }}
                      src={ProfilePic}
                      alt="user"
                    >
                      R
                    </Avatar>
                  </Link>
                  <span className="main-right-profile-name">Name</span>
                  <Link to="/userprofile">
                    <ArrowDropDownIcon
                      sx={{ color: "#5016BF" }}
                      color="#5016BF"
                    />
                  </Link>
                </div>
              </div>
              {/* </h3> */}

              {leftOpen && <SideNavigation />}
            </div>
          </div>
        </div>

        <div id="main">
          <div className="header">
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
            </h3>
            {/* <div className="main-right-profile">
              <Avatar sx={{ width: "60px", height: "60px" }}>R</Avatar>

              <p className="main-right-profile-name">Name</p>
              <ArrowDropDownIcon sx={{ color: "#5016BF" }} color="#5016BF" />
            </div> */}
          </div>
          <div className="content2">{this.props.children}</div>
        </div>
      </div>
    );
  }
}

export default Layout;
