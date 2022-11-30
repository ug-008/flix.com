import * as React from "react";
import{TextField as MuiTextfield} from "@mui/material";

const TextField=({name,
                  value,
                  type = 'text',
                  variant="outlined",
                  label,
                  syncLogs,
                  syncData,
                  helperText=null,
                  placeholder,
                  textChangeListener,
                  focusChangeListener,
                  required,
                  inputMode,
                  pattern,
                  sx}) => {

    if(syncData&&
        String.isEmpty(value)) {
        value = syncData[name] ?? ''
    }

    var error;
    if(syncLogs&&
        required&&
        String.isEmpty(value)) {
        error = syncLogs[name] ? true : false
        if(!error)
            syncLogs[name] = null
    } else if(syncLogs) {
        error = syncLogs[name] ? true : false
    } else;

    if(String.isEmpty(label)) label = name


    return (
        <MuiTextfield label={label}
                        name={name}
                        type={type}
                        size='small'
                        value={value ?? ''}
                        error={error ?? false}
                        helperText={error ? syncLogs[name]:null}
                        variant={variant}
                        autoComplete={name}
                        required={required}
                        onChange={textChangeListener}
                        onBlur={focusChangeListener}
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
                                '&': {
                                    opacity: 0.65,
                                    color: 'var(--font)',
                                    ':first-letter': {textTransform: 'Capitalize'},
                                    fontSize: '.9rem',
                                }
                            }
                        }}
                        sx={{
                           '&': {
                               flex: '1',
                               margin: variant=='outlined' ? '10px 5px 5px': '5px',
                               "& .MuiFilledInput-root": {
                                  background: "var(--ui)"
                               },
                               ...sx
                           }
                   }}/>
    )
}

export default TextField;