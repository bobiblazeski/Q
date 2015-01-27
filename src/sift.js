/**
 * Returns a new list containing only those items that match a given predicate function.
 * The predicate function is passed one argument: *(value)*.
 *
 * @func
 * @memberOf Q
 * @category core
 * @category List
 * @param {Function|Object} f The function called per iteration, or functor description.
 * @param {Array} list The collection to iterate over.
 * @return {Array} The new filtered array.
 * @example
 *
 *      var isEven = function(n) {
     *        return n % 2 === 0;
     *      };
 *      Q.sift(isEven, [1, 2, 3, 4]); //=> [2, 4]
 */
function sift(f, list) {
    filter(typeof f == 'function' ? f : where(f),list);
}