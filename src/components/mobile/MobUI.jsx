import { ThemeContext } from "../../context/ThemeContextProvider";
import React, { useContext, useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { mob } from './mob.module';

var defaultSettings = true;

export default function MobileUi(props) {

    const themes = useContext(ThemeContext);    

    useEffect(

        () => {
            if(defaultSettings) {
                themes.defaultTheme();
            }
            return( ) => {
                defaultSettings = false;
            }
        }

    );

    const [toggle, setToggle] = useState();

    return (
        <mob.stage>
            <mob.drawer state={{toggle, setToggle}}>

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
                    <div>
                        <i className = 'bi bi-grid'/>
                    </div>
                    <div className="mob-sep" />
                    <div onClick={themes.defaultTheme}>
                        <i className = 'bi bi-circle-half'/>
                    </div>
                </mob.config>
            </mob.bottom>

        </mob.stage>
    );
} 