import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

const CSSWrapper = styled.div`
    flex: 1;
    display: flex;
    position: relative;
    
    > #outlet {
        flex: 1;
        display: flex;
    }

`;


export default function Workspace(props) {
    return(
        <CSSWrapper>
            {props.children}
            <div id='outlet'>
                <Outlet />
            </div>
        </CSSWrapper>
    );

}
