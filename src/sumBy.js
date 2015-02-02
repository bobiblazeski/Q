/**
 * Adds together all the elements of a list.
 *
 * @func
 * @memberOf Q
 * @category Math
 * @sig (a -> Number) -> [a] ->  Number
 * @param {Function|String} f -The function retrieving value from each item, or property string.
 * @param {Array} list - An array of objects
 * @return {Number} The sum of all the retrieved values in the list.
 * @see foldl
 * @example
 *
 *      Q.sumBy("a",[{a:2},{a:4},{a:6},{a:8},{a:100},{a:1}]); //=> 121
 *      Q.sumBy(function(d){ return 2* d.a;},[{a:2},{a:4},{a:6},{a:8},{a:100},{a:1}]) //=>242
 *      Q.sumBy(Q.identity,[2,4,6,8,100,100])//=> 220
 */
var sumBy = _curry2(function(f, list) {
    return _foldl(typeof f == 'function' ? function(a, b) {
        return a + f(b)
    } : function(a, b) {
        return a + b[f];
    }, 0, list);
});