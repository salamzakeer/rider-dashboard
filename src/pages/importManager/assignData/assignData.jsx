import React, { useEffect, useState } from "react";
import 'react-toastify/dist/ReactToastify.css'; // import first
import { useToasts } from 'react-toast-notifications';
import axios from '../../../axios'
import "./importManger.css"
import Layout from "../../../components/layout/Navbar"


function Dashboard() {
    const { addToast } = useToasts();

    //upload file
    const [Form, setForm] = React.useState("");
    const [To, setTo] = React.useState("");
    const [RiderId, setRiderId] = React.useState("");
    const [RiderData, setRiderData] = useState([])
    useEffect(() => {
        axios.get('/rider')
            .then((res) => {
                // console.log(res.data, 'data')
                setRiderData(res.data)
            })
            .catch((err => {
                console.log(err, 'error')
            }))
    }, [])


    // Handles file upload event and updates state

    //end-upload file


    let handleSubmit = (event) => {
        event.preventDefault();
        // alert(JSON.stringify(formValues));
        // console.log(Option, Form, To);
        const jsonData = {
            "type": Option,
            "dataFrom": Form,
            "dataTo": To,
            "riderId": RiderId,
            "createdDate": "2021-12-01",
            "dueDate": "2021-12-01",
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
                    addToast("Data add Successfully", { appearance: 'success', autoDismiss: "true", autoDismissTimeout: 2000 });
                }
            )
            .catch((error) => {
                addToast("please select correct file", { appearance: 'error', autoDismiss: "true", autoDismissTimeout: 2000 });
            });
    }
    const [Option, setOption] = useState("")
    const handleStaffChange = (e) => {
        const { value } = e.target;
        setRiderId(
            value
        );
    };
    const handleInputChange = (e) => {
        const { value } = e.target;
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
                        <option name='LND' value='lnds' >LND</option>
                        <option name='VACAT' value='vacant' >VACAT</option>
                        <option name='COMMERCIAL' value='commercial' >COMMERCIAL</option>
                        <option name='HIGHRISES' value='highrise' >HIGHRISES</option>
                    </select>
                    <div className="input-div">
                        <input type="text" className="input-div-input" placeholder="Task Type" value={Option === 'lnds' ? "LND" : (Option === "vacant" ? "VACAT" : (Option === "commercial" ? "COMMERCIAL" : (Option === "highrise" ? "HIGHRISE" : "")))} />
                        {/* <img src={AddIcon} alt="" className="input-div-botton" /> */}
                    </div>
                    <div className="input-div">
                        <input type="text" className="input-div-input" placeholder="Date" value={Option === 'lnds' ? "2022-12-12" : (Option === "vacant" ? "2022-6-12" : Option === 'commercial' ? "2022-12-12" : (Option === "highrise" ? "2022-6-12" : ""))} />
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