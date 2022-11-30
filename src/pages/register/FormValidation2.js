/**
 * Validate form controls
 */
export const formValidation = function({name, syncData, syncLogs}) {
    var _next, 
        _message='This field is required or you entered an invalid input',
        _error
    switch(name) {
        case 'surname':
        case 'firstName':
        case 'otherName':
            _next = true;
            _error = (name!='otherName'&&undefinedOrEmpty(name, syncData))
            if(_error) {
                syncLogs[name]= _message
                _next = false
            }
        return _next
        default: _next;
    }

    /**
     * Check if form control is empty or undefined
     */
    function undefinedOrEmpty() {
        var o;
        if(syncData) {
            if(syncData[name]) {
                o = !(String(syncData[name]).trim().length > 0)
                if(o) _message = 'This field cannot be empty'
            }
            else _message = 'This field is required *'
        }
        return o ?? true;
    }

}

