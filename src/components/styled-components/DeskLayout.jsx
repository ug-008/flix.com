import styled from 'styled-components';


const element = styled.div`
    ${(props) => {
        return`
            overflow: auto;
            display: ${props.display || 'flex'};
            align-items: ${props.align || 'left'};
            flex-direction: ${props.direction || 'column'};
        `
    }}
`;

export const Stage = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
`;

export const Fragment = styled.div`
    flex: 1;
    display: flex;
    overflow: auto;
`;

export const TopSpace = styled(element)`
    margin: 0 0 0 0;
    background: yellow;
`;

export const BottomSpace = styled(element)`
    background: whitesmoke;
`;

export const LeftSpace = styled(element)`
    overflow: hidden;
    align-items:: center;
`;

export const RightSpace = styled(element)`
    
`;

export const Workspace = styled(element)`
    flex: 1;
    display: flex;
    position: relative;

    > #outlet {
        flex: 1;
        display: flex;
    }
`;