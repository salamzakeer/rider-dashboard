import React, { useEffect, useRef, useState } from "react";
import "react-toastify/dist/ReactToastify.css"; // import first
// import { useToasts } from "react-toast-notifications";
import DetailView from "./tables/details/details";
import SiteView from "./tables/siteview";
import CallDetails from "./tables/callDetails";
import Instruction from "./tables/instruction";
import Layout from "../../components/layout/Navbar";
import axios from "../../axios";
import SearchIcon from "@mui/icons-material/Search";
import {
  Box,
  CircularProgress,
  LinearProgress,
  Typography,
} from "@mui/material";
import { makeStyles } from "@material-ui/core";
import ReactPaginate from "react-paginate";
import SearchInput from "../../components/input/searchInput";
import { useNavigate } from "react-router-dom";
import FilterListIcon from "@mui/icons-material/FilterList";
import DisplayImage from "../../components/layout/displayImage";
import BasicSelect from "../../components/customCore/select";
import BasicSelect2 from "../../components/customCore/jobNameDroupDown";
import { categoryType, UpdateType } from "../../api/detailsApi";

const useStyles = makeStyles((theme) => ({
  atag: {
    display: "block !important",
    textDecoration: "none !important",
    color: "inherit !important",
  },
  Progress: {
    margin: "9px",
    width: "24px !important",
    height: "24px !important",
  },
  update: {
    backgroundColor: "#32c232",
    padding: "6px",
    borderRadius: "12px",
    color: "#fff",
    width: "120px",
  },

  notupdate: {
    backgroundColor: "#e21717",
    padding: "6px",
    borderRadius: "12px",
    color: "#fff",
    width: "120px",
  },

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
    // width: "100%",
    margin: "12px",
  },
  select3: {
    width: "200px",
    margin: "12px",
    [theme.breakpoints.down("md")]: {
      width: "300px",
    },
  },

  subDiv: {
    display: "flex",
    justifyContent: "space-between",
    maxWidth: "900px",
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
    width: "140px",
    margin: "12px",
    border: "1px solid #ccc",
    height: "45px",
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
  mainSearchDiv: {
    display: "flex",
    justifyContent: "space-between",
    alignContent: "center",
    flexWrap: "wrap",
    [theme.breakpoints.down("xs")]: {
      // backgroundColor: "green",
      width: "100%",
      flexDirection: "column",
      // backgroundColor: "red",
    },
  },
  SearchDiv: {
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
    width: "300px",
    [theme.breakpoints.down("xs")]: {
      width: "75%",
    },
  },
  table: {
    // :hover {
    // }
    "& tr": {
      // backgroundColor: "red !important",
      "&:hover": {
        transform: "scale(1.0001)",
        WebkitBoxShadow: "0px 15px 20px -12px rgba(0, 0, 0, 0.75)",
        MozBoxShadow: "0px 15px 20px -12px rgba(0, 0, 0, 0.75)",
        boxShadow: "0px 15px 20px -12px rgba(0, 0, 0, 0.75)",
        cursor: "pointer",
      },
    },
  },
}));
function CallManager() {
  const classes = useStyles();
  const [GetId, setGetId] = useState("");
  const [SearchWord, setSearchWord] = useState("");
  let navigate = useNavigate();
  const Details = useRef(null);

  const [SelectUserObject, setSelectUserObject] = useState(null);
  const [SelectInput, setSelectInput] = useState("Details");
  const [Category, setCategory] = React.useState([]);
  const [UserSelectCategory, setUserSelectCategory] = React.useState("");
  // const [UserSelectCategoryCDate, setUserSelectCategoryCDate] =
  //   React.useState("");
  //   const [Option, setOption] = useState("");
  const [Option, setOption] = useState("");
  const [UpdateValue, setUpdateValue] = useState("2");
  // setUpdateValue
  const [AllData, setAllData] = useState([]);
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
  const [Loading, setLoading] = useState(false);

  // const token = JSON.parse(localStorage.getItem("auth")).message.token || "";

  useEffect(() => {
    setDisabled(true);
    if (Option) {
      axios
        .get(`/jobname/${Option}/${AdminId}`)
        .then((res) => {
          setDisabled(false);
          setCategory(res.data);
        })
        .catch((err) => {
          setDisabled(false);
          setCategory([]);
        });
    }
  }, [Option, AdminId]);
  useEffect(() => {
    // Fetch items from another resources.
    const endOffset = itemOffset + itemsPerPage;
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
  const handleInputChange = (e) => {
    const { value } = e.target;
    setSelectInput(value);
  };

  const findUser = (e) => {
    setGetId(e.id);
    setSelectUserObject(e);
    navigate("#details");
  };
  const handleFiltering = () => {
    // Disabled
    setLoading(false);
    setfilterByJobnameAndCategoryData([]);
    setDisabled(true);
    axios
      .get(
        `riderdata/filterByJobnameAndCategory/${Option}/${UserSelectCategory}/${UpdateValue}`
      )
      .then((res) => {
        setDisabled(false);
        setfilterByJobnameAndCategoryData(res.data);
        setAllData(res.data);

        setLoading(true);
      })
      .catch((err) => {
        setDisabled(false);
        setCategory([]);
        setLoading(true);
      });
  };
  const searchHandle = (e) => {
    setSearchWord(e.target.value);
    const searching =
      AllData.filter(
        (item) =>
          String(item.SAN).startsWith(e.target.value) ||
          String(item.id).startsWith(e.target.value)
      ) || [];
    setfilterByJobnameAndCategoryData(searching);
  };
  const onSelectValue = (value, event) => {
    setOption(value);
    // alert(value);
  };
  const onSelectValue2 = (value, event) => {
    setUserSelectCategory(value);
    // alert(value);
  };
  const onSelectValue3 = (value, event) => {
    setUpdateValue(value);
    // alert(value);
  };

  return (
    <Layout>
      <div style={{ width: "300px" }}>
        {/* <BasicSelect
          width="250"
          options={YesNo}
          value
          onSelectValue={onSelectValue}
        /> */}
      </div>
      <br />
      <div className={classes.mainSearchDiv}>
        <div className="rider-info">Call Manager</div>
        <div className={classes.SearchDiv}>
          <SearchInput
            icon={<SearchIcon />}
            onChange={(e) => searchHandle(e)}
            value={SearchWord}
            placeholder="Search By Account No"
          />
        </div>{" "}
      </div>
      <br />
      <div className={classes.subDiv}>
        {/* subDiv */}
        <div className={classes.select1}>
          <BasicSelect
            options={categoryType}
            value
            onSelectValue={onSelectValue}
            width="180px"
          />
          {/* <select
            className="form-select"
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
            <option name="commercials" value="commercials">
              COMMERCIAL
            </option>
            <option name="highrises" value="highrises">
              HIGHRISES
            </option>
          </select> */}
        </div>
        <div className={classes.select1}>
          <BasicSelect2
            options={Category}
            value
            onSelectValue={onSelectValue2}
            // width="250"
          />
          {/* <select
            className="form-select"
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
          </select> */}
        </div>
        <div className={classes.select3}>
          <BasicSelect
            options={UpdateType}
            value
            onSelectValue={onSelectValue3}
            // width="250"
          />
          {/* <select
            className="form-select"
            aria-label="Default select example"
            name=""
            onChange={handleUpdateChanges}
            required="required"
          >
            <option name="commercials" value="2" selected>
              All
            </option>
            <option name="" value="1">
              Update
            </option>
            <option name="lnds" value="0">
              Not Update
            </option>
          </select> */}
        </div>
        <button
          type="submit"
          onClick={handleFiltering}
          className={classes.filter}
          disabled={Disabled}
        >
          {" "}
          {Disabled ? (
            <CircularProgress className={classes.Progress} />
          ) : (
            <div>
              <FilterListIcon /> Filter
            </div>
          )}
        </button>
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
          className={classes.table}
        >
          <tbody>
            <tr
              style={{
                pointerEvents: "none",
              }}
            >
              <th
                style={{
                  textAlign: "left",
                  padding: "10px !important",
                  width: "100px",
                }}
              >
                {" "}
                <Typography variant="body">ID</Typography>{" "}
              </th>
              <th>
                <span variant="body">Account Number</span>{" "}
              </th>
              <th>
                <span variant="body">DCA Name</span>{" "}
              </th>
              <th>
                <span variant="body">Debtor Name</span>{" "}
              </th>
              <th>
                <span variant="body">Range</span>{" "}
              </th>
              <th>
                <span variant="body">Arrears</span>{" "}
              </th>
              <th>
                <span variant="body">Address</span>{" "}
              </th>
              <th>
                <span variant="body">Images</span>{" "}
              </th>
              <th>
                <span variant="body">Status</span>{" "}
              </th>
            </tr>
          </tbody>
          <tbody>
            {!Loading && Disabled && (
              <tr
                style={{
                  borderCollapse: "collapse",
                  padding: "0px !important",
                }}
              >
                <td
                  style={{
                    textAlign: "center",
                    verticalAlign: "middle",
                    padding: "0px !important",
                  }}
                  colSpan="12"
                >
                  <Box sx={{ width: "100%" }}>
                    <LinearProgress />
                  </Box>
                </td>
              </tr>
            )}
          </tbody>
          <tbody>
            {currentItems &&
              currentItems.length === 0 &&
              !(!Loading && Disabled) && (
                <tr
                  style={{
                    borderCollapse: "collapse",
                    padding: "0px !important",
                    boxShadow: "none",
                    WebkitBoxShadow: "none",
                  }}
                >
                  <td
                    style={{
                      textAlign: "center",
                      verticalAlign: "middle",
                      padding: "0px !important",
                      WebkitBoxShadow: "none !important",
                      boxShadow: "none !important",
                    }}
                    colSpan="12"
                  >
                    <Box sx={{ width: "100%" }}>No Data</Box>
                  </td>
                </tr>
              )}
          </tbody>
          <tbody>
            {currentItems &&
              currentItems.length > 0 &&
              currentItems.map((data, i) => (
                <tr onClick={() => findUser(data)} key={i}>
                  <td>
                    <a href="#details" className={classes.atag}>
                      <Typography variant="body">{data.id}</Typography>
                    </a>
                  </td>
                  <td>
                    <a href="#details" className={classes.atag}>
                      <Typography variant="body">{data.SAN}</Typography>
                    </a>
                  </td>
                  <td>
                    <a href="#details" className={classes.atag}>
                      <p
                        style={{
                          textAlign: "left",
                          margin: "0px",
                          paddingLeft: "16px",
                        }}
                      >
                        {data.DCAName}
                      </p>
                    </a>
                  </td>
                  <td>
                    <a href="#details" className={classes.atag}>
                      <p
                        style={{
                          textAlign: "left",
                          margin: "0px",
                          paddingLeft: "16px",
                        }}
                      >
                        {data.Owner1}
                      </p>
                    </a>
                  </td>
                  <td>
                    <a href="#details" className={classes.atag}>
                      <Typography variant="body">{data.Range}</Typography>
                    </a>
                  </td>
                  <td>
                    <a href="#details" className={classes.atag}>
                      <Typography variant="body">{data.Arrears}</Typography>
                    </a>
                  </td>
                  <td>
                    <a href="#details" className={classes.atag}>
                      <Typography variant="body">
                        {data.MailAdd1} {data.MailAdd2}
                      </Typography>
                    </a>
                  </td>
                  <DisplayImage image={data.multiImage} Option={Option} />

                  <td>
                    <a href="#details" className={classes.atag}>
                      <div
                        className={
                          data.updateStatus === 0
                            ? classes.notupdate
                            : classes.update
                        }
                      >
                        {data.updateStatus === 0 ? "Not Updated" : "Updated"}
                      </div>
                    </a>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
        <br />
        <ReactPaginate
          breakLabel="..."
          nextLabel="next >"
          onPageChange={handlePageClick}
          pageCount={pageCount}
          previousLabel="< previous"
          renderOnZeroPageCount={null}
          pageRangeDisplayed={3}
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
      <div id="details">
        {GetId !== "" && (
          <>
            <div
              style={{
                width: "300px",
                margin: "0 0 2rem auto",
                height: "45px",
              }}
              ref={Details}
            >
              <select
                style={{
                  height: "100%",
                  color: "#501ABF",
                  border: "1px solid #501ABF",
                }}
                className="form-select"
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
            <div className="tab-content" id="pills-tabContent">
              {SelectInput === "Details" && (
                <DetailView
                  SelectUserObject={SelectUserObject}
                  Option={Option}
                />
              )}
              {SelectInput === "Site" && (
                <SiteView SelectUserObject={SelectUserObject} Option={Option} />
              )}
              {SelectInput === "Call" && (
                <CallDetails
                  SelectUserObject={SelectUserObject}
                  Option={Option}
                />
              )}
              {SelectInput === "Instruction" && (
                <Instruction
                  SelectUserObject={SelectUserObject}
                  Option={Option}
                />
              )}
            </div>
          </>
        )}
      </div>
    </Layout>
  );
}
export default CallManager;
