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

export default function NextOfKin({index, dispatch, ...options}) {
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
                                    dispatch({type: 'activeStep', value: 1, progress: 100})
                            },
                            dispatch})

    return(
        <Slide direction= {direction} timeout={500} in={mount} mountOnEnter unmountOnExit>
            <div className="Slide-container Custom-scroll" >
                <InputField label='Next of kin'
                            name='nokName'
                            value={data.nokName}
                            error={error.at?.includes('nokName')}
                            helperText={error.at?.includes('nokName') ? error.msg : null}
                            onChange={handleOnChange}
                            sx={{marginTop: '10px'}}

                            placeholder='Full name'
                            required />
                <InputField label='Relationship'
                            name='nokRelationship'
                            value={data.nokRelationship}
                            error={error.at?.includes('nokRelationship')}
                            helperText={error.at?.includes('nokRelationship') ? error.msg : null}
                            required
                            onChange={handleOnChange} />
                <InputField label='Phone Number'
                            name='nokPhoneNumber'
                            value={data.nokPhoneNumber}
                            error={error.at?.includes('nokPhoneNumber')}
                            helperText={error.at?.includes('nokPhoneNumber') ? error.msg : null}
                            required
                            onChange={handleOnChange} />
                <InputField label='House Address'
                            name='nokAddress'
                            value={data.nokAddress}
                            error={error.at?.includes('nokAddress')}
                            helperText={error.at?.includes('nokAddress') ? error.msg : null}
                            placeholder='(Optional)'
                            onChange={handleOnChange} />
            </div>
        </Slide>
    )
}