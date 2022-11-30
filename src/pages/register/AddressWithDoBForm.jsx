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

export default function AddressWithDoB({index, dispatch, ...options}) {
    const {
        mount,
        direction,
        handleOnChange,
        focusChange,
        error,
        data,
        } = formController({index,
                            ...options,
                            onMount: function({mount}){
                                if(mount)
                                    dispatch({type: 'activeStep', value: 0, progress: 50})
                            },
                            dispatch})

    return(
        <Slide direction= {direction} timeout={500} in={mount} mountOnEnter unmountOnExit>
            <div className="Slide-container Custom-scroll" >
                <CalendarOption label='Date of birth'
                                name='dateOfBirth'
                                error={error.at?.includes('dateOfBirth')}
                                helperText={error.at?.includes('dateOfBirth') ? error.msg : null}
                                onChange={handleOnChange}
                                defaultValue={data.dateOfBirth}
                                required />
                <InputField label='House Address'
                            name='address'
                            error={error.at?.includes('address')}
                            helperText={error.at?.includes('address') ? error.msg : null}
                            onChange={handleOnChange}
                            onBlur={focusChange}
                            sx={{marginTop: '20px'}}
                            value={data.address}
                            required />
                <InputField label='Phone number'
                            name='phoneNumber'
                            error={error.at?.includes('phoneNumber')}
                            helperText={error.at?.includes('phoneNumber') ? error.msg : null}
                            onChange={handleOnChange}
                            onBlur={focusChange}
                            value={data.phoneNumber}
                            required />
                <InputField label='Email'
                            name='email'
                            value={data.email}
                            error={error.at?.includes('email')}
                            helperText={error.at?.includes('email') ? error.msg : null}
                            placeholder='(Optional)'
                            onBlur={focusChange}
                            onChange={handleOnChange} />
            </div>
        </Slide>
    )
}