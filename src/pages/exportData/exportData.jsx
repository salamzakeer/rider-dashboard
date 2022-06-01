import Layout from "../../components/layout/Navbar"
import { makeStyles } from "@material-ui/core"
import { createStyles } from "@material-ui/core"
import React, { useState, useEffect } from "react"
import Typography from '@mui/material/Typography';
// import Spreadsheet from "react-spreadsheet";
import CsvDownloader from 'react-csv-downloader';
import axios from '../../axios';
import CircularProgress from '@mui/material/CircularProgress';

const useStyles = makeStyles(
    () =>
        createStyles({
            dataTable: {
                display: "flex",
                maxWidth: "500px",
                margin: "0 auto",
                justifyContent: "space-between",
                alignItems: "center",
                flexWrap: "wrap"
            },
            btn: {
                backgroundColor: "#5016BF",
                height: "3.3rem",
                border: "1px solid #ccc",
                color: "#fff",
                borderRadius: "24px",
                width: "150px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }
        }),
    { withTheme: true }
)

const LndCsvDataHeader = [
    {
        id: 'id',
        displayName: 'id'
    },
    {
        id: 'DCAFiletype',
        displayName: 'DCAFiletype'
    },
    {
        id: 'DCAName',
        displayName: 'DCAName'
    },
    {
        id: 'DCACode',
        displayName: 'DCACode'
    },
    {
        id: 'State',
        displayName: 'State'
    },
    {
        id: 'Costcode',
        displayName: 'Costcode'
    },
    {
        id: 'UO',
        displayName: 'UO'
    },
    {
        id: 'LAName',
        displayName: 'LAName'
    },
    {
        id: 'billno',
        displayName: 'billno'
    },
    {
        id: 'SAN',
        displayName: 'SAN'
    },
    {
        id: 'Owner1',
        displayName: 'Owner1'
    },
    {
        id: 'Owner2',
        displayName: 'Owner2'
    },
    {
        id: 'Owner1NRIC',
        displayName: 'Owner1NRIC'
    }, {
        id: 'Owner2NRIC',
        displayName: 'Owner2NRIC'
    },
    {
        id: 'PropAddr1',
        displayName: 'PropAddr1'
    },
    {
        id: 'PropAddr2',
        displayName: 'PropAddr2'
    },
    {
        id: 'PropAddr3',
        displayName: 'PropAddr3'
    },
    {
        id: 'PropAddr4',
        displayName: 'PropAddr4'
    }, {
        id: 'Roadname',
        displayName: 'Roadname'
    },
    {
        id: 'Taman',
        displayName: 'Taman'
    },
    {
        id: 'PostCode',
        displayName: 'PostCode'
    },
    {
        id: 'Suburb',
        displayName: 'Suburb'
    },
    {
        id: 'MailName1',
        displayName: 'MailName1'
    },
    {
        id: 'MailName2',
        displayName: 'MailName2'
    },
    {
        id: 'MailAdd1',
        displayName: 'MailAdd1'
    },
    {
        id: 'MailAdd2',
        displayName: 'MailAdd2'
    },
    {
        id: 'MailAdd3',
        displayName: 'MailAdd3'
    },
    {
        id: 'MailAdd4',
        displayName: 'MailAdd4'
    },
    {
        id: 'Class',
        displayName: 'Class'
    },
    {
        id: 'Range',
        displayName: 'Range'
    },
    {
        id: 'Arrears',
        displayName: 'Arrears'
    },
    {
        id: 'CurrentBalance',
        displayName: 'CurrentBalance'
    },
    {
        id: 'Balance_at_05_03_2022',
        displayName: 'Balance_at_05_03_2022'
    },
    {
        id: 'AdministrationFee',
        displayName: 'AdministrationFee'
    },
    {
        id: 'LODFee',
        displayName: 'LODFee'
    },
    {
        id: 'TotalPayableAmount',
        displayName: 'TotalPayableAmount'
    },
    {
        id: 'BATCH',
        displayName: 'BATCH'
    },
    {
        id: 'Occupier',
        displayName: 'Occupier'
    },
    {
        id: 'OwnernameCorrect',
        displayName: 'OwnernameCorrect'
    },
    {
        id: 'specifyCorrectOwnername',
        displayName: 'specifyCorrectOwnername'
    },
    {
        id: 'OwnertelNo',
        displayName: 'OwnertelNo'
    },
    {
        id: 'OccupierNationality',
        displayName: 'OccupierNationality'
    },
    {
        id: 'PropertyUsage',
        displayName: 'PropertyUsage'
    },
    {
        id: 'PropertyType',
        displayName: 'PropertyType'
    },
    {
        id: 'DRCode',
        displayName: 'DRCode'
    },
    {
        id: 'Remarks',
        displayName: 'Remarks'
    },
    {
        id: 'TenantName',
        displayName: 'TenantName'
    },
    {
        id: 'TenantTelNo',
        displayName: 'TenantTelNo'
    },
    {
        id: 'Payment',
        displayName: 'Payment'
    },
    {
        id: 'status',
        displayName: 'status'
    },
    {
        id: 'image',
        displayName: 'image'
    },
    {
        id: 'created_at',
        displayName: 'created_at'
    },
    {
        id: 'updated_at',
        displayName: 'updated_at'
    },
]
const dataVacantArray = [
    {
        id: 'id',
        displayName: 'id'
    },
    {
        id: 'SEWACC',
        displayName: 'SEWACC'
    },
    {
        id: 'OWNER_NAME',
        displayName: 'OWNER_NAME'
    },
    {
        id: 'PROP_ADD',
        displayName: 'PROP_ADD'
    },
    {
        id: 'CURRENT_CLASS',
        displayName: 'CURRENT_CLASS'
    },
    {
        id: 'OWNER_NAME',
        displayName: 'OWNER_NAME'
    },
    {
        id: 'JobId',
        displayName: 'JobId'
    },
    {
        id: 'OccupiedOrVacant',
        displayName: 'OccupiedOrVacant'
    },
    {
        id: 'OccupiedOrVacantOthers',
        displayName: 'OccupiedOrVacantOthers'
    },

    {
        id: 'CommercialOrDomestic',
        displayName: 'CommercialOrDomestic'
    },
    {
        id: 'CommercialOrDomesticOthers',
        displayName: 'CommercialOrDomesticOthers'
    },
    {
        id: 'MeterConnectedOrNot',
        displayName: 'MeterConnectedOrNot'
    },
    {
        id: 'PropertyAddress',
        displayName: 'PropertyAddress'
    },
    {
        id: 'CommentbyFO',
        displayName: 'CommentbyFO'
    },
    {
        id: 'image',
        displayName: 'image'
    },
    {
        id: 'WatermeterNumber',
        displayName: 'WatermeterNumber'
    },

]
// const datas = [{
//     first: 'foo',
//     second: 'bar',
//     image: `=IMAGE("[https://dcaapi.moodfor.codes/images/image_lnd_1653538679063.png]")`
// }, {
//     first: 'foobar',
//     second: 'fooasasbar',
//     image: `=HYPERLINK("[https://dcaapi.moodfor.codes/images/image_lnd_1653538679063.png]")`
// }];
function Dashboard() {
    const style = useStyles()
    const [Loading, setLoading] = useState(false);
    const [LoadingVacant, setLoadingVacant] = useState(false);
    const [data, setData] = useState([]);
    const [dataVacant, setDataVacant] = useState([]);



    useEffect(() => {
        // console.log(axios.defaults.baseURL)
        axios.get('/lnds')
            .then(res => {
                // console.log(res.data)
                let dataFilterImage = [];
                dataFilterImage = res.data;
                if (dataFilterImage.length > 0) {
                    dataFilterImage.map((item, i) => (
                        item.image ?
                            dataFilterImage[i]["image"] = '=HYPERLINK("' + axios.defaults.baseURL + "/lnd/" + item.image + '")' : ""
                    ))
                    setData(dataFilterImage)
                    // console.log("working", dataFilterImage)
                    setLoading(true)
                }


            })
            .catch(error => {
                console.log(error)
                setLoading(true)
            })
        axios.get('/vacants')
            .then(res => {
                // console.log(res.data)
                let dataFilterImage = [];
                dataFilterImage = res.data;
                if (dataFilterImage.length > 0) {
                    dataFilterImage.map((item, i) => (
                        item.image ? dataFilterImage[i]["image"] = '=HYPERLINK("' + axios.defaults.baseURL + "/vacant/" + item.image + '")' : ""

                    ))
                    setDataVacant(dataFilterImage)
                    console.log("vacant", dataFilterImage)

                    setLoadingVacant(true)
                }

            })
            .catch(error => {
                // console.log(error)
                setLoadingVacant(true)
            })
    }, [])

    return (
        <Layout title="Export">
            <div className={style.dataTable} >
                <Typography variant="h5" > LND DATA</Typography>

                {/* {
                    Loading && */}
                <CsvDownloader filename="LND"
                    extension=".xlsx"
                    // image setup
                    // columns={columns}
                    // datas={datas}
                    // orginal
                    columns={LndCsvDataHeader}
                    datas={data}
                    text="DOWNLOAD"
                    suffix
                >
                    <button className={style.btn} > {Loading ? 'Download' : <CircularProgress color="inherit" />}
                    </button>
                </CsvDownloader>
                {/* } */}
            </div>

            <br />
            <div className={style.dataTable} >

                <Typography variant="h5" > VACANT DATA</Typography>
                {/* {LoadingVacant && */}
                <CsvDownloader filename="VACANT"
                    extension=".csv"
                    columns={dataVacantArray}
                    datas={dataVacant}
                    text="DOWNLOAD"
                    suffix
                >
                    <button className={style.btn}>{LoadingVacant ? 'Download' : <CircularProgress color="inherit" />}</button>
                </CsvDownloader>
                {/* } */}
            </div>
        </Layout>
    )
}
export default Dashboard
