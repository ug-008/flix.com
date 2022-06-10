import styled from "styled-components";
import React, { useState } from "react";


const opened = {
    width: '200px',
    transition: 'width 0.5s'
}

const closed = {
    width: '40px',
    transition: 'width 0.5s'
}

const CSSWrapper = styled.div`
    ${(props) => {

        return `
            display: flex;
            flex-direction: column;
            background: var(--ui);
        
            > div#top {
                flex: 1;
            }
        
            > div#hanger  {
                position: fixed;
                z-index: 100;
        
                > #ear {
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

            > div#drawer {
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
                        font-size: 1.4rem;
                    }

                }

                > span {
                    white-space: pre;
                    font-style: italic;
                    font-size: .9rem;
                    padding-left: 5px;
                }

            }
        
            @media screen and (max-width: 768px) {
                display: none;
            }
        `;
    }}
	
`;

export default function Drawer(props) {

    const [open, setOpen] = useState(false);

    return (
        <CSSWrapper open = {open} style={open ? opened : closed }>

            <div id='hanger' 
                    style={open ? opened : closed}
                    onClick={() => setOpen(!open)} >

                <div id="ear">
                    <i className={open ? 'bi bi-chevron-left' : 'bi bi-chevron-right'} />
                </div>

            </div>

            <div id="drawer" onClick={() => setOpen(!open)}>
                <div>
                    <i className={props.icon || 'bi bi-list'} />
                </div>
                <span> 
                    {props.text} 
                </span>
            </div>

            <> {props.children} </>
            
        </CSSWrapper>
    );
    
}