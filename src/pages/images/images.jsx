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
import { Avatar, makeStyles } from "@material-ui/core";
import ReactPaginate from "react-paginate";
import FilterListIcon from "@mui/icons-material/FilterList";
import DRcodeImage from "../../components/layout/drCodeImage";

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
    width: "300px",
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
    const { value } = e.target;
    setUserSelectCategory(value);
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
  const changeOption = (url) => {
    console.log(url, "url");
    if (url === "lnds") {
      return "lnd";
    } else if (url === "vacants") {
      return "vacant";
    } else if (url === "commercials") {
      return "commercial";
    } else if (url === "highrises") {
      return "highrise";
    } else {
      return url;
    }
  };
  const onImageClick = (imageurl) => {
    window.open(imageurl ? `${imageurl}` : `${axios.defaults.baseURL}`);
  };
  const download = (e, QRImage) => {
    fetch(QRImage, {
      method: "GET",
      headers: {},
    })
      .then((response) => {
        response.arrayBuffer().then(function (buffer) {
          const url = window.URL.createObjectURL(new Blob([buffer]));
          const link = document.createElement("a");
          link.href = url;
          link.setAttribute("download", "image.png"); //or any other extension
          document.body.appendChild(link);
          link.click();
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const DisplayImage = ({ image }) => {
    var single = [];
    var x = changeOption(Option);
    console.log(axios.defaults.baseURL + "/" + x, "xxxx22");

    if (image) {
      // console.log(image, "===");
      single = image.split(",");
    }
    // if (image.length > 0) {
    //   single = image.split(",");
    // } else {
    //   single = [];
    // }
    // console.log(single, image);

    return (
      <td>
        {single &&
          single.length > 0 &&
          single.map((item, i) => (
            <td key={i}>
              <a
                href={axios.defaults.baseURL + "/" + x + "/" + item}
                onClick={(e) =>
                  download(e, axios.defaults.baseURL + "/" + x + "/" + item)
                }
                target="_blank"
                download
                style={{
                  width: "40px",
                  height: "40px",
                  textTransform: "capitalize",
                  textAlign: "center",
                  margin: "0 auto",
                }}
              >
                <img
                  style={{
                    width: "40px",
                    height: "40px",
                    textTransform: "capitalize",
                    textAlign: "center",
                    margin: "0 auto",
                    borderRadius: "50%",
                  }}
                  src={axios.defaults.baseURL + "/" + x + "/" + item}
                />
              </a>

              {/* <Avatar
                sx={{
                  width: "40px",
                  height: "40px",
                  textTransform: "capitalize",
                  textAlign: "center",
                  margin: "0 auto",
                }}
                className={classes.Avatar}
                onClick={() =>
                  onImageClick(axios.defaults.baseURL + "/" + x + "/" + item)
                }
                src={axios.defaults.baseURL + "/" + x + "/" + item}
                alt="user"
              >
                {item[0]}
              </Avatar> */}
            </td>
          ))}
        {/* <p>Sdsdsd</p> */}
        {/* {JSON.stringify(single)} */}
      </td>
    );
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
                colspan="12"
              >
                <Box sx={{ width: "100%" }}>
                  <LinearProgress />
                </Box>
              </td>
            </tr>
          )}
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
                  colspan="12"
                >
                  <Box sx={{ width: "100%" }}>No Data</Box>
                </td>
              </tr>
            )}

          {currentItems &&
            currentItems.length > 0 &&
            currentItems.map((data) => (
              <tr>
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
                <DisplayImage image={data.multiImage} />
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
