import { CircularProgress, makeStyles } from "@material-ui/core";
import { createStyles } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import TableTrRow from "./tableTemplate";
import { Qrcode } from "../../../../api/qrcode";
import {
  Status,
  YesNo,
  Gender,
  typeofbusinesstype,
  propertyusagetype,
  RiderStatus,
  drcodetype,
  occupiertype,
  Nationality,
} from "../../../../api/detailsApi";
import { useToasts } from "react-toast-notifications";
import axios from "../../../../axios";
import moment from "moment";

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
        [theme.breakpoints.down("sm")]: {
          // backgroundColor: "red",
          fontSize: "1.5rem",
        },
      },
      btn: {
        background: "red",
        width: "160px",
        margin: "12px 0px 0px auto",

        border: "1px solid #ccc",
        height: "45px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "16px",
        fontFamily: "Poppins",
        opacity: " 0.8",
        borderRadius: "50px",
        [theme.breakpoints.down("md")]: {
          // backgroundColor: "green",
          flexDirection: "column",
        },
        backgroundColor: "#501abf",
        color: "#fff",
        "&:hover": {
          backgroundColor: "#fff",
          color: "#501abf",
          border: "2px solid #501abf",
          fontWeight: "600",
          "& span": {
            color: "#501abf !important",
          },
        },
        "& span": {
          color: "#fff !important",
        },
      },
    }),
  { withTheme: true }
);

