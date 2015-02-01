/**
 * Returns the requested value or provided default value if requested value is null or undefined
 *
 * @func
 * @memberOf Q
 * @category Function
 * @param {Function|String} f - function or string
 * @param {Object} auto - default value if requested value is null or undefined
 * @param {Object} obj - Object containing the requested value
 * @return {Object} An object with the output of `f` for keys, mapped to arrays of elements
 *         that produced that key when passed to `f`.
 * @example
 *
 *      Q.isNull({a:1},"a",2) // => 1
 *      Q.isNull({b:1},"a",2) // => 2
 *      Q.isNull(null,"a",3) // => 3
 *
 */
var isNull = _curry3(function(f,auto, obj) {
    var fn = typeof f == 'function' ? f : prop(f),
        result;
    if(!obj) {
        return auto;
    }
    try {
        result = fn(obj);
    } catch(err){ }
    return result ? result : auto;
});