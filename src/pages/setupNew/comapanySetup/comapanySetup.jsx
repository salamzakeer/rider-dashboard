import ControlPointIcon from "@mui/icons-material/ControlPoint";
import Layout from "../../../components/layout/Navbar";
import { makeStyles } from "@material-ui/core";
import { createStyles } from "@material-ui/core";
import React, { useState } from "react";
import Input from "../../../components/input/input";
import LoadButton from "../../../components/buttons/loaderButton";

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
    id: "",
    CName: "",
    CShortName: "",
    RegistrationNo: "",
    ContackPersonNumber: "",
    ContactNumberLandLine: "",
    ContactNumberMobile: "",
    Email: "",
    Add1: "",
    Add2: "",
    Add3: "",
    // ranges
    range1: "",
    range2: "",
    range3: "",
    range4: "",
    range5: "",
    // Principal
    nameOfPri: "",
    TypeOfEntity: "",
    // company Range

    succesfulBill: "",
    succesfullNumberC: "",
  };
  const [values, setValues] = useState(stateValues);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };
  const post = () => {
    console.log(values, "===");
  };
  // const HandleEntityClick = () => {};

  const [NutritionArray, setNutritionArray] = useState([{ TypeOfEntity: "" }]);

  const HandleEntityClick = () => {
    console.log("koko");
    setNutritionArray([
      ...NutritionArray,
      {
        // newData: "",
        TypeOfEntity: "",
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
    <Layout title="Dashboard">
      <div>
        <div className={classes.MainContent}>Setup</div>
      </div>
      <br />
      <br />
      <br />
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
              name="CName"
              value={values.CName}
            />
            <Input
              placeholder="Eg : Agile"
              type="text"
              className="input-div-input"
              onChange={handleInputChange}
              label="Company Short Name"
              name="CShortName"
              value={values.CShortName}
            />
            <Input
              placeholder="Eg : 201901000005 (1312525-A)"
              type="text"
              className="input-div-input"
              onChange={handleInputChange}
              label="Registration number"
              name="RegistrationNo"
              value={values.RegistrationNo}
            />
            <Input
              placeholder="Eg : Abu bin ali"
              type="text"
              className="input-div-input"
              onChange={handleInputChange}
              label="Contact Person Name"
              name="ContackPersonNumber"
              value={values.ContackPersonNumber}
            />
            <Input
              placeholder="Eg : 021-226-987"
              type="text"
              className="input-div-input"
              onChange={handleInputChange}
              label="Contact Number - Land line"
              name="ContactNumberLandLine"
              value={values.ContactNumberLandLine}
            />
            <Input
              placeholder="Eg : 0771234567"
              type="text"
              className="input-div-input"
              onChange={handleInputChange}
              label="Contact Number -Mobile"
              name="ContactNumberMobile"
              value={values.ContactNumberMobile}
            />
            <Input
              placeholder="Eg : Abu@gmail.com"
              className="input-div-input"
              onChange={handleInputChange}
              label="Email"
              name="Email"
              value={values.Email}
              type="email"
            />
          </div>
          <div className={classes.flexInputDivs}>
            <Input
              placeholder="23/a, main road, Colombo Sri lanka"
              type="text"
              className="input-div-input"
              onChange={handleInputChange}
              label="Address 1"
              name="Add1"
              value={values.Add1}
            />
            <Input
              placeholder="23/a, main road, Colombo Sri lanka"
              type="text"
              className="input-div-input"
              onChange={handleInputChange}
              label="Address 2"
              name="Add2"
              value={values.Add2}
            />
            <Input
              placeholder="23/a, main road, Colombo Sri lanka"
              type="text"
              className="input-div-input"
              onChange={handleInputChange}
              label="Address 3"
              name="Add3"
              value={values.Add3}
            />
            <Input
              placeholder="23/a, main road, Colombo Sri lanka"
              type="text"
              className="input-div-input"
              onChange={handleInputChange}
              label="Address 4"
              name="Add3"
              value={values.Add3}
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
              name="range1"
              value={values.range1}
              icon="%"
            />
            <Input
              placeholder="Eg : 34.3"
              type="text"
              className="input-div-input"
              onChange={handleInputChange}
              label="Range 2"
              name="range2"
              value={values.range2}
              icon="%"
            />
            <Input
              placeholder="Eg : 20.2"
              type="text"
              className="input-div-input"
              onChange={handleInputChange}
              label="Range 3"
              name="range3"
              value={values.range3}
              icon="%"
            />
            <Input
              placeholder="Eg : 11.11"
              type="text"
              className="input-div-input"
              onChange={handleInputChange}
              label="Range 4"
              name="range4"
              value={values.range4}
              icon="%"
            />
            <Input
              placeholder="Eg : 32.2"
              type="text"
              className="input-div-input"
              onChange={handleInputChange}
              label="Range 5"
              name="range5"
              value={values.range5}
              icon="%"
            />
            <div style={{ width: "300px" }}></div>
          </div>
        </div>
      </div>
      <br />
      <br /> <br />
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
          <div className={classes.flexInputDivs}>
            <Input
              placeholder="Eg : IWK"
              type="text"
              className="input-div-input"
              onChange={handleInputChange}
              label="Name of Principal"
              name="nameOfPri"
              value={values.nameOfPri}
            />
            {NutritionArray &&
              NutritionArray.length > 0 &&
              NutritionArray.map((item, i) => (
                <Input
                  key={i}
                  placeholder="Eg : National sewerage comapany"
                  type="text"
                  className="input-div-input"
                  onChange={(e) => HandleEntityChange(e, i)}
                  label="Type of Entity"
                  name="TypeOfEntity"
                  value={item.name}
                  // value={values.TypeOfEntity}
                  id={"TypeOfEntity"}
                  icon={<ControlPointIcon onClick={HandleEntityClick} />}
                />
              ))}
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
              name="succesfulBill"
              value={values.succesfulBill}
            />
            <Input
              placeholder="Eg : agile"
              type="text"
              className="input-div-input"
              onChange={handleInputChange}
              label="Succesful Number Collected"
              name="succesfullNumberC"
              value={values.succesfullNumberC}
            />
            <div style={{ width: "300px" }}></div>
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
