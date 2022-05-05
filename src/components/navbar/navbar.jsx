import "./navbar.css"
import ProfilePic from '../../assets/Mask Group 5.png'
import DownPic from '../../assets/down-filled-triangular-arrow.png'
import Sidebar from "../../components/sidebar/sidebar";
import MenuPic from '../../assets/menu.png'

// import { Link } from 'react-router-dom';

function Navbar(props){


    return(
        
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
                    <img src={ProfilePic} alt="profile picture" />
                </div>

                <div className="subTitle">
                    <h2>name</h2>
                </div>

                <div className="drop">
                    <img src={DownPic} alt="drop down" />
                </div>

            </div>
        </div>
    )


}
export default Navbar;