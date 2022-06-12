import React, {  useContext, useState } from "react";
import backgroundImage from '../../res/img/bg-img.jpg';
import { AppContext } from "../../context/AppContext";
import styled from "styled-components";
import LoadingBar from "../LoadingBar";
import { useRef } from "react";

const zIndex = 1000;

const allow = {
    width: '100vw',
    height: '100vh',
}

const dismiss = {
    width: '0',
    height: '0',
    opacity: '0',
    transform: 'scale(0.1)',
    transition: 'all .5s ease'
}

export default function MobPromptUi(props) {

    const ref001 = useRef();
    const context = useContext(AppContext);
    const [disable, setDisable] = useState(false);
    const [disable0, setDisable0] = useState(false);
    const [discard, setDiscard] = useState(false);

    return(
        <PromptUi style={discard ? dismiss : allow}>
            <div>
                <div className='content'>
                    <div className="readable">
                        <span> 
                            Enjoy the best of experience with just one click 
                        </span>
                    </div>
                    <div className="action">
                        <button type="button" 
                                ref = { ref001 }
                                disabled = {disable || disable0}
                                className = "btn btn-outline-primary btn-lg"
                                onClick = {
                                    (e) => {
                                        setDisable(!disable);
                                        context.setFullscreen();
                                    }
                                } >

                            { 
                                disable ? <LoadingBar parent={ref001} 
                                                      onMount={
                                                        (o)=> {
                                                            onMount({
/** If condition */                                             close: ()=> setDiscard(!discard),
                                                            })
                                                        }
                                                    } /> 
                                        : <span>Fullscreen Mode</span>
                            }
                        </button>

                        <br />

                        <button type="button" 
                                disabled = {disable || disable0}
                                className="btn btn-outline-secondary btn-lg btn-block skip"
                                onClick={
                                    (e) => {
                                        setDisable0(!disable0);
                                    }
                                } >
                            { 
                                disable0 ? <LoadingBar parent={ref001} 
                                                      onMount={
                                                        (o)=> {
                                                            onMount({
/** If condition */                                             close: ()=> setDiscard(!discard),
                                                            })
                                                        }
                                                    } /> 
                                        : <span>Skip</span>
                            }
                        </button>

                    </div>
                </div>
                <img src={backgroundImage} />
            </div>
        </PromptUi>
    );
}

/** 
 * Todo: API Call 
 */
const onMount = (o) => {
    setTimeout(()=> o.close(), 5000);
}

/** STYLES */
const PromptUi = styled.div`
    overflow: hidden;
    position: fixed;
    background: black;
    z-index: ${zIndex};
    
    > div {
        width: 100vw;
        height: 100vh;
        display: flex;
        overflow: hidden;
        position: relative;

        > img {
            opacity: 0.3;
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
        }

        > div.content {
            width: 100vw;
            height: 100vh;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            z-index: ${zIndex};
            position: relative;

            > div.readable {
                width: 95%;
                display: flex;
                justify-content: center;
                padding: 30px 5px;

                > span {
                    color: #eee;
                    font-size: 1.5rem;
                    text-align: center;
                }

            }

            > div.action {
                display: flex;
                margin: 0 auto;
                align-self: center;
                flex-direction: column;

                > button {
                    font-weight: bold;
                    border-width: 3px;
                }
                > br {
                    display: block; 
                    content: ""; 
                    margin-top: 5px;
                }

            }

        }

    }
`;
