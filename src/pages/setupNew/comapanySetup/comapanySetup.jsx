import ControlPointIcon from "@mui/icons-material/ControlPoint";
import Layout from "../../../components/layout/Navbar";
import { makeStyles } from "@material-ui/core";
import { createStyles } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import Input from "../../../components/input/input";
import LoadButton from "../../../components/buttons/loaderButton";
import axios from "../../../axios";
import { useToasts } from "react-toast-notifications";

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
        maxWidth: "1000px",
        width: "100%",
        margin: "0 auto",
      },
      flexInputDivs: {
        display: "flex",
        // justifyContent: "space-between",
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

function SetUp({ AllData, AllDataArray }) {
  const classes = useStyles();
  const [Disabled, setDisabled] = useState(false);
  const [Loading, setLoading] = useState(false);
  const { addToast } = useToasts();
  const AdminId = JSON.parse(localStorage.getItem("auth")).message.id || "";
  // const [AllData, setAllData] = useState([]);

  const stateValues = {
    // id: AllData ? AllData.id : "",
    CompanyName: AllData ? AllData.CompanyName : "",
    CompanyShortName: AllData ? AllData.CompanyShortName : "",
    RegistrationNumber: AllData ? AllData.RegistrationNumber : "",
    ContactPersonName: AllData ? AllData.ContactPersonName : "",
    ContactNoLandline: AllData ? AllData.ContactNoLandline : "",
    ContactNoMobile: AllData ? AllData.ContactNoMobile : "",
    Email: AllData ? AllData.Email : "",
    Address1: AllData ? AllData.Address1 : "",
    Address2: AllData ? AllData.Address2 : "",
    Address3: AllData ? AllData.Address3 : "",
    Address4: AllData ? AllData.Address4 : "",
    // ranges
    Range1: AllData ? AllData.Range1 : "",
    Range2: AllData ? AllData.Range2 : "",
    Range3: AllData ? AllData.Range3 : "",
    Range4: AllData ? AllData.Range4 : "",
    Range5: AllData ? AllData.Range5 : "",
    // Principal
    Name: AllData ? AllData.Name : "",
    Type: AllData ? AllData.Type : "",
    // company Range

    SuccessfulBillDelivered: AllData ? AllData.SuccessfulBillDelivered : "",
    SuccessfulNoColleceted: AllData ? AllData.SuccessfulNoColleceted : "",
  };
  const [values, setValues] = useState(stateValues);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };
  const post = (e) => {
    e.preventDefault();
    setDisabled(true);
    const createOrupdateApi = {
      adminId: AdminId,
      Name: values.Name,
      Type: values.Type,
    };
    axios
      .put(`admindetails/update/${AdminId}`, values)
      .then((result) => {
        setDisabled(false);
        axios
          .post(`principals/createOrupdate`, NutritionArray)
          .then((result) => {
            setDisabled(false);
            addToast("Successfully Added", {
              appearance: "success",
              autoDismiss: "true",
              autoDismissTimeout: 2000,
            });
            // window.location = "/dashboard";
          })
          .catch((error) => {
            addToast("Something Wrong", {
              appearance: "error",
              autoDismiss: "true",
              autoDismissTimeout: 2000,
            });
            setDisabled(false);

            // setEmail("");
            // setPassword("");
          });
        // window.location = "/dashboard";
      })
      .catch((error) => {
        addToast("Something Wrong", {
          appearance: "error",
          autoDismiss: "true",
          autoDismissTimeout: 2000,
        });
        setDisabled(false);

        // setEmail("");
        // setPassword("");
      });
    //
  };

  const [NutritionArray, setNutritionArray] = useState(
    AllDataArray
      ? AllDataArray.length > 0
        ? AllDataArray
        : [{ Type: "", Name: "", adminId: AdminId }]
      : [{ Type: "", Name: "", adminId: AdminId }]
  );

  const HandleEntityClick = () => {
    setNutritionArray([
      ...NutritionArray,
      {
        Name: "",
        Type: "",
        adminId: AdminId,
      },
    ]);
  };
  const HandleEntityChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...NutritionArray];
    list[index][name] = value;
    setNutritionArray(list);
  };
  return (
    <>
      <form onSubmit={post}>
        <div>
          <div className={classes.SubContent}>Company</div>
        </div>
        <br />
        <div className={classes.MainCardDiv}>
          <div className={classes.Container}>
            <div className={classes.flexInputDivs}>
              <Input
                placeholder="Eg : Agile advance Sdn Bhn"
                type="text"
                className="input-div-input"
                onChange={handleInputChange}
                label="Company Name"
                name="CompanyName"
                value={values.CompanyName}
              />
              <Input
                placeholder="Eg : Agile"
                type="text"
                className="input-div-input"
                onChange={handleInputChange}
                label="Company Short Name"
                name="CompanyShortName"
                value={values.CompanyShortName}
              />
              <Input
                placeholder="Eg : 201901000005 (1312525-A)"
                type="text"
                className="input-div-input"
                onChange={handleInputChange}
                label="Registration number"
                name="RegistrationNumber"
                value={values.RegistrationNumber}
              />
              <Input
                placeholder="Eg : Abu bin ali"
                type="text"
                className="input-div-input"
                onChange={handleInputChange}
                label="Contact Person Name"
                name="ContactPersonName"
                value={values.ContactPersonName}
              />
              <Input
                placeholder="Eg : 021-226-987"
                type="text"
                className="input-div-input"
                onChange={handleInputChange}
                label="Contact Number - Land line"
                name="ContactNoLandline"
                value={values.ContactNoLandline}
              />
              <Input
                placeholder="Eg : 0771234567"
                type="text"
                className="input-div-input"
                onChange={handleInputChange}
                label="Contact Number -Mobile"
                name="ContactNoMobile"
                value={values.ContactNoMobile}
              />
              <Input
                placeholder="Eg : Abu@gmail.com"
                className="input-div-input"
                onChange={handleInputChange}
                label="Email"
                name="Email"
                value={values.Email}
                type="email"
                required
              />
            </div>
            <div className={classes.flexInputDivs}>
              <Input
                placeholder="23/a, main road, Colombo Sri lanka"
                type="text"
                className="input-div-input"
                onChange={handleInputChange}
                label="Address 1"
                name="Address1"
                value={values.Address1}
              />
              <Input
                placeholder="23/a, main road, Colombo Sri lanka"
                type="text"
                className="input-div-input"
                onChange={handleInputChange}
                label="Address 2"
                name="Address2"
                value={values.Address2}
              />
              <Input
                placeholder="23/a, main road, Colombo Sri lanka"
                type="text"
                className="input-div-input"
                onChange={handleInputChange}
                label="Address 3"
                name="Address3"
                value={values.Address3}
              />
              <Input
                placeholder="23/a, main road, Colombo Sri lanka"
                type="text"
                className="input-div-input"
                onChange={handleInputChange}
                label="Address 4"
                name="Address4"
                value={values.Address4}
              />
            </div>
          </div>
        </div>
        <br />
        <br />
        <br />
        {/* Comapny Collection Range */}
        <div>
          <div className={classes.SubContent}>Company Collection Range </div>
        </div>
        <br />
        <div className={classes.MainCardDiv}>
          <div className={classes.Container}>
            <div className={classes.flexInputDivs}>
              <Input
                placeholder="Eg : 12.5"
                type="text"
                className="input-div-input"
                onChange={handleInputChange}
                label="Range 1"
                name="Range1"
                value={values.Range1}
                icon="%"
              />
              <Input
                placeholder="Eg : 34.3"
                type="text"
                className="input-div-input"
                onChange={handleInputChange}
                label="Range 2"
                name="Range2"
                value={values.Range2}
                icon="%"
              />
              <Input
                placeholder="Eg : 20.2"
                type="text"
                className="input-div-input"
                onChange={handleInputChange}
                label="Range 3"
                name="Range3"
                value={values.Range3}
                icon="%"
              />
              <Input
                placeholder="Eg : 11.11"
                type="text"
                className="input-div-input"
                onChange={handleInputChange}
                label="Range 4"
                name="Range4"
                value={values.Range4}
                icon="%"
              />
              <Input
                placeholder="Eg : 32.2"
                type="text"
                className="input-div-input"
                onChange={handleInputChange}
                label="Range 5"
                name="Range5"
                value={values.Range5}
                icon="%"
              />
              <div style={{ width: "300px" }}></div>
            </div>
          </div>
        </div>
        <br />
        <br /> <br />
        {/* comapany collection range */}
        <div>
          <div className={classes.SubContent}>Company Colection Range</div>
        </div>
        <br />
        <div className={classes.MainCardDiv}>
          <div className={classes.Container}>
            <div
              className={classes.flexInputDivs}
              // style={{ justifyContent: "space-around" }}
            >
              <Input
                placeholder="Eg : agile advance Sdn End"
                type="text"
                className="input-div-input"
                onChange={handleInputChange}
                label="Succesfull Bill Delivered"
                name="SuccessfulBillDelivered"
                value={values.SuccessfulBillDelivered}
              />
              <Input
                placeholder="Eg : agile"
                type="text"
                className="input-div-input"
                onChange={handleInputChange}
                label="Succesful Number Collected"
                name="SuccessfulNoColleceted"
                value={values.SuccessfulNoColleceted}
              />
              <div style={{ width: "300px" }}></div>
            </div>
          </div>
        </div>
        <br />
        <br />
        {/* principal  */}
        <div>
          <div className={classes.SubContent}>Principal</div>
        </div>
        <br />
        <div className={classes.MainCardDiv}>
          <div className={classes.Container}>
            {/* {NutritionArray &&
            NutritionArray.length > 0 &&
            NutritionArray.map((item, i) => <div>{item.name}sll</div>)} */}
            {NutritionArray &&
              NutritionArray.length > 0 &&
              NutritionArray.map((item, i) => (
                <div className={classes.flexInputDivs}>
                  <Input
                    placeholder="Eg : IWK"
                    type="text"
                    className="input-div-input"
                    onChange={(e) => HandleEntityChange(e, i)}
                    label="Name of Principal"
                    name="Name"
                    value={item.Name}
                  />
                  <Input
                    key={i}
                    placeholder="Eg : National sewerage comapany"
                    type="text"
                    className="input-div-input"
                    onChange={(e) => HandleEntityChange(e, i)}
                    label="Type of Entity"
                    name="Type"
                    value={item.Type}
                    // value={values.Type}
                    id={"Type"}
                    icon={<ControlPointIcon onClick={HandleEntityClick} />}
                  />
                  <div style={{ width: "300px" }}></div>
                </div>
              ))}
          </div>
        </div>
        <br />
        <br /> <br />
        <div className={classes.btnDiv}>
          <LoadButton name="Save" Disabled={Disabled} />
        </div>
      </form>
    </>
  );
}
export default SetUp;
