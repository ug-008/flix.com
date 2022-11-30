import * as React from 'react';
import Slide from '@mui/material/Slide';
import {InputField} from '@components/InputField'
import TextField from '@components/TextField'
import {SelectOption} from "@components/SelectOption";
import {CalendarOption} from "@components/CalendarOption";
import Form from "@components/Form";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import formController from './FormController.js';

export default function Names({index, state}) {
//     const fieldNames = ['surname', 'firstName', 'otherName']
//     const controller = formController({
//                             index,
//                             ...options,
//                             onMount: function({mount}){
//                                 if(mount)
//                                     dispatch({type: 'progress', progress: 0})
//                             },
//                             dispatch
//                         })
    console.log(state)
    return(
        <Form name='Names-form' {...state}>
            <TextField name='surname' required />
        </Form>

//         <Slide
//             in={controller.mount}
//             timeout={500}
//             direction={controller.direction}
//             mountOnEnter
//             unmountOnExit >
//             <div className="Slide-container Custom-scroll" >
//                 <TextField name='surname' {...controller} required />
//                 <TextField name='firstName' {...controller} required />
//                 <TextField name='otherName' {...controller} required />
//             </div>
//         </Slide>
    )
}