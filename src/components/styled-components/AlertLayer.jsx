import styled from "styled-components";

const zIndex = 1000;

/** STYLES */
export const AlertLayer = styled.div`
    ${
        (props) => {
            return `
                height: 100vh;
                width: 100vw;
                position: fixed;
                background: yellow;
                z-index: 2000000000000000;
            `;
        }
    }
`;