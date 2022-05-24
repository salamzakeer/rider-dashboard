import React, { useState } from 'react';
import axios from 'axios';
import './AddRider.css'
import CloseIcon from '@mui/icons-material/Close';
import CancelBtn from '../../assets/cancel.png'

import FileUploader from '../../components/buttons/FileUploader';
import { useToasts } from 'react-toast-notifications';
import DialogComponenet from '../dialog'
import Dialog from "@mui/material/Dialog";
function AddRiderPopup({ closeModel, openModel }) {

    const [fullName, setFullName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const { addToast } = useToasts();

    const handleName = (e) => {
        setFullName(e.target.value)
    }
    const handleEmail = (e) => {
        setEmail(e.target.value)
    }
    const handlePassword = (e) => {
        setPassword(e.target.value)
    }

    const handleApi = () => {
        console.log({ fullName, email, password })
        const json = {
            fullName: fullName,
            email: email,
            password: password

        };
        axios.post('https://dcaapi.moodfor.codes/rider/register', json)
            .then(result => {
                // console.log(result)
                // if(result.errorMessage == false){
                console.log(result)
                addToast("Successfully Login", { appearance: 'success', autoDismiss: "true", autoDismissTimeout: 2000 });
                closeModel(false)
                // window.location = "/dashboard"
                // }else{
                //     console.log("logged error")
                // }


            })
            .catch(error => {
                console.log(error)
                addToast("username or password is incorrcet", { appearance: 'error', autoDismiss: "true", autoDismissTimeout: 2000 });
                // console.log("not ok")
            })


    }

    return (
        <>

            <DialogComponenet
                //   classes={{ root: classes.AccordionRoot }}
                handleClose={closeModel}
                openModel={openModel}
            //   title={`${
            //     GerminationData[CurrentTableData]
            //       ? GerminationData[CurrentTableData].lotId
            //         ? `Lot ID : ${GerminationData[CurrentTableData].lotId}`
            //         : "All Details"
            //       : "New Creation"
            //   }`}
            >
                welcomewelcomewelcomewelcome
            </DialogComponenet>

        </>
    )

}

export default AddRiderPopup