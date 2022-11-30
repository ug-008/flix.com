import * as React from 'react';
import Alert from '@mui/material/Alert';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import Collapse from '@mui/material/Collapse';

export default function SimpleNotification(props) {
    const _style = {
        right: 0,
        bottom: 0,
        zIndex: 1000,
        padding: '0 10px',
        position: 'absolute',
        margin: '0 20px 20px 0',
        minWidth: '250px',
        maxWidth: '300px',
    }
    return(
        <Slide direction="left" timeout={500} in={props.showNotification} mountOnEnter unmountOnExit>
            <Alert
                style={_style}
                variant="filled"
                severity={props.type}
                action={
                    <IconButton
                        size="small"
                        color="inherit"
                        onClick={() => {
                            notify.hide()
                        }} >
                        <CloseIcon fontSize="inherit" />
                    </IconButton>
                }
                iconMapping={{
                    success: <CheckCircleOutlineIcon fontSize="inherit" />
                }} >
                {props.text}
            </Alert>
        </Slide>
    )
}