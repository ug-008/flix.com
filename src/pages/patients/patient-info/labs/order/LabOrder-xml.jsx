import * as React from 'react';
import {TextField} from "@mui/material";
import Radio from '@mui/material/Radio';
import Checkbox from '@mui/material/Checkbox';
import LoadingButton from '@mui/lab/LoadingButton';
import SendIcon from '@mui/icons-material/Send';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import Post from "../../../../../https/Post.js"
import labOrderCallback from './LabOrder-state.js'
import './LabOrder-style.css'
import moment from 'moment'

import {Labs} from '../Laboratory-list.js'


function LabOrder({cacheKey='LabOrder', height}) {

    const [state, dispatch]= cacheState({
                                key: cacheKey,
                                cache: false,
                                initState: {
                                    urgency: 'normal',
                                    popularLabs: Labs,
                                    popularLabPicker: {},
                                    moreLabs: '',
                                    loading: false,
                                    newLabs: [],
                                },
                                dispatchHandler: labOrderCallback,
                            });

    return(
        <div className='LabOrder-main' >
            <div className='LabOrder-scroll Custom-scroll' style={{maxHeight: `${height - 50}px`}}>
                <div className='Request-time' >
                    <div className='Time' >
                        Lab Request &lt;&lt;{moment().toString()}&gt;&gt;
                    </div>
                    <div className='Urgency-root' style={{display: 'flex'}} >
                        <span style={{
                                display: 'flex',
                                alignItems: 'center',
                                padding: '0 10px',
                                color: 'var(--primary)'
                              }}
                        >
                            Urgency
                        </span>
                        <RadioGroup
                            row
                            onChange={(e)=>
                                dispatch({
                                    type: 'urgency',
                                    value: e.target.value
                                })
                            }
                            value={state.urgency}>
                            <FormControlLabel
                                value="normal"
                                control={<Radio />}
                                label="Normal" />
                            <FormControlLabel
                                value="urgent"
                                control={<Radio />}
                                label="Urgent" />
                            <FormControlLabel
                                value="very-urgent"
                                control={<Radio />}
                                style={{width: '120px'}}
                                label="Very Urgent" />
                        </RadioGroup>
                    </div>
                </div>
                {state.popularLabs.length > 0 && (
                    <>
                        <div className='Note'>
                            POPULAR LAB
                        </div>
                        <div className='Popular-labs Custom-scroll' style={{maxHeight: `${height*.35}px`}}>
                            {
                                state.popularLabs.slice(0, 30).map((item, pos, self)=> {
                                    return(
                                        <FormControlLabel
                                            key={pos}
                                            label={item.text}
                                            control={
                                                <Checkbox
                                                    checked={state.popularLabPicker[pos]?.checked||false}
                                                    id={`BasicChecker-${pos}`}
                                                    icon={<BookmarkBorderIcon />}
                                                    checkedIcon={<BookmarkIcon />}
                                                    onChange={(e, checked)=>
                                                        dispatch({
                                                            pos,
                                                            text: item.text,
                                                            type: 'popularLabPicker',
                                                            checked
                                                        })
                                                    }/>
                                            }
                                            labelPlacement="end"
                                        />
                                    )
                                })
                            }
                        </div>
                    </>
                )}
                <div style={{display: 'flex', flexDirection: 'column'}}>
                    <div className='Note' >
                        <span>
                            ADDITIONAL LAB
                            (Multiple clinical indicators should be separated with comma)
                        </span>
                    </div>
                    <div style={{display: 'flex', borderBottom:'1px solid var(--border)', padding: '10px 5px 10px 0'}}>
                        <TextField
                            multiline
                            minRows={1}
                            maxRows={3}
                            variant='outlined'
                            className='Custom-scroll'
                            value={state.moreLabs}
                            onChange={(e)=>
                                dispatch({
                                    type: 'moreLabs',
                                    text: e.target.value,
                                })
                            }
                            placeholder='Clinical indicators'
                            sx={{
                                flex: 1,
                                "& .MuiOutlinedInput-root , ": {
                                    "fieldset": {
                                        borderWidth: '0'
                                    },
                                    "&.Mui-focused fieldset": {
                                        borderWidth: '0 !important'
                                    },
                                }
                            }}
                            size='small' />
                    </div>
                    {state.newLabs?.length > 0 ? (
                        <div className='LabOrder-bookmarks'>
                            <div className='Note' style={{padding: '2px 10px'}} >
                                <span> Confirm Your Order </span>
                                <LoadingButton
                                    loading={state.loading}
                                    size="small"
                                    endIcon={<SendIcon />}
                                    loadingPosition="end"
                                    onClick={(e)=> {
                                        e.preventDefault();
                                        Post('/posts', {
                                            body: {
                                                labs: state.newLabs,
                                            },
                                            loading: ()=>
                                                dispatch({type: 'loading', load: true}),
                                            onSuccess: (msg) => {
                                                notify.show({type: 'success', text:'Request successful'})
                                                dispatch({type: '__reset__'})
                                            },
                                            onFailure: (error)=> {
                                                notify.show({type: 'error', text: 'An error occurred'})
                                            },
                                            onComplete: ()=> dispatch({type: 'loading', load: false})
                                        })
                                    }}
                                    style={{
                                        margin: '0 15px 0 auto',
                                        textTransform: 'none',
                                        fontSize: '1rem',
                                        background: !state.loading && 'blue',
                                        color: !state.loading ? 'var(--font)':'grey',
                                    }}
                                    variant="contained"
                                >
                                    {!state.loading? 'Send':'Sending'}
                                </LoadingButton>
                            </div>
                            <div style={{ display: 'flex', flexWrap: 'wrap'}}>
                                {
                                    state.newLabs?.map((text, i)=> {
                                        return(
                                            <span key={`${text}`}
                                                  style={{
                                                        padding: '5px 10px 5px 15px',
                                                        margin: '5px 5px',
                                                        border: '1px solid var(--border)',
                                                        borderRadius: '20px',
                                                        }} >
                                                {text}
                                                <span
                                                    style={{
                                                        fontSize: '.8rem',
                                                        padding: '5px 5px',
                                                        background:'var(--ui)',
                                                        filter: 'brightness(120%)',
                                                        marginLeft: '10px',
                                                        borderRadius: '10px',
                                                        cursor: 'pointer'
                                                    }}
                                                    onClick={(e)=>
                                                        dispatch({
                                                            type: 'deleteLab',
                                                            text: text
                                                        })
                                                    } >
                                                    &#128473;
                                                </span>
                                            </span>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    ):
                        <div style={{
                            opacity: .5,
                            padding: '30px 0',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'}} >
                            No Lab request
                        </div>
                    }
                </div>
             </div>
        </div>
    )
}

export default LabOrder