import React from "react";
import Navbar from "../../components/navbar/navbar";
import Sidebar from "../../components/sidebar/sidebar";
import { MdAddCircleOutline } from "react-icons/md";
import { MdRemoveCircleOutline } from "react-icons/md";
import { MdOutlineFileUpload } from "react-icons/md"; 
import "./dashboard02.css"

function Dashboard02() {
    return (
        <div className="main">
            <div>
                <Sidebar />
            </div>
            <div className="container">
                <Navbar />

                {/* ========== form ==========*/}
                <div className="newFile2">
                    <h1>New file</h1>
                    <form action="submit">

                        <input type="text" className="input4" placeholder="Riders.xl" />
                        {/* <MdOutlineFileUpload className="uploadIcon"/> */}

                        <input type="text" className="input5" placeholder="Payment" />
                        {/* <MdRemoveCircleOutline className="plusIcon"/> */}

                        <input type="password" className="input6" placeholder="Add Column" />
                        {/* <MdAddCircleOutline className="removeIcon"/> */}

                        <button type="submit" className="submit3">Submit</button>

                    </form>
                </div>
                {/* ========== form ==========*/}

            </div>
        </div>

    )


}
export default Dashboard02;