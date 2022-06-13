import React, { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import { MobDrawerContext, MobDrawerBar } from "../styled-components/MobDrawer";

const o001 = {
    width: '100px'
}

const o002 = {
    width: 'calc(98vw - 10px)',
}

const c001 = {
    transform: 'scale(0.0001)'
}

export const MobDrawer = (props) =>{

    const opened = props.state.toggle;

    const context = useContext(AppContext);

    return (
        <>
            <MobDrawerBar className="menu" 
                                    style={opened ? o002 : {} } 
                                    onClick={()=> props.state.setToggle(!opened)}>
                <div className="menu-icon">
                    <i className={props.icon || 'bi bi-list'} />
                </div>
                <span className="app-name"> 
                    {props.appName}
                </span>
                <div className="tool-bar" style={opened ? o001 : {} } >
                    <div className="menu-icon" onClick={(e)=> context.defaultTheme(e)}>
                        <i className = 'bi bi-circle-half' />
                    </div>
                    <br/>
                    <div className="menu-icon" onClick = {
                            (e)=> {
                                if(document.fullscreenEnabled) {
                                    context.setFullscreen(e);
                                }
                            }
                        }>
                        <i className = {context.fullscreen ? 'bi bi-fullscreen-exit':'bi bi-arrows-fullscreen'} />
                    </div>
                </div>
            </MobDrawerBar>

            <MobDrawerContext style={opened ? {} : c001}>
                <div className='menu-list' >
                    {props.children}
                </div>
            </MobDrawerContext>
            
        </>
    );
    
}

