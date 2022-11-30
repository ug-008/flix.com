import * as React from 'react';
import Slide from '@mui/material/Slide';
import {InputField} from '@components/InputField'
import {SelectOption} from "@components/SelectOption";
import {CalendarOption} from "@components/CalendarOption";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormHelperText from '@mui/material/FormHelperText';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import formController from './FormController.js';

export default function GenderWithRegionForm({index, dispatch, ...options}) {
    const {
        mount,
        direction,
        handleOnChange,
        error,
        data,
        } = formController({index,
                            ...options,
                            onMount: function({mount}){
                                if(mount)
                                    dispatch({type: 'progress', progress: 30})
                            },
                            dispatch})

    return(
        <Slide direction= {direction} timeout={500} in={mount} mountOnEnter unmountOnExit>
            <div className="Slide-container Custom-scroll">
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'space-around',
                        paddingTop: '10px'
                    }}>
                    <FormControl error={error.at?.includes('gender')}>
                        <FormLabel>Gender</FormLabel>
                        <RadioGroup
                            name="gender"
                            value={data.gender||""}
                            onChange={handleOnChange} >
                            <FormControlLabel value="female" control={<Radio />} label="Female" />
                            <FormControlLabel value="male" control={<Radio />} label="Male" />
                            <FormControlLabel value="other" control={<Radio />} label="Other" />
                        </RadioGroup>
                    </FormControl>
                    <FormControl error={error.at?.includes('maritalStatus')}>
                        <FormLabel>Marital Status</FormLabel>
                        <RadioGroup
                            name="maritalStatus"
                            value={data.maritalStatus||""}
                            onChange={handleOnChange} >
                            <FormControlLabel value="single" control={<Radio />} label="Single" />
                            <FormControlLabel value="married" control={<Radio />} label="Married" />
                            <FormControlLabel value="widow" control={<Radio />} label="Widow(er)" />
                            <FormControlLabel value="divorced" control={<Radio />} label="Divorced" />
                        </RadioGroup>
                    </FormControl>
                    <FormControl error={error.at?.includes('religion')}>
                        <FormLabel>Religion</FormLabel>
                        <RadioGroup
                            name="religion"
                            value={data.religion||""}
                            onChange={handleOnChange} >
                            <FormControlLabel value="muslim" control={<Radio />} label="Muslim" />
                            <FormControlLabel value="christian" control={<Radio />} label="Christian" />
                            <FormControlLabel value="others" control={<Radio />} label="Others" />
                        </RadioGroup>

                    </FormControl>
                </div>
                { (error.at?.includes('gender') || error.at?.includes('maritalStatus') || error.at?.includes('religion'))&&
                    <span
                        style={{
                            color: 'red',
                            textAlign: 'center',
                            padding: '20px',
                        }}>
                        All selection are required*
                    </span>
                }
            </div>
        </Slide>
    )
}