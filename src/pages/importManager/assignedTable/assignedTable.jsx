import React, { useState, useEffect } from "react";
import Typography from "@mui/material/Typography";
import { createTheme } from "@mui/material/styles";
import axios from "../../../axios";
import AddRider from "../../../components/Modal/AddRiderPopup";
import ConformDialogBox from "../../../components/Modal/dialogBox";
import DeleteIcon from "@mui/icons-material/Delete";

import ProfilePic from "../../../assets/user.png";
import DeleteBtn from "../../../assets/delete.png";
import Layout from "../../../components/layout/Navbar";
import "./rider.css";
import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";
import { Link } from "react-router-dom";
import { Avatar } from "@mui/material";
import ReactPaginate from "react-paginate";
import { confirmAlert } from "react-confirm-alert"; // Import
import "react-confirm-alert/src/react-confirm-alert.css"; // Import css

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
  const [openConform, setopenConform] = useState(false);
  // openConform
  const [Loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const Auth = localStorage.getItem("userInfor");
  const message = JSON.parse(Auth);
  const token = message.message.token;
  const riderId = message.message.id;
  // let histoty = usehistory()
  // console.log(message.message.id, "token")

  const itemsPerPage = 10;

  // We start with an empty list of items.
  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    if (riderId) {
      axios
        .get("/riderdata/details/" + riderId)
        .then((res) => {
          setData(res.data);
          // console.log("working", res.data)
          setLoading(true);
        })
        .catch((error) => {
          console.log(error);
          setLoading(true);
        });
    }
  }, []);

  useEffect(() => {
    // Fetch items from another resources.
    const endOffset = itemOffset + itemsPerPage;
    console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    setCurrentItems(data.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(data.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, data]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % data.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  const deleteHandle = (e) => {
    let id = e.id;
    console.log(id);
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };

    // console.log(config, bodyParameters)

    // var headers = new Headers();
    // headers.append("Authorization", "Bearer " + token)
    // console.log(headers, "header")
    axios
      .delete(`/riderdata/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        // setData(res.data)
        window.location.href = "/assigned-data";
        console.log("working", res.data);
        // setLoading(true)
        // window.reload()
      })
      .catch((error) => {
        console.log(error);
        setLoading(true);
      });
    console.log(e);
  };
  const Deleting = (e) => {
    let id = e.id;
    console.log(id, "idddd");
    confirmAlert({
      customUI: ({ onClose }) => {
        return (
          <div
            className="custom-ui"
            style={{
              background: "#fff",
              padding: "2rem",
              boxShadow: "rgb(130 131 133) 8px 11px 14px 4px",
              borderRadius: "12px",
            }}
          >
            <h1>Are you sure?</h1>
            <br />
            {/* <p>You want to delete this file?</p> */}
            {/* -webkit-box-shadow: 8px 11px 27px 4px #FFFCF2; 
box-shadow: 8px 11px 27px 4px #FFFCF2; */}
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <button onClick={onClose} className="btn ">
                No
              </button>
              <button
                onClick={() => {
                  // console.log(e);
                  deleteHandle(e);
                }}
                className="btn btn-custom-style"
                style={{
                  borderRadius: "12px !important",
                  backgroundColor: "#501abf !important",
                }}
              >
                Yes
              </button>
            </div>
          </div>
        );
      },
    });
  };

  return (
    <Layout title="Rider">
      <div className="rider-tble">
        <div className="rider-head-details">
          <div className="rider-info">Rider Assigned Data</div>
          <button className="button-cus">
            <Link
              style={{ textDecoration: "none", color: "#501abf" }}
              to="/assign-data"
            >
              Assigning Data
            </Link>
          </button>
        </div>
        <div className="table-rider">
          <table
            style={{
              width: "100%",
              borderCollapse: "collapse",
              borderSpacing: 0,
            }}
          >
            <tr>
              <th>
                <Typography variant="body">#</Typography>{" "}
              </th>
              <th>
                <Typography variant="body">Image</Typography>{" "}
              </th>

              <th>
                <Typography variant="body">Fullname</Typography>{" "}
              </th>
              <th>
                {" "}
                <Typography variant="body">Category</Typography>{" "}
              </th>
              <th>
                <Typography variant="body">Jobname</Typography>{" "}
              </th>
              <th>
                <Typography variant="body">From</Typography>{" "}
              </th>
              <th>
                <Typography variant="body">To</Typography>{" "}
              </th>
              <th>
                <Typography variant="body">Total</Typography>{" "}
              </th>
              <th>
                <Typography variant="body">Complete</Typography>{" "}
              </th>
              <th>
                <Typography variant="body">Action</Typography>{" "}
              </th>
            </tr>
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
                  colspan="12"
                >
                  <Box sx={{ width: "100%" }}>
                    <LinearProgress />
                  </Box>
                </td>
              </tr>
            )}

            {currentItems &&
              currentItems.length > 0 &&
              currentItems.map((data, i) => (
                <tr>
                  <td>
                    <Typography variant="body">{i + 1}</Typography>
                  </td>
                  <td align="center">
                    <Avatar
                      sx={{
                        width: "40px",
                        height: "40px",
                        textTransform: "capitalize",
                        textAlign: "center",
                        margin: "0 auto",
                      }}
                      src={axios.defaults.baseURL + "/images/" + data.image}
                      alt="user"
                    >
                      {data.fullName[0]}
                    </Avatar>
                  </td>
                  <td>
                    <Typography variant="body">{data.fullName}</Typography>
                  </td>
                  <td>
                    <Typography variant="body">{data.category}</Typography>
                  </td>

                  <td>
                    <Typography variant="body">{data.jobName}</Typography>
                  </td>
                  <td>
                    <Typography variant="body">{data.dataFrom}</Typography>
                  </td>

                  <td>
                    <Typography variant="body">{data.dataTo}</Typography>
                  </td>

                  <td>
                    <Typography variant="body">
                      {data.dataTo - data.dataFrom + 1}
                    </Typography>
                  </td>
                  <td>
                    <Typography variant="body">
                      {data.dataTo - data.dataFrom + 1}
                    </Typography>
                  </td>

                  <td onClick={() => Deleting(data)}>
                    {/* <img src={DeleteBtn} className="delete" alt="" /> */}
                    <DeleteIcon
                      sx={{
                        color: "red",
                        opacity: "0.8",
                        ": &hover": { opacity: "1" },
                        cursor: "pointer",
                      }}
                    />
                  </td>
                </tr>
              ))}
            {data.length === 0 && Loading && (
              <tr style={{ borderCollapse: "collapse" }}>
                <td
                  style={{
                    textAlign: "center",
                    verticalAlign: "middle",
                  }}
                  colspan="12"
                >
                  <Typography variant="body">No data</Typography>
                </td>
              </tr>
            )}
          </table>
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
      {openConform && <ConformDialogBox />}
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
