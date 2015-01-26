/**
 * Returns a function that when supplied an object returns the indicated property of that object, if it exists.
 *
 * @func
 * @memberOf Q
 * @category Object
 * @sig s -> {s: a} -> a
 * @param {String} property The property name
 * @param {Object} obj The object to query
 * @return {*} The value at obj.p
 * @example
 *
 *      Q.prop('x', {x: 100}); //=> 100
 *      Q.prop('x', {}); //=> undefined
 *
 *      var fifth = Q.prop(4); // indexed from 0, remember
 *      fifth(['Bashful', 'Doc', 'Dopey', 'Grumpy', 'Happy', 'Sleepy', 'Sneezy']);
 *      //=> 'Happy'
 */
Q.field = _curry2(function (property, obj) {
    if (arguments.length == 1) {
        return function (obj) {
            return obj[property];
        }
    }
    return obj[property];
});

/**
 * Returns a single item by iterating through the obj, successively calling the iterator
 * function and passing it an accumulator value, the object value for the current key, and the current key
 * then passing the result to the next call.
 *
 * The iterator function receives two values: *(acc, value)*
 *
 * @func
 * @memberOf Q
 * @category core
 * @category List
 * @sig (a,b -> a) -> a -> [b] -> a
 * @param {Function} f The iterator function. Receives three values, the accumulator,
 *  the object value for the current key, and the current key
 * @param {*} acc The accumulator value.
 * @param {Object} obj The object to iterate over.
 * @return {*} The final, accumulated value.
 * @example
 *
 *  Q.taper(function(acc, val) { return acc+ val; }, 10,  {a: 2, b : 4}); //=> 16
 *  Q.taper(function(acc, val,key){return acc.concat( val,key);},[1,"e"], {a: 2, b : 4});//=>[[1,"e", 2,"a",4,"b"]
 */
Q.taper = _curry3(function (f, acc, obj) {
    for (var key in obj)
        acc = f(acc, obj[key],key);
    return acc;
});

/**
 * Returns an object containing the same keys as passed object and values that are result of function called
 * for each object key value pair
 *
 * The iterator function receives two values: *(value,key)*
 *
 * @func
 * @memberOf Q
 * @category core
 * @category Object
 * @sig (a,b -> a) -> a -> [b] -> a
 * @param {Function} f The iterator function. Receives three values, the accumulator,
 *  the object value for the current key, and the current key
 * @param {Object} obj The object to iterate over.
 * @return {*} The final, accumulated value.
 * @example
 *
 *   Q.mapValues(function(num) { return num * 3; },{ 'a': 1, 'b': 2, 'c': 3}) => { 'a': 3, 'b': 6, 'c': 9 }
 *   Q.mapValues('age',characters) => { 'fred': 40, 'pebbles': 1 }
 */
Q.mapValues = _curry2(function (f, obj) {
    var fn = typeof f == 'function' ? f : Q.field(f),
        res = {};
    for (var key in obj)
        res[key] = fn(obj[key]);
    return res;
});

/**
 * Create a new object with the own properties of a
 * merged with the own properties of object b.
 * This function will *not* mutate passed-in objects.
 *
 * @func
 * @memberOf Q
 * @category Object
 * @sig {k: v} -> {k: v} -> {k: v}
 * @param {Object} left source object
 * @param {Object} right object with higher precedence in output
 * @returns {Object} Returns the destination object.
 * @example
 *
 *      Q.mixin({ 'name': 'fred', 'age': 10 }, { 'age': 40 });
 *      //=> { 'name': 'fred', 'age': 40 }
 */
var mixin = Q.mixin = _curry2(function mixin(left, right) {
    var res = {}, key;
    for (key in left)
        res[key] = left[key];
    for (key in right)
        res[key] = right[key];
    return res;
});

/**
 * Returns a partial copy of an object containing only the keys specified.  If the key does not exist, the
 * property is ignored.
 *
 * @func
 * @memberOf Q
 * @category Object
 * @sig [k] -> {k: v} -> {k: v}
 * @param {Array} keys an array of String property keys to copy onto a new object
 * @param {Object} obj The object to copy from
 * @return {Object} A new object with only properties from `keys` on it.
 * @example
 *
 *      Q.pick(['a', 'd'], {a: 1, b: 2, c: 3, d: 4}); //=> {a: 1, d: 4}
 *      Q.pick(['a', 'e', 'f'], {a: 1, b: 2, c: 3, d: 4}); //=> {a: 1}
 */
Q.pick = _curry2(function(keys, obj) {
    var res ={},len = keys.length, key;
    for(var i= 0; i < len; ++i) {
        key = keys[i];
        if(obj.hasOwnProperty(key)){
            res[key] = obj[key];
        }
    }
    return res;
});
/**
 * Returns a partial copy of an object omitting the keys specified.
 *
 * @func
 * @memberOf Q
 * @category Object
 * @sig [k] -> {k: v} -> {k: v}
 * @param {Array} keys an array of String property names to omit from the new object
 * @param {Object} obj The object to copy from
 * @return {Object} A new object with properties from `names` not on it.
 * @example
 *
 *      Q.omit(['a', 'd'], {a: 1, b: 2, c: 3, d: 4}); //=> {b: 2, c: 3}
 */
Q.omit = _curry2(function(keys, obj) {
    var res ={},len = keys.length;
    for(var key in obj) {
        if(keys.indexOf(key) == -1){
            res[key] = obj[key];
        }
    }
    return res;
});

/**
 * Returns a list containing the names of all the enumerable own
 * properties of the supplied object.
 *
 * @func
 * @memberOf Q
 * @category Object
 * @sig {k: v} -> [k]
 * @param {Object} obj The object to extract properties from
 * @return {Array} An array of the object's own properties
 * @example
 *
 *      Q.keys({a: 1, b: 2, c: 3}); //=> ['a', 'b', 'c']
 */
Q.keys = function (obj) {
    return Object.keys(obj);
};

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
 *      var trend = Q.construct(["year", "amount", "name"]);
 *      trend(1937,100, 'foo') => { year:1937, amount: 100, name: 'foo'}
 *
 */
Q.construct = function(keys) {
    return function () {
        var len = keys.length, res = {};
        for (var i = 0; i < len; ++i) {
            res[keys[i]] = arguments[i];
        }
        return res;
    }
};