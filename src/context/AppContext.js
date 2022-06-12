import React, {createContext} from 'react';
import { fullscreen } from '../functions/fullscreen';
import Themes from '../functions/themes';

export const AppContext = createContext( );

export default class ContextProvider extends React.Component {

    state = {
        name: 'flix.com',

        fullscreen: false,

        setFullscreen: (callback) => {
            fullscreen.toggle(this, callback)
        },
        
        defaultTheme: ( ) => Themes(getDefaultTheme()),
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
const getDefaultTheme = ( ) => {
    count++;

    if(count > 2) count = 0;

    return count;

}