import React, { useState } from "react";
import 'react-toastify/dist/ReactToastify.css'; // import first
import { ToastContainer, toast } from 'react-toastify'; // then this
import Navbar from "../../components/navbar/navbar";
import Sidebar from "../../components/sidebar/sidebar";
import makeAnimated from "react-select/animated";
import MySelect from "../../components/select/select";
import { components } from "react-select";
import { ToastProvider, useToasts } from 'react-toast-notifications';

import UploadIcon from '../../assets/upload.png'
import AddIcon from '../../assets/add.png'
import RemoveIcon from '../../assets/remove.png'
import axios from '../../axios'
import "./dashboard.css"

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

        console.log(optionSelected)
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
                //   onUploadProgress: (data) => {
                //     //Set the progress value to show the progress bar
                //     // setProgress(Math.round((100 * data.loaded) / data.total));
                //   },
            })
            .then(
                (res) => {
                    var id = res.id;
                    console.log(id, "iiiiiiiiiiiiiiiid");
                    // setProgress("");
                    addToast("Data add Successfully", { appearance: 'success', autoDismiss: "true", autoDismissTimeout: 2000 });

                }
            )
            .catch((error) => {
                addToast("please select correct file", { appearance: 'error', autoDismiss: "true", autoDismissTimeout: 2000 });

                console.log("There was an error!", error);
                // sendNotification({ msg: "There was an error!", variant: "error" });
            });
    }
    const notify = () => toast("Wow so easy !");

    return (
        <>

            <div className="main">
                <div className="slider">
                    <Sidebar />
                </div>

                <div className="container">
                    <Navbar />

                    {/* ========== form ==========*/}
                    <div className="newFile2">
                        <h1>New file</h1>

                        <form onSubmit={handleSubmit}>

                            <div className="input-div" dataText="Select your file">
                                <input type="file" className="input-div-3" onChange={handleUpload} />
                                {/* <input type="file" onChange={handleUpload} style = {{ display: "none"}}/> */}
                                <input type="text" className="input-div-input" placeholder={file.name || "Upload File"} readonly="readonly" />
                                <img type="file" src={UploadIcon} alt="" className="input-div-botton" />
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
                            />
                            {/* <div className="input-div">

                            <input type="text" className="input-div-input" placeholder="Add Column" />
                            <img src={AddIcon} alt="" className="input-div-botton" onClick={() => addFormFields()} />
                        </div> */}
                            {/* <img src={AddIcon} alt="" className="input-div-botton" onClick={() => add(true)} /> */}


                            {/* {formValues.map((element, index) => (
                            <div className="form-inline" key={index}>

                                <div className="input-div">
                                    <input type="text" className="input-div-input" name="name" value={element.name || ""} onChange={e => handleChange(index, e)} />
                                    <img src={RemoveIcon} alt="" className="input-div-botton" onClick={() => removeFormFields(index)} />
                                </div>

                            </div>
                        ))}
 */}



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