/**
 * Splits a list into sub-lists stored in an object, based on the result of calling a String-returning function
 * on each element, and grouping the results according to values returned.
 *
 * @func
 * @memberOf Q
 * @category List
 * @param {Function|String} f - function or string
 * @param {Array} list The array to group
 * @return {Object} An object with the output of `f` for keys, mapped to arrays of elements
 *         that produced that key when passed to `f`.
 * @example
 *
 * Q.group(function(num) { return Math.floor(num); },[4.2, 6.1, 6.4]) =>( { '4': [4.2], '6': [6.1, 6.4] })
 */
var group =_curry2(function(f, list) {
    var fn = typeof f == 'function' ? f : prop(f);
    return _foldl(function (acc, elt) {
        var key = fn(elt);
        acc[key] = _append(elt, acc[key] || (acc[key] = []));
        return acc;
    }, {}, list);
});