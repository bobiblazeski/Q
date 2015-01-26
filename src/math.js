/**
 * Determines the smallest of a list of items as determined by pairwise comparisons from the supplied comparator
 *
 * @func
 * @memberOf Q
 * @category math
 * @param {Function|String} f A comparator function or field specifier for elements in the list
 * @param {Array} list A list of comparable elements
 * @see Q.min
 * @return {*} The smallest element in the list. `undefined` if the list is empty.
 * @example
 *
 *      function cmp(obj) { return obj.x; }
 *      var a = {x: 1}, b = {x: 2}, c = {x: 3};
 *      Q.min(cmp, [a, b, c]); //=> {x: 1}
 */
Q.min = _curry2(function (f, list) {
    var len = list.length,
        fn = typeof f == 'function' ? f : Q.field(f),
        item = list[0],
        res = fn(list[0]),
        current = NaN;
    for (var i = 0; i < len; ++i) {
        current = fn(list[i]);
        if (current < res) {
            item = list[i];
            res = current
        }
    }
    return item;
});
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
Q.max = _curry2(function (f, list) {
    var len = list.length,
        fn = typeof f == 'function' ? f : Q.field(f),
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

// Arithmetic Functions
// --------------------
//
// These functions wrap up the certain core arithmetic operators

// --------

/**
 * Adds two numbers (or strings). Equivalent to `a + b` but curried.
 *
 * @func
 * @memberOf Q
 * @category math
 * @sig Number -> Number -> Number
 * @sig String -> String -> String
 * @param {Number|String} a The first value.
 * @param {Number|String} b The second value.
 * @return {Number|String} The result of `a + b`.
 * @example
 *
 *      var increment = Q.add(1);
 *      increment(10);   //=> 11
 *      Q.add(2, 3);       //=>  5
 *      Q.add(7)(10);      //=> 17
 */
Q.add = _curry2(function _add(a, b) {
    return a + b;
});


/**
 * Multiplies two numbers. Equivalent to `a * b` but curried.
 *
 * @func
 * @memberOf Q
 * @category math
 * @sig Number -> Number -> Number
 * @param {Number} a The first value.
 * @param {Number} b The second value.
 * @return {Number} The result of `a * b`.
 * @example
 *
 *      var double = Q.multiply(2);
 *      var triple = Q.multiply(3);
 *      double(3);       //=>  6
 *      triple(4);       //=> 12
 *      Q.multiply(2, 5);  //=> 10
 */

Q.multiply = _curry2(function _multiply(a, b) {
    return a * b;
});


/**
 * Subtracts two numbers. Equivalent to `a - b` but curried.
 *
 * @func
 * @memberOf Q
 * @category math
 * @sig Number -> Number -> Number
 * @param {Number} minuend - The number from which another number (the Subtrahend) is to be subtracted.
 * @param {Number} subtrahend -The number that is to be subtracted. The second number in a subtraction.
 * @return {Number} The difference  of `minuend - subtrahend`.
 *
 * @example
 *
 *      Q.subtract(10, 8); //=> 2
 *      Q.map(Q.subtract(10), [1,2,3]); //=> [9,8,7]
 */
Q.subtract = _curry2(function subtract(minuend,subtrahend) { return minuend - subtrahend; });

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
 *      Q.difference( 8,10); //=> -2
 *      Q.map(Q.difference(10), [10,20,30]); //=> [0,10,20]
 */
Q.difference = _curry2(function difference(subtrahend,minuend) { return minuend - subtrahend; });

/**
 * Divides two numbers. Equivalent to `a / b`.
 *
 * @func
 * @memberOf Q
 * @category math
 * @sig Number -> Number -> Number
 * @param {Number} dividend -The amount that you want to divide up.
 * @param {Number} divisor - The number you divide by
 * @return {Number} The quotient of `dividend / divisor`.
 *
 * @example
 *
 *      Q.divide(100,71); //=> 0.71
 *
 *      var half = Q.divide(2);
 *      half(42); //=> 21
 *
 */
Q.divide = _curry2(function divide(dividend,divisor) { return dividend / divisor; });

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
Q.quotient = _curry2(function quotient(divisor,dividend) { return dividend / divisor; });

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
 *      Q.modulo(3,17); //=> 2
 *      // JS behavior:
 *      Q.modulo(3,-17); //=> -2
 *      Q.modulo(17, -3); //=> 2
 *
 *      var isOdd = Q.modulo(2);
 *      isOdd(42); //=> 0
 *      isOdd(21); //=> 1
 */
Q.modulo = _curry2(function modulo(divisor, dividend) { return dividend % divisor; });