import styled from "styled-components";


const zIndex = 10001;

export const MobDrawerBar = styled.div`
    ${(props) => {

        return `
            width: 55px;
            height: 55px;
            display: flex;
            z-index: ${zIndex -1};
            position: fixed;
            font-size: 1.2rem;
            color: var(--font);
            align-items: center;
            background: var(--ui);
            border-radius: 50px;
            box-shadow: 0 3px 3px rgba(0, 0, 0, 0.4);
            margin: 10px 10px;
            overflow: hidden;
            transition: width .5s ease-in-out;
            
            > div.menu-icon,
            > div.tool-bar > .menu-icon {
                min-width: 50px;
                min-height: 50px;
                display: flex;
                color: var(--font);
                align-items: center;
                border-radius: 50px;
                justify-content: center;
                margin: 0 2.5px;
    
                > i {
                    height: 37px;
                    font-size: 2rem;
                }

            }

            > span.app-name {
                flex: 1;
                font-size: 1.5rem;
                overflow: hidden;
                white-space: pre;
            }

            > div.tool-bar {
                height: 50px;
                display: flex;
                overflow: hidden;
                justify-content: right;
                transition: flex .25s ease-in-out;

                > br {
                    content: "";
                    margin: 0 1px;
                }

                > .menu-icon i {
                    height: 25px;
                    font-size: 1.3rem;
                }

            }

            
        `}

    }
`;

export const MobDrawerContext = styled.div`
    ${(props) => {

        return `
            height: 100vh;
            display: flex;
            position: fixed;
            transform: scale(1);
            flex-direction: column;
            transition: transform .5s ease-in-out;
            background: var(--bg);

            > div.menu-list {
                display: flex;
                overflow: auto;
                padding-top: calc(55px + 7%);
                flex-wrap: wrap;
                align-content: flex-start;
                justify-content: center;
                transform: scale(0.9);
                transition: transform .5s ease-in-out;

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

        `;
    }}

`;
