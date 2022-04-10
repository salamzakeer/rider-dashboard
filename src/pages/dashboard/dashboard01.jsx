import React from "react";
import Navbar from "../../components/navbar/navbar";
// import Sidebar from "../../components/sidebar/sidebar";
import "./dashboard01.css"

function Dashboard01(){
    return(
        <div className="main">
        {/* <div>
        <Sidebar />
        </div>    */}
        <div className="container">
       <Navbar />

       {/* ========== form ==========*/}
       <div className="newFile">
            <h1>new file</h1>
            <form action="submit"> 
                <input type="text" className="input2" placeholder="Upload file"/>
                <input type="password" className="input3" placeholder="Add Column"/>
                <button type="submit" className="submit2">Submit</button>
            </form>
        </div>
        {/* ========== form ==========*/}

       </div>
        </div>

    )


}
export default Dashboard01;