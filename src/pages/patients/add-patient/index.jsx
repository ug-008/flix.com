import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import RelativeForm from "./RelativeForm";
import PIIForm from "./PIIForm";
import {data} from "./Data.js";
import Post from "../../../https/Post.js"
import "./NewPatient.css";

export default function NewPatient({style, sx}) {

    const handleScroll = (e) => {
        setScrollY(e.target.scrollTop);
    }

    const [scrollY, setScrollY] = React.useState(0);

    const handleOnSubmit = (e) => {
        e.preventDefault();
        Post('/posts', {
            body: data,
            onSuccess: (msg) => {
                console.log(msg);
            },
            onFailure: (error)=> {
                console.log(error.message)
            }
        })
    }

    return (
        <Card sx={sx}
              style={{...style,}}
              className='NewPatient' >
            <CardHeader title="Add New Patient"
                        subheaderTypographyProps={{
                            sx:{
                                color: 'var(--font)',
                                fontSize: '0.7rem',
                                marginTop: '-2.5px'
                            }
                        }}
                        subheader={"Hospital Registration"}
                        titleTypographyProps={{ sx:{ fontSize: '1.2rem', }}}
                        avatar={
                            <Avatar
                                sx={{
                                    bgcolor: 'var(--accent-bg)',
                                    color: 'var(--accent-text) !important'
                                }}
                                aria-label="recipe">
                                R
                            </Avatar>
                        }
            />
            <CardContent >
                <div
                    className='Caution-flag'
                    style={{boxShadow: scrollY > 0 ? '0 4px 4px -2px var(--shadow)':""}}>
                    <small style={{ color: '#FF0000'}} >
                        Any input field marked with asterisk(*) must be filled
                    </small>
                </div>
                <form className='NewPatient-form' onSubmit={handleOnSubmit} >
                    <div
                        onScroll={handleScroll}
                        className='Custom-scroll NewPatientFormInput-container' >
                        <PIIForm data={data} />
                        <RelativeForm data={data}/>
                    </div>
                    <div className="Submit-container">
                        <button className="x-submit-new-patient" >
                            SUBMIT
                        </button>
                    </div>
                </form>
            </CardContent>
        </Card>
    );
}