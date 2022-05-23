import Layout from "../../components/layout/Navbar"
// import { makeStyles } from "@material-ui/core"
// import { createStyles } from "@material-ui/core"
import React from "react"
import Typography from '@mui/material/Typography';
// const useStyles = makeStyles(
//     () =>
//         createStyles({
//             Main: {
//                 backgroundColor: "#FFFFFF",
//                 margin: "0 auto",
//             },
//             MainDiv: {
//                 padding: "2rem",
//                 display: "flex",
//                 justifyContent: "flex-start",
//                 flexDirection: "column",

//                 minHeight: "100vh",
//                 height: "auto",
//                 maxWidth: "660px",
//                 margin: "0 auto",
//                 // backgroundColor: "#ccc",
//             },
//             Para: {
//                 color: "#5016BF !important",
//                 fontSize: "30px",
//                 fontFamily: "Poppins",
//                 fontWeight: "800",
//                 textAlign: "center",
//                 margin: "10px auto 82px",
//             },
//             Angor: { color: "#5016BF !important", textDecoration: "underline" },
//             GoBack: {
//                 color: "#000000",
//                 fontFamily: "Poppins",
//                 fontSize: "30px",
//                 fontWeight: 400,
//                 paddingTop: "50px",
//                 textAlign: "center",
//             },
//             GoBack2: {
//                 color: "#000000",
//                 fontFamily: "Poppins",
//                 fontSize: "30px",
//                 fontWeight: 400,
//                 paddingTop: "100px",
//                 textAlign: "center",
//             },
//             DialogRoot: {
//                 // background: "red !important",
//                 padding: "3rem 4rem",
//             },
//         }),
//     { withTheme: true }
// )


function Dashboard() {

    return (
        <Layout title="Dashboard">
            <Typography variant="h2" >WELCOME TO DASHBOARD</Typography>
        </Layout>
    )
}
export default Dashboard
