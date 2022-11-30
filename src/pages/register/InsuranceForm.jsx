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

export default function InsuranceForm({index, dispatch, ...options}) {
    const {
        mount,
        direction,
        handleOnChange,
        error,
        data,
        } = formController({index,
                            ...options,
                            onMount: function({mount, next}){
                                if(mount){
                                    dispatch({type: 'activeStep', value: 2, progress: 100, skip: true})
                                }
                                else !next && dispatch({type: 'progress', progress: 0})
                            },
                            dispatch})

    return(
        <Slide direction= {direction} timeout={500} in={mount} mountOnEnter unmountOnExit>
            <div className="Slide-container Custom-scroll" >
                <div
                    style={{
                        fontSize: '1.2rem',
                        padding: '100px',
                        textAlign: 'center',
                        opacity: .5,
                    }}>
                    <h3 style={{margin: '0 0 5px 0'}}>
                        Insurance is optional
                    </h3>
                    <span>click &lt;&lt;Next&gt;&gt; to skip</span>
                </div>
            </div>
        </Slide>
    )
}