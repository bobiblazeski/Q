(function (factory) {
    if (typeof exports === 'object') {
        module.exports = factory(this);
    } else if (typeof define === 'function' && define.amd) {
        define(factory);
    } else {
        this.Q = factory(this);
    }
}(function () {

    'use strict';
    /**
     * A practical functional library for Javascript programmers.
     *
     * @namespace R
     */
    var Q = {version: '1.0.0'};
    /**
     * Returns a list of numbers from `start` (inclusive) to `end`
     * (exclusive) using tep.
     *
     * @func
     * @memberOf Q
     * @category List
     * @param {Number} end - step more than the last number in the list.
     * @param {Number} start -  first number in the list. Assumed 0 if null
     * @param {Number} step -  difference between two numbers. Assumed 1 if null
     * @return {Array} The list of numbers.
     * @example
     *
     *      Q.lay(5);    //=> [1, 2, 3, 4]
     *      Q.lay(53, 50);  //=> [50, 51, 52]
     *      Q.lay(4, 8, -1);  //=> [8, 7, 6, 5]
     */
    Q.lay = function (end, start, step) {
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
    };
    /**
     * Returns the first element of the list which matches the predicate, or `undefined` if no
     * element matches.
     *
     * @func
     * @memberOf Q
     * @category List
     * @param {Function/Object} f The predicate function used to determine if the element is the
     *        desired one. Or specification object
     * @param {Array} list The array to consider.
     * @return {Object} The element found, or `undefined`.
     * @example
     *
     *      var xs = [{a: 1}, {a: 2}, {a: 3}];
     *      Q.single(function(d){ return d.a == 2;}, xs); //=> {a: 2}
     *      Q.single({ a : 2}, xs); //=> {a: 2}
     *      Q.single({a: 4},(xs); //=> undefined
     */
    Q.single = function (f, list) {
        var len = list.length,
            fn = typeof f == 'function' ? f : Q.mold(f);
        for (var i = 0; i < len; ++i) {
            if (fn(list[i]))
                return list[i];
        }
        return undefined;
    };

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
     * Amend left list object with keys from right list objects
     * joining by key
     *
     * @func
     * @memberOf Q
     * @category List
     * @param {List} left - The original list
     * @param {List} right - The extension list
     * @param {String} lKey - The original list key
     * @param {String} rKey - The extension list key, if a omitted assumed equal with lKey
     * @return {Function} The predicate function.
     * @example
     *
     *         var left = [{ id:1, b:2},{ id:2, b:2}];
     *         var right =[{ id:1, d:4},{ id:2, d:5}];
     *         Q.amend(left,right,'id') => [{"id":1,"b":2,"d":4},{"id":2,"b":2,"d":5}]
     */
    Q.amend = function (left, right, lKey, rKey) {
        rKey = rKey || lKey;
        return Q.map(function (l) {
            var found = Q.single(function (r) {
                return l[lKey] == r[rKey];
            }, right);
            return Q.mixin(l, found ? found : {});
        }, left);
    };
    /**
     * Returns a new list containing only those items that match a given predicate function.
     * The predicate function is passed one argument: *(value)*.
     *
     * @func
     * @memberOf Q
     * @category core
     * @category List
     * @param {Function} f The function called per iteration, or functor description.
     * @param {Array} list The collection to iterate over.
     * @return {Array} The new filtered array.
     * @example
     *
     *      var isEven = function(n) {
     *        return n % 2 === 0;
     *      };
     *      R.filter(isEven, [1, 2, 3, 4]); //=> [2, 4]
     */
    Q.filter = function (f, list) {
        var res = [],
            len = list.length,
            fn = typeof f == 'function' ? f : Q.mold(f);
        for (var i = 0; i < len; ++i) {
            if (fn(list[i]))
                res.push(list[i]);
        }
        return res;
    };



    /**
     * Determines the smallest of a list of items as determined by pairwise comparisons from the supplied comparator
     *
     * @func
     * @memberOf Q
     * @category math
     * @param {Function/String} f A comparator function or field specifier for elements in the list
     * @param {Array} list A list of comparable elements
     * @see Q.min
     * @return {*} The smallest element in the list. `undefined` if the list is empty.
     * @example
     *
     *      function cmp(obj) { return obj.x; }
     *      var a = {x: 1}, b = {x: 2}, c = {x: 3};
     *      Q.min(cmp, [a, b, c]); //=> {x: 1}
     */
    Q.min = function (f, list) {
        var len= list.length,
            fn = typeof f == 'function' ? f : Q.field(f),
            item =list[0],
            res=fn(list[0]),
            current =NaN;
        for (var i = 0; i < len; ++i) {
            current = fn(list[i]);
            if (current < res){
                item =list[i];
                res=current
            }
        }
        return item;
    };
    /**
     * Determines the largest of a list of items as determined by pairwise comparisons from the supplied comparator
     *
     * @func
     * @memberOf Q
     * @category math
     * @param {Function/String} f A comparator function or field specifier for elements in the list
     * @param {Array} list A list of comparable elements
     * @see Q.min
     * @return {*} The largest element in the list. `undefined` if the list is empty.
     * @example
     *
     *      function cmp(obj) { return obj.x; }
     *      var a = {x: 1}, b = {x: 2}, c = {x: 3};
     *      Q.max(cmp, [a, b, c]); //=> {x: 3}
     */
    Q.max = function (f, list) {
        var len= list.length,
            fn = typeof f == 'function' ? f : Q.field(f),
            item =list[0],
            res=fn(list[0]),
            current =NaN;
        for (var i = 0; i < len; ++i) {
            current = fn(list[i]);
            if (current > res){
                item =list[i];
                res=current
            }
        }
        return item;
    };
    /**
     * Returns a function that when supplied an object returns the indicated property of that object, if it exists.
     *
     * @func
     * @memberOf R
     * @category Object
     * @sig s -> {s: a} -> a
     * @param {String} property The property name
     * @param {Object} obj The object to query
     * @return {*} The value at obj.p
     * @example
     *
     *      R.prop('x', {x: 100}); //=> 100
     *      R.prop('x', {}); //=> undefined
     *
     *      var fifth = R.prop(4); // indexed from 0, remember
     *      fifth(['Bashful', 'Doc', 'Dopey', 'Grumpy', 'Happy', 'Sleepy', 'Sneezy']);
     *      //=> 'Happy'
     */
    Q.field = function(property,obj){
        if(arguments.length == 1) {
            return function(obj){
                return obj[property];
            }
        }
        return obj[property];
    };

    /**
     * A function that does nothing but return the parameter supplied to it. Good as a default
     * or placeholder function.
     *
     * @func
     * @memberOf R
     * @category Core
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
    Q.identity = function(x){
        return x;
    };



    Q.groupBy = function (f, data) {
        return R.groupBy(typeof f == 'function' ? f : R.prop(f), data);
    };

    Q.sortBy = function (f, data) {
        return R.sortBy(typeof f == 'function' ? f
            : f[0] == '-' ? function (d) {
            return -1 * d[f.substring(1)]
        } : R.prop(f), data);
    };

    Q.collect = function (f, obj) {
        var res = [];
        for (var key in obj)
            res.push(f(obj[key], key));
        return res;
    };

    Q.map = function (f, array) {
        var res = [];
        for (var i = 0; i < array.length; ++i)
            res.push(f(array[i], i));
        return res;
    };

    Q.taper = function (f, res, obj) {
        for (var key in obj)
            res = f(res, obj[key]);
        return res;
    };

    Q.mapValues = function (f, obj) {
        var res = {};
        for (var key in obj)
            res[key] = f(obj[key]);
        return res;
    };

    Q.abate = function (f, obj) {
        var res = [];
        for (var key in obj)
            res = res.concat(f(obj[key], key));
        return res;
    };

    Q.expand = function (fn, arr) {
        return Q.map(function (d) {
            return Q.mixin(d, fn(d));
        }, arr);
    };

    Q.reduce = function (fn, res, arr) {
        for (var i = 0; i < arr.length; ++i) {
            res = fn(res, arr[i]);
        }
        return res;
    };

    Q.map = function (fn, list) {
        var idx = -1, len = list.length, result = new Array(len);
        while (++idx < len) {
            result[idx] = fn(list[idx]);
        }
        return result;
    };

    Q.mixin = function mixin(left, right) {
        var res = {}, key = "";
        for (key in left)
            res[key] = left[key];
        for (key in right)
            res[key] = right[key];
        return res;
    };

    // All the functional goodness, wrapped in a nice little package, just for you!
    return Q;
}));
