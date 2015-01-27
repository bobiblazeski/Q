/**
 * Returns a new list by concatenating into list results of applying the function to all object key value pairs
 *
 * @func
 * @memberOf Q
 * @category Obj
 * @param {Function} f The function executed for each key value pair
 * @param {Object} obj The obj to consider.
 * @return {Array} The list of results of applying the function to all key value pairs
 * @example
 *
 *     Q.abate(function(d){ return [-d,d];},{ a:4,b:9,c:16}); //=> [-4,4,-9,9,-16,16]
 */
var abate = _curry2(function (f, obj) {
    var res = [];
    for (var key in obj)
        res = res.concat(f(obj[key], key));
    return res;
});