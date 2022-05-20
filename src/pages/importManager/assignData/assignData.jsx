import React, { useState } from "react";
import 'react-toastify/dist/ReactToastify.css'; // import first
import { ToastContainer, toast } from 'react-toastify'; // then this
import Navbar from "../../../components/navbar/navbar";
import Sidebar from "../../../components/sidebar/sidebar";
import makeAnimated from "react-select/animated";
import MySelect from "../../../components/select/select";
import { components } from "react-select";
import { useToasts } from 'react-toast-notifications';

import UploadIcon from '../../../assets/upload.png'
import AddIcon from '../../../assets/add.png'
import RemoveIcon from '../../../assets/remove.png'
import axios from '../../../axios'
import "./importManger.css"
import Selects from "../../../components/select/selects";

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
        optionSelected.map((item) => {

            array.push(item.value)
        })
        data.append("data", file);
        data.append("columns", `"${array}"`);
        axios
            // detailIndex
            .post(`/vacants`, data, {
                headers: { "Content-Type": "multipart/form-data" },
            })
            .then(
                (res) => {
                    var id = res.id;
                    addToast("Data add Successfully", { appearance: 'success', autoDismiss: "true", autoDismissTimeout: 2000 });
                }
            )
            .catch((error) => {
                addToast("please select correct file", { appearance: 'error', autoDismiss: "true", autoDismissTimeout: 2000 });
            });
    }
    const [Option, setOption] = useState("")
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        console.log(name)
        setOption(
            value
        );
    };
    return (
        <>

            <div className="main">
                <div className="slider">
                    <Sidebar />
                </div>

                <div className="container">
                    <Navbar />

                    {/* ========== form ==========*/}
                    <div className="newFile2  form">
                        <h1>Assign Data</h1>

                        <form onSubmit={handleSubmit}>

                            <select class="form-select" aria-label="Default select example" name="" onChange={handleInputChange} value={"Option"}>
                                <option selected>Task Info</option>
                                <option name='LND' >LND</option>
                                <option name='VACAT' >VACAT</option>

                            </select>

                            <div className="input-div">
                                {/* {Option} */}
                                <input type="text" className="input-div-input" placeholder="Task Type" value={Option == 'LND' ? "LND" : (Option === "VACAT" ? "VACAT" : "")} />
                                {/* <img src={AddIcon} alt="" className="input-div-botton" /> */}
                            </div>
                            <div className="input-div">
                                <input type="text" className="input-div-input" placeholder="Date" value={Option == 'LND' ? "2022-12-12" : (Option === "VACAT" ? "2022-6-12" : "")} />
                                {/* <img src={AddIcon} alt="" className="input-div-botton" /> */}
                            </div>
                            <select class="form-select" aria-label="Default select example" >
                                <option selected>Staff info</option>
                                <option>Mustard</option>
                                <option>Ketchup</option>
                                <option>Relish</option>
                            </select>

                            <br />
                            <hr />
                            <br />
                            <br />
                            <select class="form-select" aria-label="Default select example" >
                                <option selected>Select</option>
                                <option>Task 01 Tdb</option>
                                <option>Task 02</option>

                            </select>

                            <div className="input-div">
                                <input type="text" className="input-div-input" placeholder="From" />
                                {/* <img src={AddIcon} alt="" className="input-div-botton" /> */}
                            </div>
                            <div className="input-div">
                                <input type="text" className="input-div-input" placeholder="To" />
                                {/* <img src={AddIcon} alt="" className="input-div-botton" /> */}
                            </div>
                            <button type="submit" className="submit3">Submit</button>
                        </form>
                    </div>
                    {/* ========== form ==========*/}

                </div>
            </div>
        </>

    )


}
export default Dashboard;