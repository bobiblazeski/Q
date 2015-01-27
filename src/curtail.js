/**
 * Returns a new list by concatenating into list results of applying the function to all elements and their index
 *
 * @func
 * @memberOf Q
 * @category List
 * @param {Function} fn The function executed for each key value pair
 * @param {Array} list The array
 * @return {Array} The list of results of applying the function to all key value pairs
 * @example
 *
 *     Q.curtail(function(d){ return [-d,d];},[4,9,16]); //=> [-4,4,-9,9,-16,16]
 */
var curtail = _curry2(function (fn,list) {
    var acc = [],len= list.length;
    for (var i = 0; i < len; ++i) {
        acc= acc.concat(fn(list[i],i));
    }
    return acc;
});