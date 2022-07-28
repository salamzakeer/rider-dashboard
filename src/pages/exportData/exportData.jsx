import Layout from "../../components/layout/Navbar";
import { makeStyles } from "@material-ui/core";
import { createStyles } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import Typography from "@mui/material/Typography";
// import Spreadsheet from "react-spreadsheet";
import CsvDownloader from "react-csv-downloader";
import axios from "../../axios";
import CircularProgress from "@mui/material/CircularProgress";

const useStyles = makeStyles(
  (theme) =>
    createStyles({
      dataTable: {
        display: "flex",
        maxWidth: "500px",
        // margin: "0 auto",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap",
      },
      dataTableMain: {
        paddingTop: "2rem",
        paddingLeft: "2rem",
        [theme.breakpoints.down("sm")]: {
          paddingLeft: "1rem",
          // backgroundColor: "red",
          fontSize: "1rem !important",
        },
      },
      btn: {
        backgroundColor: "#5016BF",
        // height: "3.3rem",
        border: "1px solid #ccc",
        color: "#fff",
        borderRadius: "24px",
        width: "150px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "16px 32px",
      },

      subDiv: {
        display: "flex",
        justifyContent: "space-between",
        maxWidth: "1300px",
        [theme.breakpoints.down("md")]: {
          // backgroundColor: "green",
          flexDirection: "column",
          width: "300px",
          margin: "0 auto",
        },
      },
      select1: {
        width: "300px",
        margin: "12px",
      },
      filter: {
        width: "150px",
        margin: "12px",
        border: "1px solid #ccc",
        height: "55px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "16px",
        fontFamily: "Poppins",
        // opacity: " 0.8",
        borderRadius: "50px",
        [theme.breakpoints.down("md")]: {
          // backgroundColor: "green",
          width: "300px",
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

const LndCsvDataHeader = [
  {
    id: "id",
    displayName: "id",
  },
  {
    id: "Exclude",
    displayName: "Exclude",
  },
  {
    id: "IWKSpecialInstruction",
    displayName: "IWK's Special Instruction",
  },
  //
  {
    id: "DCAFiletype",
    displayName: "DCA File type",
  },
  {
    id: "DCAName",
    displayName: "DCA Name",
  },
  {
    id: "DCACode",
    displayName: "DCA Code",
  },
  {
    id: "State",
    displayName: "State",
  },
  {
    id: "Costcode",
    displayName: "Cost Code",
  },
  {
    id: "UO",
    displayName: "UO",
  },
  {
    id: "LAName",
    displayName: "LA Name",
  },
  {
    id: "billno",
    displayName: "bill no",
  },
  {
    id: "SAN",
    displayName: "SAN",
  },
  //
  {
    id: "CustomerTelephoneNo",
    displayName: "Customer's Telephone No",
  },
  {
    id: "CustomerMobileNo",
    displayName: "Customer's Mobile No",
  },
  {
    id: "CustomerFaxNo",
    displayName: "Customer's Fax No",
  },
  // Customer's Email
  {
    id: "CustomerEmail",
    displayName: "Customer's Email",
  },
  {
    id: "OwnerTelephoneNo1",
    displayName: "Owner Telephone No",
  },
  {
    id: "OwnerMobileNo",
    displayName: "Owner Mobile No",
  },
  {
    id: "OwnerMobileNo",
    displayName: "Owner Mobile No",
  },
  {
    id: "TenantTelephoneNo",
    displayName: "Tenant Telephone No",
  },
  {
    id: "TenantMobileNo",
    displayName: "Tenant Mobile No",
  },
  {
    id: "CustomerContactDetail",
    displayName: "Customer Contact Detail",
  },
  {
    id: "Owner1",
    displayName: "Owner1",
  },
  {
    id: "Owner2",
    displayName: "Owner2",
  },
  {
    id: "Owner1NRIC",
    displayName: "Owner1 NRIC",
  },
  {
    id: "Owner2NRIC",
    displayName: "Owner2 NRIC",
  },

  {
    id: "status",
    displayName: "Property Status",
  },
  {
    id: "PropAddr1",
    displayName: "Prop Addr1",
  },
  {
    id: "PropAddr2",
    displayName: "Prop Addr2",
  },
  {
    id: "PropAddr3",
    displayName: "Prop Addr3",
  },
  {
    id: "PropAddr4",
    displayName: "Prop Addr4",
  },
  {
    id: "PropAddr4",
    displayName: "Prop Addr4",
  },

  {
    id: "PropAddr5",
    displayName: "Prop Addr5",
  },
  {
    id: "Building",
    displayName: "Building",
  },
  {
    id: "BuildingID",
    displayName: "Building ID",
  },

  {
    id: "Roadname",
    displayName: "Road Name",
  },
  {
    id: "Taman",
    displayName: "Taman",
  },
  {
    id: "PostCode",
    displayName: "Post Code",
  },
  {
    id: "Suburb",
    displayName: "Suburb",
  },
  {
    id: "MailName1",
    displayName: "Mail Name1",
  },
  {
    id: "MailName2",
    displayName: "Mail Name2",
  },
  {
    id: "MailAdd1",
    displayName: "Mail Add1",
  },
  {
    id: "MailAdd2",
    displayName: "Mail Add2",
  },
  {
    id: "MailAdd3",
    displayName: "Mail Add3",
  },
  {
    id: "MailAdd4",
    displayName: "Mail Add4",
  },
  // start again
  {
    id: "Class",
    displayName: "Class",
  },
  {
    id: "Range",
    displayName: "Range",
  },
  {
    id: "Arrears",
    displayName: "Arrears",
  },
  {
    id: "CurrentBalance",
    displayName: "Current Balance",
  },
  {
    id: "Balance_at_05_03_2022",
    displayName: "Balance as at 07/04/2022",
  },
  // recheck again
  {
    id: "CurrentBalance1",
    displayName: "Balance as per copy bill",
  },
  {
    id: "Diff",
    displayName: "Diff between bal as per copy bill & bal@05/03/2022",
  },
  {
    id: "AdministrationFee",
    displayName: "Diff between bal as per copy bill & bal@07/04/2022",
  },
  {
    id: "AdministrationFee",
    displayName: "3% Administration Fee",
  },

  {
    id: "LODFee",
    displayName: "LODFee",
  },
  {
    id: "TotalPayableAmount",
    displayName: "TotalPayableAmount",
  },
  // start 2
  // 1st visit-Date of Bill & Notice/LOD was served
  {
    id: "BATCH1",
    displayName: "1st visit-Date of Bill & Notice/LOD was served",
  },
  {
    id: "AgentName",
    displayName: "Agent's Name",
  },

  {
    id: "BATCH2",
    displayName: "F/UP-Date of Reminder Notice/LOD was served",
  },
  {
    id: "Occupier",
    displayName: "Occupier (Owner/Tenant)",
  },
  {
    id: "OwnernameCorrect",
    displayName: "Ownername correct (Yes/No)",
  },
  {
    id: "specifyCorrectOwnername",
    displayName: "Please specify correct ownername",
  },

  {
    id: "OwnerTelephoneNo",
    displayName: "Owner Telephone No",
  },
  {
    id: "OwnerMobileNo1",
    displayName: "Owner Mobile No",
  },
  {
    id: "Ownerfaxno",
    displayName: "Owner's fax no",
  },
  {
    id: "OwnerEmail",
    displayName: "Owner's email",
  },

  {
    id: "TenantName",
    displayName: "Tenant's name",
  },
  {
    id: "TenantTelephoneNo1",
    displayName: "Tenant's Telephone no",
  },
  {
    id: "TenantMobileNo1",
    displayName: "Tenant's mobile no",
  },
  {
    id: "TenantFaxNo",
    displayName: "Tenant's fax no",
  },
  {
    id: "TenantEmail",
    displayName: "Tenant's email",
  },

  {
    id: "OccupierNationality",
    displayName: "OccupierNationality",
  },
  {
    id: "numberOfVisit",
    displayName: "Number of visitation",
  },

  {
    id: "Numberoffollowupcalls",
    displayName: "Number of follow-up calls",
  },
  {
    id: "PropertyUsage",
    displayName: "Property Usage",
  },
  {
    id: "PropertyType",
    displayName: "Property Type",
  },
  {
    id: "NameofShopOrCompany",
    displayName: "Name of shop/company",
  },
  {
    id: "DRCde",
    displayName: "Nature of business",
  },

  {
    id: "DRCode",
    displayName: "DRCode",
  },
  {
    id: "ReasonCustomerRefuseToPayIWKbill",
    displayName: "Reason customer refuse to pay IWK bill",
  },
  {
    id: "Remarks",
    displayName: "Remarks",
  },

  {
    id: "ThirdPartySearch",
    displayName: "Third Party Search",
  },
  {
    id: "SourceofTPS",
    displayName: "Source of TPS",
  },
  {
    id: "TPSOutcomeOrContactNumber",
    displayName: "TPS Outcome/Contact Number",
  },
  {
    id: "RemarksTPS",
    displayName: "Remarks TPS",
  },

  // {
  //   id: "TenantTelNo",
  //   displayName: "TenantTelNo",
  // },
  // {
  //   id: "Payment",
  //   displayName: "Payment",
  // },
  // {
  //   id: "status",
  //   displayName: "status",
  // },
  // {
  //   id: "image",
  //   displayName: "image",
  // },
  // {
  //   id: "created_at",
  //   displayName: "created_at",
  // },
  // {
  //   id: "updated_at",
  //   displayName: "updated_at",
  // },

  {
    id: "BATCH",
    displayName: "BATCH",
  },
];
const dataVacantArray = [
  {
    id: "id",
    displayName: "id",
  },
  {
    id: "SEWACC",
    displayName: "SEWACC",
  },
  {
    id: "OWNER_NAME",
    displayName: "OWNER_NAME",
  },
  {
    id: "PROP_ADD",
    displayName: "PROP_ADD",
  },
  {
    id: "CURRENT_CLASS",
    displayName: "CURRENT_CLASS",
  },
  {
    id: "OWNER_NAME",
    displayName: "OWNER_NAME",
  },
  {
    id: "JobId",
    displayName: "JobId",
  },
  {
    id: "OccupiedOrVacant",
    displayName: "OccupiedOrVacant",
  },
  {
    id: "OccupiedOrVacantOthers",
    displayName: "OccupiedOrVacantOthers",
  },

  {
    id: "CommercialOrDomestic",
    displayName: "CommercialOrDomestic",
  },
  {
    id: "CommercialOrDomesticOthers",
    displayName: "CommercialOrDomesticOthers",
  },
  {
    id: "MeterConnectedOrNot",
    displayName: "MeterConnectedOrNot",
  },
  {
    id: "PropertyAddress",
    displayName: "PropertyAddress",
  },
  {
    id: "CommentbyFO",
    displayName: "CommentbyFO",
  },
  {
    id: "image",
    displayName: "image",
  },
  {
    id: "WatermeterNumber",
    displayName: "WatermeterNumber",
  },
];
// const datas = [{
//     first: 'foo',
//     second: 'bar',
//     image: `=IMAGE("[https://dcaapi.moodfor.codes/images/image_lnd_1653538679063.png]")`
// }, {
//     first: 'foobar',
//     second: 'fooasasbar',
//     image: `=HYPERLINK("[https://dcaapi.moodfor.codes/images/image_lnd_1653538679063.png]")`
// }];
function Dashboard() {
  const style = useStyles();
  const [Loading, setLoading] = useState(false);

  const [LoadingVacant, setLoadingVacant] = useState(false);
  const [LoadingAfterJoin, setLoadingAfterJoin] = useState(false);
  const [LoadingHighrises, setLoadingHighrises] = useState(false);
  const [LoadingCommercials, setLoadingCommercials] = useState(false);
  const [data, setData] = useState([]);
  const [dataVacant, setDataVacant] = useState([]);
  const [dataHighrises, setDataHighrises] = useState([]);
  const [dataCommercials, setDataCommercials] = useState([]);

  const [UserSelectCategory, setUserSelectCategory] = React.useState("");
  const [Option, setOption] = useState("");
  const [Disabled, setDisabled] = React.useState(false);
  const [Category, setCategory] = React.useState([]);
  const AdminId = JSON.parse(localStorage.getItem("auth")).message.id || "";

  useEffect(() => {
    setDisabled(true);
    axios
      .get(`/jobname/${Option}/${AdminId}`)
      .then((res) => {
        setDisabled(false);
        // console.log(res.data, 'data')
        setCategory(res.data);
      })
      .catch((err) => {
        setDisabled(false);
        setCategory([]);
        // console.log(err, 'error')
      });
  }, [Option, AdminId]);
  //   useEffect(() => {
  //     // console.log(axios.defaults.baseURL)
  //     axios
  //       .get("/lnds/export")
  //       .then((res) => {
  // // console.log(res.data)
  // let dataFilterImage = [];
  // dataFilterImage = res.data;
  // if (dataFilterImage.length > 0) {
  //   dataFilterImage.map((item, i) =>
  //     item.image
  //       ? (dataFilterImage[i]["image"] =
  //           '=HYPERLINK("' +
  //           axios.defaults.baseURL +
  //           "/lnd/" +
  //           item.image +
  //           '")')
  //       : ""
  //   );
  //   setData(dataFilterImage);
  //           // console.log("working", dataFilterImage)
  //           setLoading(true);
  //         }
  //       })
  //       .catch((error) => {
  //         console.log(error);
  //         setLoading(true);
  //       });
  //     axios
  //       .get("/vacants/export")
  //       .then((res) => {
  //         // console.log(res.data)
  //         let dataFilterImage = [];
  //         dataFilterImage = res.data;
  //         console.log(res.data);
  //         if (dataFilterImage.length >= 0) {
  //           dataFilterImage.map((item, i) => {
  //             // console.log(item.multiImage);
  //             if (item.multiImage) {
  //               var multiImage = item.multiImage;
  //               multiImage = multiImage.split(",");

  //               multiImage.map((item, i) => {
  //                 multiImage[i] =
  //                   '=HYPERLINK("' +
  //                   axios.defaults.baseURL +
  //                   "/vacant/" +
  //                   item +
  //                   '")';
  //               });
  //               dataFilterImage[i]["image"] = multiImage;
  //             }
  //           });
  //           setDataVacant(dataFilterImage);
  //           console.log("vacant", dataFilterImage);

  //           setLoadingVacant(true);
  //         }
  //       })
  //       .catch((error) => {
  //         // console.log("error")
  //         setLoadingVacant(true);
  //       });
  //     // highrises
  //     axios
  //       .get("/highrises/export")
  //       .then((res) => {
  //         console.log(res.data, "highrises");

  //         let dataFilterImage = [];
  //         dataFilterImage = res.data;
  //         // console.log(res.data)
  //         if (dataFilterImage.length >= 0) {
  //           dataFilterImage.map((item, i) => {
  //             // console.log(item.multiImage);
  //             if (item.multiImage) {
  //               var multiImage = item.multiImage;
  //               multiImage = multiImage.split(",");

  //               multiImage.map((item, i) => {
  //                 multiImage[i] =
  //                   '=HYPERLINK("' +
  //                   axios.defaults.baseURL +
  //                   "/vacant/" +
  //                   item +
  //                   '")';
  //               });
  //               dataFilterImage[i]["image"] = multiImage;
  //             }
  //           });
  //           setDataHighrises(dataFilterImage);
  //           // console.log("vacant", dataFilterImage)

  //           setLoadingHighrises(true);
  //         }
  //       })
  //       .catch((error) => {
  //         // console.log("error")
  //         setLoadingHighrises(true);
  //       });
  //     // commercials
  //     axios
  //       .get("/commercials/export")
  //       .then((res) => {
  //         // console.log(res.data)
  //         let dataFilterImage = [];
  //         dataFilterImage = res.data;
  //         console.log(res.data, "commercial");
  //         if (dataFilterImage.length >= 0) {
  //           dataFilterImage.map((item, i) => {
  //             // console.log(item.multiImage);
  //             if (item.multiImage) {
  //               var multiImage = item.multiImage;
  //               multiImage = multiImage.split(",");

  //               multiImage.map((item, i) => {
  //                 multiImage[i] =
  //                   '=HYPERLINK("' +
  //                   axios.defaults.baseURL +
  //                   "/vacant/" +
  //                   item +
  //                   '")';
  //               });
  //               dataFilterImage[i]["image"] = multiImage;
  //             }
  //           });
  //           setDataCommercials(dataFilterImage);
  //           // console.log("vacant", dataFilterImage)
  //           // welcome rushnth wel cme to the world to be contuine
  //           setLoadingCommercials(true);
  //         }
  //       })
  //       .catch((error) => {
  //         console.log("error");
  //         setLoadingCommercials(true);
  //       });
  //   }, []);

  const handleTypeChanges = (e) => {
    const { value } = e.target;
    setOption(value);
    // setUserSelectCategoryCDate(Category.find(item => (item.id == e.target.value))) )
  };
  const handleCategoryChange = (e) => {
    const { value } = e.target;
    setUserSelectCategory(value);
  };
  const GetData = () => {
    // Disabled
    setLoading(false);
    setData([]);
    setDisabled(true);
    setLoadingAfterJoin(true);

    axios
      .get(
        `imah${Option}/${UserSelectCategory}/2`
      )
      .then((res) => {
        setDisabled(false);
        setLoadingAfterJoin(false);
        // setData(res.data);

        let dataFilterImage = [];
        dataFilterImage = res.data;
        if (dataFilterImage.length > 0) {
          dataFilterImage.map((item, i) =>
            item.image
              ? (dataFilterImage[i]["image"] =
                  '=HYPERLINK("' +
                  axios.defaults.baseURL +
                  "/lnd/" +
                  item.image +
                  '")')
              : ""
          );
          setData(dataFilterImage);
          setLoading(true);
        }
      })
      .catch((err) => {
        setDisabled(false);
        setLoadingAfterJoin(false);

        setCategory([]);
        setLoading(true);

        // console.log(err, 'error')
      });
  };
  return (
    <Layout title="Export">
      <div>
        <div className="rider-info">Export Data</div>
      </div>
      <br />
      <br />
      <br />
      <div className={style.subDiv}>
        {/* subDiv */}
        <div className={style.select1}>
          {/* <label className={style.label}>{"Type"}</label> */}
          <select
            class="form-select"
            aria-label="Default select example"
            name=""
            onChange={handleTypeChanges}
            required="required"
          >
            <option name="" value="" selected>
              Type
            </option>
            <option name="lnds" value="lnds">
              LANDED
            </option>
            <option name="vacants" value="vacants">
              VACANTS
            </option>
            <option name="commercials" value="commercials">
              COMMERCIAL
            </option>
            <option name="highrises" value="highrises">
              HIGHRISES
            </option>
          </select>
        </div>
        <div className={style.select1}>
          <select
            class="form-select"
            aria-label="Default select example"
            onChange={handleCategoryChange}
          >
            <option selected>Select</option>
            {Category &&
              Category.length > 0 &&
              Category.map((item) => (
                <option name={item.createdAt} value={item.id}>
                  {item.jobName}
                </option>
              ))}
          </select>
        </div>
        <button
          type="submit"
          onClick={GetData}
          className={style.filter}
          disabled={Disabled}
        >
          {" "}
          {LoadingAfterJoin ? (
            <CircularProgress
              className={style.Progress}
              style={{ width: "24px", height: "24px" }}
            />
          ) : (
            "Search"
          )}
        </button>

        {Loading && Option && (
          <CsvDownloader
            filename={Option}
            extension=".csv"
            columns={Option === "vacants" ? LndCsvDataHeader : LndCsvDataHeader}
            datas={data}
            text="DOWNLOAD"
            suffix
          >
            <button className={style.filter}>
              {" "}
              {Loading ? (
                "Download"
              ) : (
                <CircularProgress
                  color="inherit"
                  style={{ width: "24px", height: "24px" }}
                />
              )}
            </button>
          </CsvDownloader>
        )}
      </div>
    </Layout>
  );
}
export default Dashboard;
