
import "./sidebar.css";
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import MenuPic from '../../assets/menu.png'
import Close from '../../assets/close.png'
import { useLocation, useParams } from 'react-router-dom';
import type { Location, Params } from 'react-router-dom';
function Sidebar(props) {
    const location = useLocation();  
      console.log(location.pathname)
    const [slider, setSidebar] = useState(false);
const path = location.pathname
    const showSidebar = () => setSidebar(!slider);
    
   

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
                    <li className={`nav-option ${path === "/dashboard" ? "active":"" }`} ><span>Dashboard</span></li>
                </Link>
                   
                    <Link to="/rider" style={{ textDecoration: 'none' }}>
                    <li  className={`nav-option ${path === "/rider" ? "active":"" }`} ><span>Riders Information's</span></li>
                    </Link>

                    <Link to="/telecaller" style={{ textDecoration: 'none' }}>   
                        <li className={`nav-option ${path === "/telecaller" ? "active":"" }`} to="/telecaller"><span>Telecallers Information's</span></li>
                    </Link>
                        
                    
                    <Link to="/setup" style={{ textDecoration: 'none' }}>   
                    <li className={`nav-option ${path === "/setup" ? "active":"" }`}><span>Setup</span></li>
                    </Link>

                   
                    
                     
                </ul>


                <div className="settings"><p>settings</p></div>
            </div>
        </div>
    )


}
export default Sidebar;