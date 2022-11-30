var reducer = {
    _default: {
        field: '',
        labs: [],
        requester: {},
        patient: {},
        checkBoxRefs: [],
        moreLab: []
    },
    _state: function(state, action, {confirm, 
                                     setConfirm,
                                     }) {
            const {checkBoxRefs, moreLab} = state
            switch(action.type) {
                case 'reset': {
                    setConfirm([])
                    return this._default
                }
                case 'cache': {
                    sessionStorage.setItem(action.id, JSON.stringify({_default: state, confirm}))
                    return state
                }
                case 'confirm-checker': {
                    const _confirm = confirm.filter((item)=> item.labItem !== action.labItem)
                                             ._put({labItem: action.labItem, value: action.value})
                    const _finish = (_confirm.length == action.maxSize)
                    setConfirm(_confirm)
                    return {
                        ...state,
                        confirm: _confirm,
                        finish: _finish
                    }
                }
                case 'urgency': {
                    return{...state, urgency: action.value}
                }
                case 'field': {
                    const moreLab = action.text?.split(',')
                                                .map((item)=> item.trim())
                                                .filter((item)=> item.trim())|| []
                    const checkboxesText = checkBoxRefs?._valuesOf('text')||[]
                    return {
                        ...state,
                        moreLab,
                        labs: [...moreLab||[], ...checkboxesText]._flush(),
                        field: action.text
                    }
                }
                case 'deleteLab': {
                    const moreLab= state.moreLab?._remove(action.text)||[ ]
                    //
                    const _checkBoxRef = state.checkBoxRefs?.filter((item, pos)=> {
                        return item.text=== action.text
                    });
                    _checkBoxRef.forEach((item)=> setConfirm(checked._replaceAt(item.pos, false)))
                    //
                    const checkedBoxes= state.checkBoxRefs?._remove(_checkBoxRef)||[]

                    return {
                        ...state,
                        checkBoxRefs: checkedBoxes,
                        labs: moreLab.concat(checkedBoxes._valuesOf('text'))._flush(),
                        field: moreLab.join(', ').trim(),
                        moreLab,
                    }
                }
            }
        }
}

export default reducer;
