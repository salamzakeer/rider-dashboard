import React from "react";
import "react-toastify/dist/ReactToastify.css"; // import first
import makeAnimated from "react-select/animated";
import MySelect from "../../components/select/select";
import { components } from "react-select";
import { useToasts } from "react-toast-notifications";
import Datapicker from "../../components/customCore/datapicker";
import UploadIcon from "../../assets/upload.png";
import axios from "../../axios";
import "./importManger.css";
import Layout from "../../components/layout/Navbar";
import moment from "moment";
import { makeStyles } from "@material-ui/core";
import { CircularProgress } from "@mui/material";

const Option = (props) => {
  return (
    <div>
      <components.Option {...props}>
        <input
          type="checkbox"
          checked={props.isSelected}
          onChange={() => null}
        />
        <label>{props.label}</label>
      </components.Option>
    </div>
  );
};

const MultiValue = (props) => (
  <components.MultiValue {...props}>
    <span>{props.data.label}</span>
  </components.MultiValue>
);

const LndArrayOptions = [
  { value: "Exclude", label: "Exclude", color: "#00B8D9" },
  {
    value: "IWKSpecialInstruction",
    label: "IWK Special Instruction",
    color: "#00B8D9",
  },
  {
    value: "CustomerTelephoneNo",
    label: "Customer TelephoneNo",
    color: "#00B8D9",
  },
  { value: "CustomerMobileNo", label: "Customer Mobile No", color: "#00B8D9" },
  { value: "CustomerFaxNo", label: "Customer Fax No", color: "#00B8D9" },
  { value: "CustomerEmail", label: "Customer Email", color: "#00B8D9" },
  { value: "OwnertelNo", label: "Owner Tel No", color: "#00B8D9" },
  { value: "OwnerMobNo", label: "Owner Mob No", color: "#00B8D9" },
  { value: "TenantTelNo", label: "Tenant Tel No", color: "#00B8D9" },
  {
    value: "CustomerContactDetail",
    label: "Customer Contact Detail",
    color: "#00B8D9",
  },
  { value: "Building", label: "Building", color: "#00B8D9" },
  { value: "BuildingID", label: "Building ID", color: "#00B8D9" },
  {
    value: "BalanceAsPerCopyBill",
    label: "Balance As Per Copy Bill",
    color: "#00B8D9",
  },
  {
    value: "DiffBetweenBalAsPerCopyBill",
    label: "Diff Between Bal As Per Copy Bill",
    color: "#00B8D9",
  },
  { value: "AgentName", label: "Agent Name", color: "#00B8D9" },
  { value: "updateReminder", label: "update Reminder", color: "#00B8D9" },
  { value: "Occupier", label: "Occupier", color: "#00B8D9" },
  { value: "OwnernameCorrect", label: "Owner Name Correct", color: "#00B8D9" },
  {
    value: "specifyCorrectOwnername",
    label: "Specify Correct Owner Name",
    color: "#00B8D9",
  },
  { value: "OwnerstelNo", label: "Owners Tel No", color: "#00B8D9" },
  { value: "OwnersMobNo", label: "Owners Mob No", color: "#00B8D9" },
  { value: "Ownerfaxno", label: "Owner Fax No", color: "#00B8D9" },
  { value: "OwnerEmail", label: "Owner Email", color: "#00B8D9" },
  { value: "TenantName", label: "Tenant Name", color: "#00B8D9" },
  { value: "TenantsTelNo", label: "Tenants Tel No", color: "#00B8D9" },
  { value: "TenantsMobNo", label: "Tenants Mob No", color: "#00B8D9" },
  { value: "TenantFaxNo", label: "Tenant Fax No", color: "#00B8D9" },
  { value: "TenantEmail", label: "Tenant Email", color: "#00B8D9" },
  {
    value: "OccupierNationality",
    label: "Occupier Nationality",
    color: "#00B8D9",
  },
  { value: "numberOfVisit", label: "number Of Visit", color: "#00B8D9" },
  {
    value: "Numberoffollowupcalls",
    label: "Number Of Follow Up Calls",
    color: "#00B8D9",
  },
  { value: "PropertyUsage", label: "Property Usage", color: "#00B8D9" },
  { value: "PropertyType", label: "Property Type", color: "#00B8D9" },
  {
    value: "NameofShopOrCompany",
    label: "Name Of ShopOrCompany",
    color: "#00B8D9",
  },
  {
    value: "ReasonCustomerRefuseToPayIWKbill",
    label: "Reason Customer Refuse To Pay IWK bill",
    color: "#00B8D9",
  },
  { value: "DRCode", label: "DRCode", color: "#00B8D9" },
  { value: "Remarks", label: "Remarks", color: "#00B8D9" },
  { value: "ThirdPartySearch", label: "ThirdPartySearch", color: "#00B8D9" },
  { value: "SourceofTPS", label: "SourceofTPS", color: "#00B8D9" },
  {
    value: "TPSOutcomeOrContactNumber",
    label: "TPS Outcome Or Contact Number",
    color: "#00B8D9",
  },
  { value: "RemarksTPS", label: "Remarks TPS", color: "#00B8D9" },

  // Exclude
  { value: "DCAFiletype", label: "DCA Filetype", color: "#00B8D9" },
  { value: "DCAName", label: "DCA Name", color: "#0052CC" },
  { value: "DCACode", label: "DCA Code", color: "#0052CC" },
  { value: "State", label: "State", color: "#5243AA" },
  { value: "Costcode", label: "Cost code", color: "#FF5630" },
  { value: "UO", label: "UO", color: "#00B8D9" },
  { value: "LAName", label: "LA Name", color: "#00B8D9" },
  { value: "billno", label: "Bill No", color: "#00B8D9" },
  { value: "SAN", label: "SAN", color: "#00B8D9" },
  { value: "Owner1", label: "Owner 1", color: "#00B8D9" },
  { value: "Owner2", label: "Owner 2", color: "#00B8D9" },
  // {
  //   value: "specifyCorrectOwnername",
  //   label: "Specify Correct Owner Name",
  //   color: "#00B8D9",
  // },
  // { value: "OwnernameCorrect", label: "Owner Name Correct", color: "#00B8D9" },
  { value: "Owner1NRIC", label: "Owner1 NRIC", color: "#00B8D9" },
  { value: "Owner2NRIC", label: "Owner2 NRIC", color: "#00B8D9" },
  { value: "PropAddr1", label: "PropAddr 1", color: "#00B8D9" },
  { value: "PropAddr2", label: "PropAddr 2", color: "#00B8D9" },
  { value: "PropAddr3", label: "PropAddr 3", color: "#00B8D9" },
  { value: "PropAddr4", label: "PropAddr 4", color: "#00B8D9" },
  { value: "PropAddr5", label: "PropAddr 5", color: "#00B8D9" },
  { value: "Roadname", label: "Roadname", color: "#00B8D9" },
  { value: "Taman", label: "Taman", color: "#00B8D9" },
  { value: "PostCode", label: "Post Code", color: "#00B8D9" },
  { value: "Suburb", label: "Suburb", color: "#00B8D9" },
  { value: "MailName1", label: "MailName 1", color: "#00B8D9" },
  { value: "MailName2", label: "MailName 2", color: "#00B8D9" },
  { value: "MailAdd1", label: "MailAdd 1", color: "#00B8D9" },
  { value: "MailAdd2", label: "MailAdd 2", color: "#00B8D9" },
  { value: "MailAdd3", label: "MailAdd 3", color: "#00B8D9" },
  { value: "MailAdd4", label: "MailAdd 4", color: "#00B8D9" },
  { value: "Class", label: "Class", color: "#00B8D9" },
  { value: "Range", label: "Range", color: "#00B8D9" },
  { value: "Arrears", label: "Arrears", color: "#00B8D9" },
  { value: "CurrentBalance", label: "Current Balance", color: "#00B8D9" },
  {
    value: "Balance",
    label: "Balance",
    color: "#00B8D9",
  },
  {
    value: "AdministrationFee",
    label: "Administration Fee",
    color: "#00B8D9",
  },
  { value: "LODFee", label: "LOD Fee", color: "#00B8D9" },
  {
    value: "TotalPayableAmount",
    label: "Total Payable Amount",
    color: "#00B8D9",
  },
  { value: "BATCH", label: "BATCH", color: "#00B8D9" },
  { value: "PropertyStatus", label: "Property Status", color: "#00B8D9" },
  { value: "FirstVisitDate", label: "First Visit Date", color: "#00B8D9" },
  { value: "TenantMobNo", label: "Tenant Mob No", color: "#00B8D9" },
  { value: "EbillName", label: "E Bill Name", color: "#00B8D9" },
  { value: "EbillMobileNo", label: "E Bill Mobile No", color: "#00B8D9" },
  { value: "EbillLandlineNo", label: "E Bill Landline No", color: "#00B8D9" },
  { value: "EbillEmail", label: "E Bill Email", color: "#00B8D9" },

  { value: "LA_Name", label: "LA_Name", color: "#00B8D9" },
  { value: "LA_Mobile", label: "LA_Mobile", color: "#00B8D9" },
  { value: "Water_Name", label: "Water_Name", color: "#00B8D9" },
  { value: "Water_Mobile", label: "Water_Mobile", color: "#00B8D9" },
  { value: "LA_New IC", label: "LA_New_IC", color: "#00B8D9" },
  { value: "LA_Other_No", label: "LA_Other No", color: "#00B8D9" },
  { value: "Water_New_IC", label: "Water_New IC", color: "#00B8D9" },
  { value: "Water_Other_No1", label: "Water_Other No1", color: "#00B8D9" },
  { value: "Water_Email_Add", label: "Water_Email Add", color: "#00B8D9" },
  { value: "LA_Old_IC", label: "LA_Old IC", color: "#00B8D9" },
  { value: "LA_Email Add", label: "LA_Email Add", color: "#00B8D9" },
  { value: "Water_Old_IC", label: "Water_Old IC", color: "#00B8D9" },
  { value: "Water_Other_No2", label: "email", color: "#00B8D9" },
  { value: "ICNOs", label: "ICNOs ", color: "#00B8D9" },
  { value: "ArrPhone", label: "ArrPhone", color: "#00B8D9" },
];

