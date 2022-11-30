import * as React from "react";
import {TextField} from "@mui/material";

export const InputField =({ name,
                            value,
                            type = 'text',
                            variant="outlined",
                            label,
                            error=false,
                            helperText=null,
                            placeholder,
                            onChange,
                            onBlur,
                            required,
                            inputMode,
                            pattern,
                            sx
                            }) => {

    if(value == null || value == undefined) value = '';

    return (
        <TextField label={label}
                   name={name}
                   value={value}
                   type={type}
                   size='small'
                   error={error}
                   helperText={helperText}
                   variant={variant}
                   autoComplete={name}
                   required={required}
                   onChange={onChange}
                   onBlur={onBlur}
                   placeholder={placeholder}
                   inputProps={{
                       inputMode: inputMode,
                       sx: {
                           color: 'var(--font)',
                           letterSpacing: '2px',
                           fontSize: '.95rem'
                       },
                       pattern: pattern
                   }}
                   InputLabelProps={{
                       sx: {
                           color: 'var(--font)',
                           opacity: 0.65,
                           fontSize: '.9rem'
                       }
                   }}
                   sx={{
                       '&': {
                           flex: '1',
                           marginBottom: variant=='outlined' ? '20px': '5px',
                           "& .MuiFilledInput-root": {
                              background: "var(--ui)"
                           },
                           ...sx
                       }
                   }}/>
    )
}