import React from "react";
import 'react-toastify/dist/ReactToastify.css'; // import first
import makeAnimated from "react-select/animated";
import MySelect from "../../components/select/select";
import { components } from "react-select";
import { useToasts } from 'react-toast-notifications';

import UploadIcon from '../../assets/upload.png'
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


const LndArrayOptions = [
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

const VacantsArrayOptions = [
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
    const [optionSelectedOr, setOptionSelectedOr] = React.useState(null);
    const [JobType, setJobType] = React.useState(null);
    // 
    const selecHandleChange = (selected) => {
        setOptionSelected(selected)

    };
    // Handles file upload event and updates state
    const data = new FormData();

    function handleUpload(event) {
        setFile(event.target.files[0]);

        // Add code here to upload file to server
        // ...

    }

    //end-upload file





    let handleSubmit = (event) => {
        console.log("form submit", optionSelectedOr);
        if (optionSelectedOr !== "" && optionSelectedOr !== "Type") {
            console.log("form submit2", optionSelectedOr);

            event.preventDefault();

            var array = [];
            optionSelected.map((item) => {
                array.push(item.value)
            })
            data.append("data", file);
            data.append("jobType", JobType);
            data.append("columns", `"${array}"`);
            axios
                // detailIndex
                .post(`/${optionSelectedOr}`, data, {
                    headers: { "Content-Type": "multipart/form-data" },
                    //   onUploadProgress: (data) => {
                    //     //Set the progress value to show the progress bar
                    //     // setProgress(Math.round((100 * data.loaded) / data.total));
                    //   },
                })
                .then(
                    (res) => {
                        // var id = res.id;
                        // setProgress("");
                        addToast("Data add Successfully", { appearance: 'success', autoDismiss: "true", autoDismissTimeout: 2000 });

                    }
                )
                .catch((error) => {
                    addToast("please select correct file", { appearance: 'error', autoDismiss: "true", autoDismissTimeout: 2000 });

                    // sendNotification({ msg: "There was an error!", variant: "error" });
                });
        }
    }
    const handleInputChange = (e) => {
        const { value } = e.target;
        // console.log(name, 'name', value, 'value')
        setOptionSelectedOr(
            value
        );
    };
    return (
        <Layout >

            <div className="newFile2">
                <h1>Importing .XL File</h1>
                <form onSubmit={handleSubmit}>
                    <select class="form-select" aria-label="Default select example" name="" onChange={handleInputChange} required="required" >
                        <option name='' value='' selected>Type</option>
                        <option name='lnds' value='lnds' >LND</option>
                        <option name='vacants' value='vacants' >VACANTS</option>

                    </select>
                    <div className="input-div" dataText="Select your file">
                        <input type="file" className="input-div-3" onChange={handleUpload} />
                        {/* <input type="file" onChange={handleUpload} style = {{ display: "none"}}/> */}
                        <input type="text" className="input-div-input" placeholder={file.name || "Upload File"} readonly="readonly" />
                        <img type="file" src={UploadIcon} alt="" className="input-div-botton" />
                    </div>
                    <div className="input-div">
                        <input type="text" className="input-div-input" placeholder="Job Type" value={JobType} required onChange={(e) => setJobType(e.target.value)} />
                        {/* <img src={AddIcon} alt="" className="input-div-botton" /> */}
                    </div>
                    {optionSelectedOr === "lnds" && <MySelect
                        options={LndArrayOptions}
                        isMulti
                        closeMenuOnSelect={false}
                        hideSelectedOptions={false}
                        components={{ Option, MultiValue, animatedComponents }}
                        onChange={selecHandleChange}
                        allowSelectAll={true}
                        value={optionSelected}
                    />}
                   
                    {optionSelectedOr === "vacants" &&
                        < MySelect
                            options={VacantsArrayOptions}
                            isMulti
                            closeMenuOnSelect={false}
                            hideSelectedOptions={false}
                            components={{ Option, MultiValue, animatedComponents }}
                            onChange={selecHandleChange}
                            allowSelectAll={true}
                            value={optionSelected}
                        />
                    }



                    <button type="submit" className="submit3">Submit</button>
                </form>
            </div>
        </Layout>

    )


}
export default Dashboard;