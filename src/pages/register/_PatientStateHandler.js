import {validatePatientRegistration as formValidation} from './FormValidation'

export default function handleOnDispatch(state, {type, ...action}) {
    switch(type) {
        case 'next':
            var {slide, next, syncLogs} = state
            if(syncLogs) {
                // syncLogs must be empty before we move to the next slide
                next = _emptyObject(syncLogs)
                console.log(syncLogs)
            }
            return {
                ...state,
                slide: next ? (slide + 1) : slide,
            }
        case 'prev':
            var {slide} = state
            return {
                ...state,
                slide: slide - 1,
                next: false,
            }

        case 'skip':
            return {
                ...state,
                showSkip: false,
                slide: state.slide + 1,
                next: true,
                showPrev: state.slide > 0,
            }

        case 'complete':
            return{
                ...state,
                showPrev: false,
                showSkip: false,
                showNext: false,
                activeStep: state.activeStep + 1,
                slide: state.maxSlide,
                next: true
            }

        case 'handleSubmit':
            const o = formValidation(state)
            if(o)
                action.httpPost(o)
            return{...state}

        case 'activeStep':
            return {
                ...state,
                activeStep: action.value,
                progress: action.progress,
                showSkip: action.skip || false
            }

        case 'progress':
            return {
                ...state,
                progress: action.progress
            }

        case 'textChangeListener':
        case 'focusChangeListener':
            return {
                ...state,
                ...action,
            }
        case 'handleOnChange':
            return {
                ...state,
                data: state.data
            }
    }
}
