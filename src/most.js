
/**
 * Determines the largest of a list of items as determined by pairwise comparisons from the supplied comparator
 *
 * @func
 * @memberOf Q
 * @category math
 * @param {Function|String} f A comparator function or field specifier for elements in the list
 * @param {Array} list A list of comparable elements
 * @see Q.min
 * @return {*} The largest element in the list. `undefined` if the list is empty.
 * @example
 *
 *      function cmp(obj) { return obj.x; }
 *      var a = {x: 1}, b = {x: 2}, c = {x: 3};
 *      Q.max(cmp, [a, b, c]); //=> {x: 3}
 */
var most =  _curry2(function (f, list) {
    var len = list.length,
        fn = typeof f == 'function' ? f : prop(f),
        item = list[0],
        res = fn(list[0]),
        current = NaN;
    for (var i = 0; i < len; ++i) {
        current = fn(list[i]);
        if (current > res) {
            item = list[i];
            res = current
        }
    }
    return item;
});