import React, {createContext} from 'react';
import { fullscreen } from '../hooks/fullscreen';
import Themes from '../hooks/themes';

export const AppContext = createContext( );

export default class ContextProvider extends React.Component {

    state = {
        name: 'flix.com', //flix.com

        fullscreen: false,

        setFullscreen: (e, callback) => {
            if(e) e.stopPropagation();
            fullscreen.toggle(this, callback)
        },
        
        defaultTheme: (e) => Themes(getDefaultTheme(e)),
    }

    render( ) {

        return(
            <AppContext.Provider value={{...this.state}}>
                {this.props.children}
            </AppContext.Provider>
        );

    }

}

/**
 * Get default theme
 */
var count = 0;
const getDefaultTheme = (e) => {
    count++;

    if(e) e.stopPropagation();

    if(count > 1) count = 0;

    return count;

}