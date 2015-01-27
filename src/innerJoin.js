function _joinComparator(on){
    if(typeof  on == 'string') {
        return function(left,right){
            return left[on] == right[on];
        }
    }
    var leftKey = on[0],
        rightKey = on[1];
    return function(left,right){
        return left[leftKey] == right[rightKey];
    }
}

function _joinSelector(columns){
    return function(left,right){
        return pick(columns,mixin(left,right));
    }
}

/**
 * Returns an inner join of two arrays.
 *
 * @func
 * @memberOf Q
 * @category List
 * @param {String|Array|Function} on - it could be either string, array of two string or function
 * @param {Array|Function} columns - it could be either array of strings or function
 * @param {Array} left - left array of objects to be joined
 * @param {Array} right - right array of objects to be joined
 * @return {*} The inner join of the arrays
 * @example
 *
 *      Q.join("id", ["a","b"],[{id:1, a: 1},{id:2,a:3}],[{id:1, b: 11},{id:22,a:33}]) // =>([{ a: 1, b:11}]);
 *
 */
var innerJoin = curryN(4,function(on,columns,left,right) {
    var leftLen = left.length,
        rightLen = right.length,
        res = [],
        comparator = typeof on == 'function' ? on  : _joinComparator(on),
        selector = typeof columns == 'function' ? columns : _joinSelector(columns);
    for(var l = 0; l < leftLen; ++l) {
        for(var r = 0; r < rightLen; ++r) {
            if(comparator(left[l],right[r])) {
                res.push(selector(left[l],right[r]));
            }
        }
    }
    return res;
});