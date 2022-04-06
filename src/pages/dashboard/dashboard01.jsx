import React from "react";
import Navbar from "../../components/navbar/navbar";
import Sidebar from "../../components/sidebar/sidebar";
import "./dashboard01.css"

function Dashboard01(){
    return(
        <div className="main">
        <Sidebar />
       <Navbar />
        </div>

    )


}
export default Dashboard01;