import React, { useState } from "react";
import Navbar from "../../components/navbar/navbar";
import Sidebar from "../../components/sidebar/sidebar";


import UploadIcon from '../../assets/upload.png'
import AddIcon from '../../assets/add.png'
import RemoveIcon from '../../assets/remove.png'

import "./dashboard.css"

function Dashboard() {

    const [formValues, setFormValues] = useState([])

    let handleChange = (i, e) => {
        let newFormValues = [...formValues];
        newFormValues[i][e.target.name] = e.target.value;
        setFormValues(newFormValues);
      }
    
    let addFormFields = () => {
        setFormValues([...formValues, { name: ""}])
      }
    
    let removeFormFields = (i) => {
        let newFormValues = [...formValues];
        newFormValues.splice(i, 1);
        setFormValues(newFormValues)
    }
    
    let handleSubmit = (event) => {
        event.preventDefault();
        alert(JSON.stringify(formValues));
    }

    return (
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

                        <div className="input-div">
                            <input type="text" className="input-div-input" placeholder="Riders.xl" />
                            <img src={UploadIcon} alt="" className="input-div-botton" />
                        </div>

                        <div className="input-div">
                            <input type="text" className="input-div-input" placeholder="Add Column" />
                            {/* <img src={AddIcon} alt="" className="input-div-botton" onClick={() => add(true)} /> */}
                            <img src={AddIcon} alt="" className="input-div-botton" onClick={() => addFormFields()} />
                        </div>


                        {formValues.map((element, index) => (
            <div className="form-inline" key={index}>

            <div className="input-div">
              <input type="text" className="input-div-input"  name="name" value={element.name || ""} onChange={e => handleChange(index, e)} />
              <img src={RemoveIcon} alt="" className="input-div-botton" onClick={() => removeFormFields(index)} />
             </div>
              {/* {
                index ? 
                <img src={RemoveIcon} alt="" className="input-div-botton" onClick={() => removeFormFields(index)} />
                 
                : null
              } */}
            </div>
          ))}
                   



                        <button type="submit" className="submit3">Submit</button>
                    </form>
                </div>
                {/* ========== form ==========*/}

            </div>
        </div>

    )


}
export default Dashboard;