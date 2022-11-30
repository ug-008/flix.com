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
import reducer from './ReceiveLab-reducer.js'
import Button from '@mui/material/Button';
import Post from "../../../../https/Post.js"
import './ReceiveLab.css'
import moment from 'moment'


const demo = ['Malaria', 'Typhoid', 'Cough']

export default function ReceiveLabOrder(props) {
    const labId = "uuid-ansd-jdrb-snfj-lnsr"

    const [labs, setLabs] = React.useState(demo)

    // sessionStorage.removeItem(labId);
    var cache = sessionStorage.getItem(labId);

    if(cache)
        cache = JSON.parse(cache);
    else
        cache = {_default : reducer._default, confirm: []}

    const [confirm, setConfirm]= React.useState(cache.confirm)

    const [state, dispatch]= React.useReducer(
        (state, action)=>
            reducer._state(state, action, {confirm, setConfirm}),
        cache._default
    )

    const handleOnSubmit = (e) => {

    }

    React.useEffect(()=> dispatch({type: 'cache', id: labId}), [state])

    return(
        <div className='QuickLabs-main' >
            <div className='QuickLabs-scroll Custom-scroll' style={{maxHeight: `${props.height}px`}}>
                <div className='Request-time' >
                    <div className='Time' >
                        Timestamp &lt;&lt;{moment().toString()}&gt;&gt;
                    </div>
                </div>
                {labs.length > 0 && (
                    <>
                        <div className='Note'>
                            LAB REQUEST
                        </div>
                        <div className='Labs-root Custom-scroll' style={{maxHeight: `${props.height*.3}px`}}>
                            {
                                labs.map((item, pos, self)=> {
                                    var _ = confirm.filter((_item)=> _item.labItem===item)
                                    if(_.length > 0)
                                        _ = _[0].value
                                    else _ = '';
                                    return(
                                        <div key={pos} className='LabItem-root' >
                                            <div style={{
                                                    flex: 1,
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    padding: '0 15px',
                                                  }}
                                            >
                                                {item}
                                            </div>
                                            <RadioGroup
                                                row
                                                onChange={(e)=>
                                                    dispatch({
                                                        labItem: item,
                                                        type: 'confirm-checker',
                                                        value: e.target.value,
                                                        maxSize: labs.length
                                                    })
                                                }
                                                value = {_} >
                                                <FormControlLabel
                                                    value="accept"
                                                    control={<Radio size="small" />}
                                                    label="Accept" />
                                                <FormControlLabel
                                                    value="decline"
                                                    control={<Radio size="small"/>}
                                                    label="Decline" />

                                            </RadioGroup>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </>
                )}
                <div
                    className='Note'
                    style={{
                        padding: '5px 0',
                        borderWidth: '1px 0 0',
                        margin: '0 2px'
                    }}>
                    <Button
                        size="small"
                        style={{
                            width: '100%',
                            background: 'blue'
                        }}
                        onClick={handleOnSubmit}
                        >
                        FINISH
                    </Button>
                </div>
             </div>
        </div>
    )
}
