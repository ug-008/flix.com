import React from "react";
import { useEffect } from "react";
import styled from "styled-components";


var runOnce = true;

export default function LoadingBar(props) {
    const e = props.parent.current;

    const style = e.currentStyle || window.getComputedStyle(e);
    
    const paddingBase = parseFloat(style.paddingLeft) + parseFloat(style.paddingRight);
    const paddingHeight = parseFloat(style.paddingTop) + parseFloat(style.paddingBottom);
    
    const borderBase = parseFloat(style.borderLeftWidth) + parseFloat(style.borderRightWidth);
    const borderHeight = parseFloat(style.borderTopWidth) + parseFloat(style.borderBottomWidth);

    const height = e.clientHeight - paddingHeight - borderHeight ;
    const width = e.clientWidth - paddingBase - borderBase;

    useEffect(() => {

        if(runOnce) {
            props.onMount();
        }
        
        return()=> {
            runOnce = false;
        }

    })
    
    return(
        <LoadingStyles width={width} height={height} radius={props.radius}>
            <div className="loader">
                <span className="loader__element"></span>
                <span className="loader__element"></span>
                <span className="loader__element"></span>
            </div>
        </LoadingStyles>
    );
}

const LoadingStyles = styled.div`

    ${(props)=> {
        return `
            width: ${ props.width}px;
            height: ${props.height}px;

            > .loader {
                overflow: hidden;
                width: 100%;
                height: 100%;
                position: relative;
                top: 0; left: 0;
                display: flex;
                align-items: center;
                align-content: center; 
                justify-content: center;  
                z-index: 100000;
        
                .loader__element {
                    border-radius: 100%;
                    border: ${props.radius || 2}px solid var(--accent);
                    margin: ${props.radius*2 || 2*2}px;
                }
            
                .loader__element:nth-child(1) {
                    animation: preloader .6s ease-in-out alternate infinite;
                }
            
                .loader__element:nth-child(2) {
                    animation: preloader .6s ease-in-out alternate .2s infinite;
                }
            
                .loader__element:nth-child(3) {
                    animation: preloader .6s ease-in-out alternate .4s infinite;
                }
        
            }
        
            @keyframes preloader {
                100% { transform: scale(2); }
            }
        
        `;
         
        }
    };

`;
 