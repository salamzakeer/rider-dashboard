import "./navbar.module.css"
import ProfilePic from '../../assets/Mask Group 5.png'
import DownPic from '../../assets/down-filled-triangular-arrow.png'
// import Sidebar from "../../components/sidebar/sidebar";
// import MenuPic from '../../assets/menu.png'
import { Link } from 'react-router-dom';
// import { Link } from 'react-router-dom';

function Navbar(props) {


    return (

        <div className="mainNav">

            {/* <div className="close-menubtn">
                <Link to='#' className='menu-bars'>
                    <img src={MenuPic} alt="Menu" onClick={showSidebar} />
                </Link>
            </div> */}


            <div className="title">
                <h1>{props.name}</h1>
            </div>

            <div className="profile">

                <div className="profilePic">
                    <Link style={{ textDecoration: 'none' }} to="/userprofile" >
                        <img src={ProfilePic} alt="userprofile" />
                    </Link>
                </div>

                <div className="subTitle">
                    <Link style={{ textDecoration: 'none' }} to="/userprofile" >
                        <h2>name</h2>
                    </Link>
                </div>

                <div className="drop">
                    <img src={DownPic} alt="drop down" />
                </div>

            </div>
        </div>
    )


}
export default Navbar;