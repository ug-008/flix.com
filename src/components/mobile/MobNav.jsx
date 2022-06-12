import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const PagerItem = styled(NavLink)`
    color: var(--font);
	text-decoration: none;
	cursor: pointer;

    > i {
        font-size: 4rem;
    }

    > i, span {
        margin-top: -10px;
    }

    &.active {
		color: var(--accent);
	}

`;

export default function MobPagerItem(props) {
    return (
        <PagerItem to={props.to} 
                    onClick={props.toggleDrawer}>
            <i className={props.icon} />
            <span>{props.text}</span>
        </PagerItem>
    );
} 