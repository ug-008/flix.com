import React from "react";
import { useEffect } from "react";
import { InProgress } from "./styled-components/InProgress";


var width;

var height;

var runOnce = true;

export default function InProgressBar({forwardRef, onMount, radius}) {

    if(forwardRef) {

        const e = forwardRef.current;

        const style = e.currentStyle || window.getComputedStyle(e);
        
        const paddingBase = parseFloat(style.paddingLeft) + parseFloat(style.paddingRight);
        const paddingHeight = parseFloat(style.paddingTop) + parseFloat(style.paddingBottom);
        
        const borderBase = parseFloat(style.borderLeftWidth) + parseFloat(style.borderRightWidth);
        const borderHeight = parseFloat(style.borderTopWidth) + parseFloat(style.borderBottomWidth);
    
        height = e.clientHeight - paddingHeight - borderHeight ;
        width = e.clientWidth - paddingBase - borderBase;

    }

    useEffect(
        () => {
            if(runOnce) {
                onMount();
            }
            
            return()=> {
                // Unmount Here
            }
        },
    [runOnce]);

    return(
        <InProgress width={width} height={height} radius={radius}>
            <div className="loader">
                <span className="loader__element"></span>
                <span className="loader__element"></span>
                <span className="loader__element"></span>
            </div>
        </InProgress>
    );

}