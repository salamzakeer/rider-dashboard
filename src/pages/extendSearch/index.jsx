import React, { useState } from "react";
import 'react-toastify/dist/ReactToastify.css'; // import first
import { ToastContainer, toast } from 'react-toastify'; // then this
import Comming from "../../components/customCore/comingZoon";
import Sidebar from "../../components/sidebar/sidebar";
import makeAnimated from "react-select/animated";
import Typography from '@mui/material/Typography'; import "./style.css"
import Navbar from "../../components/navbar/navbar";

const animatedComponents = makeAnimated();
function Dashboard() {

    //end-upload file



    return (
        <>

            <div className="main">
                <div className="slider">
                    <Sidebar />
                </div>

                <div className="container">
                    <Navbar />

                    {/* ========== form ==========*/}
                    <div style={{ margin: "100px" }}>

                        <Comming />

                    </div>
                    {/* ========== form ==========*/}

                </div>
            </div>
        </>

    )


}
export default Dashboard;