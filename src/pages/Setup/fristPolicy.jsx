import React, { useState } from "react";
import Navbar from "../../components/navbar/navbar";
import Sidebar from "../../components/sidebar/sidebar";


import UploadIcon from '../../assets/upload.png'
import AddIcon from '../../assets/add.png'
import RemoveIcon from '../../assets/remove.png'

import "./fristpolicy.css"

function FristPolicy() {

    const [visible, add] = useState(false);

    return (
        <div className="main">
            <div className="slider">
                <Sidebar />
            </div>
            
            <div className="container">
            <Navbar />

                {/* ========== form ==========*/}
                <div className="newpolicy">
                    <h1>Add Policy</h1>
                    <form action="submit">

                

                        <div className="input-div">
                            <textarea type="text" className="input-div-input" placeholder="Security Policy" />
                            <img src={AddIcon} alt="" className="input-div-botton" onClick={() => add(true)} />
                        </div>

                        {visible &&
                            <div className="input-div">
                                <textarea type="text" className="input-div-input" placeholder="Data Policy" />
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
export default FristPolicy;