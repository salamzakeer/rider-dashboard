import React, { useState } from "react";
import 'react-toastify/dist/ReactToastify.css'; // import first
import { ToastContainer, toast } from 'react-toastify'; // then this
import Comming from "../../components/customCore/comingZoon";
import Sidebar from "../../components/sidebar/sidebar";
import makeAnimated from "react-select/animated";
import Typography from '@mui/material/Typography';
import Navbar from "../../components/navbar/navbar";
import Layout from "../../components/layout/Navbar";

const animatedComponents = makeAnimated();
function Dashboard() {

    //end-upload file



    return (

        <Layout title="Extend Search">
            <Comming />
        </Layout >

    )


}
export default Dashboard;