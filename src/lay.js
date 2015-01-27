/**
 * Returns a list of numbers from `start` (inclusive) to `end`
 * (exclusive) using tep.
 *
 * @func
 * @memberOf Q
 * @category List
 * @param {Number} end - step more than the last number in the list.
 * @param {Number=} start -  first number in the list. Assumed 0 if null
 * @param {Number=} step -  difference between two numbers. Assumed 1 if null
 * @return {Array} The list of numbers.
 * @example
 *
 *      Q.lay(5);    //=> [1, 2, 3, 4]
 *      Q.lay(53, 50);  //=> [50, 51, 52]
 *      Q.lay(4, 8, -1);  //=> [8, 7, 6, 5]
 */
function lay(end, start, step) {
    start = start || 0;
    step = step == null ? 1 : step;
    var res = [],
        i = start;
    if (step > 0) {
        for (; i < end; i += step)
            res.push(i);
    } else if (step < 0) {
        for (; i > end; i += step)
            res.push(i);
    }
    return res;
}