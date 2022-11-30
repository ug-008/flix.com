function labOrderCallback(state, action, {initState}) {

    switch(action.type) {
        case 'urgency': {
            return{...state, urgency: action.value}
        }
        case 'loading': {
            return{...state, loading: action.load}
        }
        case 'popularLabPicker': {
            const {pos, text, checked} = action
            if(checked)
                state.popularLabPicker[pos] = {text, checked}
            else delete state.popularLabPicker[pos]
            state.newLabs = mergeMoreLabsAndPopularLabPicker();
            return {...state}
        }
        case 'moreLabs': {
            state.moreLabs = action.text;
            state.newLabs = mergeMoreLabsAndPopularLabPicker();
            return {...state}
        }
        case 'deleteLab': {
            deleteTextFromPopularLabPicker()
            deleteTextFromAdditionalLabIndicator()
            state.newLabs = mergeMoreLabsAndPopularLabPicker();
            return {...state }
        }

    }

    function deleteTextFromPopularLabPicker() {
        const key = _toArray(state.popularLabPicker).filter(([key, value])=> {
                                                        return value.text === action.text
                                                    })
                                                    .map(([key, value])=> key)
        if(key[0]) {
            delete state.popularLabPicker[key[0]]
        }
    }

    function mergeMoreLabsAndPopularLabPicker() {
        return state.moreLabs.split(',')
                     .filter((item)=> item.trim().length > 0)
                     .concat(_toArray(state.popularLabPicker).map(([key, filteredItem])=> filteredItem.text))
                     .flush()
    }

    function deleteTextFromAdditionalLabIndicator() {
        state.moreLabs = state.moreLabs.split(',')
                                       .filter((item)=> item.trim() !== action.text.trim() && item.trim().length > 0)
                                       .map((item)=> item.trim( ))
                                       .join(', ')
    }

}

export default labOrderCallback