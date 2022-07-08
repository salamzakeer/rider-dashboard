import React, { useEffect, useState } from "react";
import "react-toastify/dist/ReactToastify.css"; // import first
// import { useToasts } from "react-toast-notifications";
import DetailView from "./tables/details";
import SiteView from "./tables/siteview";
import CallDetails from "./tables/callDetails";
import Instruction from "./tables/instruction";
import Layout from "../../components/layout/Navbar";
import axios from "../../axios";

import { CircularProgress, Typography } from "@mui/material";
import { makeStyles } from "@material-ui/core";
import ReactPaginate from "react-paginate";

const useStyles = makeStyles((theme) => ({
  formMain: {
    display: "flex",
    justifyContent: "space-around",

    // backgroundColor: "red",
    [theme.breakpoints.down("md")]: {
      // backgroundColor: "green",
      flexDirection: "column",
    },
  },
  select1: {
    width: "300px",
    margin: "12px",
  },
  subDiv: {
    display: "flex",
    justifyContent: "space-between",
    [theme.breakpoints.down("md")]: {
      // backgroundColor: "green",
      flexDirection: "column",
      width: "300px",
      margin: "0 auto",
    },
  },
  label: {
    paddingLeft: "40px",
    fontSize: "16px",
    color: "#00000A",
    opacity: "0.6",
    fontWeight: 600,
    paddingBottom: "4px",
  },
  filter: {
    width: "300px",
    margin: "12px",

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
    },
  },
}));
function CallManager() {
  const classes = useStyles();
  const [GetId, setGetId] = useState("");
  const [SelectUserObject, setSelectUserObject] = useState(null);
  const [SelectInput, setSelectInput] = useState("Details");
  const [Category, setCategory] = React.useState([]);
  const [UserSelectCategory, setUserSelectCategory] = React.useState("");
  // const [UserSelectCategoryCDate, setUserSelectCategoryCDate] =
  //   React.useState("");
  //   const [Option, setOption] = useState("");
  const [Option, setOption] = useState("");
  const [Disabled, setDisabled] = React.useState(false);
  const [filterByJobnameAndCategorydata, setfilterByJobnameAndCategoryData] =
    useState([]);

  const AdminId = JSON.parse(localStorage.getItem("auth")).message.id || "";
  // paggnination
  const itemsPerPage = 10;

  // We start with an empty list of items.
  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);

  const token = JSON.parse(localStorage.getItem("auth")).message.token || "";

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
  }, [Option]);
  const handleInputChanges = (e) => {
    const { value } = e.target;
    setOption(value);
    // setUserSelectCategoryCDate(Category.find(item => (item.id == e.target.value))) )
  };
  useEffect(() => {
    // Fetch items from another resources.
    const endOffset = itemOffset + itemsPerPage;
    // console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    setCurrentItems(
      filterByJobnameAndCategorydata.slice(itemOffset, endOffset)
    );
    setPageCount(
      Math.ceil(filterByJobnameAndCategorydata.length / itemsPerPage)
    );
  }, [itemOffset, itemsPerPage, filterByJobnameAndCategorydata]);

  const handlePageClick = (event) => {
    const newOffset =
      (event.selected * itemsPerPage) % filterByJobnameAndCategorydata.length;
    // console.log(
    //   `User requested page number ${event.selected}, which is offset ${newOffset}`
    // );
    setItemOffset(newOffset);
  };
  const handleCategoryChange = (e) => {
    const { value, name } = e.target;

    const date =
      Category.find((item) => item.id == e.target.value).createdDate || "";
    // console.log(moment(date).format("YYYY-MM-DD"))
    setUserSelectCategory(value);
    // setUserSelectCategoryCDate(moment(date).format("YYYY-MM-DD"));
    // console.log(
    //   Category.find((item) => item.id == e.target.value).createdDate || ""
    // );
  };
  const handleInputChange = (e) => {
    const { value } = e.target;
    setSelectInput(value);
  };
  const rows = [
    {
      id: "001",
      accountNo: "00011920",
      debtor: "rushanth",
      address: "Jaffna",
      jobId: "2021-ND-NC21-F16-RCF12",
      status: "new",
      arrears: "RM 1000.00",
      range: "Range 01",
      dcaName: "PIN SDN BHD",
    },
    {
      id: "002",
      accountNo: "00011920",
      debtor: "rushanth",
      address: "Jaffna",
      jobId: "2021-ND-NC21-F16-RCF12",
      status: "new",
      arrears: "RM 1000.00",
      range: "Range 01",
      dcaName: "PIN SDN BHD",
    },
    {
      id: "003",
      accountNo: "00011920",
      debtor: "rushanth",
      address: "Jaffna",
      jobId: "2021-ND-NC21-F16-RCF12",
      status: "new",
      arrears: "RM 1000.00",
      range: "Range 01",
      dcaName: "PIN SDN BHD",
    },
  ];
  const findUser = (e) => {
    setGetId(e.id);
    setSelectUserObject(e);
  };
  const handleFiltering = () => {
    console.log(Option, UserSelectCategory, "===========");
    // http://dcaapi.moodfor.codes/riderdata/filterByJobnameAndCategory/{category}/{jobName}
    axios
      .get(
        `riderdata/filterByJobnameAndCategory/${Option}/${UserSelectCategory}`
      )
      .then((res) => {
        setDisabled(false);
        console.log(res.data, "datadatadatadatadata");
        setfilterByJobnameAndCategoryData(res.data);
      })
      .catch((err) => {
        // setDisabled(false);
        setCategory([]);
        // console.log(err, 'error')
      });
  };
  return (
    <Layout>
      <div>
        <div className="rider-info">Call Manager</div>
      </div>
      <br />
      <div className={classes.subDiv}>
        {/* subDiv */}
        <div className={classes.select1}>
          {/* <label className={classes.label}>{"Type"}</label> */}
          <select
            class="form-select"
            aria-label="Default select example"
            name=""
            onChange={handleInputChanges}
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
            {/* lnds same data to comercial and highrises commercials  */}
            <option name="commercials" value="commercials">
              COMMERCIAL
            </option>
            <option name="highrises" value="highrises">
              HIGHRISES
            </option>
          </select>
        </div>
        <div className={classes.select1}>
          {/* <label className={classes.label}>Job Name</label> */}
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
          onClick={handleFiltering}
          className={classes.filter}
          disabled={Disabled}
        >
          {" "}
          {Disabled ? <CircularProgress style={{ margin: "9px" }} /> : "Filter"}
        </button>
        {/* <div className={classes.select1}>
          <div className={classes.filter}>Filter</div>
        </div> */}
      </div>
      <div
        style={{
          overflowX: "auto",
          marginTop: "2rem",
        }}
        className="table-telecaller"
      >
        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
            borderSpacing: 0,
          }}
        >
          <tr>
            <th style={{ textAlign: "left" }}>
              {" "}
              <Typography variant="body">ID</Typography>{" "}
            </th>
            <th>
              <span variant="body">Account Number</span>{" "}
            </th>
            <th>
              <span variant="body">Debtor Name</span>{" "}
            </th>
            <th>
              <span variant="body">Address</span>{" "}
            </th>
            <th>
              <span variant="body">Job Id</span>{" "}
            </th>
            <th>
              <span variant="body">Status</span>{" "}
            </th>
            <th>
              <span variant="body">Arrears</span>{" "}
            </th>
            <th>
              <span variant="body">Range</span>{" "}
            </th>
            <th>
              <span variant="body">DCA Name</span>{" "}
            </th>
          </tr>
          {/* {rows &&
            rows.map((row, i) => (
              <tr key={i} onClick={() => findUser(row)}>
                <td>
                  <span variant="body">{row.id}</span>
                </td>
                <td>
                  <span variant="body">{row.accountNo}</span>
                </td>
                <td>
                  <span variant="body">{row.debtor}</span>
                </td>
                <td>
                  <span variant="body">{row.address}</span>
                </td>
                <td>
                  <span variant="body">{row.jobId}</span>
                </td>
                <td>
                  <span variant="body">{row.status}</span>
                </td>
                <td>
                  <span variant="body">{row.arrears}</span>
                </td>
                <td>
                  <span variant="body">{row.range}</span>
                </td>
                <td>
                  <span variant="body">{row.dcaName}</span>
                </td>
              </tr>
            ))} */}
          {currentItems &&
            currentItems.length > 0 &&
            currentItems.map((data) => (
              <tr onClick={() => findUser(data)}>
                <td>
                  <Typography variant="body">{data.id}</Typography>
                </td>
                <td>
                  <Typography variant="body">{data.SAN}</Typography>
                </td>
                <td>
                  <Typography variant="body">{data.Owner1}</Typography>
                </td>
                <td>
                  <Typography variant="body">
                    {data.MailAdd1} {data.MailAdd2}
                  </Typography>
                </td>

                <td>
                  <Typography variant="body">{data.jobName}</Typography>
                </td>
                <td>
                  <Typography variant="body">{data.status}</Typography>
                </td>
                <td>
                  <Typography variant="body">{data.Arrears}</Typography>
                </td>
                <td>
                  <Typography variant="body">{data.Range}</Typography>
                </td>

                <td>
                  <Typography variant="body">{data.DCAName}</Typography>
                </td>

                {/* <td><Typography variant="body">{data.id}</Typography></td> */}
                {/* <td>
                  <p
                    style={{
                      textAlign: "left",
                      margin: "0px",
                      paddingLeft: "16px",
                    }}
                  >
                    {data.fullName}
                  </p>
                </td> */}
                {/* <td>
                  <p
                    style={{
                      textAlign: "left",
                      margin: "0px",
                      paddingLeft: "16px",
                    }}
                  >
                    {data.email}
                  </p>
                </td> */}
              </tr>
            ))}
        </table>
        <br />
        <ReactPaginate
          breakLabel="..."
          nextLabel="next >"
          onPageChange={handlePageClick}
          pageCount={pageCount}
          previousLabel="< previous"
          renderOnZeroPageCount={null}
          pageRangeDisplayed={1}
          marginPagesDisplayed={3}
          containerClassName={"pagination justify-content-end"}
          pageClassName={"page-item"}
          pageLinkClassName={"page-link"}
          previousClassName={"page-item"}
          previousLinkClassName={"page-link"}
          nextClassName={"page-item"}
          nextLinkClassName={"page-link"}
          breakClassName={"page-item"}
          breakLinkClassName={"page-link"}
          activeClassName={"active"}
        />
      </div>

      <div style={{ margin: "2rem" }}>
        {GetId !== "" && (
          <>
            <div
              style={{
                width: "400px",
                margin: "0 0 2rem auto",
                height: "4rem",
              }}
            >
              <select
                style={{
                  width: "370px",
                  height: "100%",
                  color: "#501ABF",
                  border: "1px solid #501ABF",
                }}
                class="form-select"
                aria-label="Default select example"
                name=""
                onChange={handleInputChange}
              >
                <option name="Details" value="Details">
                  Details Veiw
                </option>
                <option name="Site" value="Site">
                  Site View Details
                </option>
                <option name="Call" value="Call">
                  Call Details
                </option>
                <option name="Instruction" value="Instruction">
                  Instruction
                </option>
              </select>
            </div>
            {/* {JSON.stringify(SelectUserObject)} */}
            <div class="tab-content" id="pills-tabContent">
              {SelectInput === "Details" && (
                <DetailView SelectUserObject={SelectUserObject} />
              )}
              {SelectInput === "Site" && (
                <SiteView SelectUserObject={SelectUserObject} />
              )}
              {SelectInput === "Call" && (
                <CallDetails SelectUserObject={SelectUserObject} />
              )}
              {SelectInput === "Instruction" && (
                <Instruction SelectUserObject={SelectUserObject} />
              )}
            </div>
          </>
        )}
      </div>
    </Layout>
  );
}
export default CallManager;
