
var timer;

global.notify = {
    _reducer: null,

    _default: null,

    hide: function() {
        if(this._reducer) {
            timer && clearTimeout(timer)
            const [state, dispatch] = this._reducer
            dispatch({
                type: 'hide-notification',
                state: {
                    ...this._default,
                }
            })
        }
    },

    init: function(_default, [state, dispatch]){
        this._default = _default
        this._reducer = [state, dispatch]
    },

    show: function({msg='', type}) {
        if(this._reducer) {
            timer && clearTimeout(timer)
            const [state, dispatch] = this._reducer
            dispatch({
                type: 'show-notification',
                state: {
                    ...state,
                    showNotification: true,
                    text: msg,
                    type
                }
            })
            timer = setTimeout(()=> this.hide(), 5000)
        }
    },

}

