import * as React from 'react';
import {TextField} from "@mui/material";
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import {InputField} from "../../../components/InputField";
import BookmarkIcon from '@mui/icons-material/Bookmark';
import {Labs} from './Laboratory-list.js'
import './Laboratory.css';


function BasicChecker({label}) {
    return(
        <div>
            <FormControlLabel
                label={label}
                className='Laboratory-control'
                control={ <Checkbox icon={<BookmarkBorderIcon />}
                                    checkedIcon={<BookmarkIcon />}/>}
                labelPlacement="end" />
        </div>
    )
}

export default function Laboratory(props) {
    const [costumeLab, setCustomLab] = React.useState();

    const handleOnChange = (event) => {
        const value = event.target.value;
        const _value= value.split(',').filter((entry) => {
            return entry.trim();
        })
        setCustomLab(_value)
    }

    return(
        <div className='Laboratory-main'>
            <div className='Laboratory-order Custom-scroll'>
                <div className='Laboratory-request'>
                    <div className='Requester-details' >
                        <div className='title'>
                            Requester Details
                        </div>
                        <div style={{display: 'flex', flexDirection: 'column'}}>
                            <div className='Row-base'>
                                <InputField label='Date'
                                            name='date'
                                            sx={{flex: .5}}
                                            required />
                            </div>
                            <InputField label='Name'
                                        name='name'
                                        required />
                            <InputField label='Organisation name'
                                        name='organisation'
                                        required />
                            <div className='Row-base'>
                                <InputField label='SHID'
                                            name='shid'
                                            required />
                                <InputField label='Telephone'
                                            sx={{flex: .7}}
                                            name='telephone'
                                            required />
                            </div>
                        </div>
                    </div>
                    <div style={{borderLeft: '1px solid var(--border)', margin: '5px 0'}} />
                    <div className='Laboratory-details' >
                        <div className='title'>
                            Lab Details
                        </div>
                        <div style={{display: 'flex', flexDirection: 'column'}}>
                            <div className='Row-base'>
                                <InputField label='Lab Registration No'
                                            name='date'
                                            sx={{flex: .5, marginLeft:'auto'}}
                                            required />
                            </div>
                            <div className='Row-base'>
                                <InputField label='Facility name'
                                            name='facility_name'
                                            required />
                                <InputField label='Facility no'
                                            sx={{flex: .7}}
                                            name='facility_no'
                                            required />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='Note'>
                    Test will only be performed at the laboratory, if all fields above are filled in correctly and signed below by the ordering staff
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center'}} >
                    {
                        Labs.slice(0, 20).map((entry, i)=> {
                            return(
                                <BasicChecker key={entry.name} label={entry.name}/>
                            )
                        })
                    }
                </div>
                <div style={{display: 'flex', flexDirection: 'column'}}>
                    <div className='Note' >
                        <span>Additional Test - </span>
                        <span style={{color: 'var(--highlight)'}}>
                            Multiple clinical indicators should be separated with comma
                        </span>
                    </div>
                    <div style={{display: 'flex', borderBottom: '2px solid var(--border)', padding: '5px 5px 5px 0'}}>
                        <TextField
                            multiline
                            minRows={1}
                            maxRows={3}
                            variant='outlined'
                            onChange={handleOnChange}
                            placeholder='Clinical indicators'
                            sx={{
                                flex: 1,
                                "& .MuiOutlinedInput-root , ": {
                                    "fieldset": {
                                        borderWidth: '0'
                                    },
                                    "&.Mui-focused fieldset": {
                                        borderWidth: '0 !important'
                                    },
                                }
                            }}
                            size='small' />
                        <Button
                            variant="contained"
                            color='primary'
                            onClick={()=> { } }
                            startIcon={<AddCircleOutlineIcon />}>
                            Add
                        </Button>
                    </div>
                </div>
            </div>
            <div className='Laboratory-bookmarks'>
                <div style={{
                        marginLeft: 5,
                        padding: '10px 0 5px 0',
                        border: '2px solid var(--border)',
                        borderRadius: '5px',
                        textAlign: 'center',
                    }} > Labs Order </div>
                <div style={{ display: 'flex', flexWrap: 'wrap'}}>
                    {
                        costumeLab?.map((text, i)=> {
                            return(
                                <span key={`${text}`}
                                      style={{
                                            padding: '5px 20px',
                                            margin: '5px 5px',
                                            border: '1px solid var(--border)',
                                            borderRadius: '20px',
                                            }} >
                                    {text}
                                </span>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )

}