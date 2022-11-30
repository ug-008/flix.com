import * as React from 'react';

function formController({index,
                         slide,
                         next,
                         data,
                         syncData={},
                         syncLogs={},
                         dispatch,
                         onMount,
                         formValidator,
                         error}) {

    let direction,
        mount= (slide==index);

    if(next) {
        direction= mount? 'left':'right'
    }
    else {
        direction= mount? 'right':'left'
    }

    React.useEffect(()=> onMount({mount, next}), [mount])

    return {
        mount,
        direction,
        syncData,
        syncLogs,
        textChangeListener: function(event, {syncData, _syncLogs}){
            const name = event.target.name?.trim()
            if(syncData && name.length) {
                if(syncLogs) {
                    delete syncLogs[name]
                }
                syncData[name]= event.target.value
                dispatch({
                    type: 'textChangeListener',
                    syncData,
                    syncLogs,
                })
            }
        },
        focusChangeListener: function(event, {syncData, syncLogs}) {
            const name = event.target.name?.trim()
            if(syncData && name.length) {
                const next = formValidator({name, syncData, syncLogs})
                syncData[name]= event.target.value.trim()
                dispatch({
                    type: 'focusChangeListener',
                    syncData,
                    syncLogs,
                    next,
                })
            }
        },
        handleOnChange: function(event){
            if(error.at?.includes(event.target.name))
                error.at = error.at._remove(event.target.name)
            data[event.target.name]= event.target.value
            dispatch({
                type: 'handleOnChange',
                data: data
            })
        },
        focusChange: function(event) {
            data[event.target.name]= event.target.value?.trim()
            dispatch({
                type: 'handleOnChange',
                data: data
            })
        },
        error,
        data
    }
}

export default formController;