import '@global'
import '@style/App.css';
import HomePage from '@pages'
import {appRoutes} from "@routes";
import * as React from 'react';
import AppContextProvider from "@context";
import {ThemeProvider} from "@mui/material/styles"
import { useMediaPredicate } from "react-media-hook";
import CssBaseline from '@mui/material/CssBaseline';
import {muiThemes} from './themes/MuiThemes'
import {Route, Routes, BrowserRouter as Router} from 'react-router-dom';


const cssVar = (name) => getComputedStyle(document.documentElement).getPropertyValue(name).trim();

export default function App() {
    const [themes] = React.useState(() => {
        return muiThemes(cssVar)
    });
    return (
        <AppContextProvider>
            <ThemeProvider theme={themes}>
                <CssBaseline />
                <Router>
                    <Routes>
                        <Route path='/' element = { mediaScreen() } >
                            {Object.entries(appRoutes)
                                    .map(([key, property], _index, list)=> {
                                        if(key==='index')
                                            return(<Route key={_index} index element={property.element} />)
                                        else
                                            return(<Route key={_index} path={property.path} element={property.element} />)

                                    })
                            }
                        </Route>
                    </Routes>
                </Router>
            </ThemeProvider>
        </AppContextProvider>
    );
}

function mediaScreen( ) {
    const lesserThan768 = useMediaPredicate("(max-width: 768px)");
    const greaterThan768 = useMediaPredicate("(min-width: 768px)");
    return (
        <React.Fragment>
            {(lesserThan768 && <>Mobile device not supported</>)||(greaterThan768 && <HomePage />)}
        </React.Fragment>
    )
}
