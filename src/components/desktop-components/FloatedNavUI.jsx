import styled from 'styled-components';

const ShortcutComponent = styled.div`
    > div {
        flex: none;
        padding: 0 10px;
        justify-content: center;
    }

    width: 60%;
    height: 40px;
    margin-top: 2px;
    position: absolute;
    justify-content: center;
    box-shadow: 0 2px 2px rgba(0, 0, 0, 0.4);
    background: var(--ui);
    display: flex;
    z-index: 99;
    right: 20%;
    
`;

export default function FloatNav(props) {

    return (
        <ShortcutComponent>
            {props.children}
        </ShortcutComponent>
    );

}