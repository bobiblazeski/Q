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
var taper = _curry3(function (f, acc, obj) {
    for (var key in obj)
        acc = f(acc, obj[key],key);
    return acc;
});
