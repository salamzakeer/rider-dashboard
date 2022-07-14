import { makeStyles } from "@material-ui/core";
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
} from "../../../../api/detailsApi";
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
        width: "300px",
        margin: "12px 0px 0px auto",

        border: "1px solid #ccc",
        height: "60px",
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
  const { SelectUserObject } = Details;

  useEffect(() => {
    setValues({});

    setValues(SelectUserObject);
  }, [SelectUserObject]);
  const [values, setValues] = useState({});
  console.log(values, "values");
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };
  const classes = useStyles();
  const updating = (e) => {
    e.preventDefault();
    console.log("okoko", values);
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
            key2="Is Name Correct"
            value2={values.DCAName || ""}
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
            value2={values.Gender}
            // onChange2={handleInputChange}
            name2="Nationality"
            id2="Nationality"
            options2={Gender}
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
            value3={values.MailName2 || ""}
            onChange3={handleInputChange}
            name3="MailName2"
            id3="status"
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
            // onChange2={handleInputChange}
            name2="OwnertelNos"
            id2="OwnertelNos"
            // key3="Status"
            // value3={values.status}
            // onChange3={handleInputChange}
            // name3="status"
            // id3="status"
            // selecte3
          />{" "}
          {/* 5 */}
          <TableTrRow
            key1="Owner 1"
            value1={values.Owner1 || ""}
            // onChange1={handleInputChange}
            name1="Owner1"
            id1="Owner1"
            key2="Owner's Tel No 3"
            value2={values.OwnertelNo3 || ""}
            // onChange2={handleInputChange}
            name2="OwnertelNo3"
            id2="OwnertelNo3"
            // key3="Status"
            // value3={values.status}
            // onChange3={handleInputChange}
            // name3="status"
            // id3="status"
            // selecte3
          />{" "}
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
            // value3={values.status}
            // onChange3={handleInputChange}
            // name3="status"
            // id3="status"
            // selecte3
          />{" "}
          {/* 7 */}
          <TableTrRow
            key1="Props Address 2"
            value1={values.PropAddr2 || ""}
            // onChange1={handleInputChange}
            name1="PropAddr2"
            id1="PropAddr2"
            key2="Tanant Phone 2"
            value2={values.TanantPhone2 || ""}
            // onChange2={handleInputChange}
            name2="TanantPhone2"
            id2="TanantPhone2"
            // key3="Status"
            // value3={values.status}
            // onChange3={handleInputChange}
            // name3="status"
            // id3="status"
            // selecte3
          />{" "}
          {/* 8 */}
          <TableTrRow
            key1="Props Address 3"
            value1={values.PropAddr3 || ""}
            // onChange1={handleInputChange}
            name1="PropAddr3"
            id1="PropAddr3"
            key2="Tanant Phone 3"
            value2={values.TanantPhone3 || ""}
            // onChange2={handleInputChange}
            name2="TanantPhone3"
            id2="TanantPhone3"
            // key3="Status"
            // value3={values.status}
            // onChange3={handleInputChange}
            // name3="status"
            // id3="status"
            // selecte3
          />{" "}
          <TableTrRow
            key1="Props Address 4"
            value1={values.PropAddr4 || ""}
            // onChange1={handleInputChange}
            name1="PropAddr4"
            id1="PropAddr4"
            // key2="Tanant Phone 3"
            // value2={values.TanantPhone3}
            // onChange2={handleInputChange}
            // name2="TanantPhone3"
            // id2="TanantPhone3"
            // key3="Status"
            // value3={values.status}
            // onChange3={handleInputChange}
            // name3="status"
            // id3="status"
            // selecte3
          />{" "}
          <TableTrRow
            key1="Arrears Date"
            value1={values.arrearsDate || ""}
            // onChange1={handleInputChange}
            name1="arrearsDate"
            id1="arrearsDate"
            key2="Property Usage"
            value2={values.PropertyUsage || ""}
            onChange2={handleInputChange}
            name2="PropertyUsage"
            id2="PropertyUsage"
            key3="Arrears"
            value3={values.Arrears}
            onChange3={handleInputChange || ""}
            name3="Arrears"
            id3="Arrears"
            // selecte3
          />{" "}
          <TableTrRow
            key1="Date of visit"
            value1={values.visitDate || ""}
            onChange1={handleInputChange}
            name1="visitDate"
            id1="visitDate"
            key2="Property Type"
            options2={propertyusagetype}
            value2={values.PropertyUsage1 || ""}
            onChange2={handleInputChange}
            name2="PropertyUsage1"
            id2="PropertyUsage1"
            key3="Range"
            value3={values.Range || ""}
            onChange3={handleInputChange}
            name3="Range"
            id3="RangeRange"
            // selecte3
          />{" "}
          <TableTrRow
            key1="Owner Correct"
            value1={values.OwnernameCorrect || ""}
            onChange1={handleInputChange}
            name1="OwnernameCorrect"
            id1="OwnernameCorrect"
            key2="Name of shop/company"
            value2={values.nameOfShop || ""}
            onChange2={handleInputChange}
            name2="nameOfShop"
            id2="nameOfShop"
            key3="Remark"
            value3={values.Remarks || ""}
            onChange3={handleInputChange}
            name3="Remarks"
            id3="Remarks"
            // selecte3
          />{" "}
          <TableTrRow
            key1="Owner / Tenat"
            value1={values.TenantName || ""}
            onChange1={handleInputChange}
            name1="TenantName"
            id1="TenantName"
            // key2="Name of shop/company"
            // value2={values.nameOfShop}
            // onChange2={handleInputChange}
            // name2="nameOfShop1"
            // id2="nameOfShop1"
            key3="Outstanding"
            value3={values.Outstanding || ""}
            onChange3={handleInputChange}
            name3="Outstanding"
            id3="Outstanding"
            // selecte3
          />{" "}
          <TableTrRow
            key1="Class[D,C,I,G]"
            value1={values.Class || ""}
            // onChange1={handleInputChange}
            name1="Class"
            id1="Class"
            // key2="Name of shop/company"
            // value2={values.nameOfShop}
            // onChange2={handleInputChange}
            // name2="nameOfShop1"
            // id2="nameOfShop1"
            key3="Payment"
            value3={values.Payment || ""}
            onChange3={handleInputChange}
            name3="Payment"
            id3="Payment"
            // selecte3
          />{" "}
          <TableTrRow
            key1="DR Code"
            value1={values.DRCode || ""}
            onChange1={handleInputChange}
            name1="DRCode"
            id1="DRCode"
            options1={Qrcode}

            // key2="Name of shop/company"
            // value2={values.nameOfShop}
            // onChange2={handleInputChange}
            // name2="nameOfShop1"
            // id2="nameOfShop1"
            // key3="Payment"
            // value3={values.Payment}
            // onChange3={handleInputChange}
            // name3="payment"
            // id3="payment"
            // selecte3
          />{" "}
        </table>
        <button className={classes.btn} onClick={(e) => updating(e)}>
          submit
        </button>
      </form>
    </div>
  );
}
export default Dashboard;
