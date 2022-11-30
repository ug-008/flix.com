import * as React from 'react';
import Box from '@mui/material/Box';

function TabPane(props) {
    const { children, value, index, ...others } = props;

    return (
        <div
            role="tabpane"
            className="TabPane-root"
            hidden={value !== index}
            id={`simple-tabpane-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...others}
        >
            { value === index && children }
        </div>
    );
}

export default TabPane;