import { AppContext } from "../../context/AppContext";
import React, { useContext, useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { styledComponent, mob } from './mob.module';

var defaultSettings = true;

export default function MobLayout(props) {

    const context = useContext(AppContext);    

    useEffect(
        () => {
            if(defaultSettings) {
                context.defaultTheme();
            }
            return( ) => {
                // Unmount Here
            }
        }
    ,[defaultSettings]);

    const [toggleDrawer, setToggleDrawer] = useState();

    return (
        <styledComponent.stage>

            {/* {document.fullscreenEnabled && <mob.prompt />} */}

            <mob.drawer state={{toggle: toggleDrawer, setToggle: setToggleDrawer}} appName={context.name}>

                <mob.menuitem to='home' 
                            text='Home' 
                            icon='bi bi-house' 
                            toggleDrawer={() => setToggleDrawer(!toggleDrawer)} />

                <mob.menuitem to='now-playing' 
                            text='Now Playing' 
                            icon='bi bi-cone-striped' 
                            toggleDrawer={() => setToggleDrawer(!toggleDrawer)} />

                <mob.menuitem to='videos' 
                            text='Videos' 
                            icon='bi bi-camera-video' 
                            toggleDrawer={() => setToggleDrawer(!toggleDrawer)} />

                <mob.menuitem to='music' 
                            text='Music' 
                            icon='bi bi-music-note-list' 
                            toggleDrawer={() => setToggleDrawer(!toggleDrawer)} />

                <mob.menuitem to='my-cart' 
                            text='My Cart' 
                            icon='bi bi-cart4' 
                            toggleDrawer={() => setToggleDrawer(!toggleDrawer)} />

                <mob.menuitem to='posts' 
                            text='Posts' 
                            icon='bi bi-signpost-split' 
                            toggleDrawer={() => setToggleDrawer(!toggleDrawer)} />
            </mob.drawer>

            <styledComponent.workspace>
                <Outlet />
            </styledComponent.workspace>

            <styledComponent.bottom>
                
            </styledComponent.bottom>

        </styledComponent.stage>
    );
} 