const VacantsArrayOptions = [
  { value: "SEWACC", label: "SEWACC", color: "#00B8D9" },
  { value: "OWNER_NAME", label: "OWNER NAME", color: "#0052CC" },
  { value: "PROP_ADD", label: "PROP ADD", color: "#5243AA" },
  { value: "CURRENT_CLASS", label: "CURRENT CLASS", color: "#FF5630" },
];
const animatedComponents = makeAnimated();
const useStyles = makeStyles((theme) => ({
  alert: {
    display: "flex",
    color: "rgb(30, 70, 32)",
    background: "rgb(237, 247, 237)",
    maxWidth: "400px",
    width: "100%",
    padding: " 10px 24px 0px 24px",
    flexDirection: "column",
    borderRadius: "10px",
    // opacity: "0.9",
  },
  Progress: {
    // margin: "9px",
    width: "24px !important",
    height: "24px !important",
  },
  formMain: {
    display: "flex",
    justifyContent: "space-between",
    maxWidth: "750px",
    paddingLeft: "50px",
    // backgroundColor: "red",
    [theme.breakpoints.down("md")]: {
      // backgroundColor: "green",
      flexDirection: "column",
    },
  },
  label: {
    paddingLeft: "22px",
    fontSize: "16px",
    color: "#00000A",
    opacity: "0.6",
    fontWeight: 600,
    paddingBottom: "4px",

    [theme.breakpoints.down("lg")]: {
      fontSize: "14px !important",
    },
  },
  lnds: {
    // display: "flex"
    maxWidth: "750px",
    minWidth: "350px",
    [theme.breakpoints.down("md")]: {
      // backgroundColor: "red",
      maxWidth: "1500px",
      minWidth: "250px",
      // background: "red",
    },
  },
  btn: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "16px !important",
    fontWeight: "500 !important",
    width: "200px  !important",
    margin: "auto",
    "&:hover": {
      color: "#501abf !important",
      fontWeight: "600 !important",

      "& svg": {
        color: "#501abf !important",
      },
      background: "#fff !important",
    },
    "& svg": {
      color: "#fff !important",
    },
    border: "2px solid #501abf !important",
  },
  formMainDiv: {
    width: "350px",
    [theme.breakpoints.down("md")]: {
      width: "auto !important",
    },
  },
  MySelectDiv: {
    justifyContent: "space-between",
    maxWidth: "750px",
    with: "100%",
    paddingLeft: "50px",
  },
  // formMainDiv: {

  // },
}));
function Dashboard() {
  const { addToast } = useToasts();
  const classes = useStyles();

  //upload file
  const [file, setFile] = React.useState("");
  const [PFile, setPFile] = React.useState("");
  const [Response, setResponse] = React.useState(false);

  const [optionSelected, setOptionSelected] = React.useState(null);
  const [optionSelectedOr, setOptionSelectedOr] = React.useState(null);
  const [Disabled, setDisabled] = React.useState(false);
  const [JobType, setJobType] = React.useState("");
  const [DueDate, setDueDate] = React.useState(new Date());
  const [ReportDate, setReportDate] = React.useState(new Date());
  const [CurrentDate, setCurrentDate] = React.useState(new Date());

  const selecHandleChange = (selected) => {
    setOptionSelected(selected);
  };

  // Handles file upload event and updates state
  const data = new FormData();

  function handleUpload(event) {
    setFile(event.target.files[0]);
    setPFile(event.target.files[0]);
    // Add code here to upload file to server
    // ...
  }

  //end-upload file
  const AdminId = JSON.parse(localStorage.getItem("auth")).message.id || "";

  const dialogOpen = () => {
    setResponse(true);
    setTimeout(() => {
      setResponse(false);
    }, 6000);
  };
  let handleSubmit = (event) => {
    event.preventDefault();
    if (optionSelectedOr !== "" && optionSelectedOr !== "Type") {
      setDisabled(true);
      event.preventDefault();
      var array = [];
      optionSelected.map((item) => array.push(item.value));
      data.append("data", file);
      data.append("dueDate", moment(DueDate).format("YYYY-MM-DD"));
      data.append("createdDate", moment(CurrentDate).format("YYYY-MM-DD"));
      data.append("reportDate", moment(CurrentDate).format("YYYY-MM-DD"));

      data.append("jobName", JobType);
      data.append("columns", `${array}`);
      data.append("adminId", AdminId);
      data.append("category", optionSelectedOr);

      axios
        // detailIndex
        .post(`/${optionSelectedOr}`, data, {
          headers: { "Content-Type": "multipart/form-data" },
          //   onUploadProgress: (data) => {
          //     //Set the progress value to show the progress bar
          //     // setProgress(Math.round((100 * data.loaded) / data.total));
          //   },
        })
        .then((res) => {
          // var id = res.id;
          // setProgress("");
          addToast(
            res.data.message.includes("Jobname already exist")
              ? res.data.message
              : "Data add Successfully",
            {
              appearance: res.data.message.includes("Jobname already exist")
                ? "error"
                : "success",
              autoDismiss: "true",
              autoDismissTimeout: 2000,
            }
          );
          setDisabled(false);
          setResponse(true);

          dialogOpen();
        })
        .catch((error) => {
          addToast("please select correct file", {
            appearance: "error",
            autoDismiss: "true",
            autoDismissTimeout: 2000,
          });
          setDisabled(false);

          // sendNotification({ msg: "There was an error!", variant: "error" });
        });
    }
  };
  const handleInputChange = (e) => {
    const { value } = e.target;
    // console.log(name, 'name', value, 'value')
    setOptionSelectedOr(value);
  };
  // console.log('hi')
  // console.log(moment(DueDate).format("DD-MM-YYYY"));

  const handleNotChange = () => {
    return null;
  };
  const handleCurrentDate = (e) => {
    console.log(e);
    setCurrentDate(e);
  };
  return (
    <Layout>
      <div className="newFile2">
        <div className="rider-info">Import Manager</div>
        <form onSubmit={handleSubmit}>
          <div className={classes.formMain}>
            <div className={classes.formMainDiv}>
              <label className={classes.label}>{"Type"}</label>
              <select
                className="form-select"
                aria-label="Default select example"
                name=""
                onChange={handleInputChange}
                required="required"
                defaultValue=""
              >
                <option name="" value="" disabled>
                  Type
                </option>
                <option name="lnds" value="lnds">
                  LANDED
                </option>
                <option name="vacants" value="vacants">
                  VACANTS
                </option>
                {/* lnds same data to comercial and highrises commercials  */}
                <option name="commercials" value="commercials">
                  COMMERCIAL
                </option>
                <option name="highrises" value="highrises">
                  HIGHRISES
                </option>
              </select>

              <br />

              <label className={classes.label}>{"Upload File"}</label>
              <div className="input-div">
                <input
                  type="file"
                  className="input-div-3"
                  onChange={handleUpload}
                />
                {/* <input type="file" onChange={handleUpload} style = {{ display: "none"}}/> */}
                <input
                  type="text"
                  className="input-div-input"
                  placeholder={file.name || "Upload File"}
                  readOnly={"readOnly"}
                  onChange={handleNotChange}
                />
                <img
                  type="file"
                  src={UploadIcon}
                  alt=""
                  className="input-div-botton"
                />
              </div>

              <br />

              <label className={classes.label}>{"Job Name"}</label>
              <div className="input-div">
                <input
                  type="text"
                  className="input-div-input"
                  placeholder="Job Name"
                  value={JobType}
                  required
                  onChange={(e) => setJobType(e.target.value)}
                />
                {/* <img src={AddIcon} alt="" className="input-div-botton" /> */}
              </div>
              {/* {optionSelectedOr} */}
              <br />
              <br />
            </div>

            <div>
              <Datapicker
                name="currentdate"
                value={CurrentDate}
                label="Current Date"
                onChange={handleCurrentDate}
                required
              />
              <br />

              <Datapicker
                name="duedate"
                value={DueDate}
                label="Due Date"
                onChange={(e) => setDueDate(e)}
                required
              />
              <br />

              <Datapicker
                name="reportdate"
                value={ReportDate}
                label="Report Date"
                onChange={(e) => setReportDate(e)}
                required
              />
            </div>
          </div>
          <br />
          <div className={classes.MySelectDiv}>
            <div className={classes.lnds}>
              {(optionSelectedOr === "lnds" ||
                optionSelectedOr === "commercials" ||
                optionSelectedOr === "highrises") && (
                <div>
                  <MySelect
                    menuPosition="fixed"
                    options={LndArrayOptions}
                    isMulti
                    closeMenuOnSelect={false}
                    hideSelectedOptions={false}
                    components={{ Option, MultiValue, animatedComponents }}
                    onChange={selecHandleChange}
                    allowSelectAll={true}
                    value={optionSelected}
                  />
                </div>
              )}

              {optionSelectedOr === "vacants" && (
                <div>
                  <MySelect
                    menuPosition="fixed"
                    options={VacantsArrayOptions}
                    isMulti
                    closeMenuOnSelect={false}
                    hideSelectedOptions={false}
                    components={{ Option, MultiValue, animatedComponents }}
                    onChange={selecHandleChange}
                    allowSelectAll={true}
                    value={optionSelected}
                  />
                </div>
              )}
            </div>
            <br />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              maxWidth: "750px",
            }}
          >
            <button
              type="submit"
              className={`submit3  ${classes.btn} `}
              disabled={Disabled}
            >
              {Disabled ? (
                <CircularProgress className={classes.Progress} />
              ) : (
                "Submit"
              )}
            </button>
            <br />
            {/* <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}> */}
            <div style={{ maxWidth: "400px", margin: "0 auto" }}>
              {PFile && Response && (
                <div className={classes.alert}>
                  <>
                    <div>
                      {" "}
                      File Name :<strong>{PFile.name}</strong>{" "}
                    </div>
                    <div>
                      File Size {"  "} :<strong>{PFile.size} KB</strong>
                      <br />
                    </div>
                    <div style={{ textAlign: "center" }}>
                      <strong> Added</strong>
                    </div>
                    <br />
                  </>
                </div>
              )}
            </div>
            {/* </Snackbar> */}

            {/* file.name */}
          </div>
        </form>
      </div>
    </Layout>
  );
}
export default Dashboard;
