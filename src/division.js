/**
 * Divides two numbers. Equivalent to `a / b`.
 *
 * @func
 * @memberOf Q
 * @category math
 * @sig Number -> Number -> Number
 * @param {Number} divisor - The number you divide by
 * @param {Number} dividend -The amount that you want to divide up.
 * @return {Number} The quotient of `dividend / divisor`.
 *
 * @example
 *
 *      Q.quotient(100,71); //=> 0.71
 *
 *      Q.map(Q.quotient(16),[1,2,4,8,16]) //=> [16,8,4,2,1]
 *
 */
var division = _curry2(function(divisor,dividend) { return dividend / divisor; });