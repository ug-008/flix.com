import React, {  } from "react";
import styled from "styled-components";

const o001 = {
    width: '100vw',
    transition: 'width 0.5s'
}

const c001 = {
    width: '0',
    transition: 'width 0.5s'
}

const o002 = {
    width: '98vw',
    transition: 'width 0.5s'
}

const c002 = {
    width: '65px',
    transition: 'width 0.5s'
}

const o003 = {
    width: '100vw',
    opacity: '1',
    transition: 'width .5s, opacity 1s'
}

const c003 = {
    width: '0',
    opacity: '0',
    transition: 'width .5s, opacity .25s'
}

export default function MobDrawer(props) {

    const opened = props.state.toggle;

    return (
        <CSSMobWrapper style={opened ? o001 : c001 } >
            <div id="floater" 
                 style={opened ? o002 : c002 } 
                 onClick={()=> props.state.setToggle(!opened)}>

                <div id="mob-drawer">
                    <i className={props.icon || 'bi bi-list'} />
                </div>
                <span style={opened ? o001 : c001 }> 
                    {props.appName}
                </span>
                <div id="mob-ear" >
                    <i className={opened ? 'bi bi-chevron-left' : 'bi bi-chevron-right'} />
                </div>
            </div>

            <div id='menu' style={opened ? o003 : c003}>
                {props.children}
            </div>
        </CSSMobWrapper>
    );
    
}

const CSSMobWrapper = styled.div`

    ${(props) => {

        return `
            display: flex;
            height: 100vh;
            position: fixed;
            background: var(--bg);
            flex-direction: column;
        
            > div#menu {
                display: flex;
                overflow: auto;
                margin-top: 7%;
                flex-wrap: wrap;
                justify-content: center;

                > * {
                    width: 39.5%;
                    height: 150px;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    background: var(--ui);
                    margin-bottom: 7%;
                }

                > *:nth-child(odd) {
                    margin-right: 3.5%; 
                }

                > *:nth-child(even) {
                    margin-left: 3.5%;
                }

            }

            > div#floater {
                height: 50px;
                display: flex;
                color: var(--font);
                align-items: center;
                background: var(--ui);
                border-top-right-radius: 40px;
                border-bottom-right-radius: 40px;
                box-shadow: 0 2px 2px rgba(0, 0, 0, 0.4);
                margin-top: 5px;
                
                > div#mob-ear {
                    display: flex;
                    align-items: center;
                    justify-content: right;

                    > i {
                        margin-right: 15px;
                    }
        
                }
                
                > div#mob-drawer {
                    height: 50px;
                    display: flex;
                    align-items: center;
        
                    > i {
                        margin: 0 10px;
                        font-size: 1.4rem;
                    }
        
                }

                > span {
                    display: flex;
                    font-size: 1.2rem;
                    align-items: center;
                    justify-content: center;
                    overflow: hidden;
                }

            }
    
        `;
    }}
    
`;

