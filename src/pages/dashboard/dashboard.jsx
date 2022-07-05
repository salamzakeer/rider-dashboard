import Layout from "../../components/layout/Navbar";
import { makeStyles } from "@material-ui/core";
import { createStyles } from "@material-ui/core";
import React from "react";
const useStyles = makeStyles(
    (theme) =>
        createStyles({
            Main: {
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                margin: "10rem 0 0 0 ",
                fontSize: "2rem",
                fontWeight: 500,
                [theme.breakpoints.down('sm')]: {
                    // backgroundColor: "red",
                    fontSize: "1.5rem",

                },
            },
        }),
    { withTheme: true }
);

function Dashboard() {
    const classes = useStyles();
    return (
        <Layout title="Dashboard">
            <h1 className={classes.Main}>WELCOME TO DASHBOARD</h1>
        </Layout>
    );
}
export default Dashboard;
