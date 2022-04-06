
import "./sidebar.css";
import MenuPic from '../../assets/menu.png'

function Sidebar(){
    return(
        <div className="sidebar">

            <div className="menubtn">
            <img src={MenuPic} alt="Menu" />
            </div>

            <div className="dash"> <p>Dashboard</p></div>
            
            <div className="nav">
                <ul>
                    <li><span>sidebar option</span></li>
                    <li><span>sidebar option</span></li>
                    <li><span>sidebar option</span></li>
                    <li><span>sidebar option</span></li>
                    <li><span>sidebar option</span></li>
                    <li><span>sidebar option</span></li>
                    <li><span>sidebar option</span></li>     
                </ul>
            </div>
            
            <div className="settings"><p>settings</p></div>
        </div>
    )


}
export default Sidebar;