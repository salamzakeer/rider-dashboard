import React, { useEffect, useState } from "react";
import 'react-toastify/dist/ReactToastify.css'; // import first
import { useToasts } from 'react-toast-notifications';
import axios from '../../../axios'
import "./importManger.css"
import Layout from "../../../components/layout/Navbar"
import moment from "moment";


function Dashboard() {
    const { addToast } = useToasts();

    //upload file
    const [Form, setForm] = React.useState("");
    const [To, setTo] = React.useState("");
    const [RiderId, setRiderId] = React.useState("");
    const [RiderData, setRiderData] = useState([])
    const AdminId = JSON.parse(localStorage.getItem("auth")).message.id || ''
    const [Category, setCategory] = React.useState([]);
    const [UserSelectCategory, setUserSelectCategory] = React.useState("");
    const [UserSelectCategoryCDate, setUserSelectCategoryCDate] = React.useState("");
    const [Option, setOption] = useState("")

    useEffect(() => {
        axios.get('/rider')
            .then((res) => {
                // console.log(res.data, 'data=============')
                setRiderData(res.data)
            })
            .catch((err => {
                console.log(err, 'error')
            }))
    }, [])

    useEffect(() => {
        axios.get(`/jobname/${Option}/${AdminId}`)
            .then((res) => {
                // console.log(res.data, 'data')
                setCategory(res.data)
            })
            .catch((err => {
                setCategory([]);
                // console.log(err, 'error')
            }))
    }, [Option])


    // Handles file upload event and updates state

    //end-upload file


    let handleSubmit = (event) => {
        event.preventDefault();
        // alert(JSON.stringify(formValues));
        // console.log(Option, Form, To);
        const AdminId = JSON.parse(localStorage.getItem("auth")).message.id || ''

        const jsonData = {
            "type": Option,
            "dataFrom": Form,
            "dataTo": To,
            "riderId": RiderId,
            "createdDate": "2021-12-01",
            "dueDate": "2021-12-01",
            "jobId": UserSelectCategory
            // "category": Option

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
    const handleStaffChange = (e) => {
        const { value } = e.target;
        setRiderId(
            value
        );
    };
    const handleCategoryChange = (e) => {
        const { value, name } = e.target;
        // console.log(e.target, "date")
        // console.log(name, "date")
        const date = Category.find(item => (item.id == e.target.value)).createdDate || ""
        // console.log(moment(date).format("YYYY-MM-DD"))
        setUserSelectCategory(
            value
        );
        setUserSelectCategoryCDate(moment(date).format("YYYY-MM-DD"))
        console.log(Category.find(item => (item.id == e.target.value)).createdDate || "")

    };

    const handleInputChange = (e) => {
        const { value } = e.target;
        setOption(
            value
        );
        // setUserSelectCategoryCDate(Category.find(item => (item.id == e.target.value))) )
    };
    return (
        <Layout title="Assign Data" >
            {/* ========== form ==========*/}
            <div className="newFile2  form">
                <h1>Assign Data</h1>
                <form onSubmit={handleSubmit}>
                    <select class="form-select" aria-label="Default select example" name="" onChange={handleInputChange} >
                        <option selected>Task Info</option>
                        <option name='LND' value='lnds' >LANDED</option>
                        <option name='VACAT' value='vacants' >VACANTS</option>
                        <option name='COMMERCIAL' value='commercial' >COMMERCIAL</option>
                        <option name='HIGHRISES' value='highrises' >HIGHRISES</option>
                    </select>
                    <br />
                    <select class="form-select" aria-label="Default select example" onChange={handleCategoryChange}>
                        <option selected>Category</option>
                        {
                            Category && Category.length > 0 && Category.map((item) => (
                                <option name={item.createdAt} value={item.id} >{item.jobName}</option>
                            ))
                        }
                    </select>
                    {/* {JSON.stringify(Category)} */}
                    <div className="input-div">
                        <input type="text" className="input-div-input" placeholder="Date" value={UserSelectCategoryCDate} />
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




                    {/* <br /> */}
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