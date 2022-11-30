import * as React from 'react'
import Slide from '@mui/material/Slide';

export default function Form({name,
                              children,
                              syncData,
                              syncLogs,
                              dispatch,
                              onMount,
                              formValidator,
                              next,
                              transition='none'}) {

    let direction,
        mount= transition!=='none'
    if(mount) {
        if(next) {
            direction= mount? 'left':'right'
        }
        else {
            direction= mount? 'right':'left'
        }
    }

    function textChangeListener(event){
        const _name = event.target.name?.trim()
        if(syncData && _name.length) {
            if(syncLogs) {
                delete syncLogs[_name]
            }
            syncData[_name]= event.target.value
            dispatch({
                type: 'textChangeListener',
                syncData,
                syncLogs,
            })
        }
    }

    function focusChangeListener(event) {
        const _name = event.target.name?.trim()
        if(syncData && _name.length) {
            var o
            if(formValidator)
                o = formValidator({name:_name, syncData, syncLogs})
            o && (syncData[_name]= event.target.value.trim())
            dispatch({
                type: 'focusChangeListener',
                syncData,
                syncLogs,
            })
        }
    }

    if(onMount) {
        React.useEffect(()=> onMount({mount, next}), [mount])
    }

    const clonedChildren = React.Children.map(
        children,
        (child)=> {
            var o
            if(React.isValidElement(child))
                o = React.cloneElement(child, {syncData,
                                                syncLogs,
                                                textChangeListener,
                                                focusChangeListener})
            return o ?? child
        }
    )

    const styles = {
        display: 'flex',
        flexDirection: 'column',
    }

    const render = ()=> {
        switch(transition) {
            case 'none': return(
                <div className='' style={styles}>
                    {clonedChildren}
                </div>
            )
            case 'fade': return(<div className='Fade' />)
            case 'slide': return(<div className='Slide' />)
            default: throw new Error('Invalid Form transition')
        }
    }

    return render()

}