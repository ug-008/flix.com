import React, { useContext, useEffect } from "react";
import { nav, layout } from "./components.module";
import { ThemeContext } from "./context/ThemeContextProvider";

function Layout () {

     useEffect(
         () => {
            themes.switch()
         }
     );

     const themes = useContext(ThemeContext);

    return(
        <layout.stage>

            <layout.top>
                
            </layout.top>

            <layout.fragment>

                <layout.left direction='row'>

                    <nav.drawer text='Archive Of Things'>

                        <div id="top">
                            <nav.item to='home' text='Home' icon='bi bi-house'/>
                            <nav.item to='now-playing' text='Now Playing' icon='bi bi-cone-striped'/>
                            <nav.item to='videos' text='Videos' icon='bi bi-camera-video'/>
                            <nav.item to='music' text='Music' icon='bi bi-music-note-list'/>
                            <nav.item to='my-cart' text='My Cart' icon='bi bi-cart4'/>
                            <nav.item to='posts' text='Posts' icon='bi bi-signpost-split'/>
                        </div>

                        <div id="bottom">
                            <nav.item text='Layout' icon='bi bi-grid'/>
                            <nav.item text='Contrast' icon='bi bi-circle-half' click={themes.switch}/>
                        </div>

                    </nav.drawer>

                </layout.left>

                <layout.workspace align='center'>
                    <nav.floated>
                        <nav.item text='Top Rated'/>
                        <nav.item text='Upcoming' />
                        <nav.item text='In Theaters'/>
                        <nav.item text='TV shows'/>
                    </nav.floated>
                </layout.workspace>

                <layout.right >

                </layout.right>

            </layout.fragment>

            <layout.bottom >
                
            </layout.bottom>

        </layout.stage>
    );

}

export default Layout;