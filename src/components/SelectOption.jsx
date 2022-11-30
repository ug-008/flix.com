import * as React from "react";
import {TextField} from "@mui/material";
import {FormControl, InputLabel, MenuItem, Select} from "@mui/material";

export const SelectOption = ({variant='outlined', sx, label, menuItem = [], defaultOption = '', onChange, required}) => {
    const [item, setItem] = React.useState(defaultOption);

    const handleChange = (event) => {
        if (onChange)
            onChange(event)
        setItem(event.target.value);
    }

    const inputLabelRef = React.useRef();

    const [width, setWidth] = React.useState(0);

    React.useEffect(()=> setWidth(inputLabelRef.current?.clientWidth), [width])

    return (
            <TextField
                size="small"
                value={item}
                variant={variant}
                required={required}
                onChange={(e) => setItem(e.target.value)}
                select // tell TextField to render select
                sx={{
                    flex: 1,
                    marginTop: variant=='outlined' ? '20px': '5px',
                    ...sx
                }}
                InputLabelProps={{
                    sx: {
                        color: 'var(--font)',
                        opacity: 0.5,
                    }
                }}
                SelectProps={{
                    MenuProps: {
                        PaperProps: {
                            sx: {
                                borderRadius: '0',
                                bgcolor: 'var(--ui)',
                                '& .MuiMenuItem-root': {
                                    '&:hover': {
                                        bgcolor: 'red',
                                    },
                                },
                            },
                        },
                    },
                }}
                label={label} >
                    {
                        menuItem.map((text, index, arrList) => {
                            return (
                                <MenuItem key={index} value={text}>{text}</MenuItem>
                            )
                        })
                    }
                    <MenuItem value='--Select None--'>--Select None--</MenuItem>
            </TextField>
    )
}