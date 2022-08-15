import React, { useEffect, useState } from "react";
import "react-toastify/dist/ReactToastify.css"; // import first
// import { useToasts } from "react-toast-notifications";
import Layout from "../../components/layout/Navbar";
import axios from "../../axios";

import {
  Box,
  CircularProgress,
  LinearProgress,
  Typography,
} from "@mui/material";
import {  makeStyles } from "@material-ui/core";
import ReactPaginate from "react-paginate";
import FilterListIcon from "@mui/icons-material/FilterList";
import DRcodeImage from "../../components/layout/drCodeImage";
import DisplayImage from "../../components/layout/displayImage";
import { categoryType } from "../../api/detailsApi";
import BasicSelect from "../../components/customCore/select";
import BasicSelect2 from "../../components/customCore/jobNameDroupDown";

const useStyles = makeStyles((theme) => ({
  Avatar: {
    cursor: "pointer",
  },
  Progress: {
    margin: "9px",
    width: "24px !important",
    height: "24px !important",
    // color: "#501abf !important",
    // "&:hover": {
    //   color: "#fff !important",
    // },
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
    // width: "300px",
    margin: "12px",
  },
  subDiv: {
    display: "flex",
    maxWidth: "800px",
    // margin: "0 auto",
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
}));
function CallManager() {
  const classes = useStyles();

  const [Category, setCategory] = React.useState([]);
  const [UserSelectCategory, setUserSelectCategory] = React.useState("");
  // const [UserSelectCategoryCDate, setUserSelectCategoryCDate] =
  //   React.useState("");
  //   const [Option, setOption] = useState("");
  const [Option, setOption] = useState("");
  const [Disabled, setDisabled] = React.useState(false);
  const [filterByJobnameAndCategorydata, setfilterByJobnameAndCategoryData] =
    useState([]);

  // paggnination
  const itemsPerPage = 10;

  // We start with an empty list of items.
  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);
  const [Loading, setLoading] = useState(false);

  const AdminId = JSON.parse(localStorage.getItem("auth")).message.id || "";
  useEffect(() => {
    if (Option) {
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
    }
  }, [Option, AdminId]);
  
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
  const handleFiltering = () => {
    // Disabled
    setLoading(false);
    setfilterByJobnameAndCategoryData([]);
    setDisabled(true);
    // console.log(Option, UserSelectCategory, "===========");
    // http://dcaapi.moodfor.codes/riderdata/filterByJobnameAndCategory/{category}/{jobName}
    axios
      .get(
        `riderdata/filterByJobnameAndCategoryImages/${Option}/${UserSelectCategory}`
      )
      .then((res) => {
        setDisabled(false);
        // console.log(res.data, "datadatadatadatadata");
        setfilterByJobnameAndCategoryData(res.data);
        setLoading(true);
      })
      .catch((err) => {
        // setDisabled(false);
        setCategory([]);
        setLoading(true);

        // console.log(err, 'error')
      });
  };

  const onSelectValue = (value, event) => {
    setOption(value);
    // alert(value);
  };
  const onSelectValue2 = (value, event) => {
    setUserSelectCategory(value);
    // alert(value);
  };

  return (
    <Layout>
      <div>
        <div className="rider-info">Visual Manager</div>
      </div>
      <br />
      <div className={classes.subDiv}>
        {/* subDiv */}
        <div className={classes.select1}>
          {/* <label className={classes.label}>{"Type"}</label> */}
          <BasicSelect
            options={categoryType}
            value
            onSelectValue={onSelectValue}
            width="250"
          />
        </div>
        <div className={classes.select1}>
          {/* <label className={classes.label}>Job Name</label> */}
          <BasicSelect2
            options={Category}
            value
            onSelectValue={onSelectValue2}
            // width="250"
          />
        </div>
        <button
          type="submit"
          onClick={handleFiltering}
          className={classes.filter}
          disabled={Disabled}
        >
          {Disabled ? (
            <CircularProgress className={classes.Progress} />
          ) : (
            <div>
              <FilterListIcon /> Filter
            </div>
          )}
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
          <tbody>
            <tr>
              <th
                style={{
                  textAlign: "left",
                  borderSpacing: "0 50px",
                  width: "100px",
                }}
              >
                <Typography variant="body">ID</Typography>
              </th>
              <th>
                <span variant="body">Owner </span>
              </th>
              <th>
                <span variant="body">Account Number</span>
              </th>

              <th>
                <span variant="body">Address</span>
              </th>
              <th>
                <span variant="body">Image</span>
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
                    <Box sx={{ width: "100%" }}>No Data</Box>
                  </td>
                </tr>
              )}
          </tbody>
          <tbody>
            {currentItems &&
              currentItems.length > 0 &&
              currentItems.map((data, i) => (
                <tr key={i}>
                  <td>
                    <Typography variant="body">{data.excelId}</Typography>
                  </td>
                  <td
                    style={{
                      textAlign: "left !important",
                      paddingLeft: "10px !important",
                    }}
                  >
                    <div
                      style={{
                        width: "100%",
                        textAlign: "left",
                        paddingLeft: "20px",
                      }}
                      variant="body"
                    >
                      {data.Owner1}
                    </div>
                  </td>
                  <td>
                    <Typography variant="body">{data.SAN}</Typography>
                  </td>

                  <td>
                    <div
                      style={{
                        width: "100%",
                        textAlign: "left",
                        paddingLeft: "20px",
                      }}
                      variant="body"
                    >
                      {data.PropAddr2}
                    </div>
                  </td>
                  <DisplayImage image={data.multiImage} Option={Option} />
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
      <DRcodeImage />
    </Layout>
  );
}
export default CallManager;
