import React, { useState, useEffect } from "react";
import Typography from "@mui/material/Typography";
import { createTheme } from "@mui/material/styles";
import axios from "../../axios";
import AddRider from "../../components/Modal/AddRiderPopup";

import Layout from "../../components/layout/Navbar";
// import "./rider.css";
import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";
import ReactPaginate from "react-paginate";
// @import "https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css";
import "react-confirm-alert/src/react-confirm-alert.css"; // Import css
import { Link } from "react-router-dom";
import moment from "moment";
const theme = createTheme();

theme.typography.h3 = {
  typography: {
    fontFamily: ["Poppins"].join(","),
  },

  fontSize: "1.8rem",
  fontWeight: 400,
  fontStyle: "normal",

  "@media (max-width:850px)": {
    fontSize: "1.5rem",
  },
  "@media (max-width:400px)": {
    fontSize: "1rem",
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "1.8rem",
  },
};
theme.typography.h1 = {
  typography: {
    fontFamily: ["Poppins"].join(","),
  },

  fontSize: "2.5rem",
  color: "#5016BF",
  "@media (max-width:800px)": {
    fontSize: "1.5rem",
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "2.4rem",
  },
};

// ===================================================================
// const handleApi = () => {

//   axios.get('https://dcaapi.moodfor.codes/rider/register')
//       .then(result => {
//           // console.log(result)
//           // if(result.errorMessage == false){
//           console.log("working")
//           // }else{
//           //     console.log("logged error")
//           // }

//       })
//       .catch(error => {
//           console.log(error)
//           alert("fail")
//           // console.log("not ok")
//       })

// }

// ====================================================================

function Newrider() {
  const [openModel, setOpenModel] = useState(false);
  const [Loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  // paggnination
  const itemsPerPage = 10;

  // We start with an empty list of items.
  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);

  // console.log(token, "token");
  // console.log("rider data", data);
  useEffect(() => {
    axios
      .get("/jobname/findAllCounts")
      .then((res) => {
        setData(res.data);
        // console.log("working", res.data);
        setLoading(true);
        // window.reload()
      })
      .catch((error) => {
        // console.log(error);
        setLoading(true);
      });
  }, []);

  useEffect(() => {
    // Fetch items from another resources.
    const endOffset = itemOffset + itemsPerPage;
    // console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    setCurrentItems(data.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(data.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, data]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % data.length;
    // console.log(
    //   `User requested page number ${event.selected}, which is offset ${newOffset}`
    // );
    setItemOffset(newOffset);
  };

 
  return (
    <Layout title="Rider">
      <div className="rider-tble">
        <div className="rider-head-details">
          <div className="rider-info">Import Manager</div>
          <Link
            style={{ textDecoration: "none", color: "#501abf" }}
            to="/import-data"
          >
            <button className="button-cus">Add New</button>
          </Link>
        </div>
        <div className="table-rider">
          <table
            style={{
              width: "100%",
              borderCollapse: "collapse",
              borderSpacing: 0,
            }}
          >
            <tbody>
              <tr>
                <th>
                  <Typography variant="body">Seq</Typography>{" "}
                </th>
                <th>
                  {" "}
                  <Typography variant="body"> Job Id</Typography>{" "}
                </th>
                <th>
                  <Typography variant="body">Job Period</Typography>{" "}
                </th>
                <th>
                  <Typography variant="body">Job Type</Typography>{" "}
                </th>
                <th>
                  <Typography variant="body">Total Records</Typography>{" "}
                </th>
                <th>
                  <Typography variant="body">Report Submission Date</Typography>{" "}
                </th>
              </tr>
            </tbody>

            <tbody>
              {!Loading && (
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
                currentItems.length > 0 &&
                currentItems.map((data, i) => (
                  <tr key={i}>
                    <td>
                      <Typography variant="body">{data.id}</Typography>
                    </td>
                    <td>
                      <p
                        style={{
                          textAlign: "left",
                          margin: "0px",
                          paddingLeft: "16px",
                        }}
                      >
                        {data.jobName}
                      </p>
                    </td>

                    <td>
                      <Typography variant="body">
                        {moment(data.createdDate).format("DD/MM/YYYY")} -{" "}
                        {moment(data.dueDate).format("DD/MM/YYYY")}
                      </Typography>
                    </td>
                    <td>
                      <p
                        style={{
                          textAlign: "left",
                          margin: "0px",
                          paddingLeft: "16px",
                          textTransform: "capitalize",
                        }}
                      >
                        {data.category === "lnds" ? "Landed" : data.category}
                        {/* {data.category} */}
                      </p>
                    </td>
                    <td align="center">
                      {data.lndsCount +
                        data.commercialsCount +
                        data.highrisesCount +
                        data.vacantsCount}
                    </td>

                    {/* style={{ textAlign: "left", margin: "0px", paddingLeft: "8px" }}  */}
                    <td>
                      <p
                        style={{
                          textAlign: "center",
                          margin: "0px",
                          paddingLeft: "16px",
                        }}
                      >
                        {moment(data.reportDate).format("DD/MM/YYYY")}

                        {/* {data.email} */}
                      </p>
                    </td>
                  </tr>
                ))}
            </tbody>
            <tbody>
              {data.length === 0 && Loading && (
                <tr style={{ borderCollapse: "collapse" }}>
                  <td
                    style={{
                      textAlign: "center",
                      verticalAlign: "middle",
                    }}
                    colSpan="12"
                  >
                    <Typography variant="body">No data</Typography>
                  </td>
                </tr>
              )}
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
            pageRangeDisplayed={1}
            marginPagesDisplayed={1}
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
      </div>

      {openModel && <AddRider closeModel={setOpenModel} />}
      {/* <Dialog
        open={openModel}
        closeModel={modelClose}
        keepMounted
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        sdsd */}
      {/* <AddRider closeModel={modelClose} open={openModel} /> */}
      {/* </Dialog> */}
    </Layout>
  );
}

export default Newrider;
