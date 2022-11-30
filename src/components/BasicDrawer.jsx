import React, {createRef} from "react";
import {appRoutes} from "@routes";
import {NavLink as NavItem} from "react-router-dom";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import StarIcon from '@mui/icons-material/Star';
import Drawer from '@mui/material/Drawer';
import './BasicDrawer.css'

export default function Drawer2({containerRef, anchor, toggle, handleOnClose}) {

    const backdropProps = {
        style: {
            position: "absolute",
            background:'var(--back-drop)',
            opacity: .3
        }
    }

    const modalProps = {
        style: {
            position: "absolute"
        },
        container: containerRef.current,
    }

    const closeDrawer = ( ) => (event) => {

        if (event?.type === 'keydown' && (event?.key === 'Tab' || event?.key === 'Shift')) {
            return
        }

        handleOnClose( );
    }

    function hasChildRoute(childRoute) {
        let bool = false;
        if(childRoute && (Object.keys(childRoute).length > 0)) {
            return !bool;
        }
        return bool;
    }

    return (
        <Drawer className="BasicDrawer" anchor={anchor} open={toggle} onClose={closeDrawer()}
                PaperProps={{/*TODO*/}} BackdropProps={backdropProps} ModalProps={modalProps}
                >
            <List className="MenuItems-wrapper" >
                {
                    Object.entries(appRoutes)
                            .filter(([key, val])=> key !== 'index' )
                            .map(([key, val], index, arrList) => {
                        const hasChild = hasChildRoute(val.childRoute);
                        return(
                            <NavItem key={key}
                                     to={val.path}
                                     className='MenuItem-nav' >
                                <ListItem className='MenuItem-paper' >
                                    <ListItemButton onClick={()=> handleOnClose( )}>
                                        <ListItemIcon>
                                            {val.icon}
                                        </ListItemIcon>
                                        <ListItemText primary={val.text} />
                                        {hasChild &&
                                            <ListItemIcon>
                                                <KeyboardArrowRightIcon />
                                            </ListItemIcon>
                                        }
                                    </ListItemButton>
                                </ListItem>
                            </NavItem>
                        )
                    })
                }
            </List>
        </Drawer>
    );
}


