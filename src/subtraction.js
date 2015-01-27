/**
 * Subtracts two numbers. Equivalent to `a - b` but curried.
 *
 * @func
 * @memberOf Q
 * @category math
 * @sig Number -> Number -> Number
 * @param {Number} subtrahend -The number that is to be subtracted. The second number in a subtraction.
 * @param {Number} minuend - The number from which another number (the Subtrahend) is to be subtracted.
 * @return {Number} The difference  of `minuend - subtrahend`.
 *
 * @example
 *
 *      Q.subtraction( 8,10); //=> -2
 *      Q.map(Q.subtraction(10), [10,20,30]); //=> [0,10,20]
 */
var subtraction = _curry2(function(subtrahend,minuend) { return minuend - subtrahend; });