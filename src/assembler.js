/**
 * Returns a function that when supplied with arguments returns object created by given keys.
 * Returned function sets filed where it lacks arguments to undefined, ignores surplus arguments.
 *
 * @func
 * @memberOf Q
 * @category Object
 * @param {Array} keys - keys for the created object
 * @return {*} The construct function
 * @example
 *
 *      var trend = Q.assembler(["year", "amount", "name"]);
 *      trend(1937,100, 'foo') => { year:1937, amount: 100, name: 'foo'}
 *
 */
function assembler(keys) {
    return function () {
        var len = keys.length, res = {};
        for (var i = 0; i < len; ++i) {
            res[keys[i]] = arguments[i];
        }
        return res;
    }
}
