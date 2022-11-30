/*
 * Removes duplicate element within an array
 */
Array.prototype.flush = function() {
    const flushed = this.filter((value, pos, self) => {
        const type = typeof(value) === 'object';
        if(!type) return(pos === self.findIndex((item) => item === value ))
        return(
            pos === self.findIndex((item) => JSON.stringify(item) === JSON.stringify(value))
        )
    })
    this.splice(0, this.length, ...flushed)
    return this;
}

/*
 * Returns the values of Json _key as an array
 */
Array.prototype._valuesOf = function(_key) {
    const _array = []
    this.forEach((item)=> {
        const type = typeof(item) === 'object'
        if(type)
            _array.push(item[_key])
        else if(item ==_key)
            _array.push(item)
    })
    const values = this.filter((item, pos, self) => item[_key])
                        .map((item, pos, self) => {
                            return this[_key]
                        })
    return _array;

}

/*
 * Put the value into an array and returns a new arrray
 */
Array.prototype.put = function(_item) {
    const type = Object.prototype.toString.call(_item) === '[object Array]'
    type ? this.push(..._item):this.push(_item)
    return this
}

/*
 * Removes the value from an array
 */
Array.prototype._remove = function(_item) {
    var _removed;
    const type = typeof(_item) === 'object';
    if(type) {
        const _itemString = JSON.stringify(_item)
        _removed = this.filter((item, pos, self) => {
            return JSON.stringify(item) !== _itemString
        })
    }
    else _removed = this.filter((item, pos, self) => item !== _item)

    return _removed;
}

/*
 * Replace an item in an array
 */
Array.prototype._replaceAt = function(_index, _arg) {
    if(_index > -1 && this.length > _index) {
        this[_index] = _arg;
    }
    return this;
}