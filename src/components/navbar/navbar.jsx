import "./navbar.css"
import ProfilePic from '../../assets/Mask Group 5.png'
import DownPic from '../../assets/down-filled-triangular-arrow.png'

function Navbar(){
    return(
        <div className="mainNav">
            <div className="title">
                <h1>Dashboard</h1>
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