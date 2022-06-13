import styled from "styled-components";

export const MobStage = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    
`;

export const MobWorkspace = styled.div`
    flex: 1;
    display: flex;
    background: var(--bg);
    overflow: auto;
`;

export const MobBottomNav = styled.div`
    height: 50px;
    background: var(--ui);
    box-shadow: 0 -5px 5px -5px rgba(0, 0, 0, 0.4);
    display: flex;
`;