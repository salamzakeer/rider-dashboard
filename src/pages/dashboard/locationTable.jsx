import React, { useState, useEffect } from "react";
import Typography from "@mui/material/Typography";
import { createTheme } from "@mui/material/styles";
import axios from "../../axiosHeader";
import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";
import ReactPaginate from "react-paginate";
import "react-confirm-alert/src/react-confirm-alert.css"; // Import css

import { makeStyles } from "@material-ui/core";
import { createStyles } from "@material-ui/core";
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

const useStyles = makeStyles(
  (theme) =>
    createStyles({
      tableDiv: {
        overflowX: "auto",
        maxWidth: "1200px",
        [theme.breakpoints.down("sm")]: {
          width: "90vw",
        },
        "& table , th,td ": {
          // border: "1px solid black",
          borderCollapse: "collapse",
          // background: "red !Important",
        },
        "& table , tr ": {
          // border: "1px solid black",
          borderCollapse: "collapse",
          "&: n+1": {
            background: "red !Important",
          },
        },
      },
      tableMainDiv: {
        marginTop: "2rem",
        marginBottom: "5rem",
        background: "#FEFEFE 0% 0% no-repeat padding-box",
        boxShadow: "0px 10px 20px #4A4A4A66",
        borderRadius: "20px",
        padding: "20px",
      },
      tableMainHeading: {
        fontSize: "28px",
        margin: "0rem 0rem 0.7rem 0rem",
        fontWeight: "600",
      },
    }),
  { withTheme: true }
);
function LocationTable() {
  const classes = useStyles();

  const [Loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  const itemsPerPage = 10;

  // We start with an empty list of items.
  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);

  const Auth = localStorage.getItem("userInfor");
  const message = JSON.parse(Auth);
  const AdminId = message.message.id;

  useEffect(() => {
    if (AdminId) {
      axios
        .get("/riderdata/details/" + AdminId)
        .then((res) => {
          setData(res.data);
          setLoading(true);
          console.log(res.data);
        })
        .catch((error) => {
          // console.log(error);
          setLoading(true);
        });
    }
  }, [AdminId]);

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
 

  const arr = [
    {
      no: "Klang Valley",
      type: [
        { typeName: "red apple" },
        { typeName: "green apple" },
        { typeName: "red apple" },
        { typeName: "green apple" },
      ],
      State: [
        { typeName: "DOMESTIC" },
        { typeName: "NEGERI SEMBIALAN" },
        { typeName: "DOMESTIC" },
        { typeName: "DOMESTIC" },
        { typeName: "DOMESTIC" },
        { typeName: "DOMESTIC" },
      ],
      Pending: [
        { typeName: 1700 },
        { typeName: 1700 },
        { typeName: 1700 },
        { typeName: 1700 },
        { typeName: 1700 },
        { typeName: 1700 },
      ],
      Completed: [
        { typeName: 1 },
        { typeName: 1 },
        { typeName: 1 },
        { typeName: 1 },
        { typeName: 1 },
        { typeName: 1 },
      ],
      Total: [
        { typeName: 1700 },
        { typeName: 1700 },
        { typeName: 1700 },
        { typeName: 1700 },
        { typeName: 1700 },
        { typeName: 1700 },
      ],
    },
    {
      no: "Outstations",
      type: [
        { typeName: "red apple" },
        { typeName: "green apple" },
        { typeName: "red apple" },
        { typeName: "green apple" },
      ],
      State: [
        { typeName: "DOMESTIC" },
        { typeName: "NEGERI SEMBIALAN" },
        { typeName: "DOMESTIC" },
        { typeName: "DOMESTIC" },
        { typeName: "DOMESTIC" },
        { typeName: "DOMESTIC" },
      ],
      Pending: [
        { typeName: 1700 },
        { typeName: 1700 },
        { typeName: 1700 },
        { typeName: 1700 },
        { typeName: 1700 },
        { typeName: 1700 },
      ],
      Completed: [
        { typeName: 1 },
        { typeName: 1 },
        { typeName: 1 },
        { typeName: 1 },
        { typeName: 1 },
        { typeName: 1 },
      ],
      Total: [
        { typeName: 1700 },
        { typeName: 1700 },
        { typeName: 1700 },
        { typeName: 1700 },
        { typeName: 1700 },
        { typeName: 1700 },
      ],
    },
  ];



  return (
    <div className={classes.tableMainDiv}>
      <div className={classes.tableMainHeading}>Break down by location</div>

      <div className={classes.tableDiv}>
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
                <Typography variant="body">Location</Typography>{" "}
              </th>
              <th>
                {" "}
                <Typography variant="body">State</Typography>{" "}
              </th>
              <th>
                <Typography variant="body">Pending</Typography>{" "}
              </th>
              <th>
                <Typography variant="body">Completed</Typography>{" "}
              </th>
              <th>
                <Typography variant="body">Total</Typography>{" "}
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
            {arr.map((el, index) => (
              <tr>
                <td style={{ fontWeight: "600" }}> {el.no}</td>

                <td style={{}}>
                  {el.State.length &&
                    el.State.map((ele, i) => (
                      <>
                        <tr
                          style={{
                            border: "none",
                            display: "flex",
                            flexWrap: "wrap",
                            background: index % 2 === 0 ? "#d6eeee" : "#fff",
                            textAlign: "left !important",
                          }}
                        >
                          <td
                            style={{
                              textAlign: "left !important",
                              border: "none",
                              width: "100%",
                              // borderTop: i > 0 ? "1px solid black" : "none",
                            }}
                          >
                            <p
                              style={{
                                textAlign: "left",
                                margin: "0px",
                                paddingLeft: "16px",
                              }}
                            >
                              {ele.typeName}
                            </p>
                          </td>
                        </tr>
                      </>
                    ))}
                </td>
                <td style={{}}>
                  {el.Pending.length &&
                    el.Pending.map((ele, i) => (
                      <>
                        <tr
                          style={{
                            border: "none",
                            display: "flex",
                            flexWrap: "wrap",
                            background: index % 2 === 0 ? "#d6eeee" : "#fff",
                          }}
                        >
                          <td
                            style={{
                              border: "none",
                              width: "100%",
                              // borderTop: i > 0 ? "1px solid black" : "none",
                            }}
                          >
                            {ele.typeName}
                          </td>
                        </tr>
                      </>
                    ))}
                </td>
                <td style={{}}>
                  {el.Completed.length &&
                    el.Completed.map((ele, i) => (
                      <>
                        <tr
                          style={{
                            border: "none",
                            display: "flex",
                            flexWrap: "wrap",
                            background: index % 2 === 0 ? "#d6eeee" : "#fff",
                          }}
                        >
                          <td
                            style={{
                              border: "none",
                              width: "100%",
                              // borderTop: i > 0 ? "1px solid black" : "none",
                            }}
                          >
                            {ele.typeName}
                          </td>
                        </tr>
                      </>
                    ))}
                </td>
                <td style={{}}>
                  {el.Total.length &&
                    el.Total.map((ele, i) => (
                      <>
                        <tr
                          style={{
                            border: "none",
                            display: "flex",
                            flexWrap: "wrap",
                            background: index % 2 === 0 ? "#d6eeee" : "#fff",
                          }}
                        >
                          <td
                            style={{
                              border: "none",
                              width: "100%",
                              // borderTop: i > 0 ? "1px solid black" : "none",
                            }}
                          >
                            {ele.typeName}
                          </td>
                        </tr>
                      </>
                    ))}
                </td>
              </tr>
            ))}
          </tbody>

          {/* <tbody>
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
          </tbody> */}
        </table>
      </div>
      <br />
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
  );
}

export default LocationTable;
