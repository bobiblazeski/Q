/**
 * Optimized internal two-arity curry function.
 *
 * @private
 * @category Function
 * @param {Function} fn The function to curry.
 * @return {Function} curried function
 * @example
 *
 *      var addTwo = function(a, b) {
     *        return a + b;
     *      };
 *
 *      var curriedAddTwo = _curry2(addTwo);
 */
function _curry2(fn) {
    return function(a, b) {
        switch (arguments.length) {
            case 0:
                throw _noArgsException();
            case 1:
                return function(b) {
                    return fn(a, b);
                };
            default:
                return fn(a, b);
        }
    };
}


/**
 * Optimized internal three-arity curry function.
 *
 * @private
 * @category Function
 * @param {Function} fn The function to curry.
 * @return {Function} curried function
 * @example
 *
 *      var addThree = function(a, b, c) {
     *        return a + b + c;
     *      };
 *
 *      var curriedAddThree = _curry3(addThree);
 */
function _curry3(fn) {
    return function(a, b, c) {
        switch (arguments.length) {
            case 0:
                throw _noArgsException();
            case 1:
                return _curry2(function(b, c) {
                    return fn(a, b, c);
                });
            case 2:
                return function(c) {
                    return fn(a, b, c);
                };
            default:
                return fn(a, b, c);
        }
    };
}

/**
 * Optimized internal four-arity curry function.
 *
 * @private
 * @category Function
 * @param {Function} fn The function to curry.
 * @return {Function} curried function
 * @example
 *
 *      var addFour = function(a, b, c,d) {
     *        return a + b + c+d;
     *      };
 *
 *      var curriedAddThree = _curry4(addFour);
 */
function _curry4(fn) {
    return function(a, b, c, d) {
        switch (arguments.length) {
            case 0:
                throw _noArgsException();
            case 1:
                return function(b, c, d) {
                    return fn(a, b, c, d);
                };
            case 2:
                return function(c, d) {
                    return fn(a, b, c, d);
                };
            case 3:
                return function(d) {
                    return fn(a, b, c, d);
                };
            default:
                return fn(a, b, c, d);
        }
    };
}