import * as React from 'react'
import { styled } from '@mui/material/styles';
import StepConnector, { stepConnectorClasses } from '@mui/material/StepConnector';
import $ from 'jquery';

export default function CustomConnector({progress, stepRefs, activeStep}) {

    React.useEffect(()=> {
        stepRefs.current.forEach((ref)=> {
            $(ref).find(`.${stepConnectorClasses.alternativeLabel}`)
                    .css({
                        top: '10px',
                        left: 'calc(-50% + 16px)',
                        right: 'calc(50% + 16px)',
                    })
        })
    }, [stepRefs.current[0]])

    React.useEffect(()=> {
        if(stepRefs.current[progress==100 ? activeStep:(activeStep + 1)]) {
            const ref = stepRefs.current[progress==100 ? activeStep:(activeStep + 1)]
            $(ref).find(`.${stepConnectorClasses.line}`)
                    .css({
                        height: '1px',
                        borderWidth: '0',
                        background: progress==0 ? 'grey':`linear-gradient(to right, var(--primary) ${progress}%, grey ${100 - progress}%)`,
                        opacity: progress==100 ? '.5':'1'
                    })

        }
    }, [progress, activeStep]);

    return (
        <StepConnector />
    )
}
