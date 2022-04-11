
import "./sidebar.css";
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import MenuPic from '../../assets/menu.png'
import Close from '../../assets/close.png'

function Sidebar() {

    const [slider, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!slider);

    return (

        <div className="navigation">

            <div className="menubtn">
                <Link to='#' className='menu-bars'>
                    <img src={MenuPic} alt="Menu" onClick={showSidebar} />
                </Link>
            </div>



            <div className={slider ? 'nav-menu active' : 'nav'}>
                

                <div className="dash"> <p>Dashboard</p></div>

                <ul className="nav-links">
                    <li><span>sidebar option</span></li>
                    <li><span>sidebar option</span></li>
                    <li><span>sidebar option</span></li>
                    <li><span>sidebar option</span></li>
                    <li><span>sidebar option</span></li>
                    <li><span>sidebar option</span></li>
                    <li><span>sidebar option</span></li>
                </ul>


                <div className="settings"><p>settings</p></div>
            </div>
        </div>
    )


}
export default Sidebar;