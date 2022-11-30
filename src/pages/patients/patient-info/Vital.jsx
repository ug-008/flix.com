import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import {InputField} from "../../../components/InputField";
import DownloadOutlinedIcon from '@mui/icons-material/DownloadOutlined';
import HealthAndSafetyOutlinedIcon from '@mui/icons-material/HealthAndSafetyOutlined';
import CircularProgress from '@mui/material/CircularProgress'
import BasicTable from '../../../components/BasicTable';
import {ColumnProperties} from './Vital-history.js'
import Post from "../../../https/Post.js"
import {Get} from "../../../https/Get.js"
import moment from 'moment'
import './Vital.css'


function demoData(date, bp, temperature, pulse, weight, height, sugarLevel) {
    return { date, bp, temperature, pulse, weight, height, sugarLevel };
}

const rows = [
    demoData('05/01/2022', '132/80', 32.3, 125.335, 90.3, 1.54, 120),
    demoData('09/12/2021', '', 32.3, 125.335, 90.3, 1.54, 120),
    demoData('06/03/2020', '132/80', 32.3, 125.335, 90.3, 1.54, 120),
    demoData('01/08/2019', '132/80', 32.3, 125.335, 90.3, 1.54, 120),
    demoData('02/10/2018', '132/80', 32.3, 125.335, 90.3, 1.54, 120),
    demoData('10/09/2014', '122/89', 30.1, 125.335, 90.3, 1.54, 120),
];

export default function Vital(props) {

    const [open, setOpen] = React.useState(false);

    const [loading, setLoading] = React.useState( );

    const [vitalCheck, setVitalCheck] = React.useState({});

    const [allVitalChecks, setAllVitalChecks] = React.useState([])

    const handleOnChange = (event) => {
        const updateData = {...vitalCheck};
        const value = event.target.value.trim();
        if(value)
            updateData[event.target.name] = event.target.value;
        else
            delete updateData[event.target.name]
        setVitalCheck(updateData);
    }

    React.useEffect(()=> {
        if(vitalCheck.date) {
            Post('/posts', {
                body: vitalCheck,
                onSuccess: (msg) => {
                    setAllVitalChecks([vitalCheck, ...allVitalChecks])
                    setVitalCheck({})
                },
                onFailure: (error)=> {
                    console.log(error.message)
                }
            })
        }
    }, [vitalCheck.date])

    const getVitalCalendar = ( ) => {
        Get('/todos', {
            loading: ( )=> {
                setLoading(0)
            },
            onSuccess: (msg) => {
                setLoading(1)
                setAllVitalChecks(rows) // replace rows with json data #msg
            },
            onFailure: (error)=> {
                setLoading(-1)
            }
        })
    }

    React.useEffect(()=> getVitalCalendar(), [ ])

    return(
        <div className='Vital-root'>
            <div className='New-vital' >
                <h5 style={{filter: 'brightness(95%)'}}>
                    Vital signs measures the body’s basic functions
                </h5>
                <p style={{width: '60%', textAlign: 'center', filter: 'brightness(90%)'}}>
                    These measurements are taken to help assess the patient’s
                    general physical health, give clues to possible diseases,
                    and show progress toward recovery
                </p>
                <Button
                    variant="contained"
                    color='primary'
                    onClick={()=> setOpen(true)}
                    startIcon={<HealthAndSafetyOutlinedIcon />}>
                    Check Vitals
                </Button>
                <Modal open={open} >
                    <Box className='Vital-check Vitals-modal' >
                        <div
                            className='Close-btn'
                            onClick={()=> {
                                setVitalCheck({});
                                setOpen(false)
                            }}>
                            x
                        </div>
                        <div className='Vitals-fields' >
                            <span style={{textAlign: 'center'}}> Vital Check </span>
                            <div className='Row-vitalCheck'>
                                <InputField name='bp' label='Blood Pressure' value={vitalCheck.bp} onChange={handleOnChange} />
                                <InputField label='Temperature' name='temperature' value={vitalCheck.temperature} onChange={handleOnChange} />
                            </div>
                            <div className='Row-vitalCheck'>
                                <InputField label='Heart Pulse' name='pulse' value={vitalCheck.pulse} onChange={handleOnChange} />
                                <InputField label='Respiratory Rate' name='respiratory' value={vitalCheck.respiratory} onChange={handleOnChange} />
                            </div>
                            <InputField label='O2 Saturation Level' name='o2' value={vitalCheck.o2} onChange={handleOnChange} />
                            <div className='Row-vitalCheck' >
                                <InputField label='Weight' name='weight' value={vitalCheck.weight} onChange={handleOnChange} />
                                <InputField label='Height' name='height' value={vitalCheck.height} onChange={handleOnChange} />
                            </div>
                            <Button
                                variant="contained"
                                color='primary'
                                sx={{marginTop: '25px',}}
                                disabled={Object.keys(vitalCheck).length <= 0}
                                onClick={(e)=> {
                                    setOpen(false)
                                    setVitalCheck({...vitalCheck, date: moment().toString(), })
                                }}>
                                Done
                            </Button>
                        </div>
                    </Box>
                </Modal>
            </div>
            <span className='Title-note'>
                Vital check calendar
            </span>
            <div className='History-vital DataView'>
                {loading== -1 && (
                    <Button
                        variant="outline"
                        className='Retry-btn'
                        endIcon={<DownloadOutlinedIcon />}
                        onClick = {getVitalCalendar} >
                        Retry
                    </Button>
                )}
                {loading== 0 && (<CircularProgress size='1rem' />)}
                {loading== 1 && (<BasicTable columnProps={ColumnProperties} dataSet={allVitalChecks} isEmpty='No History Found'/>)}
            </div>
        </div>
    )
}
