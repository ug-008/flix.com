import styled from "styled-components";


export const InProgress = styled.div`

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
 