import { AppContext } from "../../context/AppContext";
import React, { useContext, useEffect, useState } from "react";
import { fullscreen } from "../../functions/fullscreen";
import { Outlet } from "react-router-dom";
import { mob } from './mob.module';

var defaultSettings = true;

export default function MobileUi(props) {

    const context = useContext(AppContext);    

    useEffect(

        () => {
            if(defaultSettings) {
                context.defaultTheme();
            }
            return( ) => {
                defaultSettings = false;
            }
        }

    );

    const [toggle, setToggle] = useState();

    const[maxScreen, setMaxScreen] = useState(fullscreen.isClose);

    return (
        <mob.stage>

            {document.fullscreenEnabled && <mob.prompt />}

            <mob.drawer state={{toggle, setToggle}} appName={context.name}>

                <mob.pager to='home' 
                            text='Home' 
                            icon='bi bi-house' 
                            toggleDrawer={() => setToggle(!toggle)} />

                <mob.pager to='now-playing' 
                            text='Now Playing' 
                            icon='bi bi-cone-striped' 
                            toggleDrawer={() => setToggle(!toggle)} />

                <mob.pager to='videos' 
                            text='Videos' 
                            icon='bi bi-camera-video' 
                            toggleDrawer={() => setToggle(!toggle)} />

                <mob.pager to='music' 
                            text='Music' 
                            icon='bi bi-music-note-list' 
                            toggleDrawer={() => setToggle(!toggle)} />

                <mob.pager to='my-cart' 
                            text='My Cart' 
                            icon='bi bi-cart4' 
                            toggleDrawer={() => setToggle(!toggle)} />

                <mob.pager to='posts' 
                            text='Posts' 
                            icon='bi bi-signpost-split' 
                            toggleDrawer={() => setToggle(!toggle)} />
            </mob.drawer>

            <mob.workspace>
                <Outlet />
            </mob.workspace>

            <mob.bottom>
                <mob.config>
                    <div onClick = {
                            ()=> {
                                if(document.fullscreenEnabled) {
                                    context.setFullscreen();
                                    // setMaxScreen(!fullscreen.isClose);
                                }
                            }
                         }>
                        <i className = {context.fullscreen ? 'bi bi-fullscreen-exit':'bi bi-arrows-fullscreen'}/>
                    </div>

                    <div className="mob-sep" />

                    <div onClick={context.defaultTheme}>
                        <i className = 'bi bi-circle-half'/>
                    </div>

                </mob.config>
            </mob.bottom>

        </mob.stage>
    );
} 