function Dashboard(Details) {
  const { SelectUserObject, Option } = Details;
  const { addToast } = useToasts();
  const [Disabled, setDisabled] = React.useState(false);

  useEffect(() => {
    setValues({});

    setValues(SelectUserObject);
  }, [SelectUserObject]);
  const [values, setValues] = useState({});
  console.log(values, "values");
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    console.log(value, "val", name, "name");
    setValues({
      ...values,
      [name]: value,
    });
  };
  const classes = useStyles();
  const updating = (e) => {
    setDisabled(true);

    e.preventDefault();
    const data = new FormData();
    // data.append(
    //   "onSchedule",
    //   JSON.stringify(values.trackType) === "true" ? 1 : 0
    // );
    data.append("OwnernameCorrect", values.OwnernameCorrect);
    data.append("specifyCorrectOwnername", values.specifyCorrectOwnername);
    data.append("OwnertelNo", values.OwnertelNo);
    data.append("PropertyUsage", values.PropertyUsage);
    data.append("PropertyType", values.PropertyType);
    data.append("DRCode", values.DRCode);
    data.append("Remarks", values.Remarks);
    data.append("TenantName", values.TenantName);
    data.append("TenantTelNo", values.TenantTelNo);
    data.append("Payment", values.Payment);
    data.append("PropertyStatus", values.PropertyStatus);
    data.append("OccupierNationality", values.OccupierNationality);
    data.append("numberOfVisit", values.numberOfVisit);
    data.append("updateStatus", values.updateStatus);
    // OccupierNationality
    console.log("okoko", Option, values);
    axios
      .put("/" + Option + "/" + values.id, data, {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
          Accept: "multipart/form-data",
        },
      })
      .then((result) => {
        console.log(result);
        addToast("Successfully Updated", {
          appearance: "success",
          autoDismiss: "true",
          autoDismissTimeout: 2000,
        });
        setDisabled(false);

        // closeModel(false)
        // window.location.reload(false);

        // window.location = "/dashboard"
        // }else{
        //     console.log("logged error")
        // }
      })
      .catch((error) => {
        console.log(error);
        addToast("something went wrong", {
          appearance: "error",
          autoDismiss: "true",
          autoDismissTimeout: 2000,
        });
        setDisabled(false);

        // console.log("not ok")
      });
  };

  return (
    <div className="table-view ">
      <form>
        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
            borderSpacing: 0,
            background: "#fff",
            // border: "1px solid red",
          }}
        >
          <TableTrRow
            key1="ID"
            value1={values.id || ""}
            name1="id"
            id1="id"
            // onChange1={handleInputChange}
            key2="Owner Name Correct ?"
            value2={values.OwnernameCorrect || ""}
            onChange2={handleInputChange}
            name2="DCAName"
            id2="DCAName"
            options2={YesNo}
            key3="Arrears"
            value3={values.Arrears || ""}
            // onChange3={handleInputChange}
            name3="Arrears"
            id3="Arrears"
          />
          {/* 2 */}
          <TableTrRow
            key1="Account Number"
            value1={values.SAN || ""}
            // onChange1={handleInputChange}
            name1="SAN"
            id1="SAN"
            key2="Nationality"
            value2={values.OccupierNationality}
            onChange2={handleInputChange}
            name2="OccupierNationality"
            id2="OccupierNationality"
            options2={Nationality}
            key3="Current Balaance"
            value3={values.CurrentBalance || ""}
            onChange3={handleInputChange}
            name3="CurrentBalance"
            id3="CurrentBalance"
          />
          {/* 3 */}
          <TableTrRow
            key1="Bill No"
            value1={values.billno || ""}
            // onChange1={handleInputChange}
            name1="billno"
            id1="billno"
            key2="Owner's Tel No 1"
            value2={values.OwnertelNo || ""}
            onChange2={handleInputChange}
            name2="OwnertelNo"
            id2="OwnertelNo"
            key3="Status"
            value3={values.PropertyStatus || ""}
            onChange3={handleInputChange}
            name3="PropertyStatus"
            id3="PropertyStatus"
            options3={Status}
          />
          {/* 4 */}
          <TableTrRow
            key1="LA Name"
            value1={values.LAName || ""}
            // onChange1={handleInputChange}
            name1="LAName"
            id1="LAName"
            key2="Owner's Tel No 2"
            value2={values.OwnertelNos || ""}
            onChange2={handleInputChange}
            name2="OwnertelNos"
            id2="OwnertelNos"
            key3="Rider Status"
            value3={values.updateStatus === 0 ? "Not Update" : "Update" || ""}
            onChange3={handleInputChange}
            name3="MailName2"
            id3="MailName2"
            options3={RiderStatus}
          />
          {/* 5 */}
          <TableTrRow
            key1="Owner 1"
            value1={values.Owner1 || ""}
            // onChange1={handleInputChange}
            name1="Owner1"
            id1="Owner1"
            key2="Owner's Tel No 3"
            value2={values.OwnertelNo3 || ""}
            onChange2={handleInputChange}
            name2="OwnertelNo3"
            id2="OwnertelNo3"
            // key3="Status"
            value3={values.DCAName || ""}
            // onChange3={handleInputChange}
            name3="DCAName"
            key3="DCAName"
            id3="dcaname"
            // selecte3
          />
          {/* 6 */}
          <TableTrRow
            key1="Props Address 1"
            value1={values.PropAddr1 || ""}
            // onChange1={handleInputChange}
            name1="PropAddr1"
            id1="PropAddr1"
            key2="Tanant Phone 1"
            value2={values.TanantPhone1 || ""}
            onChange2={handleInputChange}
            name2="TanantPhone1"
            id2="TanantPhone1"
            // key3="Status"
            value3={values.LAName || ""}
            // onChange3={handleInputChange}
            name3="LA Name"
            key3="LA Name"
            id3="LA Name"
            // selecte3
          />
          {/* 7 */}
          <TableTrRow
            key1="Props Address 2"
            value1={values.PropAddr2 || ""}
            // onChange1={handleInputChange}
            name1="PropAddr2"
            id1="PropAddr2"
            // key2="Tanant Phone 2"
            value2={values.Owner2 || ""}
            // // onChange2={handleInputChange}
            name2="Owner2"
            key2="Owner 2"
            id2="Owner2"
            // key3="Status"
            value3={values.Owner1NRIC || ""}
            // onChange3={handleInputChange}
            name3="Owner 1 NRIC"
            id3="Owner 1 NRIC"
            key3="Owner 1 NRIC"
            // selecte3
          />
          {/* 8 */}
          <TableTrRow
            key1="Props Address 3"
            value1={values.PropAddr3 || ""}
            // onChange1={handleInputChange}
            name1="PropAddr3"
            id1="PropAddr3"
            // key2="Owner's Mobile Number"
            value2={values.Owner2NRIC || ""}
            // // onChange2={handleInputChange}
            name2="Owner 2 NRIC"
            id2="Owner 2 NRIC"
            key2="Owner 2 NRIC"
            // key3="Status"
            value3={values.owners_name || ""}
            // onChange3={handleInputChange}
            key3="Arrears Date"
            value3={values.arrearsDate || ""}
            // onChange1={handleInputChange}
            name3="arrearsDate"
            // id3="Owner's Name"
            // selecte3
          />
          <TableTrRow
            key1="Props Address 4"
            value1={values.PropAddr4 || ""}
            // onChange1={handleInputChange}
            name1="PropAddr4"
            id1="PropAddr4"
            // key2="Tanant Phone 3"
            // onChange2={handleInputChange}
            value2={values.Exclude || ""}
            name2="Exclude"
            key2="Exclude"
            id2="Exclude"
            // key3="Status"
            value3={values.IWKSpecialInstruction || ""}
            // onChange3={handleInputChange}
            name3="IWK"
            key3="IWK's Special Instruction"
            id3="IWK"
            // selecte3
          />
          <TableTrRow
            key1="Props Address 5"
            value1={values.PropAddr5 || ""}
            // onChange1={handleInputChange}
            name1="PropAddr5"
            id1="PropAddr5"
            key2="Property Usage"
            options2={typeofbusinesstype}
            value2={values.PropertyUsage || ""}
            onChange2={handleInputChange}
            name2="PropertyUsage"
            id2="PropertyUsage"
            key3="Arrears"
            value3={values.Arrears}
            // onChange3={handleInputChange || ""}
            name3="Arrears"
            id3="Arrears"
            // selecte3
          />
          <TableTrRow
            key1="Date of Visit"
            // value1={values.visitDate || ""}
            // iiiiiiiiiiiii
            value1={moment(values.visitDate).format("YYYY-MM-DD") || ""}
            onChange1={handleInputChange}
            name1="visitDate"
            id1="visitDate"
            key2="Property Type"
            options2={propertyusagetype}
            value2={values.PropertyType || ""}
            onChange2={handleInputChange}
            name2="PropertyType"
            id2="PropertyType"
            key3="Range"
            value3={values.Range || ""}
            // onChange3={handleInputChange}
            name3="Range"
            id3="RangeRange"
            // selecte3
          />
          <TableTrRow
            key1="Specify Correct Owner Name ?"
            value1={values.specifyCorrectOwnername || ""}
            onChange1={handleInputChange}
            name1="specifyCorrectOwnername"
            id1="specifyCorrectOwnername"
            options1={YesNo}
            key2="Name of shop/company"
            value2={values.nameOfShop || ""}
            onChange2={handleInputChange}
            name2="nameOfShop"
            id2="nameOfShop"
            key3="Remark"
            value3={values.Remarks || ""}
            // onChange3={handleInputChange}
            name3="Remarks"
            id3="Remarks"
            // selecte3
          />
          <TableTrRow
            key1="Owner / Tenant"
            value1={values.TenantName}
            onChange1={handleInputChange}
            name1="TenantName"
            id1="TenantName"
            options1={occupiertype}
            // key2="Name of shop/company"
            value2={values.BalanceAsPerCopyBill || ""}
            // onChange2={handleInputChange}
            name2="Balance As Received Date"
            id2="Balance As Received Date"
            key2="Balance As Received Date"
            key3="Outstanding"
            value3={values.Outstanding || ""}
            onChange3={handleInputChange}
            name3="Outstanding"
            id3="Outstanding"
            // selecte3
          />
          <TableTrRow
            key1="Class[D,C,I,G]"
            value1={values.Class || ""}
            // onChange1={handleInputChange}
            name1="Class"
            id1="Class"
            // key2="Name of shop/company"
            value2={values.AdministrationFee || ""}
            // onChange2={handleInputChange}
            name2="AdministrationFee"
            key2="3% Administration Fee"
            id2="AdministrationFee"
            key3="Payment"
            value3={values.Payment || ""}
            // onChange3={handleInputChange}
            name3="Payment"
            id3="Payment"
            // selecte3
          />
          <TableTrRow
            key1="DR Code"
            value1={
              values.TenantName == "Vacant"
                ? "6 DR06 VACANT LAND "
                : values.TenantName == "Closed"
                ? "22 DR22 CLOSED"
                : values.DRCode || ""
            }
            onChange1={handleInputChange}
            name1="DRCode"
            id1="DRCode"
            options1={Qrcode}
            disabled1={
              values.TenantName == "Vacant"
                ? true
                : values.TenantName == "Closed"
                ? true
                : false
            }
            // key2="Name of shop/company"
            // onChange2={handleInputChange}
            value2={values.LODFee || ""}
            name2="LOD Fee"
            key2="LOD Fee"
            id2="LOD Fee"
            // key3="Payment"
            value3={values.AgentName || ""}
            // onChange3={handleInputChange}
            name3="Agent's Name"
            key3="Agent's Name"
            id3="Agent's Name"
            // selecte3
          />
          <TableTrRow
            key1="Owner's Mobile Number"
            value1={values.Owners_mobile_number || ""}
            name1="Owners_mobile_number"
            id1="Owners_mobile_number"
            key2="Owner's Email Number"
            value2={values.Owners_email || ""}
            // onChange2={handleInputChange}
            name2="Owners_email"
            id2="Owners_email"
            key3="State"
            value3={values.State || ""}
            onChange3={handleInputChange}
            name3="State"
            id3="State"
            // selecte3
          />
          <TableTrRow
            key1="1st Visit-Date of Bill & Notice/LOD was served"
            value1={values.FirstVisitDate || ""}
            name1="1st visit-Date of"
            id1="1st visit-Date of"
            key2="Reason customer refuse to pay IWK billr"
            value2={values.customer_refuse || ""}
            // onChange2={handleInputChange}
            name2="customer_refuse"
            id2="customer_refuse"
            // key3="Payment"
            // value3={values.Payment || ""}
            // // onChange3={handleInputChange}
            // name3="Payment"
            // id3="Payment"
            // selecte3
          />
          <TableTrRow
            key1="Customer's Telephone No"
            value1={values.customerNo || ""}
            name1="Customer's Telephone No"
            id1="Customer's Telephone No"
            key2="Customer's Mobile No"
            value2={values.customer_telephone || ""}
            // onChange2={handleInputChange}
            name2="customer_telephone"
            id2="customer_telephone"
            key3="Customer's Email No"
            value3={values.Payment || ""}
            // onChange3={handleInputChange}
            name3="Payment"
            id3="Payment"
          />
          <TableTrRow
            key1="Owner Telephone No"
            value1={values.telno || ""}
            name1="Owner Telephone No"
            id1="Owner Telephone No"
            key2="Owner Mobile No"
            value2={values.owner_telephone || ""}
            // onChange2={handleInputChange}
            name2="customer_telephone"
            id2="customer_telephone"
            key3="Tenant Telephone No"
            value3={values.tenant_mob || ""}
            // onChange3={handleInputChange}
            name3="tenant_mob"
            id3="tenant_mob"
          />
          <TableTrRow
            key1="Tenant Mobile No"
            value1={values.mobMo || ""}
            name1="mobMo"
            id1="mobMo"
            key2="Ebill Name"
            value2={values.ebill_name || ""}
            // onChange2={handleInputChange}
            name2="ebill_name"
            id2="ebill_name"
            key3="Ebill Mobile No"
            value3={values.EmobileNo || ""}
            // onChange3={handleInputChange}
            name3="EmobileNo"
            id3="EmobileNo"
          />
          <TableTrRow
            key1="Customer Contack Detail"
            value1={values.mobMo || ""}
            name1="mobMo"
            id1="mobMo"
            key2="Ebill Land Line No"
            value2={values.ebill_land_no || ""}
            // onChange2={handleInputChange}
            name2="ebill_land_no"
            id2="ebill_land_no"
            key3="Ebill Email"
            value3={values.Emobill_email || ""}
            // onChange3={handleInputChange}
            name3="Emobill_email"
            id3="Emobill_email"
          />
          <TableTrRow
            key1="Ebill IC Number"
            value1={values.mobMo || ""}
            name1="mobMo"
            id1="mobMo"
            key2="Balance As Per Copy"
            value2={values.ebill_land_no || ""}
            // onChange2={handleInputChange}
            name2="ebill_land_no"
            id2="ebill_land_no"
            key3="Diff Between Bal As Per Copy Bill & Bal"
            value3={values.Emobill_email || ""}
            // onChange3={handleInputChange}
            name3="Emobill_email"
            id3="Emobill_email"
          />
          <TableTrRow
            key1="Occupier Nationality"
            value1={values.mobMo || ""}
            name1="mobMo"
            id1="mobMo"
            key2="Number Of Vistation"
            value2={values.ebill_land_no || ""}
            // onChange2={handleInputChange}
            name2="ebill_land_no"
            id2="ebill_land_no"
            key3="Occupier Nationality"
            value3={values.Emobill_email || ""}
            // onChange3={handleInputChange}
            name3="Emobill_email"
            id3="Emobill_email"
          />
          <TableTrRow
            key1="Tenant's Name"
            value1={values.mobMo || ""}
            name1="mobMo"
            id1="mobMo"
            key2="Tenant's Tel No"
            value2={values.ebill_land_no || ""}
            // onChange2={handleInputChange}
            name2="ebill_land_no"
            id2="ebill_land_no"
            key3="Tenant's Mobile No"
            value3={values.Emobill_email || ""}
            // onChange3={handleInputChange}
            name3="Emobill_email"
            id3="Emobill_email"
          />
          <TableTrRow
            key1="Tenant's Email"
            value1={values.mobMo || ""}
            name1="mobMo"
            id1="mobMo"
            key2="Property Status"
            value2={values.ebill_land_no || ""}
            // onChange2={handleInputChange}
            name2="ebill_land_no"
            id2="ebill_land_no"
            key3="Building"
            value3={values.Emobill_email || ""}
            // onChange3={handleInputChange}
            name3="Emobill_email"
            id3="Emobill_email"
          />
          <TableTrRow
            key1="Building ID"
            value1={values.mobMo || ""}
            name1="mobMo"
            id1="mobMo"
            key2="Road Name"
            value2={values.ebill_land_no || ""}
            // onChange2={handleInputChange}
            name2="ebill_land_no"
            id2="ebill_land_no"
            key3="Taman"
            value3={values.Emobill_email || ""}
            // onChange3={handleInputChange}
            name3="Emobill_email"
            id3="Emobill_email"
          />
          <TableTrRow
            key1="Post Code"
            value1={values.mobMo || ""}
            name1="mobMo"
            id1="mobMo"
            key2="Suburb"
            value2={values.ebill_land_no || ""}
            // onChange2={handleInputChange}
            name2="ebill_land_no"
            id2="ebill_land_no"
            key3="Current Balance"
            value3={values.Emobill_email || ""}
            // onChange3={handleInputChange}
            name3="Emobill_email"
            id3="Emobill_email"
          />
          <TableTrRow
            key1="Total Payable Amount"
            value1={values.mobMo || ""}
            name1="mobMo"
            id1="mobMo"
            // key2="Suburb"
            // value2={values.ebill_land_no || ""}
            // // onChange2={handleInputChange}
            // name2="ebill_land_no"
            // id2="ebill_land_no"
            // key3="Current Balance"
            // value3={values.Emobill_email || ""}
            // // onChange3={handleInputChange}
            // name3="Emobill_email"
            // id3="Emobill_email"
          />
          <TableTrRow
            key1="Post Code"
            value1={values.mobMo || ""}
            name1="mobMo"
            id1="mobMo"
            key2="Suburb"
            value2={values.ebill_land_no || ""}
            // onChange2={handleInputChange}
            name2="ebill_land_no"
            id2="ebill_land_no"
            key3="Current Balance"
            value3={values.Emobill_email || ""}
            // onChange3={handleInputChange}
            name3="Emobill_email"
            id3="Emobill_email"
          />
          {/* update new feild */}
          <TableTrRow
            key1="LA_New IC"
            value1={values.mobMo || ""}
            name1="mobMo"
            id1="mobMo"
            key2="LA Other No"
            value2={values.ebill_land_no || ""}
            // onChange2={handleInputChange}
            name2="ebill_land_no"
            id2="ebill_land_no"
            key3="Water New Ic"
            value3={values.Emobill_email || ""}
            // onChange3={handleInputChange}
            name3="Emobill_email"
            id3="Emobill_email"
          />
          <TableTrRow
            key1="Water Other Number No1"
            value1={values.mobMo || ""}
            name1="mobMo"
            id1="mobMo"
            key2="Water Email Add"
            value2={values.ebill_land_no || ""}
            // onChange2={handleInputChange}
            name2="ebill_land_no"
            id2="ebill_land_no"
            key3="LA Old IC"
            value3={values.Emobill_email || ""}
            // onChange3={handleInputChange}
            name3="Emobill_email"
            id3="Emobill_email"
          />
          <TableTrRow
            key1="LA Email Add"
            value1={values.mobMo || ""}
            name1="mobMo"
            id1="mobMo"
            key2="Water Old IC"
            value2={values.ebill_land_no || ""}
            // onChange2={handleInputChange}
            name2="ebill_land_no"
            id2="ebill_land_no"
            key3="Water Other No 2"
            value3={values.Emobill_email || ""}
            // onChange3={handleInputChange}
            name3="Emobill_email"
            id3="Emobill_email"
          />
          <TableTrRow
            key1="LA Name"
            value1={values.mobMo || ""}
            name1="mobMo"
            id1="mobMo"
            key2="Water Mobile"
            value2={values.ebill_land_no || ""}
            // onChange2={handleInputChange}
            name2="ebill_land_no"
            id2="ebill_land_no"
            key3="Water Name"
            value3={values.Emobill_email || ""}
            // onChange3={handleInputChange}
            name3="Emobill_email"
            id3="Emobill_email"
          />
          <TableTrRow
            key1="Water Mobile"
            value1={values.mobMo || ""}
            name1="mobMo"
            id1="mobMo"
          />

          {/*  */}
        </table>
        {/* {values.TenantName}
        asa
        {JSON.stringify(values.TenantName == "Vacant")}
        ook
        <br />
        {JSON.stringify(values.TenantName)} */}
        <button
          className={classes.btn}
          onClick={(e) => updating(e)}
          disabled={Disabled}
        >
          {Disabled ? (
            <CircularProgress className={classes.Progress} />
          ) : (
            "Submit"
          )}
        </button>
      </form>
    </div>
  );
}
export default Dashboard;
