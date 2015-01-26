/**
 * Returns predicate function that compares object with specification template
 *
 * @func
 * @memberOf Q
 * @category Function
 * @param {Object} spec - The specification object
 * @return {Function} The predicate function.
 * @example
 *
 *      Q.mold({a:1})({a:1,b:1}; //=> true
 *      Q.mold({a:4})({a:1,b:1}; //=> false
 */
Q.mold = function (spec) {
    return function (obj) {
        for (var key in spec) {
            if (spec[key] != obj[key])
                return false;
        }
        return true;
    }
};

/**
 * A function that does nothing but return the parameter supplied to it. Good as a default
 * or placeholder function.
 *
 * @func
 * @memberOf Q
 * @category Function
 * @sig a -> a
 * @param {*} x The value to return.
 * @return {*} The input value, `x`.
 * @example
 *
 *      Q.identity(1); //=> 1
 *
 *      var obj = {};
 *      Q.identity(obj) === obj; //=> true
 */
Q.identity = function (x) {
    return x;
};

/*
 * Returns a function that makes a multi-argument version of compose from
 * either _compose or _pCompose.
 */
function _createComposer(composeFunction) {
    return function() {
        switch (arguments.length) {
            case 0: throw _noArgsException();
            case 1: return arguments[0];
            default:
                var idx = arguments.length - 1, fn = arguments[idx], length = fn.length;
                while (idx--) {
                    fn = composeFunction(arguments[idx], fn);
                }
                return arity(length, fn);
        }
    };
}


/**
 * Creates a new function that runs each of the functions supplied as parameters in turn,
 * passing the return value of each function invocation to the next function invocation,
 * beginning with whatever arguments were passed to the initial invocation.
 *
 * Note that `compose` is a right-associative function, which means the functions provided
 * will be invoked in order from right to left. In the example `var h = compose(f, g)`,
 * the function `h` is equivalent to `f( g(x) )`, where `x` represents the arguments
 * originally passed to `h`.
 *
 * @func
 * @memberOf Q
 * @category core
 * @category Function
 * @sig ((y -> z), (x -> y), ..., (b -> c), (a... -> b)) -> (a... -> z)
 * @param {...Function} functions A variable number of functions.
 * @return {Function} A new function which represents the result of calling each of the
 *         input `functions`, passing the result of each function call to the next, from
 *         right to left.
 * @example
 *
 *      var triple = function(x) { return x * 3; };
 *      var double = function(x) { return x * 2; };
 *      var square = function(x) { return x * x; };
 *      var squareThenDoubleThenTriple = R.compose(triple, double, square);
 *
 *      //≅ triple(double(square(5)))
 *      squareThenDoubleThenTriple(5); //=> 150
 */
var compose = Q.compose = _createComposer(_compose);

/**
 * Wraps a function of any arity (including nullary) in a function that accepts exactly `n`
 * parameters. Unlike `nAry`, which passes only `n` arguments to the wrapped function,
 * functions produced by `arity` will pass all provided arguments to the wrapped function.
 *
 * @func
 * @memberOf Q
 * @sig (Number, (* -> *)) -> (* -> *)
 * @category Function
 * @param {Number} n The desired arity of the returned function.
 * @param {Function} fn The function to wrap.
 * @return {Function} A new function wrapping `fn`. The new function is
 *         guaranteed to be of arity `n`.
 * @example
 *
 *      var takesTwoArgs = function(a, b) {
     *        return [a, b];
     *      };
 *      takesTwoArgs.length; //=> 2
 *      takesTwoArgs(1, 2); //=> [1, 2]
 *
 *      var takesOneArg = R.arity(1, takesTwoArgs);
 *      takesOneArg.length; //=> 1
 *      // All arguments are passed through to the wrapped function
 *      takesOneArg(1, 2); //=> [1, 2]
 */
var arity = Q.arity = function(n, fn) {
    switch (n) {
        case 0: return function() {return fn.apply(this, arguments);};
        case 1: return function(a0) {void a0; return fn.apply(this, arguments);};
        case 2: return function(a0, a1) {void a1; return fn.apply(this, arguments);};
        case 3: return function(a0, a1, a2) {void a2; return fn.apply(this, arguments);};
        case 4: return function(a0, a1, a2, a3) {void a3; return fn.apply(this, arguments);};
        case 5: return function(a0, a1, a2, a3, a4) {void a4; return fn.apply(this, arguments);};
        case 6: return function(a0, a1, a2, a3, a4, a5) {void a5; return fn.apply(this, arguments);};
        case 7: return function(a0, a1, a2, a3, a4, a5, a6) {void a6; return fn.apply(this, arguments);};
        case 8: return function(a0, a1, a2, a3, a4, a5, a6, a7) {void a7; return fn.apply(this, arguments);};
        case 9: return function(a0, a1, a2, a3, a4, a5, a6, a7, a8) {void a8; return fn.apply(this, arguments);};
        case 10: return function(a0, a1, a2, a3, a4, a5, a6, a7, a8, a9) {void a9; return fn.apply(this, arguments);};
        default: return fn; // TODO: or throw?
    }
};

/**
 * Basic, right-associative composition function. Accepts two functions and returns the
 * composite function; this composite function represents the operation `var h = f(g(x))`,
 * where `f` is the first argument, `g` is the second argument, and `x` is whatever
 * argument(s) are passed to `h`.
 *
 * This function's main use is to build the more general `compose` function, which accepts
 * any number of functions.
 *
 * @private
 * @category Function
 * @param {Function} f A function.
 * @param {Function} g A function.
 * @return {Function} A new function that is the equivalent of `f(g(x))`.
 * @example
 *
 *      var double = function(x) { return x * 2; };
 *      var square = function(x) { return x * x; };
 *      var squareThenDouble = _compose(double, square);
 *
 *      squareThenDouble(5); //≅ double(square(5)) => 50
 */
function _compose(f, g) {
    return function() {
        return f.call(this, g.apply(this, arguments));
    };
}