import { CircularProgress, makeStyles } from "@material-ui/core";
import { createStyles } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import TableTrRow from "./tableTemplate";
import { Qrcode } from "../../../../api/qrcode";
import {
  Status,
  YesNo,
  typeofbusinesstype,
  propertyusagetype,
  occupiertype,
  Nationality,
  RiderStatus,
} from "../../../../api/detailsApi";
import { useToasts } from "react-toast-notifications";
import axios from "../../../../axios";
import moment from "moment";
import Datapicker from "../../../../components/customCore/datapickerCallManger";

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

    if (SelectUserObject.FirstVisitDate != null) {
      setCurrentDate(
        new Date(moment(SelectUserObject.FirstVisitDate).format("YYYY-MM-DD"))
      );
    }
  }, [SelectUserObject]);
  const [values, setValues] = useState({});
  const [CurrentDate, setCurrentDate] = React.useState(
    values.FirstVisitDate
    // moment(values.FirstVisitDate)
  );

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };
  const handleDateChange = (e) => {
    // setValues({
    //   ...values,
    //   FirstVisitDate: "Thu Aug 18 2022 00:00:00 GMT+0530 (India Standard Time)",
    // });
  };
  // handleDateChange
  const classes = useStyles();
  const updating = (e) => {
    setDisabled(true);

    e.preventDefault();
    const data = new FormData();
    // data.append(
    //   "onSchedule",
    //   JSON.stringify(values.trackType) === "true" ? 1 : 0
    // );
    data.append(
      "OwnernameCorrect",
      values.OwnernameCorrect === null ? "" : values.OwnernameCorrect
    );
    data.append(
      "specifyCorrectOwnername",
      values.specifyCorrectOwnername === null
        ? ""
        : values.specifyCorrectOwnername
    );
    data.append(
      "OwnertelNo",
      values.OwnertelNo === null ? "" : values.OwnertelNo
    );
    data.append(
      "PropertyUsage",
      values.PropertyUsage === null ? "" : values.PropertyUsage
    );
    data.append(
      "PropertyType",
      values.PropertyType === null ? "" : values.PropertyType
    );
    data.append("DRCode", values.DRCode === null ? "" : values.DRCode);
    data.append("Remarks", values.Remarks === null ? "" : values.Remarks);
    data.append(
      "TenantName",
      values.TenantName === null ? "" : values.TenantName
    );
    data.append(
      "TenantTelNo",
      values.TenantTelNo === null ? "" : values.TenantTelNo
    );
    data.append("Payment", values.Payment === null ? "" : values.Payment);
    data.append(
      "PropertyStatus",
      values.PropertyStatus === null ? "" : values.PropertyStatus
    );
    data.append(
      "OccupierNationality",
      values.OccupierNationality === null ? "" : values.OccupierNationality
    );
    // FirstVisitDate
    data.append(
      "numberOfVisit",
      values.numberOfVisit === null ? "" : values.numberOfVisit
    );
    data.append(
      "updateStatus",
      values.updateStatus === null ? "" : values.updateStatus
    );
    data.append("FirstVisitDate", moment(CurrentDate).format("YYYY-MM-DD"));

    data.append(
      "Numberoffollowupcalls",
      values.Numberoffollowupcalls === null ? "" : values.Numberoffollowupcalls
    );
    data.append("AgentName", values.AgentName === null ? "" : values.AgentName);
    data.append("Occupier", values.Occupier === null ? "" : values.Occupier);

    data.append(
      "propertyusagetype",
      values.propertyusagetype === null ? "" : values.propertyusagetype
    );
    data.append(
      "nameOfShop",
      values.nameOfShop === null ? "" : values.nameOfShop
    );
    data.append(
      "NatureOfBusiness",
      values.NatureOfBusiness === null ? "" : values.NatureOfBusiness
    );
    data.append(
      "OwnertelNo",
      values.OwnertelNo === null ? "" : values.OwnertelNo
    );
    data.append(
      "TenantsTelNo",
      values.TenantsTelNo === null ? "" : values.TenantsTelNo
    );

    data.append(
      "OwnersMobNo",
      values.OwnersMobNo === null ? "" : values.OwnersMobNo
    );
    data.append(
      "TenantsMobNo",
      values.TenantsMobNo === null ? "" : values.TenantsMobNo
    );
    data.append(
      "ThirdPartySearch",
      values.ThirdPartySearch === null ? "" : values.ThirdPartySearch
    );
    data.append(
      "OwnerEmail",
      values.OwnerEmail === null ? "" : values.OwnerEmail
    );
    data.append(
      "TenantEmail",
      values.TenantEmail === null ? "" : values.TenantEmail
    );
    data.append(
      "Source_of_TPS",
      values.Source_of_TPS === null ? "" : values.Source_of_TPS
    );

    data.append(
      "ReasonCustomerRefuseToPayIWKbill",
      values.ReasonCustomerRefuseToPayIWKbill === null
        ? ""
        : values.ReasonCustomerRefuseToPayIWKbill
    );
    data.append(
      "TPSOutcomeOrContactNumber",
      values.TPSOutcomeOrContactNumber === null
        ? ""
        : values.TPSOutcomeOrContactNumber
    );

    data.append(
      "RemarksTPS",
      values.RemarksTPS === null ? "" : values.RemarksTPS
    );

    axios
      .put("/" + Option + "/" + values.id, data, {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
          Accept: "multipart/form-data",
        },
      })
      .then((result) => {
        // console.log(result);
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
        // console.log(error);

        addToast("something went wrong", {
          appearance: "error",
          autoDismiss: "true",
          autoDismissTimeout: 2000,
        });
        setDisabled(false);

        // console.log("not ok")
      });
  };
  const handleNotInputChange = () => {
    return null;
  };

  // console.log(
  //   values.FirstVisitDate,
  //   moment(values.FirstVisitDate).format("DD/mm/yyyy"),
  //   "-----------------"
  // );
  const handleCurrentDate = (e) => {
    setCurrentDate(e);
  };
  const DatapickerComponent = () => (
    <div>
      <Datapicker
        name="currentdate"
        value={CurrentDate}
        onChange={handleCurrentDate}
        required
      />
    </div>
  );

  const datas = [
    {
      id1: "id",
      key1: "ID",
      name1: "id",
      value1: `${values.id || ""}`,
      onChange1: handleNotInputChange,

      key2: "Customer's Telephone No",
      id2: "CustomerTelephoneNo",
      name2: "CustomerTelephoneNo",
      value2: `${values.CustomerTelephoneNo || ""}`,
      onChange2: handleNotInputChange,

      key3: "Property Status",
      id3: "PropertyStatus",
      value3: `${values.PropertyStatus || ""}`,
      name3: "PropertyStatus",
      onChange3: handleNotInputChange,
      // Status
      options3: RiderStatus,
    },
    // 2
    // todo customer'sMobile
    {
      id1: "SAN",
      key1: "SAN",
      name1: "SAN",
      value1: `${values.SAN || ""}`,
      onChange1: handleNotInputChange,

      key2: "Customer's Moblie No",
      id2: "CustomerTelephoneNo",
      name2: "CustomerTelephoneNo",
      value2: `${values.CustomerTelephoneNo || ""}`,
      onChange2: handleNotInputChange,

      key3: "Prop Address 1",
      id3: "PropAddr1",
      value3: `${values.PropAddr1 || ""}`,
      name3: "PropAddr1",
      onChange3: handleNotInputChange,
    },
    {
      key1: "Bill No",
      id1: "billno",
      name1: "billno",
      value1: `${values.billno || ""}`,
      onChange1: handleNotInputChange,

      key2: "Customer's Email",
      id2: "CustomerEmail",
      name2: "CustomerEmail",
      value2: `${values.CustomerEmail || ""}`,
      onChange2: handleNotInputChange,

      key3: "Prop Address 2",
      id3: "PropAddr2",
      value3: `${values.PropAddr2 || ""}`,
      name3: "PropAddr2",
      onChange3: handleNotInputChange,
    },
    {
      id1: "DCAName",
      key1: "DCA Name",
      name1: "DCAName",
      value1: `${values.DCAName || ""}`,
      onChange1: handleNotInputChange,

      key2: "Owner Telephone No",
      id2: "OwnertelNo",
      name2: "OwnertelNo",
      value2: `${values.OwnertelNo || ""}`,
      onChange2: handleNotInputChange,

      key3: "Prop Address 3",
      id3: "PropAddr3",
      value3: `${values.PropAddr3 || ""}`,
      name3: "PropAddr3",
      onChange3: handleNotInputChange,
    },
    {
      id1: "State",
      key1: "State",
      name1: "State",
      value1: `${values.State || ""}`,
      onChange1: handleNotInputChange,

      key2: "Owner Mobile No",
      id2: "OwnerMobNo",
      name2: "OwnerMobNo",
      value2: `${values.OwnerMobNo || ""}`,
      onChange2: handleNotInputChange,

      key3: "Prop Address 4",
      id3: "PropAddr4",
      value3: `${values.PropAddr4 || ""}`,
      name3: "PropAddr4",
      onChange3: handleNotInputChange,
    },
    {
      key1: "LA Name",
      id1: "LAName",
      name1: "LAName",
      value1: `${values.LAName || ""}`,
      onChange1: handleNotInputChange,

      key2: "Tenant Telephone No",
      id2: "TenantTelNo",
      name2: "TenantTelNo",
      value2: `${values.TenantTelNo || ""}`,
      onChange2: handleNotInputChange,

      key3: "Prop Address 5",
      id3: "PropAddr5",
      value3: `${values.PropAddr5 || ""}`,
      name3: "PropAddr5",
      onChange3: handleNotInputChange,
    },
    {
      key1: "Owner 1",
      id1: "Owner1",
      name1: "Owner1",
      value1: `${values.id || ""}`,
      onChange1: handleNotInputChange,

      key2: "Tenant Mobile No",
      id2: "TenantsMobNo",
      name2: "TenantsMobNo",
      value2: `${values.TenantsMobNo || ""}`,
      onChange2: handleNotInputChange,

      key3: "Building",
      id3: "PropertyStatus",
      value3: `${values.PropertyStatus || ""}`,
      name3: "PropertyStatus",
      onChange3: handleNotInputChange,
    },
    {
      key1: "Owner 2",
      id1: "Owner2",
      name1: "Owner2",
      value1: `${values.Owner2 || ""}`,
      onChange1: handleNotInputChange,

      key2: "Customer Contack Detail",
      id2: "CustomerContactDetail",
      name2: "CustomerContactDetail",
      value2: `${values.CustomerContactDetail || ""}`,
      onChange2: handleNotInputChange,

      key3: "Building ID",
      id3: "PropertyStatus",
      value3: `${values.PropertyStatus || ""}`,
      name3: "PropertyStatus",
      onChange3: handleNotInputChange,
    },
    {
      key1: "Owner 1 NRIC",
      id1: "Owner1NRIC",
      name1: "Owner1NRIC",
      value1: `${values.Owner1NRIC || ""}`,
      onChange1: handleNotInputChange,

      key2: "Ebill Name",
      id2: "EbillName",
      name2: "EbillName",
      value2: `${values.EbillName || ""}`,
      onChange2: handleNotInputChange,

      key3: "Roadname",
      id3: "PropertyStatus",
      value3: `${values.PropertyStatus || ""}`,
      name3: "PropertyStatus",
      onChange3: handleNotInputChange,
    },
    {
      id1: "Owner2NRIC",
      key1: "Owner 2 NRIC",
      name1: "Owner2NRIC",
      value1: `${values.Owner2NRIC || ""}`,
      onChange1: handleNotInputChange,

      key2: "Ebill Mobile No",
      id2: "EbillMobileNo",
      name2: "EbillMobileNo",
      value2: `${values.EbillMobileNo || ""}`,
      onChange2: handleNotInputChange,

      key3: "Taman",
      id3: "PropertyStatus",
      value3: `${values.PropertyStatus || ""}`,
      name3: "PropertyStatus",
      onChange3: handleNotInputChange,
    },
    // complete before
    // 11
    {
      id1: "Exclude",
      key1: "Exclude",
      name1: "Exclude",
      value1: `${values.Exclude || ""}`,
      onChange1: handleNotInputChange,

      key2: "Ebill Land Line No",
      id2: "EbillLandlineNo",
      name2: "EbillLandlineNo",
      value2: `${values.EbillLandlineNo || ""}`,
      onChange2: handleNotInputChange,

      key3: "Post Code",
      id3: "PostCode",
      value3: `${values.PostCode || ""}`,
      name3: "PostCode",
      onChange3: handleNotInputChange,
    },
    {
      id1: "IWKSpecialInstruction",
      key1: "IWK's Special Instruction",
      name1: "IWKSpecialInstruction",
      value1: `${values.IWKSpecialInstruction || ""}`,
      onChange1: handleNotInputChange,

      key2: "Ebill Email",
      id2: "EbillEmail",
      name2: "EbillEmail",
      value2: `${values.EbillEmail || ""}`,
      onChange2: handleNotInputChange,

      key3: "Suburb",
      id3: "Suburb",
      value3: `${values.Suburb || ""}`,
      name3: "Suburb",
      onChange3: handleNotInputChange,
    },

    {
      id1: "Class[D,C,I,G]",
      key1: "Class",
      name1: "Class",
      value1: `${values.Class || ""}`,
      onChange1: handleNotInputChange,

      key2: "Ebill IC Number",
      id2: "EbillIcNumber",
      name2: "EbillIcNumber",
      value2: `${values.EbillIcNumber || ""}`,
      onChange2: handleNotInputChange,

      key3: "Arrears",
      id3: "Arrears",
      value3: `${values.Arrears || ""}`,
      name3: "Arrears",
      onChange3: handleNotInputChange,
    },

    {
      id1: "Balance_As_Received_Date",
      key1: "Balance As Received Date",
      name1: "Balance_As_Received_Date",
      value1: `${values.Balance_As_Received_Date || ""}`,
      onChange1: handleNotInputChange,

      key2: "Range",
      id2: "Range",
      name2: "Range",
      value2: `${values.Range || ""}`,
      onChange2: handleNotInputChange,

      key3: "Current Balance",
      id3: "CurrentBalance",
      value3: `${values.CurrentBalance || ""}`,
      name3: "CurrentBalance",
      onChange3: handleNotInputChange,
    },
    {
      id1: "AdministrationFee",
      key1: "3 % Administration Fee",
      name1: "AdministrationFee",
      value1: `${values.AdministrationFee || ""}`,
      onChange1: handleNotInputChange,

      key2: "Balance As Per Copy Bill",
      id2: "BalanceAsPerCopyBill",
      name2: "BalanceAsPerCopyBill",
      value2: `${values.BalanceAsPerCopyBill || ""}`,
      onChange2: handleNotInputChange,

      key3: "Total Payable Amount",
      id3: "TotalPayableAmount",
      value3: `${values.TotalPayableAmount || ""}`,
      name3: "TotalPayableAmount",
      onChange3: handleNotInputChange,
    },
    {
      id1: "LODFee",
      key1: "LOD Fee",
      name1: "LODFee",
      value1: `${values.LODFee || ""}`,
      onChange1: handleNotInputChange,

      key2: "Diff between bal as per copy bill & bal",
      id2: "DiffBetweenBalAsPerCopyBill",
      name2: "DiffBetweenBalAsPerCopyBill",
      value2: `${values.DiffBetweenBalAsPerCopyBill || ""}`,
      onChange2: handleNotInputChange,

      key3: "",
      // id3: "PropertyStatus",
      value3: ``,
      // name3: "PropertyStatus",
      onChange3: handleNotInputChange,
    },
    // yellow start
    {
      id1: "LA_Name",
      key1: "LA_Name",
      name1: "LA_Name",
      value1: `${values.LA_Name || ""}`,
      onChange1: handleNotInputChange,

      key2: "LA_New IC",
      id2: "LA_New_IC",
      name2: "LA_New_IC",
      value2: `${values.LA_New_IC || ""}`,
      onChange2: handleNotInputChange,

      key3: "LA_Old IC",
      id3: "LA_Old_IC",
      value3: `${values.LA_Old_IC || ""}`,
      name3: "LA_Old_IC",
      onChange3: handleNotInputChange,
    },

    {
      id1: "LA_Mobile",
      key1: "LA_Mobile",
      name1: "LA_Mobile",
      value1: `${values.LA_Mobile || ""}`,
      onChange1: handleNotInputChange,

      key2: "LA_Other No",
      id2: "LA_Other_No",
      name2: "LA_Other_No",
      value2: `${values.LA_Other_No || ""}`,
      onChange2: handleNotInputChange,

      key3: "LA_Email Add",
      id3: "LA_Email_Add",
      value3: `${values.LA_Email_Add || ""}`,
      name3: "LA_Email_Add",
      onChange3: handleNotInputChange,
    },
    {
      id1: "Water_Name",
      key1: "Water_Name",
      name1: "Water_Name",
      value1: `${values.Water_Name || ""}`,
      onChange1: handleNotInputChange,

      key2: "Water_New IC",
      id2: "Water_New_IC",
      name2: "Water_New_IC",
      value2: `${values.Water_New_IC || ""}`,
      onChange2: handleNotInputChange,

      key3: "Water_Old IC",
      id3: "Water_Old_IC",
      value3: `${values.Water_Old_IC || ""}`,
      name3: "Water_Old_IC",
      onChange3: handleNotInputChange,
    },
    {
      id1: "Water_Mobile",
      key1: "Water_Mobile",
      name1: "Water_Mobile",
      value1: `${values.Water_Mobile || ""}`,
      onChange1: handleNotInputChange,

      key2: "Water_Other No1",
      id2: "Water_Other_No1",
      name2: "Water_Other_No1",
      value2: `${values.Water_Other_No1 || ""}`,
      onChange2: handleNotInputChange,

      key3: "Water_Other No2",
      id3: "Water_Other_No2",
      value3: `${values.Water_Other_No2 || ""}`,
      name3: "Water_Other_No2",
      onChange3: handleNotInputChange,
    },
    {
      // id1: "Owner2NRIC",
      // key1: "Owner2NRIC",
      // name1: "Owner2NRIC",
      value1: ``,
      onChange1: handleNotInputChange,

      key2: "Water_Email Add",
      id2: "Water_Email_Add",
      name2: "Water_Email_Add",
      value2: `${values.Water_Email_Add || ""}`,
      onChange2: handleNotInputChange,

      // key3: "PropertyStatus",
      // id3: "PropertyStatus",
      value3: ``,
      // name3: "PropertyStatus",
      onChange3: handleNotInputChange,
    },
    // yellow  End

    //starting updating feild
    {
      key1: "1st visit-Date of Bill & Notice/LOD was served",
      id1: "FirstVisitDate",
      name1: "FirstVisitDate",
      //
      value1: `${moment(values.FirstVisitDate).format("YYYY-MM-DD") || "s"}`,
      onChange1: handleDateChange,
      datepicker1: "23-03-2022",
      datepickerC: <DatapickerComponent />,

      key2: "Occupier Nationality",
      id2: "OccupierNationality",
      name2: "OccupierNationality",
      value2: `${values.OccupierNationality || ""}`,
      onChange2: handleInputChange,
      options2: Nationality,

      key3: "Number Of Follow Up Calls",
      id3: "Numberoffollowupcalls",
      value3: `${values.Numberoffollowupcalls || ""}`,
      name3: "Numberoffollowupcalls",
      onChange3: handleInputChange,
    },
    {
      key1: "Agent's Name",
      id1: "AgentName",
      name1: "AgentName",
      value1: `${values.AgentName || ""}`,
      onChange1: handleInputChange,

      key2: "Number Of Visitation",
      id2: "numberOfVisit",
      name2: "numberOfVisit",
      value2: `${values.numberOfVisit || ""}`,
      onChange2: handleInputChange,

      options3: typeofbusinesstype,
      key3: "Property Usage",
      id3: "PropertyUsage",
      value3: `${values.PropertyUsage || ""}`,
      name3: "PropertyUsage",
      onChange3: handleInputChange,
    },
    {
      key1: "Occupier (Owner/Tenant)",
      id1: "Occupier",
      name1: "Occupier",
      value1: `${values.Occupier || ""}`,
      onChange1: handleInputChange,
      options1: occupiertype,

      key2: "Occupier Nationality",
      id2: "OccupierNationality",
      name2: "OccupierNationality",
      value2: `${values.OccupierNationality || ""}`,
      onChange2: handleInputChange,
      options2: Nationality,

      key3: "Property Type",
      id3: "propertyusagetype",
      value3: `${values.propertyusagetype || ""}`,
      name3: "propertyusagetype",
      onChange3: handleInputChange,
      options3: propertyusagetype,
    },
    {
      key1: "Ownername correct (Yes/No)",
      id1: "OwnernameCorrect",
      name1: "OwnernameCorrect",
      value1: `${values.OwnernameCorrect || ""}`,
      onChange1: handleInputChange,
      options1: YesNo,

      key2: "Number Of Visitation",
      id2: "numberOfVisit",
      name2: "numberOfVisit",
      value2: `${values.numberOfVisit || ""}`,
      onChange2: handleInputChange,

      key3: "Name of shop/company",
      id3: "nameOfShop",
      value3: `${values.nameOfShop || ""}`,
      name3: "nameOfShop",
      onChange3: handleInputChange,
    },
    {
      key1: "Please specify correct ownername",
      id1: "specifyCorrectOwnername",
      name1: "specifyCorrectOwnername",
      value1: `${values.specifyCorrectOwnername || ""}`,
      onChange1: handleInputChange,

      key2: "Tenant's Name",
      id2: "TenantName",
      name2: "TenantName",
      value2: `${values.TenantName || ""}`,
      onChange2: handleInputChange,

      key3: "Nature of business",
      id3: "NatureOfBusiness",
      value3: `${values.NatureOfBusiness || ""}`,
      name3: "NatureOfBusiness",
      onChange3: handleInputChange,
    },
    {
      key1: "Owner's tel no",
      id1: "OwnertelNo",
      name1: "OwnertelNo",
      value1: `${values.OwnertelNo || ""}`,
      onChange1: handleInputChange,

      key2: "Tenant's tel no",
      id2: "TenantsTelNo",
      name2: "TenantsTelNo",
      value2: `${values.TenantsTelNo || ""}`,
      onChange2: handleInputChange,

      key3: "DR Code",
      id3: "DRCode",
      value3: `${
        values.TenantName === "Vacant"
          ? "6 DR06 VACANT LAND "
          : values.TenantName === "Closed"
          ? "22 DR22 CLOSED"
          : values.DRCode || ""
      }`,
      name3: "DRCode",
      onChange3: handleInputChange,
      options3: Qrcode,
    },
    // DRCode last changes
    {
      key1: "Owner's mobile no",
      id1: "OwnersMobNo",
      name1: "OwnersMobNo",
      value1: `${values.OwnersMobNo || ""}`,
      onChange1: handleInputChange,

      key2: "Tenant's mobile no",
      id2: "TenantsMobNo",
      name2: "TenantsMobNo",
      value2: `${values.TenantsMobNo || ""}`,
      onChange2: handleInputChange,

      key3: "Third Party Search",
      id3: "ThirdPartySearch",
      value3: `${values.ThirdPartySearch || ""}`,
      name3: "ThirdPartySearch",
      onChange3: handleInputChange,
    },
    {
      key1: "Owner's Email",
      id1: "OwnerEmail",
      name1: "OwnerEmail",
      value1: `${values.OwnerEmail || ""}`,
      onChange1: handleInputChange,

      key2: "Tenant's email",
      id2: "TenantEmail",
      name2: "TenantEmail",
      value2: `${values.TenantEmail || ""}`,
      onChange2: handleInputChange,

      key3: "Source of TPS",
      id3: "Source_of_TPS",
      value3: `${values.Source_of_TPS || ""}`,
      name3: "Source_of_TPS",
      onChange3: handleInputChange,
    },
    {
      key1: "Reason customer refuse to pay IWK bill",
      id1: "ReasonCustomerRefuseToPayIWKbill",
      name1: "ReasonCustomerRefuseToPayIWKbill",
      value1: `${values.ReasonCustomerRefuseToPayIWKbill || ""}`,
      onChange1: handleInputChange,

      key2: "Remarks",
      id2: "Remarks",
      name2: "Remarks",
      value2: `${values.Remarks || ""}`,
      onChange2: handleInputChange,

      key3: "TPS Outcome/Contact Number",
      id3: "TPSOutcomeOrContactNumber",
      value3: `${values.TPSOutcomeOrContactNumber || ""}`,
      name3: "TPSOutcomeOrContactNumber",
      onChange3: handleInputChange,
    },
    // do 2end yello part
    {
      key1: "Scan via DCA Tracking System (Y/N)",
      id1: "ReasonCustomerRefuseToPayIWKbill",
      name1: "ReasonCustomerRefuseToPayIWKbill",
      value1: `${values.ReasonCustomerRefuseToPayIWKbill || ""}`,
      onChange1: handleInputChange,

      key2: "Reason if copy bill not ",
      id2: "Remarks",
      name2: "Remarks",
      value2: `${values.Remarks || ""}`,
      onChange2: handleInputChange,

      key3: "Completed and Submitted the Headcout Declaration (DF) Form (Y/N)",
      id3: "LA_Old_IC",
      value3: `${values.LA_Old_IC || ""}`,
      name3: "LA_Old_IC",
      onChange3: handleInputChange,
    },
    {
      key1: "Reason customer refuse to pay IWK bill",
      // id1: "ReasonCustomerRefuseToPayIWKbill",
      // name1: "ReasonCustomerRefuseToPayIWKbill",
      // value1: `${values.ReasonCustomerRefuseToPayIWKbill || ""}`,
      // onChange1: handleInputChange,

      // key2: "Remarks",
      // id2: "Remarks",
      // name2: "Remarks",
      // value2: `${values.Remarks || ""}`,
      // onChange2: handleInputChange,

      key3: "State Reason",
      id3: "LA_Old_IC",
      value3: `${values.LA_Old_IC || ""}`,
      name3: "LA_Old_IC",
      onChange3: handleInputChange,
    },
    {
      key1: "Call  Status",
      id1: "ReasonCustomerRefuseToPayIWKbill",
      name1: "ReasonCustomerRefuseToPayIWKbill",
      value1: `${values.updateStatus === 0 ? "Not Update" : "Update" || ""}`,
      onChange1: handleInputChange,
      options1: RiderStatus,

      key2: "Rider Status",
      id2: "updateStatus",
      name2: "updateStatus",
      value2: `${values.updateStatus === 0 ? "Not Update" : "Update" || ""}`,
      onChange2: handleInputChange,
      options2: RiderStatus,

      key3: "Remarks TPS",
      id3: "RemarksTPS",
      value3: `${values.RemarksTPS || ""}`,
      name3: "RemarksTPS",
      onChange3: handleInputChange,
    },
  ];
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
          {datas.length > 0 &&
            datas.map((item, i) => (
              <>
                <TableTrRow
                  key={i}
                  key1={item.key1}
                  value1={item.value1}
                  onChange1={item.onChange1}
                  name1={item.name1}
                  id1={item.id1}
                  datepickerC={item.datepicker1 ? item.datepickerC : false}
                  datepicker1={item.datepicker1 ? item.datepicker1 : false}
                  options1={item.options1 ? item.options1 : false}
                  options2={item.options2 ? item.options2 : false}
                  options3={item.options3 ? item.options3 : false}
                  // datepickerC
                  key2={item.key2}
                  value2={item.value2}
                  onChange2={item.onChange2}
                  name2={item.name2}
                  id2={item.id2}
                  key3={item.key3}
                  value3={item.value3}
                  onChange3={item.onChange3}
                  name3={item.name3}
                  id3={item.id3}
                />
              </>
            ))}
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
