import React, { useState } from "react";
import styled from "styled-components";


const opened = {
    width: '200px',
    transition: 'width 0.5s'
}

const closed = {
    width: '40px',
    transition: 'width 0.5s'
}

export default function Drawer(props) {

    const [open, setOpen] = useState(false);

    return (
        <DrawerComponent open = {open} style={open ? opened : closed }>

            <div className='slide-indicator' 
                    style={open ? opened : closed}
                    onClick={() => setOpen(!open)} >

                <div className="arrow-icon">
                    <i className={open ? 'bi bi-chevron-left' : 'bi bi-chevron-right'} />
                </div>

            </div>

            <div className="drawer-icon" onClick={() => setOpen(!open)}>
                <div>
                    <i className={props.icon || 'bi bi-list'} />
                </div>
                <span> 
                    {props.appName} 
                </span>
            </div>

            <> {props.children} </>
            
        </DrawerComponent>
    );
    
}

const DrawerComponent = styled.div`
    ${(props) => {

        return `
            display: flex;
            flex-direction: column;
            background: var(--ui);
        
            > div.slide-indicator  {
                position: fixed;
                z-index: 100;
        
                > .arrow-icon {
                    right: -20px;
                    color: var(--font);
                    border-top-right-radius: 40px;
                    border-bottom-right-radius: 40px;
                    width: 20px;
                    height: 40px;
                    display: flex;
                    background: var(--ui);
                    position: absolute;
                    align-items: center;
        
                    i {
                        ${props.open ? 'margin-left: -5px':'margin-left: 0'}
                    }
        
                }
                
            }

            > div.drawer-icon {
                color: var(--font);
                display: flex;
                cursor: pointer;
                margin-bottom: 50px;
                align-items: center;

                > div {
                    padding: 5px;
                    display: flex;
                    min-width: 40px;
                    align-items: center;
                    justify-content: center;

                    > i {
                        font-size: 1.5rem;
                    }

                }

                > span {
                    flex: 1;
                    text-align: center;
                    white-space: pre;
                    font-style: italic;
                    font-size: 1.0rem;
                    padding-right: 40px;
                }

            }
        
        `;
    }
}`;
