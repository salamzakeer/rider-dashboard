
import "./sidebar.css";
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import MenuPic from '../../assets/menu.png'
// import Close from '../../assets/close.png'
import { useLocation } from 'react-router-dom';

function Sidebar(props) {
    const location = useLocation();
    console.log(location.pathname)
    const [slider, setSidebar] = useState(false);
    const path = location.pathname
    const showSidebar = () => setSidebar(!slider);

    const [open, setOpen] = React.useState(false);
    // console.log("hiii")

    return (

        <div className="navigation" >

            <div className="menubtn">
                <Link to='#' className='menu-bars'>
                    <img src={MenuPic} alt="Menu" onClick={showSidebar} />
                </Link>
            </div>
            {/* {props.active } */}


            <div className={slider ? 'nav-menu active' : 'nav'}>


                {/* <div className="dash"> <p>Dashboard</p></div> */}

                <ul className="nav-links">
                    <Link to="/dashboard" style={{ textDecoration: 'none' }}>
                        <li className={`nav-option ${path === "/dashboard" ? "active" : ""}`} ><span>Dashboard</span></li>
                    </Link>
                    <Link to="/extend-search" style={{ textDecoration: 'none' }}>
                        <li className={`nav-option ${path === "/extend-search" ? "active" : ""}`} ><span>Extend Search</span></li>
                    </Link>
                    <Link to="/call-manager" style={{ textDecoration: 'none' }}>
                        <li className={`nav-option ${path === "/call-manager" ? "active" : ""}`} ><span>Cazll Manager</span></li>
                    </Link>
                    {/* extend-search */}
                    <Link to="" style={{ textDecoration: 'none' }} onClick={() => setOpen(!open)}  >
                        <li className={`nav-option ${(path === "/import-data" || path === "/assign-data") ? "active" : ""}`} ><span>Import Manager</span></li>
                    </Link>

                    {open &&
                        <>
                            <Link to="/import-data" style={{ textDecoration: 'none', }}  >
                                <li className={`nav-option ${path === "/import-data" ? "s-active" : ""}`} ><span style={{ paddingLeft: "20px" }}>Import Data</span></li>
                            </Link>
                            <Link to="/assign-data" style={{ textDecoration: 'none' }}>
                                <li className={`nav-option ${path === "/assign-data" ? "s-active" : ""}`} ><span style={{ paddingLeft: "20px" }}>Assign Data</span></li>
                            </Link>
                            <Link to="/assigned-data" style={{ textDecoration: 'none' }}>
                                <li className={`nav-option ${path === "/assigned-data" ? "s-active" : ""}`} ><span style={{ paddingLeft: "20px" }}>Assign Data</span></li>
                            </Link></>
                    }
                    <Link to="/rider" style={{ textDecoration: 'none' }}>
                        <li className={`nav-option ${path === "/rider" ? "active" : ""}`} ><span>Riders Information's</span></li>
                    </Link>

                    <Link to="/telecaller" style={{ textDecoration: 'none' }}>
                        <li className={`nav-option ${path === "/telecaller" ? "active" : ""}`} to="/telecaller"><span>Telecallers Information's</span></li>
                    </Link>


                    <Link to="/setup" style={{ textDecoration: 'none' }}>
                        <li className={`nav-option ${path === "/setup" ? "active" : ""}`}><span>Setup</span></li>
                    </Link>




                </ul>


                <div className="settings"><p>settings</p></div>
            </div>
        </div>
    )


}
export default Sidebar;