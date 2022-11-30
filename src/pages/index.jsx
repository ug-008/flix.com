import * as React from 'react';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import DehazeIcon from '@mui/icons-material/Dehaze';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { Outlet } from "react-router-dom";

import '@style/Layout-gt1024.css';
import Drawer2 from '@components/BasicDrawer';
import BasicIconButton from '@components/BasicIconButton';
import SimpleNotification from '@components/Notify';
import SearchBase from "@components/SearchBase";


export default function HomePage() {
    const drawerContainerRef = React.useRef();
    const _default = {
        notify: {
            showNotification: false
        },
        openDrawer: false
    }
    const [state, dispatch] = React.useReducer(
                                  (state, action)=> {
                                    switch(action.type) {
                                        case 'hide-notification':
                                            return {...state, notify: action.state}
                                        case 'show-notification':
                                            return {...state, notify: action.state}
                                        case 'handle-toggle-drawer':
                                            return {...state, openDrawer: !state.openDrawer }
                                    }
                                    return state
                                  }, _default
                              )

    React.useEffect(() => notify.init(_default.notify, [state.notify, dispatch]), [state.notify])

    return (
        <div className='Layout-gt1024'>

            <div className='Topbar-container'>

                <div className='Left-wrapper'>
                    <IconButton onClick={()=> dispatch({type: 'handle-toggle-drawer'})} >
                        <DehazeIcon />
                    </IconButton>
                    <Button
                        variant="outlined"
                        sx={{
                            justifyContent: "flex-start",
                            textTransform: 'none',
                            minWidth:'200px',
                            borderColor:'var(--border) !important'
                        }}
                        endIcon={<ArrowDropDownIcon sx={{position: 'relative', right: '-25px'}}/>}
                        >
                      General Out Patient
                    </Button>
                </div>

                <div className='Right-wrapper'>
                    <SearchBase
                        flex={1}
                        elevation={0} />
                    <BasicIconButton
                        tooltip='Notifications'
                        icon={<NotificationsNoneIcon />}
                        hasBadge />
                    <BasicIconButton
                        tooltip='Get Help'
                        icon={<HelpOutlineIcon />} />
                    <BasicIconButton
                        tooltip='Settings and utilities'
                        icon={<MoreVertIcon fontSize="small"/>}
                        sx={{mr: '5px'}} />
                    <Avatar
                        alt="User's Name"
                        sx={{
                            width: '30px',
                            height: '30px',
                            bgcolor: 'green',
                            fontSize: '15px',
                            color: 'var(--accent-text)!important'
                        }}
                        src="/broken-image.jpg"
                     />
                </div>

            </div>

            <div
                ref={drawerContainerRef}
                className='Workspace-container' >
                <Drawer2
                    anchor='left'
                    toggle={state.openDrawer}
                    containerRef={drawerContainerRef}
                    handleOnClose={()=> dispatch({type: 'handle-toggle-drawer'})}
                />
                <Outlet />
                <SimpleNotification {...state.notify } />
            </div>

        </div>
    );
}
