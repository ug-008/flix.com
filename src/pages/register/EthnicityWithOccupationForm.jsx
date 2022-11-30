import * as React from 'react';
import Slide from '@mui/material/Slide';
import {InputField} from '@components/InputField'
import {SelectOption} from "@components/SelectOption";
import {CalendarOption} from "@components/CalendarOption";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import formController from './FormController.js';

export default function EthnicityWithOccupationForm({index, dispatch, ...options}) {
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
                                    dispatch({type: 'activeStep', value: 0, progress: 75})
                            },
                            dispatch})

    return(
        <Slide direction= {direction} timeout={500} in={mount} mountOnEnter unmountOnExit>
            <div className="Slide-container Custom-scroll" >
                <InputField label='Occupation'
                            name='occupation'
                            error={error.at?.includes('occupation')}
                            helperText={error.at?.includes('occupation') ? error.msg : null}
                            sx={{marginTop: '10px'}}
                            onChange={handleOnChange}
                            value={data.occupation}
                            required />
                <InputField label='Place of origin'
                            name='placeOfOrigin'
                            error={error.at?.includes('placeOfOrigin')}
                            helperText={error.at?.includes('placeOfOrigin') ? error.msg : null}
                            onChange={handleOnChange}
                            value={data.placeOfOrigin}
                            required />
                <InputField label='Ethnicity'
                            name='ethnicity'
                            error={error.at?.includes('ethnicity')}
                            helperText={error.at?.includes('ethnicity') ? error.msg : null}
                            required
                            value={data.ethnicity}
                            onChange={handleOnChange} />
            </div>
        </Slide>
    )
}