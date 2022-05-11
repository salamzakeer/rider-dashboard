import React, { useState } from "react";
import Navbar from "../../components/navbar/navbar";
import Sidebar from "../../components/sidebar/sidebar";


import UploadIcon from '../../assets/upload.png'
import AddIcon from '../../assets/add.png'
import RemoveIcon from '../../assets/remove.png'

import "./dashboard.css"

function Dashboard() {

   //manage dynamic input form
   const [form, setForm] = useState([]);

    const handleAddFeild=(e)=>{
        e.preventDefault();
        const inputState = {
            Platform: ""
        };
    
    //Set previous State
    setForm((prev) => [...prev, inputState]);
    
    };

    const onChange=(index,event)=>{
        
        event.preventDefault();
        event.persist();

         setForm(prev=>{

            return prev.map((item,i)=>{
                
                if(i==index){
                    return item;
                }

                return{
                    ...item,
                    [event.target.name]: event.target.value,
                }
            })
        })

    }
    //remove feild
    const handleRemoveFeild =(e, index)=>{

        e.preventDefault();

        setForm((prev) => prev.filter((item) => item !== prev[index]));
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
               
                    <form action="submit">

                        <div className="input-div">
                            <input type="text" className="input-div-input" placeholder="Riders.xl" />
                            <img src={UploadIcon} alt="" className="input-div-botton" />
                        </div>

                        <div className="input-div">
                            <input type="text" className="input-div-input" placeholder="Add Column" />
                            {/* <img src={AddIcon} alt="" className="input-div-botton" onClick={() => add(true)} /> */}
                            <img src={AddIcon} alt="" className="input-div-botton" onClick={handleAddFeild} />
                        </div>

                   
{JSON.stringify(form)}
                            {
                        form.map((item,index)=> (
                        <div className="row" key={`item-${index}`}>

                            <div className="input-div">
                            <input 
                            type="text" 
                            className="input-div-input"
                            placeholder="Add Column" 
                            name="Platform"
                            value={item.Platform}
                            onChange={(e)=>onChange(index,e)}
                             />

                            <img src={RemoveIcon} 
                            alt="" 
                            className="input-div-botton" 
                            name="btn"
                            onClick={(e)=>handleRemoveFeild(e,index)} 
                            />
                            </div>

                        </div>
                        ))
                    }


                        <button type="submit" className="submit3">Submit</button>
                    </form>
                </div>
                {/* ========== form ==========*/}

            </div>
        </div>

    )


}
export default Dashboard;