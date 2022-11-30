import * as React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import TuneIcon from '@mui/icons-material/Tune';
import Popover from '@mui/material/Popover';
import './SearchBase.css'

const borderStyleOpen = {
    borderRadius: '4px 4px 0 0',
}

const borderStyleClose = {
    borderRadius: '4px',
}

export default function SearchBase({ elevation, flex, style }) {
    const anchorRef = React.useRef();

    const [open, setOpen] = React.useState(false);

    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(anchorRef.current);
        setOpen(!open)
    }
    const handleClose = () => {
        setAnchorEl(null);
        setOpen(false)
    }
    const id = open ? 'search-popover' : undefined;

    return (
        <Paper
            elevation={elevation}
            className='SearchBase'
            sx={{flex: {flex}, bgcolor:'var(--ui)'}}
            style={open ? borderStyleOpen:borderStyleClose} >

            <Paper
                ref={anchorRef}
                component="form"
                elevation={elevation}
                aria-describedby={id}
                className='InputBase-wrapper'
            >
                <IconButton
                    size='small'
                    sx={{ml: '5px'}} >
                    <SearchIcon fontSize='small' />
                </IconButton>
                <InputBase
                    placeholder="Search For Patients"
                    inputProps={{'aria-label': 'search google maps'}}
                />
                <IconButton
                    size='small'
                    sx={{mr: '7px'}}
                    onClick={handleClick}>
                    <TuneIcon fontSize='small' />
                </IconButton>
            </Paper>
            <Popover
                id={id}
                open={open}
                elevation={1}
                anchorEl={anchorEl}
                onClose={handleClose}
                className='SearchBase-Popover'
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                sx={{
                    "& .MuiPopover-paper":{
                        width: `calc(${anchorRef.current ? anchorRef.current.clientWidth:0}px + 2px)`
                    }
                }}
            >
                {/* Popover children */}
            </Popover>
        </Paper>
    );
}
