import React, { useState} from "react";
import Navbar from "../../components/navbar/navbar";
import Sidebar from "../../components/sidebar/sidebar";


import UploadIcon from '../../assets/upload.png'
import AddIcon from '../../assets/add.png'
import RemoveIcon from '../../assets/remove.png'

import "./dashboard02.css"

 function Dashboard02() {

    const [visible, add]=useState(false);

    return (
        <div className="main">
            {/* <div>
                <Sidebar />
            </div> */}
            <div className="container">
                <Navbar />

                {/* ========== form ==========*/}
                <div className="newFile2">
                    <h1>New file</h1>
                    <form action="submit">

                        <div className="input-div">
                        <input type="text" className="input-div-input" placeholder="Riders.xl" />
                        <img src={UploadIcon} alt="" className="input-div-botton" />
                        </div>

                        <div className="input-div">
                        <input type="text" className="input-div-input" placeholder="Add Column" />
                        <img src={AddIcon} alt="" className="input-div-botton" onClick={() => add(true)} />
                        </div>
                        
                        { visible &&
                        <div className="input-div">
                        <input type="text" className="input-div-input" placeholder="Payment" />
                        <img src={RemoveIcon} alt="" className="input-div-botton" onClick={() => add(false)} />
                        </div>}
                        
   

                        <button type="submit" className="submit3">Submit</button> 
                    </form>
                </div>
                {/* ========== form ==========*/}

            </div>
        </div>

    )


}
export default Dashboard02;