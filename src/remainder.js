/**
 * Divides the second parameter by the first and returns the remainder.
 * Note that this functions preserves the JavaScript-style behavior for
 * modulo. For mathematical modulo see `mathMod`
 *
 * @func
 * @memberOf Q
 * @category math
 * @sig Number -> Number -> Number
 * @param {Number} divisor The pseudo-modulus
 * @param {Number} dividend The value to the divide.
 * @return {Number} The result of `dividend % divisor`.
 *
 * @example
 *
 *      Q.remainder(3,17); //=> 2
 *      // JS behavior:
 *      Q.remainder(3,-17); //=> -2
 *      Q.remainder(17, -3); //=> 2
 *
 *      var isOdd = Q.modulo(2);
 *      isOdd(42); //=> 0
 *      isOdd(21); //=> 1
 */
var remainder = _curry2(function(divisor, dividend) { return dividend % divisor; });