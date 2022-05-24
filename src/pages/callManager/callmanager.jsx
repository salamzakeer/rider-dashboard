import React, { useState } from "react";
import "react-toastify/dist/ReactToastify.css"; // import first
import Navbar from "../../components/navbar/navbar";
import Sidebar from "../../components/sidebar/sidebar";
import makeAnimated from "react-select/animated";
import { components } from "react-select";
import { useToasts } from "react-toast-notifications";
import DetailView from "./tables/details";
import SiteView from "./tables/siteview";
import CallDetails from "./tables/callDetails";
import Instruction from "./tables/instruction";
// import "./callManager.css";
import Layout from "../../components/layout/Navbar";
import Selects from "../../components/select/selects";
import { Typography } from "@mui/material";


const Option = (props) => {
    return (
        <div>
            <components.Option {...props}>
                <input
                    type="checkbox"
                    checked={props.isSelected}
                    onChange={() => null}
                />{" "}
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

const colourOptions = [
    { value: "SEWACC", label: "SEWACC", color: "#00B8D9" },
    { value: "OWNER_NAME", label: "OWNER NAME", color: "#0052CC" },
    { value: "PROP_ADD", label: "PROP ADD", color: "#5243AA" },
    { value: "CURRENT_CLASS", label: "CURRENT CLASS", color: "#FF5630" },
];
const animatedComponents = makeAnimated();
function Dashboard() {
    const { addToast } = useToasts();

    //upload file
    const [file, setFile] = React.useState("");
    const [optionSelected, setOptionSelected] = React.useState(null);

    const selecHandleChange = (selected) => {
        setOptionSelected(selected);
    };
    // Handles file upload event and updates state
    const data = new FormData();
    const [GetId, setGetId] = useState("")
    const [SelectUserObject, setSelectUserObject] = useState(null)
    function handleUpload(event) {
        setFile(event.target.files[0]);

        // Add code here to upload file to server
        // ...
    }

    const optionInput = [{ id: "Details View", name: "Details View" }, { id: "Details View", name: "Details View" },
    { id: "Details View", name: "Details View" }, { id: "Details View", name: "Details View" },]
    //end-upload file
    const [SelectInput, setSelectInput] = useState("Details")

    const [formValues, setFormValues] = useState([]);
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        console.log(name, value)
        setSelectInput(value);
    };
    let handleChange = (i, e) => {
        let newFormValues = [...formValues];
        newFormValues[i][e.target.name] = e.target.value;
        setFormValues(newFormValues);
    };

    let addFormFields = () => {
        setFormValues([...formValues, { name: "" }]);
    };

    let removeFormFields = (i) => {
        let newFormValues = [...formValues];
        newFormValues.splice(i, 1);
        setFormValues(newFormValues);
    };
    const rows = [{
        id: "001",
        accountNo: "00011920",
        debtor: "rushanth",
        address: "Jaffna",
        jobId: "2021-ND-NC21-F16-RCF12",
        status: "new",
        arrears: "RM 1000.00",
        range: "Range 01",
        dcaName: "PIN SDN BHD"
    }, {
        id: "002",
        accountNo: "00011920",
        debtor: "rushanth",
        address: "Jaffna",
        jobId: "2021-ND-NC21-F16-RCF12",
        status: "new",
        arrears: "RM 1000.00",
        range: "Range 01",
        dcaName: "PIN SDN BHD"
    }, {
        id: "003",
        accountNo: "00011920",
        debtor: "rushanth",
        address: "Jaffna",
        jobId: "2021-ND-NC21-F16-RCF12",
        status: "new",
        arrears: "RM 1000.00",
        range: "Range 01",
        dcaName: "PIN SDN BHD"
    }]
    const findUser = (e) => {
        setGetId(e.id)
        setSelectUserObject(e)
    }
    return (
        <Layout title="Call Manager" >

            <div style={{
                overflowX: "auto",
                marginTop: "2rem"
            }}
                className="table-telecaller"
            >

                <table style={{
                    width: "100%", borderCollapse: 'collapse',
                    borderSpacing: 0,
                }}>



                    <tr>
                        <th style={{ textAlign: "left" }} >   <Typography variant="body">ID</Typography> </th>
                        <th><Typography variant="body">Account Number</Typography> </th>
                        <th><Typography variant="body">Debtor Name</Typography> </th>
                        <th><Typography variant="body">Address</Typography> </th>
                        <th><Typography variant="body">Job Id</Typography> </th>
                        <th><Typography variant="body">Status</Typography> </th>
                        <th><Typography variant="body">Arrears</Typography> </th>
                        <th><Typography variant="body">Range</Typography> </th>
                        <th><Typography variant="body">DCA Name</Typography> </th>
                    </tr>
                    {rows && rows.map((row, i) => (
                        <tr key={i} onClick={() => findUser(row)} >
                            <td><Typography variant="body">{row.id}</Typography></td>
                            <td><Typography variant="body">{row.accountNo}</Typography></td>
                            <td><Typography variant="body">{row.debtor}</Typography></td>
                            <td><Typography variant="body">{row.address}</Typography></td>
                            <td><Typography variant="body">{row.jobId}</Typography></td>
                            <td><Typography variant="body">{row.status}</Typography></td>
                            <td><Typography variant="body">{row.arrears}</Typography></td>
                            <td><Typography variant="body">{row.range}</Typography></td>
                            <td><Typography variant="body">{row.dcaName}</Typography></td>

                        </tr>
                    ))}


                </table>

            </div>


            <div style={{ margin: "2rem" }} >
                {
                    GetId != "" &&
                    <>
                        <div style={{ width: "400px", margin: '0 0 2rem auto', height: "6rem" }} >
                            <select style={{ width: "400px", height: "100%", color: "#501ABF", border: "1px solid #501ABF" }} class="form-select" aria-label="Default select example" name="" onChange={handleInputChange}>
                                <option name='Details' value='Details' >Details Veiw</option>
                                <option name='Site' value='Site' >Site View Details</option>
                                <option name='Call' value='Call' >Call Details</option>
                                <option name='Instruction' value='Instruction' >Instruction</option>
                            </select>
                        </div>
                        {/* {JSON.stringify(SelectUserObject)} */}
                        <div class="tab-content" id="pills-tabContent">
                            {SelectInput === "Details" && <DetailView SelectUserObject={SelectUserObject} />}
                            {SelectInput === "Site" && <SiteView SelectUserObject={SelectUserObject} />}
                            {SelectInput === "Call" && <CallDetails SelectUserObject={SelectUserObject} />}
                            {SelectInput === "Instruction" && <Instruction SelectUserObject={SelectUserObject} />}

                        </div>
                    </>

                }

            </div>
        </Layout>

    );
}
export default Dashboard;
