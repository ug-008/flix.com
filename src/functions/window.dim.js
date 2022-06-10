import { useState, useEffect } from 'react';

export default function useWindowDimensions() {
    
    const [windowDim, setWindowDims] = useState(getWindowDimensions());

    useEffect(() => {

        function handleResize() {
            setWindowDims(getWindowDimensions())
        }

        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return windowDim;
}

function getWindowDimensions() {
    const {innerWidth: width, innerHeight: height} = window;
    return {
        width,
        height
    };
}