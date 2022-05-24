import React, { useEffect, useState } from "react";
import 'react-toastify/dist/ReactToastify.css'; // import first
import makeAnimated from "react-select/animated";
import { components } from "react-select";
import { useToasts } from 'react-toast-notifications';
import axios from '../../../axios'
import "./importManger.css"
import Layout from "../../../components/layout/Navbar"

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
    const [Form, setForm] = React.useState("");
    const [To, setTo] = React.useState("");
    const [RiderId, setRiderId] = React.useState("");
    const [optionSelected, setOptionSelected] = React.useState(null);
    const [RiderData, setRiderData] = useState([])
    useEffect(() => {
        axios.get('/rider')
            .then((res) => {
                console.log(res.data, 'data')
                setRiderData(res.data)
            })
            .catch((err => {
                console.log(err, 'error')
            }))
    }, [])

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
        console.log(Option, Form, To);
        const jsonData = {
            "type": Option,
            "dataFrom": Form,
            "dataTo": To,
            "riderId": RiderId
        }
        // var array = [];
        // optionSelected.map((item) => {

        //     array.push(item.value)
        // })
        // data.append("data", file);
        // data.append("columns", `"${array}"`);
        axios
            // detailIndex
            .post(`/riderdata`, jsonData, {
                headers: { "Content-Type": "application/json" },
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
    const handleStaffChange = (e) => {
        const { name, value } = e.target;
        console.log(name, 'name', value, 'value')
        setRiderId(
            value
        );
    };
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        console.log(name, 'name', value, 'value')
        setOption(
            value
        );
    };
    return (
        <Layout title="Assign Data" >

            {/* ========== form ==========*/}
            <div className="newFile2  form">
                <h1>Assign Data</h1>
                <form onSubmit={handleSubmit}>
                    <select class="form-select" aria-label="Default select example" name="" onChange={handleInputChange} value={"Option"}>
                        <option selected>Task Info</option>
                        <option name='LND' value='LND' >11-LND-(DEC-12)</option>
                        <option name='VACAT' value='VACAT' >11-VACAT-(JUN-12)</option>
                    </select>
                    <div className="input-div">
                        <input type="text" className="input-div-input" placeholder="Task Type" value={Option == 'LND' ? "LND" : (Option === "VACAT" ? "VACAT" : "")} />
                        {/* <img src={AddIcon} alt="" className="input-div-botton" /> */}
                    </div>
                    <div className="input-div">
                        <input type="text" className="input-div-input" placeholder="Date" value={Option == 'LND' ? "2022-12-12" : (Option === "VACAT" ? "2022-6-12" : "")} />
                        {/* <img src={AddIcon} alt="" className="input-div-botton" /> */}
                    </div>
                    <select class="form-select" aria-label="Default select example" onChange={handleStaffChange}>
                        <option selected>Staff info</option>
                        {
                            RiderData && RiderData.length > 0 && RiderData.map((item) => (
                                <option name={item.id} value={item.id} >{item.fullName}</option>
                            ))
                        }

                    </select>

                    <br />
                    <hr />
                    <br />
                    <br />
                    <select class="form-select" aria-label="Default select example" >
                        <option selected>Select Type Of Task Assign</option>

                        <option>New</option>
                        <option>Replace</option>
                        <option>Re Assign(Task Completed)</option>
                        <option>Un Assign</option>

                    </select>

                    <div className="input-div">
                        <input type="text" className="input-div-input" placeholder="From" value={Form} onChange={(e) => setForm(e.target.value)} />
                        {/* <img src={AddIcon} alt="" className="input-div-botton" /> */}
                    </div>
                    <div className="input-div">
                        <input type="text" className="input-div-input" placeholder="To" value={To} onChange={(e) => setTo(e.target.value)} />
                        {/* <img src={AddIcon} alt="" className="input-div-botton" /> */}
                    </div>
                    <button type="submit" className="submit3">Submit</button>
                </form>
            </div>
            {/* ========== form ==========*/}
        </Layout>

    )


}
export default Dashboard;