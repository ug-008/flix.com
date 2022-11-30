import * as React from 'react'
import Names from './NameForm';
import GenderAndRegion from './GenderWithRegionForm';
import AddressAndDoB from './AddressWithDoBForm';
import EthnicityAndOccupation from './EthnicityWithOccupationForm';
import NextOfKin from './NextOfKinForm';
import Insurance from './InsuranceForm';
import RegistrationComplete from './RegistrationComplete.jsx'
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import CustomConnector from '@components/StepConnector2'
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import Form from "@components/Form";
import TextField from '@components/TextField'
import {formValidation as formValidator} from './FormValidation2'
import handleOnDispatch from './_PatientStateHandler.js'
import Button from '@mui/material/Button';
import Post from '@https/Post.js'


export default function RegisterPatient(props) {
    const stepRefs = React.useRef([]);
    const [state, dispatch] = cacheState({
                                  key: 'RegisterPatient',
                                  cache: false,
                                  initState: {
                                    slide: 0,
                                    maxSlide: 6,
                                    activeStep: 0,
                                    next: false,
                                    showPrev: false,
                                    showNext: true,
                                    showSkip: false,
                                    complete: false,
                                    formValidator: formValidator,
                                    error: {
                                        at: null,
                                        msg: 'This field is required or you entered an invalid input',
                                    },
                                    data: {},
                                    steps: [
                                        'Personal Info',
                                        'Next Of Kin',
                                        'Insurance',
                                    ],
                                    progress: 0,
                                  },
                                  dispatchHandler: handleOnDispatch,
                              })
                              
    const {
        slide,
        maxSlide,
        activeStep,
        showPrev,
        showNext,
        showSkip,
        steps,
        syncData,
        progress} = state

    function handleFormEvent(event) {
        event.preventDefault()
        switch(event.target.name) {
            case 'prev':
            case 'next':
                dispatch({type: event.target.name})
                break
            case 'skip':
            case 'finish':
                !showNext ? dispatch({
                                type: 'handleSubmit',
                                httpPost: (valid)=> {
                                    if(syncData) {
                                        Post('/posts', {
                                            body: syncData,
                                            onSuccess: (msg) => {
                                                notify.show({
                                                    msg: 'Successful!!!',
                                                })
                                                dispatch({type: 'complete'})
                                            },
                                            onFailure: (error)=> {
                                                notify.show({
                                                    type: 'error',
                                                    msg: error.message,
                                                })
                                            },
                                        })
                                    }
                                }
                            }) : dispatch({type: 'skip'})
                break
        }

    }

    return(
        <div className='RegisterPatient-root'>
            <h2 className='Title'>Register Patient</h2>
            <Stepper
                alternativeLabel
                activeStep={activeStep}
                connector={
                    <CustomConnector
                        stepRefs={stepRefs}
                        progress={progress}
                        activeStep={activeStep}
                    />
                } >

                { steps.map((slide, index)=> {
                    return(
                        <Step key={index} ref={e=> stepRefs.current[index] = e }>
                            <StepLabel style={{color: 'var(--font)'}}>
                                <span style={{opacity: (activeStep==index)? 1 : 0}}>
                                    {slide}
                                </span>
                            </StepLabel>
                        </Step>
                    )
                })}
            </Stepper>
            <form onSubmit={handleFormEvent}>
                <div className='Step-container'>
                    <Form name='Names-form' {...state}>
                        <TextField name='surname' required />
                        <TextField name='firstName' required />
                        <TextField name='otherName' />
                    </Form>
                    <GenderAndRegion
                        index={1}
                        dispatch={dispatch}
                        {...state} />
                    <AddressAndDoB
                        index={2}
                        dispatch={dispatch}
                        {...state} />
                    <EthnicityAndOccupation
                        index={3}
                        dispatch={dispatch}
                        {...state} />
                    <NextOfKin
                        index={4}
                        dispatch={dispatch}
                        {...state} />
                    <Insurance
                        index={5}
                        dispatch={dispatch}
                        {...state} />
                    <RegistrationComplete
                        index={maxSlide}
                        dispatch={dispatch}
                        {...state} />
                </div>
                { (showPrev || showNext || showSkip) &&
                    <div className='Step-action'>
                        {showPrev &&
                            <Button
                                name='prev'
                                onClick={handleFormEvent}
                                startIcon={<KeyboardDoubleArrowLeftIcon />}>Back</Button>}
                        {showNext &&
                            <Button
                                name='next'
                                onClick={handleFormEvent}
                                endIcon={<KeyboardDoubleArrowRightIcon />}
                                style={{float: 'right'}} >Next</Button>}
                        {!showNext &&
                            <Button
                                name='finish'
                                onClick={handleFormEvent}
                                endIcon={<CheckCircleIcon style={{color: 'green'}} />}
                                style={{float: 'right'}} >Finish</Button>}
                        {showSkip &&
                            <Button
                                name='skip'
                                onClick={handleFormEvent}
                                endIcon={<KeyboardDoubleArrowRightIcon />}
                                style={{float: 'right'}} >Skip</Button>}
                    </div>
                }
            </form>
        </div>
    )
}