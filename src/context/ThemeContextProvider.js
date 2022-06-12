import React, {createContext} from 'react';

export const ThemeContext = createContext();

class ThemeContextProvider extends React.Component {

    state = {
        index: 0,

        defaultTheme: ( ) => {

            switch(this.state.index) {

                case 1: 
                    // light
                    document.documentElement.style.setProperty('--bg', '#ddd');
                    document.documentElement.style.setProperty('--ui', '#eee');
                    document.documentElement.style.setProperty('--font', '#222');
                    document.documentElement.style.setProperty('--accent', 'red');
                    document.documentElement.style.setProperty('--hover', '#ddd');
                break;

                case 2: 
                    // green
                    document.documentElement.style.setProperty('--bg', '#ddd');
                    document.documentElement.style.setProperty('--ui', 'darkgreen');
                    document.documentElement.style.setProperty('--font', '#eee');
                    document.documentElement.style.setProperty('--accent', 'orange');
                    document.documentElement.style.setProperty('--hover', 'green');
                break;

                default: 
                    // dark
                    document.documentElement.style.setProperty('--bg', '#222');
                    document.documentElement.style.setProperty('--ui', '#333');
                    document.documentElement.style.setProperty('--font', '#ddd');
                    document.documentElement.style.setProperty('--accent', 'orange');
                    document.documentElement.style.setProperty('--hover', '#555');
                    this.state.index = 0;

            }

            this.state.index += 1;

        },

    }

    render( ) {

        return(
            <ThemeContext.Provider value={{...this.state}}>
                {this.props.children}
            </ThemeContext.Provider>
        );

    }

}

export default ThemeContextProvider;