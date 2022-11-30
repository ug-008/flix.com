import * as React from 'react';

global.cacheState = function({key, initState={}, cache=true, dispatchHandler}) {

    if(!key){
        throw new Error("cacheState must have a globally unique 'key' property")
    }

    !cache && sessionStorage.removeItem(key)

    const _getStorage = function( ) {
        return JSON.parse(sessionStorage.getItem(key))
    }

    const _setStorage = function(state) {
        cache && sessionStorage.setItem(key, JSON.stringify({cached: true, ...state}))
    }

    const _default = _getStorage() || initState

    const [state, dispatch] = React.useReducer((state, action) => {
        var cacheState;
        if(action.type==="__reset__") {
            cache = false;
            sessionStorage.removeItem(key)
            cacheState = _default
        }
        else if(dispatchHandler) {
            cacheState = dispatchHandler(state, action, {key, initState, cache})||state
        }
        else {
            cacheState = state
        }
        cache && _setStorage(cacheState)
        return cacheState;

    }, {syncData:{}, syncLogs:{}, ..._default} )

    return [{...state, dispatch}, dispatch];

}
