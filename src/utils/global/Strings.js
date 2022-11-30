/*
 * Check if a string is empty
 */
String.isEmpty = function(str) {
    var o;
    if(str!= undefined || str!= null)
        o = (String(str).length === 0 || !String(str).trim())
    return o ?? true
}
