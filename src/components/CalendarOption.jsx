import * as React from "react";
import {MobileDatePicker} from "@mui/x-date-pickers";
import {InputAdornment, TextField} from "@mui/material";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import {LocalizationProvider} from "@mui/x-date-pickers/LocalizationProvider";
import {AdapterMoment} from "@mui/x-date-pickers/AdapterMoment";
import moment from "moment";


export const CalendarOption = ({label,
                                name,
                                variant='outlined',
                                sx,
                                error=false,
                                helperText=null,
                                defaultValue=null,
                                dateFormat = 'DD/MM/YYYY',
                                required,
                                onChange}) => {
    const inputRef = React.useRef();

    const [date, setDate] = React.useState(defaultValue);

    const handleChange = (newDate) => {
        setDate(newDate);

        const element = inputRef.current;

        const elementSetter = Object.getOwnPropertyDescriptor(
            window.HTMLInputElement.prototype, 'value'
        ).set

        elementSetter.call(element, moment(newDate).format(dateFormat));

        element.dispatchEvent(new Event("input", { bubbles: true }));
    }

    return (
        <LocalizationProvider dateAdapter={AdapterMoment}>
            <MobileDatePicker value={date}
                              label={label}
                              inputRef={inputRef}
                              onChange={handleChange}
                              inputFormat={dateFormat}
                              renderInput={(params) => {
                                  return (
                                      <TextField variant={variant}
                                                 { ...params }
                                                 sx ={{
                                                     '&': {
                                                         flex: '1',
                                                         marginTop: variant=='outlined' ? '20px': '5px',
                                                         ...sx
                                                     }
                                                 }}
                                                 size='small'
                                                 placeholder={dateFormat}
                                                 name={name}
                                                 error={error}
                                                 helperText={helperText}
                                                 onChange={onChange}
                                                 required={required}
                                                 InputProps={{
                                                     sx: {
                                                         color: 'var(--font)',
                                                     },
                                                     endAdornment: (
                                                         <InputAdornment position="end">
                                                             <CalendarMonthIcon fontSize='small'
                                                                                sx={{
                                                                                    color: 'var(--font)',
                                                                                    opacity: 0.8
                                                                                }}/>
                                                         </InputAdornment>
                                                     ),
                                                 }}
                                                 InputLabelProps={{
                                                     sx: {
                                                         color: 'var(--font)',
                                                         opacity: 0.5,
                                                     }
                                                 }} />
                                  )
                              }} />
        </LocalizationProvider>
    )
}