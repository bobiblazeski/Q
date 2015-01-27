/**
 * Returns a new list by collecting into list results of applying the function to all object key value pairs
 *
 * @func
 * @memberOf Q
 * @category Obj
 * @param {Function|String} f The function executed for each key value pair
 * @param {Object} obj The obj to consider.
 * @return {Array} The list of results of applying the function to all key value pairs
 * @example
 *
 *     Q.collect(Math.sqrt,{ a:4,b:9,c:16}); //=> [2, 3, 4]
 */
var collect = _curry2(function (f, obj) {
    var res = [];
    for (var key in obj)
        res.push(f(obj[key], key));
    return res;
});