import Layout from "../../../components/layout/Navbar";
import { makeStyles } from "@material-ui/core";
import { createStyles } from "@material-ui/core";
import React, { useState } from "react";
import Input from "../../../components/input/input";
import LoadButton from "../../../components/buttons/loaderButton";
import SetupLayout from "./layoutInput";
const useStyles = makeStyles(
  (theme) =>
    createStyles({
      [theme.breakpoints.down("md")]: {
        // backgroundColor: "green",
        flexDirection: "column",
      },
      MainCardDiv: {
        display: "flex",
        flexWrap: "wrap",
      },
      MainContent: {
        fontSize: "2rem",
        color: "#000",
        fontWeight: 600,
      },
      SubContent: {
        fontSize: "1.5rem",
        color: "#501abf",
        fontWeight: 500,
      },
      Container: {
        maxWidth: "1100px",
        width: "100%",
        margin: "0 auto",
        paddingLeft: "30px",
      },
      flexInputDivs: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap",
      },
      btnDiv: {
        margin: "auto",
        width: "200px",
      },
    }),
  { withTheme: true }
);

function Dashboard() {
  const classes = useStyles();
  const stateValues = {
    // true mean off false mean on
    pLen: "",
    pexp: "",
    gracePExp: "",
    pmustnot: "",
    pexpReminder: "",
    disableDormat: "",
    requireStrongP: "",
    changeP: "",
    allowP: "",

    aLockoutAfter: "",
    sessionTime: "",
    sessionNoti: "",
    LockPolicy: "",
    ReminderLast: "",
  };
  const [values, setValues] = useState(stateValues);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    console.log(value);
    setValues({
      ...values,
      [name]: value,
    });
  };
  const handlToggleChange = (e) => {
    const { name, value, checked } = e.target;
    setValues({
      ...values,
      [name]: !checked,
    });
  };
  const post = () => {
    console.log(values, "===");
  };
  return (
    <Layout title="Dashboard">
      <div>
        <div className={classes.MainContent}>Security Policy</div>
      </div>
      <br /> <br /> <br />
      <div>
        <div className={classes.SubContent}>Password Policy</div>
      </div>
      <br />
      <div className={classes.MainCardDiv}>
        <div className={classes.Container}>
          <div className={classes.flexInputDivs}>
            <SetupLayout
              placeholder="Eg : 4"
              type="text"
              onChange={handleInputChange}
              name="pLen"
              value={values.pLen}
              heading="Minimum password length "
              para="Min 4, Max12"
            />
            <SetupLayout
              placeholder="Eg : 365"
              type="text"
              onChange={handleInputChange}
              label="Days"
              name="pexp"
              value={values.pexp}
              heading="Password expires in every"
              para="Number of days"
            />
            <SetupLayout
              placeholder="Eg : 6"
              type="text"
              onChange={handleInputChange}
              label="Times"
              name="gracePExp"
              value={values.gracePExp}
              heading="Grace login after password expired"
              para="Number of times"
            />
            <SetupLayout
              placeholder="Eg : 4"
              type="text"
              onChange={handleInputChange}
              label="Password(s)"
              name="pmustnot"
              value={values.pmustnot}
              heading="Password must not be the same as on of the last"
              para="Number of password"
            />
            <SetupLayout
              placeholder="Eg : 4"
              type="text"
              onChange={handleInputChange}
              label="Day before expiry"
              name="pexpReminder"
              value={values.pexpReminder}
              heading="Password expiry reminder"
              para="Number of days"
            />
            <SetupLayout
              placeholder="Eg : 4"
              type="text"
              onChange={handleInputChange}
              label="Days"
              name="disableDormat"
              value={values.disableDormat}
              heading="Disable dormant user account(s) after a minimum of"
              para="Number of times"
            />
            <SetupLayout
              toggle
              placeholder="Eg : 4"
              type="text"
              onChange={handlToggleChange}
              label="Password(s)"
              name="requireStrongP"
              value={values.requireStrongP}
              heading="Require strong password combination "
            />
            <SetupLayout
              toggle
              placeholder="Eg : 4"
              type="text"
              onChange={handlToggleChange}
              label="Password(s)"
              name="changeP"
              value={values.changeP}
              heading="Change password on first sign-on"
            />
            <SetupLayout
              toggle
              placeholder="Eg : 4"
              type="text"
              onChange={handlToggleChange}
              label="Password(s)"
              name="allowP"
              value={values.allowP}
              heading="Allow user change password within the day"
            />
            {/* Password expires in every  */}
          </div>
        </div>
      </div>
      <br />
      <br />
      <div>
        <div className={classes.SubContent}>Password Policy</div>
      </div>
      <br />
      <div className={classes.MainCardDiv}>
        <div className={classes.Container}>
          <div className={classes.flexInputDivs}>
            <SetupLayout
              placeholder="Eg : 365"
              type="text"
              onChange={handleInputChange}
              name="aLockoutAfter"
              value={values.aLockoutAfter}
              heading="Account lock out after"
              para="Number of days"
              label="invalid login attempts"
            />
            <SetupLayout
              placeholder="Eg : 6"
              type="text"
              onChange={handleInputChange}
              label="Minutes"
              name="sessionTime"
              value={values.sessionTime}
              heading="Session timeout warning notification"
              para="Number of session (Min 1seconds)"
            />
            <SetupLayout
              placeholder="Eg : 6"
              type="text"
              onChange={handleInputChange}
              label="Seconds"
              name="sessionNoti"
              value={values.sessionNoti}
              heading="Session timeout warning notification"
              para="Number of times"
            />
            <SetupLayout
              toggle
              placeholder="Eg : 4"
              type="text"
              onChange={handlToggleChange}
              label="Password(s)"
              name="LockPolicy"
              value={values.LockPolicy}
              heading="Lockout policy"
            />
            <SetupLayout
              toggle
              placeholder="Eg : 4"
              type="text"
              onChange={handlToggleChange}
              label="Password(s)"
              name="ReminderLast"
              value={values.ReminderLast}
              heading="Remember last user login name"
            />

            {/* Password expires in every  */}
          </div>
        </div>
      </div>
      <br />
      <br />
      <div className={classes.btnDiv}>
        <LoadButton onClick={post} name="Save" />
      </div>
    </Layout>
  );
}
export default Dashboard;
