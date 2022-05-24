import React, { useState } from "react";
import 'react-toastify/dist/ReactToastify.css'; // import first
import { ToastContainer, toast } from 'react-toastify'; // then this
import Navbar from "../../components/navbar/navbar";
import Sidebar from "../../components/sidebar/sidebar";
import makeAnimated from "react-select/animated";
import MySelect from "../../components/select/select";
import { components } from "react-select";
import { useToasts } from 'react-toast-notifications';

import UploadIcon from '../../assets/upload.png'
import AddIcon from '../../assets/add.png'
import RemoveIcon from '../../assets/remove.png'
import axios from '../../axios'
import "./importManger.css"
import Layout from "../../components/layout/Navbar";

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
    { value: "DCAFiletype", label: "DCAFiletype", color: "#00B8D9" },
    { value: "DCAName", label: "DCAName", color: "#0052CC" },
    { value: "State", label: "State", color: "#5243AA" },
    { value: "Costcode", label: "Costcode", color: "#FF5630" },

    { value: "UO", label: "UO", color: "#00B8D9" },
    { value: "LAName", label: "LAName", color: "#00B8D9" },
    { value: "billno", label: "billno", color: "#00B8D9" },
    { value: "SAN", label: "SAN", color: "#00B8D9" },
    { value: "Owner1", label: "Owner1", color: "#00B8D9" },
    { value: "Owner2", label: "Owner2", color: "#00B8D9" },
    { value: "Owner1NRIC", label: "Owner1NRIC", color: "#00B8D9" },
    { value: "Owner2NRIC", label: "Owner2NRIC", color: "#00B8D9" },
    { value: "PropAddr1", label: "PropAddr1", color: "#00B8D9" },
    { value: "PropAddr2", label: "PropAddr2", color: "#00B8D9" },
    { value: "PropAddr3", label: "PropAddr3", color: "#00B8D9" },
    { value: "PropAddr4", label: "PropAddr4", color: "#00B8D9" },
    { value: "Roadname", label: "Roadname", color: "#00B8D9" },
    { value: "Taman", label: "Taman", color: "#00B8D9" },
    { value: "PostCode", label: "PostCode", color: "#00B8D9" },
    { value: "Suburb", label: "Suburb", color: "#00B8D9" },
    { value: "MailName1", label: "MailName1", color: "#00B8D9" },
    { value: "MailName2", label: "MailName2", color: "#00B8D9" },
    { value: "MailAdd1", label: "MailAdd1", color: "#00B8D9" },
    { value: "MailAdd2", label: "MailAdd2", color: "#00B8D9" },
    { value: "MailAdd3", label: "MailAdd3", color: "#00B8D9" },
    { value: "MailAdd4", label: "MailAdd4", color: "#00B8D9" },
    { value: "Class", label: "Class", color: "#00B8D9" },
    { value: "Range", label: "Range", color: "#00B8D9" },
    { value: "Arrears", label: "Arrears", color: "#00B8D9" },
    { value: "CurrentBalance", label: "CurrentBalance", color: "#00B8D9" },
    { value: "Balance_at_05_03_2022", label: "Balance_at_05_03_2022", color: "#00B8D9" },
    { value: "AdministrationFee", label: "AdministrationFee", color: "#00B8D9" },
    { value: "LODFee", label: "LODFee", color: "#00B8D9" },
    { value: "TotalPayableAmount", label: "TotalPayableAmount", color: "#00B8D9" },
    { value: "BATCH", label: "BATCH", color: "#00B8D9" },

];
const animatedComponents = makeAnimated();
function Dashboard() {
    const { addToast } = useToasts();

    //upload file
    const [file, setFile] = React.useState("");
    const [fileLnd, setFileLnd] = React.useState("");
    const [optionSelected, setOptionSelected] = React.useState(null);
    const [optionSelectedLnd, setOptionSelectedLnd] = React.useState(null);

    const selecHandleChange = (selected) => {
        setOptionSelected(selected)

    };
    const selecHandleChangeLnd = (selected) => {
        setOptionSelectedLnd(selected)

    };
    // Handles file upload event and updates state
    const data = new FormData();
    const dataLnd = new FormData();

    function handleUploadLnd(event) {
        setFileLnd(event.target.files[0]);

        // Add code here to upload file to server
        // ...

    }
    function handleUpload(event) {
        setFile(event.target.files[0]);

        // Add code here to upload file to server
        // ...

    }

    //end-upload file

    const [formValues, setFormValues] = useState([])

    let handleChange = (i, e) => {
        let newFormValues = [...formValues];
        newFormValues[i][e.target.name] = e.target.value;
        setFormValues(newFormValues);

    }

    let addFormFields = () => {
        setFormValues([...formValues, { name: "" }])
    }

    let removeFormFields = (i) => {
        let newFormValues = [...formValues];
        newFormValues.splice(i, 1);
        setFormValues(newFormValues)
    }

    let handleSubmit = (event) => {
        event.preventDefault();
        // alert(JSON.stringify(formValues));

        var array = [];
        var arrayLnd = [];

        optionSelected.map((item) => {
            array.push(item.value)
        })
        optionSelected.map((item) => {
            arrayLnd.push(item.value)
        })
        data.append("data", file);
        data.append("columns", `"${array}"`);

        dataLnd.append("data", fileLnd);
        dataLnd.append("columns", `"${arrayLnd}"`);


        // detailIndex
        // axios.all([
        //     axios.post(`/vacants`, data, { headers: { "Content-Type": "multipart/form-data" } }),
        //     axios.post(`/lnds`, dataLnd, { headers: { "Content-Type": "multipart/form-data" } }),
        // ])
        //     .then(axios.spread((data1, data2) => {
        //         // output of req.
        //         alert(1)
        //         addToast("Data add Successfully", { appearance: 'success', autoDismiss: "true", autoDismissTimeout: 2000 });
        //         console.log('data1', data1, 'data2', data2)
        //     }))
        axios
            .post(`/vacants`, dataLnd, {
                headers: { "Content-Type": "multipart/form-data" },
                //   onUploadProgress: (data) => {
                //     //Set the progress value to show the progress bar
                //     // setProgress(Math.round((100 * data.loaded) / data.total));
                //   },
            })
            .then(
                (res) => {
                    var id = res.id;
                    axios
                    .post(`/lnd`, data, {
                        headers: { "Content-Type": "multipart/form-data" },
                        //   onUploadProgress: (data) => {
                        //     //Set the progress value to show the progress bar
                        //     // setProgress(Math.round((100 * data.loaded) / data.total));
                        //   },
                    })
                    .then(
                        (res) => {
                            var id = res.id;
                            // setProgress("");
                            addToast("Data add Successfully", { appearance: 'success', autoDismiss: "true", autoDismissTimeout: 2000 });
        
                        }
                    )
                    .catch((error) => {
                        alert(2)
                        console.log("error")
                        addToast("please select correct file", { appearance: 'error', autoDismiss: "true", autoDismissTimeout: 2000 });
        
                        // sendNotification({ msg: "There was an error!", variant: "error" });
                    });
                    // setProgress("");

                }
            )
            .catch((error) => {
                alert(2)
                console.log("error")
                addToast("please select correct file", { appearance: 'error', autoDismiss: "true", autoDismissTimeout: 2000 });

                // sendNotification({ msg: "There was an error!", variant: "error" });
            });
    }
    const notify = () => toast("Wow so easy !");

    return (
        <Layout >

            <div className="newFile2">
                <h1>New file</h1>
                <form onSubmit={handleSubmit}>

                    <div className="input-div" dataText="Select your file">
                        <input type="file" className="input-div-3" onChange={handleUpload} />
                        {/* <input type="file" onChange={handleUpload} style = {{ display: "none"}}/> */}
                        <input type="text" className="input-div-input" placeholder={file.name || "Upload Vacant File"} readonly="readonly"
                            accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel" />
                        <img type="file" src={UploadIcon} alt="" className="input-div-botton"
                            accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel" />
                    </div>

                    <MySelect
                        options={colourOptions}
                        isMulti
                        closeMenuOnSelect={false}
                        hideSelectedOptions={false}
                        components={{ Option, MultiValue, animatedComponents }}
                        onChange={selecHandleChange}
                        allowSelectAll={true}
                        value={optionSelected}
                        label="lnd"
                    />
                    <br />
                    <br />
                    <hr />
                    <br />
                    <br />
                    <div className="input-div" dataText="Select your file">
                        <input type="file" className="input-div-3" onChange={handleUploadLnd} />
                        {/* <input type="file" onChange={handleUpload} style = {{ display: "none"}}/> */}
                        <input type="text" className="input-div-input" placeholder={fileLnd.name || "Upload LND File"} readonly="readonly" />
                        <img type="file" src={UploadIcon} alt="" className="input-div-botton"
                            accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel" />
                    </div>
                    <MySelect
                        options={colourOptions}
                        isMulti
                        closeMenuOnSelect={false}
                        hideSelectedOptions={true}
                        components={{ Option, MultiValue, animatedComponents }}
                        onChange={selecHandleChangeLnd}
                        allowSelectAll={true}
                        value={optionSelectedLnd}
                        label="lnd"
                    />
                    <button type="submit" className="submit3">Submit</button>
                </form>
            </div>
        </Layout>

    )


}
export default Dashboard;