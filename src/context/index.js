import * as React from 'react'

export default function AppContextProvider(props) {
    const _default = {
        app: 'emrOffice',
    }
    const [state, dispatch] = React.useReducer(
        (state, action)=> {
            switch(action.type) {
                default: return state;
            }
        }, _default
    )

    return(
        <AppContext.Provider value={{state: state, dispatch: dispatch}}>
            {props.children}
        </AppContext.Provider>
    );
}

export const AppContext = React.createContext(null);
