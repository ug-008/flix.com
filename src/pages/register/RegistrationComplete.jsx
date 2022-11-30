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

export default function RegistrationComplete({index, dispatch, ...options}) {
    const {
        mount,
        direction,
        handleOnChange,
        error,
        data,
        } = formController({index,
                            ...options,
                            onMount: function({mount, next}){

                            },
                            dispatch})
    return(
        <Slide direction= {direction} timeout={500} in={mount} mountOnEnter unmountOnExit>
            <div className="Slide-container Custom-scroll" >
                <div
                    style={{
                        fontSize: '1.2rem',
                        padding: '50px',
                        textAlign: 'center',
                        background: 'red',
                        opacity: .5,
                    }}>
                    <h3 style={{margin: '0 0 5px 0'}}>
                        Thank You
                    </h3>
                    <span>click &lt;&lt;Done&gt;&gt; to submit this form</span>
                </div>
            </div>
        </Slide>
    )
}