global._toArray = function(object) {
    return Object.entries(object);
}

global._getValues = function(object, key) {
    var o;
    const _object = typeof(object) === 'object'
    const array = Object.prototype.toString.call(object) === '[object Array]'
    console.log(_object)
    if(array) {
        o = object.filter((item)=> item[key])
                  .map((filteredItem)=> filteredItem[key])
    }
    else if(_object) {
        o = Object.values(object)
                  .filter((item)=> item[key])
                  .map((filteredItem)=> filteredItem[key])
    }

    return o||[];
}

global._emptyObject = function(obj) {
    for(var prop in obj) {
        if(Object.prototype.hasOwnProperty.call(obj, prop)) {
            return false;
        }
    }
    return JSON.stringify(obj) === JSON.stringify({});
}