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

    function handleUpload(event) {
        setFile(event.target.files[0]);

        // Add code here to upload file to server
        // ...
    }

    //end-upload file

    const [formValues, setFormValues] = useState([]);

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

    return (
        <Layout title="Call Manager" >
            <div style={{ margin: "100px" }}>
                <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
                    <li class="nav-item" role="presentation">
                        <button
                            class="nav-link active"
                            id="pills-home-tab"
                            data-bs-toggle="pill"
                            data-bs-target="#pills-home"
                            type="button"
                            role="tab"
                            aria-controls="pills-home"
                            aria-selected="true"
                        >
                            Details View
                        </button>
                    </li>
                    <li class="nav-item" role="presentation">
                        <button
                            class="nav-link"
                            id="pills-profile-tab"
                            data-bs-toggle="pill"
                            data-bs-target="#pills-profile"
                            type="button"
                            role="tab"
                            aria-controls="pills-profile"
                            aria-selected="false"
                        >
                            Site Visit Details
                        </button>
                    </li>
                    <li class="nav-item" role="presentation">
                        <button
                            class="nav-link"
                            id="pills-contact-tab"
                            data-bs-toggle="pill"
                            data-bs-target="#pills-contact"
                            type="button"
                            role="tab"
                            aria-controls="pills-contact"
                            aria-selected="false"
                        >
                            Call Details
                        </button>
                    </li>
                    <li class="nav-item" role="presentation">
                        <button
                            class="nav-link"
                            id="pills-instruction-tab"
                            data-bs-toggle="pill"
                            data-bs-target="#pills-instruction"
                            type="button"
                            role="tab"
                            aria-controls="pills-contact"
                            aria-selected="false"
                        >
                            Instruction
                        </button>
                    </li>
                </ul>
                <div class="tab-content" id="pills-tabContent">
                    <div
                        class="tab-pane fade show active"
                        id="pills-home"
                        role="tabpanel"
                        aria-labelledby="pills-home-tab"
                        style={{ margin: "-66px 0px 0px -33px" }}
                    >
                        <DetailView />
                    </div>
                    <div
                        class="tab-pane fade"
                        id="pills-profile"
                        role="tabpanel"
                        aria-labelledby="pills-profile-tab"
                        style={{ margin: "-66px 0px 0px -33px" }}

                    >
                        <SiteView />
                    </div>
                    <div
                        class="tab-pane fade"
                        id="pills-contact"
                        role="tabpanel"
                        aria-labelledby="pills-contact-tab"
                        style={{ margin: "-66px 0px 0px -33px" }}

                    >
                        <CallDetails />
                    </div>
                    <div
                        class="tab-pane fade"
                        id="pills-instruction"
                        role="tabpanel"
                        aria-labelledby="pills-instruction-tab"
                        style={{ padding: "0px 40px " }}
                    >
                        <Instruction />
                    </div>
                </div>
            </div>
        </Layout>

    );
}
export default Dashboard;
