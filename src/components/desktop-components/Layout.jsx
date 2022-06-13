import { AppContext } from "../../context/AppContext";
import React, { useContext, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { desk } from "./desk.module";

function DeskLayout () {

    useEffect(
        () => {
            context.defaultTheme()
        }
    );

    const context = useContext(AppContext);

    return(
        <desk.stage>

            <desk.top>{/** TODO: */}</desk.top>

            <desk.fragment>

                <desk.left direction='row'>

                    <desk.drawer appName={context.name}>

                        <div id="top">
                            <desk.pager to='home' text='Home' icon='bi bi-house'/>
                            <desk.pager to='now-playing' text='Now Playing' icon='bi bi-cone-striped'/>
                            <desk.pager to='videos' text='Videos' icon='bi bi-camera-video'/>
                            <desk.pager to='music' text='Music' icon='bi bi-music-note-list'/>
                            <desk.pager to='my-cart' text='My Cart' icon='bi bi-cart4'/>
                            <desk.pager to='posts' text='Posts' icon='bi bi-signpost-split'/>
                        </div>

                        <div id="bottom">
                            <desk.pager text='Layout' icon='bi bi-grid'/>
                            <desk.pager text='Contrast' icon='bi bi-circle-half' click={context.defaultTheme}/>
                        </div>

                    </desk.drawer>

                </desk.left>

                <desk.workspace>

                    <desk.shortcut>
                        <desk.pager text='Top Rated'/>
                        <desk.pager text='Upcoming' />
                        <desk.pager text='In Theaters'/>
                        <desk.pager text='TV shows'/>
                    </desk.shortcut>

                    <div id='outlet'>
                        <Outlet />
                    </div>

                </desk.workspace>

                <desk.right >{/** TODO: */}</desk.right>

            </desk.fragment>

            <desk.bottom >{/** TODO: */}</desk.bottom>

        </desk.stage>
    );

}

export default DeskLayout;