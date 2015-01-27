/**
 * Returns the first element of the list which matches the predicate, or `undefined` if no
 * element matches.
 *
 * @func
 * @memberOf Q
 * @category List
 * @param {Function|Object} f The predicate function used to determine if the element is the
 *        desired one. Or specification object
 * @param {Array} list The array to consider.
 * @return {Object} The element found, or `undefined`.
 * @example
 *
 *      var xs = [{a: 1}, {a: 2}, {a: 3}];
 *      Q.find(function(d){ return d.a == 2;}, xs); //=> {a: 2}
 *      Q.find({ a : 2}, xs); //=> {a: 2}
 *      Q.find({a: 4},(xs); //=> undefined
 */
function single(f, list) {
    return find(typeof f == 'function' ? f : where(f),list);
}