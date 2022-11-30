import {createTheme} from "@mui/material/styles"

const muiThemes = (cssVar) => (
    createTheme({
        palette: {
            primary: {
                main: cssVar("--primary"),
                contrastText: '#ffcc00',
            },
        },
        components: {
            MuiCssBaseline: {
                styleOverrides: {
                    body: {
                        "[class*='Mui']": {
                            color: cssVar("--font"),
                            fontFamily: "'Josefin Sans', monospace",
                            borderColor: cssVar("--border"),
                            "&.MuiOutlinedInput-root": {
                                "&:not(.Mui-focused):hover fieldset": {
                                    borderColor: cssVar("--border"),
                                },
                                "&.Mui-focused fieldset": {
                                    borderColor: cssVar("--primary"),
                                    borderWidth: '1px',
                                },
                            },
                            "& .MuiInputLabel-shrink": {
                                color: cssVar("--font"),
                            }
                        }
                    }
                },
            }
        },
    })
)

export {muiThemes};