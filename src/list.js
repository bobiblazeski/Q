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
 * @param {Function|Object} f The predicate function used to determine if the element is the
 *        desired one. Or specification object
 * @param {Array} list The array to consider.
 * @return {Object} The element found, or `undefined`.
 * @example
 *
 *      var xs = [{a: 1}, {a: 2}, {a: 3}];
 *      Q.find(function(d){ return d.a == 2;}, xs); //=> {a: 2}
 *      Q.find({ a : 2}, xs); //=> {a: 2}
 *      Q.find({a: 4},(xs); //=> undefined
 */
var find = Q.find = _curry2(function(f, list) {
    var len = list.length,
        fn = typeof f == 'function' ? f : Q.mold(f);
    for (var i = 0; i < len; ++i) {
        if (fn(list[i]))
            return list[i];
    }
    return undefined;
});

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
 *      Q.filter(isEven, [1, 2, 3, 4]); //=> [2, 4]
 */
Q.filter = _curry2(function (f, list) {
    var res = [],
        len = list.length,
        fn = typeof f == 'function' ? f : Q.mold(f);
    for (var i = 0; i < len; ++i) {
        if (fn(list[i]))
            res.push(list[i]);
    }
    return res;
});

/**
 * Returns a new list by plucking the same named property off all objects in the list supplied.
 *
 * @func
 * @memberOf Q
 * @category List
 * @sig String -> {*} -> [*]
 * @param {Number|String} key The key name to pluck off of each object.
 * @param {Array} list The array to consider.
 * @return {Array} The list of values for the given key.
 * @example
 *
 *     Q.pluck('a',[{a: 1}, {a: 2}]); //=> [1, 2]
 *     Q.pluck(0,[[1, 2], [3, 4]]);   //=> [1, 3]
 */
Q.pluck = _curry2(function(key, list) {
    return Q.map(Q.field(key), list);
});

/**
 * Returns a new list by collecting into list results of applying the function to all object key value pairs
 *
 * @func
 * @memberOf Q
 * @category Obj
 * @param {Function|String} f The function executed for each key value pair
 * @param {Object} obj The obj to consider.
 * @return {Array} The list of results of applying the function to all key value pairs
 * @example
 *
 *     Q.collect(Math.sqrt,{ a:4,b:9,c:16}); //=> [2, 3, 4]
 */
Q.collect = _curry2(function (f, obj) {
    var res = [];
    for (var key in obj)
        res.push(f(obj[key], key));
    return res;
});

/**
 * Returns a new list, constructed by applying the supplied function to every element of the
 * supplied list.
 *
 * @func
 * @memberOf Q
 * @category core
 * @category List
 * @sig (a -> b) -> [a] -> [b]
 * @param {Function} f The function to be called on every element of the input `list`.
 * @param {Array} list The list to be iterated over.
 * @return {Array} The new list.
 * @example
 *
 *      Q.map(function(x) { return x * 2; }, [1, 2, 3]); //=> [2, 4, 6]
 */
Q.map = _curry2(function (f, list) {
    var len = list.length,
        res = new Array(len);
    for (var i = 0; i < len; ++i)
        res[i] =f(list[i], i);
    return res;
});

/**
 * Returns a single item by iterating through the list, successively calling the iterator
 * function and passing it an accumulator value and the current value from the array, and
 * then passing the result to the next call.
 *
 * The iterator function receives two values: *(acc, value)*
 *
 * @func
 * @memberOf Q
 * @category core
 * @category List
 * @sig (a,b -> a) -> a -> [b] -> a
 * @param {Function} fn The iterator function. Receives two values, the accumulator and the
 *        current element from the array.
 * @param {*} acc The accumulator value.
 * @param {Array} list The list to iterate over.
 * @return {*} The final, accumulated value.
 * @example
 *
 *      Q.fold(function(a, b) { return a + b; }, 10, [1, 2, 3]); //=> 16
 */
Q.fold = _curry3(function (fn, acc, list) {
    var len = list.length;
    for (var i = 0; i < len; ++i) {
        acc = fn(acc, list[i]);
    }
    return acc;
});

/**
 * Returns a new list by concatenating into list results of applying the function to all object key value pairs
 *
 * @func
 * @memberOf Q
 * @category Obj
 * @param {Function} f The function executed for each key value pair
 * @param {Object} obj The obj to consider.
 * @return {Array} The list of results of applying the function to all key value pairs
 * @example
 *
 *     Q.abate(function(d){ return [-d,d];},{ a:4,b:9,c:16}); //=> [-4,4,-9,9,-16,16]
 */
Q.abate = _curry2(function (f, obj) {
    var res = [];
    for (var key in obj)
        res = res.concat(f(obj[key], key));
    return res;
});

/**
 * Returns a new list by concatenating into list results of applying the function to all elements and their index
 *
 * @func
 * @memberOf Q
 * @category List
 * @param {Function} fn The function executed for each key value pair
 * @param {Array} list The array
 * @return {Array} The list of results of applying the function to all key value pairs
 * @example
 *
 *     Q.curtail(function(d){ return [-d,d];},[4,9,16]); //=> [-4,4,-9,9,-16,16]
 */
Q.curtail = _curry2(function (fn,list) {
    var acc = [],len= list.length;
    for (var i = 0; i < len; ++i) {
        acc= acc.concat(fn(list[i],i));
    }
    return acc;
});
// TODO Probably should be excluded, seems not general enough
Q.expand = function (fn, arr) {
    return Q.map(function (d) {
        return Q.mixin(d, fn(d));
    }, arr);
};

/**
 * Returns a list of numbers from `from` (inclusive) to `to`
 * (exclusive).
 *
 * @func
 * @memberOf Q
 * @category List
 * @sig Number -> Number -> [Number]
 * @param {Number} from The first number in the list.
 * @param {Number} to One more than the last number in the list.
 * @return {Array} The list of numbers in tthe set `[a, b)`.
 * @example
 *
 *      Q.range(1, 5);    //=> [1, 2, 3, 4]
 *      Q.range(50, 53);  //=> [50, 51, 52]
 */
Q.range = _curry2(function range(from, to) {
    if (from >= to) {
        return [];
    }
    var idx = 0, result = new Array(Math.floor(to) - Math.ceil(from));
    while (from < to) {
        result[idx++] = from++;
    }
    return result;
});

/**
 * Returns a new list containing only one copy of each element in the original list.
 * Equality is strict here, meaning reference equality for objects and non-coercing equality
 * for primitives.
 *
 * @func
 * @memberOf Q
 * @category List
 * @sig [a] -> [a]
 * @param {Array} list The array to consider.
 * @return {Array} The list of unique items.
 * @example
 *
 *      Q.unique([1, 1, 2, 1]); //=> [1, 2]
 *      Q.unique([{}, {}]);     //=> [{}, {}]
 *      Q.unique([1, '1']);     //=> [1, '1']
 */
Q.unique = function unique(list) {
    var idx = -1, len = list.length;
    var result = [], item;
    while (++idx < len) {
        item = list[idx];
        if (result.indexOf(item) == -1) {
            result[result.length] = item;
        }
    }
    return result;
};