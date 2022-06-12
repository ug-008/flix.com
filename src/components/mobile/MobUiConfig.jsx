import React from "react";
import styled from "styled-components";

export default function MobConfigUi(props) {
    return(
        <UiConfig>
            {props.children}
        </UiConfig>
    );
}

const UiConfig = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;

    > *:not(.mob-sep) {
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: center;
        color: var(--font);

        i {
            font-size: 1.5rem;
        }

    }

    > .mob-sep {
        width: 1px;
        height: 30px;
        background: grey;
    }

`;