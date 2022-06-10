import React from "react";
import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";

const StyledNavItem = styled(Link)`
    flex: '1';
    color: var(--font);
	text-decoration: none;
	align-items: center;
	cursor: pointer;
	display: flex;

    > div {
        padding: 5px;
        display: flex;
        min-width: 40px;
        align-items: center;
        justify-content: center;

        > i {
           font-size: 1.4rem;
        }
    }

    > span {
        white-space: pre;
        margin-left: 10px;
    }

    &.active {
		color: var(--accent);
	}

    :hover {
        color: var(--font);
        background-color: var(--hover);
    }

`;

const UnLink = styled(StyledNavItem).attrs({
    as: 'div'
})``;

export default function NavItem(props) {

    if(props.to) {

        if(props.icon)
        return (
            <StyledNavItem to={props.to} >
                <div>
                    <i className={props.icon} />
                </div>
                <span> 
                    {props.text} 
                </span>
            </StyledNavItem>
        );

        else
        return (
            <StyledNavItem to={props.to}>
                {props.text}
            </StyledNavItem>
        );

    }

    else if(props.icon) 
    return (
        <UnLink onClick={props.click}>
            <div>
                <i className={props.icon} />
            </div>
            <span> 
                {props.text} 
            </span>
        </UnLink>
    );

    else
    return (
        <UnLink onClick={props.click}>
            {props.text}
        </UnLink>
    );
    
}