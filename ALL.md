<a name="Q"></a>
#class: Q
**Members**

* [class: Q](#Q)
  * [Q.always(val)](#Q.always)
  * [Q.arity(n, fn)](#Q.arity)
  * [Q.call(fn, ...args)](#Q.call)
  * [Q.comparator(pred)](#Q.comparator)
  * [Q.cond(...functions)](#Q.cond)
  * [Q.converge(after, ...functions)](#Q.converge)
  * [Q.flip(fn)](#Q.flip)
  * [Q.fromPairs(pairs)](#Q.fromPairs)
  * [Q.func(funcName, obj)](#Q.func)
  * [Q.identity(x)](#Q.identity)
  * [Q.isArrayLike(x)](#Q.isArrayLike)
  * [Q.isEmpty(list)](#Q.isEmpty)
  * [Q.isNil(x)](#Q.isNil)
  * [Q.isSet(list)](#Q.isSet)
  * [Q.keysIn(obj)](#Q.keysIn)
  * [Q.memoize(fn)](#Q.memoize)
  * [Q.nAry(n, fn)](#Q.nAry)
  * [Q.not(f)](#Q.not)
  * [Q.nthArg(n)](#Q.nthArg)
  * [Q.once(fn)](#Q.once)
  * [Q.prependTo(list, el)](#Q.prependTo)
  * [Q.prop(p, obj)](#Q.prop)
  * [Q.propOf(obj, p)](#Q.propOf)
  * [Q.reverse(list)](#Q.reverse)
  * [Q.toPairsIn(obj)](#Q.toPairsIn)
  * [Q.trim(str)](#Q.trim)
  * [Q.type(val)](#Q.type)
  * [Q.unapply(fn)](#Q.unapply)
  * [Q.unary(fn)](#Q.unary)
  * [Q.valuesIn(obj)](#Q.valuesIn)
  * [Q.F()](#Q.F)
  * [Q.I()](#Q.I)
  * [Q.T()](#Q.T)
  * [Q.add(a, b)](#Q.add)
  * [Q.all(fn, list)](#Q.all)
  * [Q.and(f, g)](#Q.and)
  * [Q.any(fn, list)](#Q.any)
  * [Q.append(el, list)](#Q.append)
  * [Q.appendTo(list, el)](#Q.appendTo)
  * [Q.apply(fn, args)](#Q.apply)
  * [Q.binary(fn)](#Q.binary)
  * [Q.bind(fn, thisObj)](#Q.bind)
  * [Q.clone(value)](#Q.clone)
  * [Q.compose(...functions)](#Q.compose)
  * [Q.containsWith(pred, x, list)](#Q.containsWith)
  * [Q.createMapEntry(key, val)](#Q.createMapEntry)
  * [Q.curryN(fnArity, fn)](#Q.curryN)
  * [Q.dec(n)](#Q.dec)
  * [Q.difference(list1, list2)](#Q.difference)
  * [Q.differenceWith(pred, list1, list2)](#Q.differenceWith)
  * [Q.drop(n, list)](#Q.drop)
  * [Q.dropWhile(fn, list)](#Q.dropWhile)
  * [Q.empty()](#Q.empty)
  * [Q.eq(a, b)](#Q.eq)
  * [Q.eqProps(prop, obj1, obj2)](#Q.eqProps)
  * [Q.filter(fn, list)](#Q.filter)
  * [Q.filterIndexed(fn, list)](#Q.filterIndexed)
  * [Q.find(fn, list)](#Q.find)
  * [Q.findIndex(fn, list)](#Q.findIndex)
  * [Q.findLast(fn, list)](#Q.findLast)
  * [Q.findLastIndex(fn, list)](#Q.findLastIndex)
  * [Q.flatten(list)](#Q.flatten)
  * [Q.foldl(fn, acc, list)](#Q.foldl)
  * [Q.foldlIndexed(fn, acc, list)](#Q.foldlIndexed)
  * [Q.foldr(fn, acc, list)](#Q.foldr)
  * [Q.foldrIndexed(fn, acc, list)](#Q.foldrIndexed)
  * [Q.forEach(fn, list)](#Q.forEach)
  * [Q.forEachIndexed(fn, list)](#Q.forEachIndexed)
  * [Q.functionsIn(obj)](#Q.functionsIn)
  * [Q.get()](#Q.get)
  * [Q.groupBy(fn, list)](#Q.groupBy)
  * [Q.has(prop, obj)](#Q.has)
  * [Q.hasIn(prop, obj)](#Q.hasIn)
  * [Q.ifElse(condition, onTrue, onFalse)](#Q.ifElse)
  * [Q.inc(n)](#Q.inc)
  * [Q.indexOf(target, list)](#Q.indexOf)
  * [Q.insert(index, elt, list)](#Q.insert)
  * [Q.insertAll(index, elts, list)](#Q.insertAll)
  * [Q.invoker(len, method)](#Q.invoker)
  * [Q.is(ctor, val)](#Q.is)
  * [Q.join(separator, xs)](#Q.join)
  * [Q.keys(obj)](#Q.keys)
  * [Q.lPartial(fn, [...args])](#Q.lPartial)
  * [Q.lastIndexOf(target, list)](#Q.lastIndexOf)
  * [Q.length(list)](#Q.length)
  * [Q.lens(get, set)](#Q.lens)
  * [Q.map(fn, list)](#Q.map)
  * [Q.mapAccumL(fn, acc, list)](#Q.mapAccumL)
  * [Q.mapAccumR(fn, acc, list)](#Q.mapAccumR)
  * [Q.mapIndexed(fn, list)](#Q.mapIndexed)
  * [Q.mapObj(fn, obj)](#Q.mapObj)
  * [Q.mapObjIndexed(fn, obj)](#Q.mapObjIndexed)
  * [Q.match(rx, str)](#Q.match)
  * [Q.max(list)](#Q.max)
  * [Q.maxBy(keyFn, list)](#Q.maxBy)
  * [Q.min(list)](#Q.min)
  * [Q.minBy(keyFn, list)](#Q.minBy)
  * [Q.multiply(a, b)](#Q.multiply)
  * [Q.negate(n)](#Q.negate)
  * [Q.nth(idx, list)](#Q.nth)
  * [Q.of(x)](#Q.of)
  * [Q.omit(names, obj)](#Q.omit)
  * [Q.op(fn)](#Q.op)
  * [Q.or(f, g)](#Q.or)
  * [Q.pCompose(...functions)](#Q.pCompose)
  * [Q.pPipe(...functions)](#Q.pPipe)
  * [Q.partition(pred, list)](#Q.partition)
  * [Q.pathEq(path, val, obj)](#Q.pathEq)
  * [Q.pathOn(sep, path)](#Q.pathOn)
  * [Q.pick(names, obj)](#Q.pick)
  * [Q.pickAll(names, obj)](#Q.pickAll)
  * [Q.pickBy(pred, obj)](#Q.pickBy)
  * [Q.pipe(...functions)](#Q.pipe)
  * [Q.pluck(key, list)](#Q.pluck)
  * [Q.prepend(el, list)](#Q.prepend)
  * [Q.product(list)](#Q.product)
  * [Q.propEq(name, val)](#Q.propEq)
  * [Q.propOr(p, val, obj)](#Q.propOr)
  * [Q.props(ps, obj)](#Q.props)
  * [Q.rPartial(fn, [...args])](#Q.rPartial)
  * [Q.range(from, to)](#Q.range)
  * [Q.reject(fn, list)](#Q.reject)
  * [Q.rejectIndexed(fn, list)](#Q.rejectIndexed)
  * [Q.remove(start, count, list)](#Q.remove)
  * [Q.replace(pattern, replacement, str)](#Q.replace)
  * [Q.scanl(fn, acc, list)](#Q.scanl)
  * [Q.slice(a, b, xs)](#Q.slice)
  * [Q.sort(comparator, list)](#Q.sort)
  * [Q.sortBy(fn, list)](#Q.sortBy)
  * [Q.split(sep, str)](#Q.split)
  * [Q.strIndexOf(c, str)](#Q.strIndexOf)
  * [Q.strLastIndexOf(c, str)](#Q.strLastIndexOf)
  * [Q.substring(indexA, indexB, str)](#Q.substring)
  * [Q.substringFrom(indexA, str)](#Q.substringFrom)
  * [Q.substringTo(indexA, str)](#Q.substringTo)
  * [Q.subtract(a, b)](#Q.subtract)
  * [Q.sum(list)](#Q.sum)
  * [Q.tail([list])](#Q.tail)
  * [Q.take(n, list)](#Q.take)
  * [Q.takeWhile(fn, list)](#Q.takeWhile)
  * [Q.tap(fn, x)](#Q.tap)
  * [Q.times(fn, n)](#Q.times)
  * [Q.toLower(str)](#Q.toLower)
  * [Q.toPairs(obj)](#Q.toPairs)
  * [Q.toUpper(str)](#Q.toUpper)
  * [Q.unfoldr(fn, seed)](#Q.unfoldr)
  * [Q.uniq(list)](#Q.uniq)
  * [Q.uniqWith(pred, list)](#Q.uniqWith)
  * [Q.unnest(list)](#Q.unnest)
  * [Q.values(obj)](#Q.values)
  * [Q.where(spec, testObj)](#Q.where)
  * [Q.wrap(fn, wrapper)](#Q.wrap)
  * [Q.xprod(as, bs)](#Q.xprod)
  * [Q.zip(list1, list2)](#Q.zip)
  * [Q.zipObj(keys, values)](#Q.zipObj)
  * [Q.zipWith(fn, list1, list2)](#Q.zipWith)
  * [Q.allPass(list, optional)](#Q.allPass)
  * [Q.anyPass(list, optional)](#Q.anyPass)
  * [Q.ap(fns, vs)](#Q.ap)
  * [Q.assoc(prop, val, obj)](#Q.assoc)
  * [Q.assocPath(path, val, obj)](#Q.assocPath)
  * [Q.chain(fn, list)](#Q.chain)
  * [Q.charAt(index, str)](#Q.charAt)
  * [Q.charCodeAt(index, str)](#Q.charCodeAt)
  * [Q.commuteMap(fn, of, list)](#Q.commuteMap)
  * [Q.concat(list1, list2)](#Q.concat)
  * [Q.contains(a, list)](#Q.contains)
  * [Q.countBy(fn, list)](#Q.countBy)
  * [Q.curry(fn)](#Q.curry)
  * [Q.divide(a, b)](#Q.divide)
  * [Q.eqDeep(a, b)](#Q.eqDeep)
  * [Q.evolve(transformations, object)](#Q.evolve)
  * [Q.functions(obj)](#Q.functions)
  * [Q.gt(a, b)](#Q.gt)
  * [Q.gte(a, b)](#Q.gte)
  * [Q.head([list])](#Q.head)
  * [Q.init([list])](#Q.init)
  * [Q.installTo(obj)](#Q.installTo)
  * [Q.intersection(list1, list2)](#Q.intersection)
  * [Q.intersectionWith(pred, list1, list2)](#Q.intersectionWith)
  * [Q.invert(obj)](#Q.invert)
  * [Q.invertObj(obj)](#Q.invertObj)
  * [Q.last([list])](#Q.last)
  * [Q.liftN(fn)](#Q.liftN)
  * [Q.lt(a, b)](#Q.lt)
  * [Q.lte(a, b)](#Q.lte)
  * [Q.mathMod(m, p)](#Q.mathMod)
  * [Q.mixin(a, b)](#Q.mixin)
  * [Q.modulo(a, b)](#Q.modulo)
  * [Q.path(path)](#Q.path)
  * [Q.repeat(value, n)](#Q.repeat)
  * [Q.union(as, bs)](#Q.union)
  * [Q.unionWith(pred, list1, list2)](#Q.unionWith)
  * [Q.useWith(fn, ...transformers)](#Q.useWith)
  * [Q.commute(of, list)](#Q.commute)
  * [Q.constructN(n, Fn)](#Q.constructN)
  * [Q.lift(fn)](#Q.lift)
  * [Q.project(props, objs)](#Q.project)
  * [Q.construct(Fn)](#Q.construct)
  * [Q.abate(f, obj)](#Q.abate)
  * [Q.amend(left, right, lKey, rKey)](#Q.amend)
  * [Q.assembler(keys)](#Q.assembler)
  * [Q.collect(f, obj)](#Q.collect)
  * [Q.curtail(fn, list)](#Q.curtail)
  * [Q.division(divisor, dividend)](#Q.division)
  * [Q.group(f, list)](#Q.group)
  * [Q.innerJoin(on, columns, left, right)](#Q.innerJoin)
  * [Q.isNull(f, auto, obj)](#Q.isNull)
  * [Q.lay(end, [start], [step])](#Q.lay)
  * [Q.least(f, list)](#Q.least)
  * [Q.minus(subtrahend, minuend)](#Q.minus)
  * [Q.most(f, list)](#Q.most)
  * [Q.order(f, list)](#Q.order)
  * [Q.remainder(divisor, dividend)](#Q.remainder)
  * [Q.sift(f, list)](#Q.sift)
  * [Q.single(f, list)](#Q.single)
  * [Q.sumBy(list)](#Q.sumBy)
  * [Q.taper(f, acc, obj)](#Q.taper)

<a name="Q.always"></a>
##Q.always(val)
Returns a function that always returns the given value.

**Params**

- val `*` - The value to wrap in a function  

**Returns**: `function` - A Function :: * -> val.  
**Example**  
var t = Q.always('Tee');
t(); //=> 'Tee'

<a name="Q.arity"></a>
##Q.arity(n, fn)
Wraps a function of any arity (including nullary) in a function that accepts exactly `n`
parameters. Unlike `nAry`, which passes only `n` arguments to the wrapped function,
functions produced by `arity` will pass all provided arguments to the wrapped function.

**Params**

- n `Number` - The desired arity of the returned function.  
- fn `function` - The function to wrap.  

**Returns**: `function` - A new function wrapping `fn`. The new function is
        guaranteed to be of arity `n`.  
**Example**  
var takesTwoArgs = function(a, b) {
  return [a, b];
};
takesTwoArgs.length; //=> 2
takesTwoArgs(1, 2); //=> [1, 2]

var takesOneArg = Q.arity(1, takesTwoArgs);
takesOneArg.length; //=> 1
// All arguments are passed through to the wrapped function
takesOneArg(1, 2); //=> [1, 2]

<a name="Q.call"></a>
##Q.call(fn, ...args)
Returns the result of calling its first argument with the remaining
arguments. This is occasionally useful as a converging function for
`Q.converge`: the left branch can produce a function while the right
branch produces a value to be passed to that function as an argument.

**Params**

- fn `function` - The function to apply to the remaining arguments.  
- ...args `*` - Any number of positional arguments.  

**Returns**: `*`  
**Example**  
var indentN = Q.pipe(Q.times(Q.always(' ')),
                     Q.join(''),
                     Q.replace(/^(?!$)/gm));

var format = Q.converge(Q.call,
                        Q.pipe(Q.prop('indent'), indentN),
                        Q.prop('value'));

format({indent: 2, value: 'foo\nbar\nbaz\n'}); //=> '  foo\n  bar\n  baz\n'

<a name="Q.comparator"></a>
##Q.comparator(pred)
Makes a comparator function out of a function that reports whether the first element is less than the second.

**Params**

- pred `function` - A predicate function of arity two.  

**Returns**: `function` - A Function :: a -> b -> Int that returns `-1` if a < b, `1` if b < a, otherwise `0`.  
**Example**  
var cmp = Q.comparator(function(a, b) {
  return a.age < b.age;
});
var people = [
  // ...
];
Q.sort(cmp, people);

<a name="Q.cond"></a>
##Q.cond(...functions)
Returns a function, `fn`, which encapsulates if/else-if/else logic.
Each argument to `Q.cond` is a [predicate, transform] pair. All of
the arguments to `fn` are applied to each of the predicates in turn
until one returns a "truthy" value, at which point `fn` returns the
result of applying its arguments to the corresponding transformer.
If none of the predicates matches, `fn` returns undefined.

**Params**

- ...functions `function`  

**Returns**: `function`  
**Example**  
var fn = Q.cond(
    [Q.eq(0),   Q.always('water freezes at 0°C')],
    [Q.eq(100), Q.always('water boils at 100°C')],
    [Q.T,       function(temp) { return 'nothing special happens at ' + temp + '°C'; }]
);
fn(0); //=> 'water freezes at 0°C'
fn(50); //=> 'nothing special happens at 50°C'
fn(100); //=> 'water boils at 100°C'

<a name="Q.converge"></a>
##Q.converge(after, ...functions)
Accepts at least three functions and returns a new function. When invoked, this new
function will invoke the first function, `after`, passing as its arguments the
results of invoking the subsequent functions with whatever arguments are passed to
the new function.

**Params**

- after `function` - A function. `after` will be invoked with the return values of
       `fn1` and `fn2` as its arguments.  
- ...functions `function` - A variable number of functions.  

**Returns**: `function` - A new function.  
**Example**  
var add = function(a, b) { return a + b; };
var multiply = function(a, b) { return a * b; };
var subtract = function(a, b) { return a - b; };

//≅ multiply( add(1, 2), subtract(1, 2) );
Q.converge(multiply, add, subtract)(1, 2); //=> -3

var add3 = function(a, b, c) { return a + b + c; };
Q.converge(add3, multiply, add, subtract)(1, 2); //=> 4

<a name="Q.flip"></a>
##Q.flip(fn)
Returns a new function much like the supplied one, except that the first two arguments'
order is reversed.

**Params**

- fn `function` - The function to invoke with its first two parameters reversed.  

**Returns**: `*` - The result of invoking `fn` with its first two parameters' order reversed.  
**Example**  
var mergeThree = function(a, b, c) {
  return ([]).concat(a, b, c);
};

mergeThree(1, 2, 3); //=> [1, 2, 3]

Q.flip(mergeThree)(1, 2, 3); //=> [2, 1, 3]

<a name="Q.fromPairs"></a>
##Q.fromPairs(pairs)
Creates a new object out of a list key-value pairs.

**Params**

- pairs `Array` - An array of two-element arrays that will be the keys and values of the output object.  

**Returns**: `Object` - The object made by pairing up `keys` and `values`.  
**Example**  
Q.fromPairs([['a', 1], ['b', 2],  ['c', 3]]); //=> {a: 1, b: 2, c: 3}

<a name="Q.func"></a>
##Q.func(funcName, obj)
Calls the specified function on the supplied object. Any additional arguments
after `fn` and `obj` are passed in to `fn`. If no additional arguments are passed to `func`,
`fn` is invoked with no arguments.

**Params**

- funcName `String` - The name of the property mapped to the function to invoke  
- obj `Object` - The object  

**Returns**: `*` - The value of invoking `obj.fn`.  
**Example**  
Q.func('add', R, 1, 2); //=> 3

var obj = { f: function() { return 'f called'; } };
Q.func('f', obj); //=> 'f called'

<a name="Q.identity"></a>
##Q.identity(x)
A function that does nothing but return the parameter supplied to it. Good as a default
or placeholder function.

**Params**

- x `*` - The value to return.  

**Returns**: `*` - The input value, `x`.  
**Example**  
Q.identity(1); //=> 1

var obj = {};
Q.identity(obj) === obj; //=> true

<a name="Q.isArrayLike"></a>
##Q.isArrayLike(x)
Tests whether or not an object is similar to an array.

**Params**

- x `*` - The object to test.  

**Returns**: `Boolean` - `true` if `x` has a numeric length property and extreme indices defined; `false` otherwise.  
**Example**  
Q.isArrayLike([]); //=> true
Q.isArrayLike(true); //=> false
Q.isArrayLike({}); //=> false
Q.isArrayLike({length: 10}); //=> false
Q.isArrayLike({0: 'zero', 9: 'nine', length: 10}); //=> true

<a name="Q.isEmpty"></a>
##Q.isEmpty(list)
Reports whether the list has zero elements.

**Params**

- list `Array`  

**Returns**: `Boolean`  
**Example**  
Q.isEmpty([1, 2, 3]); //=> false
Q.isEmpty([]); //=> true
Q.isEmpty(''); //=> true
Q.isEmpty(null); //=> false

<a name="Q.isNil"></a>
##Q.isNil(x)
Checks if the input value is `null` or `undefined`.

**Params**

- x `*` - The value to test.  

**Returns**: `Boolean` - `true` if `x` is `undefined` or `null`, otherwise `false`.  
**Example**  
Q.isNil(null); //=> true
Q.isNil(undefined); //=> true
Q.isNil(0); //=> false
Q.isNil([]); //=> false

<a name="Q.isSet"></a>
##Q.isSet(list)
Returns `true` if all elements are unique, otherwise `false`.
Uniqueness is determined using strict equality (`===`).

**Params**

- list `Array` - The array to consider.  

**Returns**: `Boolean` - `true` if all elements are unique, else `false`.  
**Example**  
Q.isSet(['1', 1]); //=> true
Q.isSet([1, 1]);   //=> false
Q.isSet([{}, {}]); //=> true

<a name="Q.keysIn"></a>
##Q.keysIn(obj)
Returns a list containing the names of all the
properties of the supplied object, including prototype properties.
Note that the order of the output array is not guaranteed to be
consistent across different JS platforms.

**Params**

- obj `Object` - The object to extract properties from  

**Returns**: `Array` - An array of the object's own and prototype properties.  
**Example**  
var F = function() { this.x = 'X'; };
F.prototype.y = 'Y';
var f = new F();
Q.keysIn(f); //=> ['x', 'y']

<a name="Q.memoize"></a>
##Q.memoize(fn)
Creates a new function that, when invoked, caches the result of calling `fn` for a given
argument set and returns the result. Subsequent calls to the memoized `fn` with the same
argument set will not result in an additional call to `fn`; instead, the cached result
for that set of arguments will be returned.

Note that this version of `memoize` effectively handles only string and number
parameters.  Also note that it does not work on variadic functions.

**Params**

- fn `function` - The function to be wrapped by `memoize`.  

**Returns**: `function` - Returns a memoized version of `fn`.  
**Example**  
var numberOfCalls = 0;
var trackedAdd = function(a, b) {
  numberOfCalls += 1;
  return a + b;
};
var memoTrackedAdd = Q.memoize(trackedAdd);

memoTrackedAdd(1, 2); //=> 3
numberOfCalls; //=> 1
memoTrackedAdd(1, 2); //=> 3
numberOfCalls; //=> 1
memoTrackedAdd(2, 3); //=> 5
numberOfCalls; //=> 2

// Note that argument order matters
memoTrackedAdd(2, 1); //=> 3
numberOfCalls; //=> 3

<a name="Q.nAry"></a>
##Q.nAry(n, fn)
Wraps a function of any arity (including nullary) in a function that accepts exactly `n`
parameters. Any extraneous parameters will not be passed to the supplied function.

**Params**

- n `Number` - The desired arity of the new function.  
- fn `function` - The function to wrap.  

**Returns**: `function` - A new function wrapping `fn`. The new function is guaranteed to be of
        arity `n`.  
**Example**  
var takesTwoArgs = function(a, b) {
  return [a, b];
};
takesTwoArgs.length; //=> 2
takesTwoArgs(1, 2); //=> [1, 2]

var takesOneArg = Q.nAry(1, takesTwoArgs);
takesOneArg.length; //=> 1
// Only `n` arguments are passed to the wrapped function
takesOneArg(1, 2); //=> [1, undefined]

<a name="Q.not"></a>
##Q.not(f)
A function wrapping a call to the given function in a `!` operation.  It will return `true` when the
underlying function would return a false-y value, and `false` when it would return a truth-y one.

**Params**

- f `function` - a predicate  

**Returns**: `function` - a function that applies its arguments to `f` and logically inverts its output.  
**Example**  
var gt10 = function(x) { return x > 10; };
var f = Q.not(gt10);
f(11); //=> false
f(9); //=> true

<a name="Q.nthArg"></a>
##Q.nthArg(n)
Returns a function which returns its nth argument.

**Params**

- n `Number`  

**Returns**: `function`  
**Example**  
Q.nthArg(1)('a', 'b', 'c'); //=> 'b'
Q.nthArg(-1)('a', 'b', 'c'); //=> 'c'

<a name="Q.once"></a>
##Q.once(fn)
Accepts a function `fn` and returns a function that guards invocation of `fn` such that
`fn` can only ever be called once, no matter how many times the returned function is
invoked.

**Params**

- fn `function` - The function to wrap in a call-only-once wrapper.  

**Returns**: `function` - The wrapped function.  
**Example**  
var addOneOnce = Q.once(function(x){ return x + 1; });
addOneOnce(10); //=> 11
addOneOnce(addOneOnce(50)); //=> 11

<a name="Q.prependTo"></a>
##Q.prependTo(list, el)
Flipped version of Q.prepend.

**Params**

- list `Array`  
- el `*`  

**Returns**: `Array`  
**Example**  
Q.prependTo(['fi', 'fo', 'fum'], 'fee'); //=> ['fee', 'fi', 'fo', 'fum']

<a name="Q.prop"></a>
##Q.prop(p, obj)
Returns a function that when supplied an object returns the indicated property of that object, if it exists.

**Params**

- p `String` - The property name  
- obj `Object` - The object to query  

**Returns**: `*` - The value at `obj.p`.  
**Example**  
Q.prop('x', {x: 100}); //=> 100
Q.prop('x', {}); //=> undefined

<a name="Q.propOf"></a>
##Q.propOf(obj, p)
Returns the value at the specified property.
The only difference from `prop` is the parameter order.

**Params**

- obj `Object` - The object to query  
- p `String` - The property name  

**Returns**: `*` - The value at `obj.p`.  
**Example**  
Q.propOf({x: 100}, 'x'); //=> 100

<a name="Q.reverse"></a>
##Q.reverse(list)
Returns a new list with the same elements as the original list, just
in the reverse order.

**Params**

- list `Array` - The list to reverse.  

**Returns**: `Array` - A copy of the list in reverse order.  
**Example**  
Q.reverse([1, 2, 3]);  //=> [3, 2, 1]
Q.reverse([1, 2]);     //=> [2, 1]
Q.reverse([1]);        //=> [1]
Q.reverse([]);         //=> []

<a name="Q.toPairsIn"></a>
##Q.toPairsIn(obj)
Converts an object into an array of key, value arrays.
The object's own properties and prototype properties are used.
Note that the order of the output array is not guaranteed to be
consistent across different JS platforms.

**Params**

- obj `Object` - The object to extract from  

**Returns**: `Array` - An array of key, value arrays from the object's own
        and prototype properties.  
**Example**  
var F = function() { this.x = 'X'; };
F.prototype.y = 'Y';
var f = new F();
Q.toPairsIn(f); //=> [['x','X'], ['y','Y']]

<a name="Q.trim"></a>
##Q.trim(str)
Removes (strips) whitespace from both ends of the string.

**Params**

- str `String` - The string to trim.  

**Returns**: `String` - Trimmed version of `str`.  
**Example**  
Q.trim('   xyz  '); //=> 'xyz'
Q.map(Q.trim, Q.split(',', 'x, y, z')); //=> ['x', 'y', 'z']

<a name="Q.type"></a>
##Q.type(val)
Gives a single-word string description of the (native) type of a value, returning such
answers as 'Object', 'Number', 'Array', or 'Null'.  Does not attempt to distinguish user
Object types any further, reporting them all as 'Object'.

**Params**

- val `*` - The value to test  

**Returns**: `String`  
**Example**  
Q.type({}); //=> "Object"
Q.type(1); //=> "Number"
Q.type(false); //=> "Boolean"
Q.type('s'); //=> "String"
Q.type(null); //=> "Null"
Q.type([]); //=> "Array"
Q.type(/[A-z]/); //=> "RegExp"

<a name="Q.unapply"></a>
##Q.unapply(fn)
Takes a function `fn`, which takes a single array argument, and returns
a function which:

  - takes any number of positional arguments;
  - passes these arguments to `fn` as an array; and
  - returns the result.

In other words, Q.unapply derives a variadic function from a function
which takes an array. Q.unapply is the inverse of Q.apply.

**Params**

- fn `function`  

**Returns**: `function`  
**Example**  
Q.unapply(JSON.stringify)(1, 2, 3); //=> '[1,2,3]'

<a name="Q.unary"></a>
##Q.unary(fn)
Wraps a function of any arity (including nullary) in a function that accepts exactly 1
parameter. Any extraneous parameters will not be passed to the supplied function.

**Params**

- fn `function` - The function to wrap.  

**Returns**: `function` - A new function wrapping `fn`. The new function is guaranteed to be of
        arity 1.  
**Example**  
var takesTwoArgs = function(a, b) {
  return [a, b];
};
takesTwoArgs.length; //=> 2
takesTwoArgs(1, 2); //=> [1, 2]

var takesOneArg = Q.unary(takesTwoArgs);
takesOneArg.length; //=> 1
// Only 1 argument is passed to the wrapped function
takesOneArg(1, 2); //=> [1, undefined]

<a name="Q.valuesIn"></a>
##Q.valuesIn(obj)
Returns a list of all the properties, including prototype properties,
of the supplied object.
Note that the order of the output array is not guaranteed to be
consistent across different JS platforms.

**Params**

- obj `Object` - The object to extract values from  

**Returns**: `Array` - An array of the values of the object's own and prototype properties.  
**Example**  
var F = function() { this.x = 'X'; };
F.prototype.y = 'Y';
var f = new F();
Q.valuesIn(f); //=> ['X', 'Y']

<a name="Q.F"></a>
##Q.F()
A function that always returns `false`. Any passed in parameters are ignored.

**Returns**: `Boolean` - false  
**Example**  
Q.F(); //=> false

<a name="Q.I"></a>
##Q.I()
<a name="Q.T"></a>
##Q.T()
A function that always returns `true`. Any passed in parameters are ignored.

**Returns**: `Boolean` - `true`.  
**Example**  
Q.T(); //=> true

<a name="Q.add"></a>
##Q.add(a, b)
Adds two numbers (or strings). Equivalent to `a + b` but curried.

**Params**

- a `Number` | `String` - The first value.  
- b `Number` | `String` - The second value.  

**Returns**: `Number` | `String` - The result of `a + b`.  
**Example**  
var increment = Q.add(1);
increment(10);   //=> 11
Q.add(2, 3);       //=>  5
Q.add(7)(10);      //=> 17

<a name="Q.all"></a>
##Q.all(fn, list)
Returns `true` if all elements of the list match the predicate, `false` if there are any
that don't.

**Params**

- fn `function` - The predicate function.  
- list `Array` - The array to consider.  

**Returns**: `Boolean` - `true` if the predicate is satisfied by every element, `false`
        otherwise.  
**Example**  
var lessThan2 = Q.flip(Q.lt)(2);
var lessThan3 = Q.flip(Q.lt)(3);
var xs = Q.range(1, 3);
xs; //=> [1, 2]
Q.all(lessThan2)(xs); //=> false
Q.all(lessThan3)(xs); //=> true

<a name="Q.and"></a>
##Q.and(f, g)
A function wrapping calls to the two functions in an `&&` operation, returning the result of the first
function if it is false-y and the result of the second function otherwise.  Note that this is
short-circuited, meaning that the second function will not be invoked if the first returns a false-y
value.

**Params**

- f `function` - a predicate  
- g `function` - another predicate  

**Returns**: `function` - a function that applies its arguments to `f` and `g` and ANDs their outputs together.  
**Example**  
var gt10 = function(x) { return x > 10; };
var even = function(x) { return x % 2 === 0 };
var f = Q.and(gt10, even);
f(100); //=> true
f(101); //=> false

<a name="Q.any"></a>
##Q.any(fn, list)
Returns `true` if at least one of elements of the list match the predicate, `false`
otherwise.

**Params**

- fn `function` - The predicate function.  
- list `Array` - The array to consider.  

**Returns**: `Boolean` - `true` if the predicate is satisfied by at least one element, `false`
        otherwise.  
**Example**  
var lessThan0 = Q.flip(Q.lt)(0);
var lessThan2 = Q.flip(Q.lt)(2);
var xs = Q.range(1, 3);
xs; //=> [1, 2]
Q.any(lessThan0)(xs); //=> false
Q.any(lessThan2)(xs); //=> true

<a name="Q.append"></a>
##Q.append(el, list)
Returns a new list containing the contents of the given list, followed by the given
element.

**Params**

- el `*` - The element to add to the end of the new list.  
- list `Array` - The list whose contents will be added to the beginning of the output
       list.  

**Returns**: `Array` - A new list containing the contents of the old list followed by `el`.  
**Example**  
Q.append('tests', ['write', 'more']); //=> ['write', 'more', 'tests']
Q.append('tests', []); //=> ['tests']
Q.append(['tests'], ['write', 'more']); //=> ['write', 'more', ['tests']]

<a name="Q.appendTo"></a>
##Q.appendTo(list, el)
Flipped version of Q.append.

**Params**

- list `Array`  
- el `*`  

**Returns**: `Array`  
**Example**  
Q.appendTo([], 1); //=> [1]
Q.appendTo([1, 2, 3], 4); //=> [1, 2, 3, 4]
Q.appendTo([1, 2, 3], [4, 5, 6]); //=> [1, 2, 3, [4, 5, 6]]

<a name="Q.apply"></a>
##Q.apply(fn, args)
Applies function `fn` to the argument list `args`. This is useful for
creating a fixed-arity function from a variadic function. `fn` should
be a bound function if context is significant.

**Params**

- fn `function`  
- args `Array`  

**Returns**: `*`  
**Example**  
var nums = [1, 2, 3, -99, 42, 6, 7];
Q.apply(Math.max, nums); //=> 42

<a name="Q.binary"></a>
##Q.binary(fn)
Wraps a function of any arity (including nullary) in a function that accepts exactly 2
parameters. Any extraneous parameters will not be passed to the supplied function.

**Params**

- fn `function` - The function to wrap.  

**Returns**: `function` - A new function wrapping `fn`. The new function is guaranteed to be of
        arity 2.  
**Example**  
var takesThreeArgs = function(a, b, c) {
  return [a, b, c];
};
takesThreeArgs.length; //=> 3
takesThreeArgs(1, 2, 3); //=> [1, 2, 3]

var takesTwoArgs = Q.binary(takesThreeArgs);
takesTwoArgs.length; //=> 2
// Only 2 arguments are passed to the wrapped function
takesTwoArgs(1, 2, 3); //=> [1, 2, undefined]

<a name="Q.bind"></a>
##Q.bind(fn, thisObj)
Creates a function that is bound to a context.
Note: `Q.bind` does not provide the additional argument-binding capabilities of
[Function.prototype.bind](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind).

**Params**

- fn `function` - The function to bind to context  
- thisObj `Object` - The context to bind `fn` to  

**Returns**: `function` - A function that will execute in the context of `thisObj`.  
<a name="Q.clone"></a>
##Q.clone(value)
Creates a deep copy of the value which may contain (nested) `Array`s and
`Object`s, `Number`s, `String`s, `Boolean`s and `Date`s. `Function`s are
not copied, but assigned by their reference.

**Params**

- value `*` - The object or array to clone  

**Returns**: `*` - A new object or array.  
**Example**  
var objects = [{}, {}, {}];
var objectsClone = Q.clone(objects);
objects[0] === objectsClone[0]; //=> false

<a name="Q.compose"></a>
##Q.compose(...functions)
Creates a new function that runs each of the functions supplied as parameters in turn,
passing the return value of each function invocation to the next function invocation,
beginning with whatever arguments were passed to the initial invocation.

Note that `compose` is a right-associative function, which means the functions provided
will be invoked in order from right to left. In the example `var h = compose(f, g)`,
the function `h` is equivalent to `f( g(x) )`, where `x` represents the arguments
originally passed to `h`.

**Params**

- ...functions `function` - A variable number of functions.  

**Returns**: `function` - A new function which represents the result of calling each of the
        input `functions`, passing the result of each function call to the next, from
        right to left.  
**Example**  
var triple = function(x) { return x * 3; };
var double = function(x) { return x * 2; };
var square = function(x) { return x * x; };
var squareThenDoubleThenTriple = Q.compose(triple, double, square);

//≅ triple(double(square(5)))
squareThenDoubleThenTriple(5); //=> 150

<a name="Q.containsWith"></a>
##Q.containsWith(pred, x, list)
Returns `true` if the `x` is found in the `list`, using `pred` as an
equality predicate for `x`.

**Params**

- pred `function` - A predicate used to test whether two items are equal.  
- x `*` - The item to find  
- list `Array` - The list to iterate over  

**Returns**: `Boolean` - `true` if `x` is in `list`, else `false`.  
**Example**  
var xs = [{x: 12}, {x: 11}, {x: 10}];
Q.containsWith(function(a, b) { return a.x === b.x; }, {x: 10}, xs); //=> true
Q.containsWith(function(a, b) { return a.x === b.x; }, {x: 1}, xs); //=> false

<a name="Q.createMapEntry"></a>
##Q.createMapEntry(key, val)
Creates an object containing a single key:value pair.

**Params**

- key `String`  
- val `*`  

**Returns**: `Object`  
**Example**  
var matchPhrases = Q.compose(
    Q.createMapEntry('must'),
    Q.map(Q.createMapEntry('match_phrase'))
);
matchPhrases(['foo', 'bar', 'baz']); //=> {must: [{match_phrase: 'foo'}, {match_phrase: 'bar'}, {match_phrase: 'baz'}]}

<a name="Q.curryN"></a>
##Q.curryN(fnArity, fn)
Creates a new version of `fn` with given arity that, when invoked,
will return either:
- A new function ready to accept one or more of `fn`'s remaining arguments, if all of
`fn`'s expected arguments have not yet been provided
- `fn`'s result if all of its expected arguments have been provided

This function is useful in place of `curry`, when the arity of the
function to curry cannot be determined from its signature, e.g. if it's
a variadic function.

**Params**

- fnArity `Number` - The arity for the returned function.  
- fn `function` - The function to curry.  

**Returns**: `function` - A new, curried function.  
**Example**  
var addFourNumbers = function() {
  return Q.sum([].slice.call(arguments, 0, 4));
};

var curriedAddFourNumbers = Q.curryN(4, addFourNumbers);
var f = curriedAddFourNumbers(1, 2);
var g = f(3);
g(4);//=> 10

<a name="Q.dec"></a>
##Q.dec(n)
Decrements its argument.

**Params**

- n `Number`  

**Returns**: `Number`  
**Example**  
Q.dec(42); //=> 41

<a name="Q.difference"></a>
##Q.difference(list1, list2)
Finds the set (i.e. no duplicates) of all elements in the first list not contained in the second list.

**Params**

- list1 `Array` - The first list.  
- list2 `Array` - The second list.  

**Returns**: `Array` - The elements in `list1` that are not in `list2`.  
**Example**  
Q.difference([1,2,3,4], [7,6,5,4,3]); //=> [1,2]
Q.difference([7,6,5,4,3], [1,2,3,4]); //=> [7,6,5]

<a name="Q.differenceWith"></a>
##Q.differenceWith(pred, list1, list2)
Finds the set (i.e. no duplicates) of all elements in the first list not contained in the second list.
Duplication is determined according to the value returned by applying the supplied predicate to two list
elements.

**Params**

- pred `function` - A predicate used to test whether two items are equal.  
- list1 `Array` - The first list.  
- list2 `Array` - The second list.  

**Returns**: `Array` - The elements in `list1` that are not in `list2`.  
**Example**  
function cmp(x, y) { return x.a === y.a; }
var l1 = [{a: 1}, {a: 2}, {a: 3}];
var l2 = [{a: 3}, {a: 4}];
Q.differenceWith(cmp, l1, l2); //=> [{a: 1}, {a: 2}]

<a name="Q.drop"></a>
##Q.drop(n, list)
Returns a new list containing all but the first `n` elements of the given `list`.

**Params**

- n `Number` - The number of elements of `list` to skip.  
- list `Array` - The array to consider.  

**Returns**: `Array` - The last `n` elements of `list`.  
**Example**  
Q.drop(3, [1,2,3,4,5,6,7]); //=> [4,5,6,7]

<a name="Q.dropWhile"></a>
##Q.dropWhile(fn, list)
Returns a new list containing the last `n` elements of a given list, passing each value
to the supplied predicate function, skipping elements while the predicate function returns
`true`. The predicate function is passed one argument: *(value)*.

**Params**

- fn `function` - The function called per iteration.  
- list `Array` - The collection to iterate over.  

**Returns**: `Array` - A new array.  
**Example**  
var lteTwo = function(x) {
  return x <= 2;
};

Q.dropWhile(lteTwo, [1, 2, 3, 4]); //=> [3, 4]

<a name="Q.empty"></a>
##Q.empty()
`empty` wraps any object in an array. This implementation is compatible with the
Fantasy-land Monoid spec, and will work with types that implement that spec.

**Returns**: `Array` - An empty array.  
**Example**  
Q.empty([1,2,3,4,5]); //=> []

<a name="Q.eq"></a>
##Q.eq(a, b)
Tests if two items are equal.  Equality is strict here, meaning reference equality for objects and
non-coercing equality for primitives.

**Params**

- a `*`  
- b `*`  

**Returns**: `Boolean`  
**Example**  
var o = {};
Q.eq(o, o); //=> true
Q.eq(o, {}); //=> false
Q.eq(1, 1); //=> true
Q.eq(1, '1'); //=> false
Q.eq(0, -0); //=> false
Q.eq(NaN, NaN); //=> true

<a name="Q.eqProps"></a>
##Q.eqProps(prop, obj1, obj2)
Reports whether two objects have the same value for the specified property.  Useful as a curried predicate.

**Params**

- prop `String` - The name of the property to compare  
- obj1 `Object`  
- obj2 `Object`  

**Returns**: `Boolean`  
**Example**  
var o1 = { a: 1, b: 2, c: 3, d: 4 };
var o2 = { a: 10, b: 20, c: 3, d: 40 };
Q.eqProps('a', o1, o2); //=> false
Q.eqProps('c', o1, o2); //=> true

<a name="Q.filter"></a>
##Q.filter(fn, list)
Returns a new list containing only those items that match a given predicate function.
The predicate function is passed one argument: *(value)*.

Note that `Q.filter` does not skip deleted or unassigned indices, unlike the native
`Array.prototype.filter` method. For more details on this behavior, see:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter#Description

**Params**

- fn `function` - The function called per iteration.  
- list `Array` - The collection to iterate over.  

**Returns**: `Array` - The new filtered array.  
**Example**  
var isEven = function(n) {
  return n % 2 === 0;
};
Q.filter(isEven, [1, 2, 3, 4]); //=> [2, 4]

<a name="Q.filterIndexed"></a>
##Q.filterIndexed(fn, list)
Like `filter`, but passes additional parameters to the predicate function. The predicate
function is passed three arguments: *(value, index, list)*.

**Params**

- fn `function` - The function called per iteration.  
- list `Array` - The collection to iterate over.  

**Returns**: `Array` - The new filtered array.  
**Example**  
var lastTwo = function(val, idx, list) {
  return list.length - idx <= 2;
};
Q.filterIndexed(lastTwo, [8, 6, 7, 5, 3, 0, 9]); //=> [0, 9]

<a name="Q.find"></a>
##Q.find(fn, list)
Returns the first element of the list which matches the predicate, or `undefined` if no
element matches.

**Params**

- fn `function` - The predicate function used to determine if the element is the
       desired one.  
- list `Array` - The array to consider.  

**Returns**: `Object` - The element found, or `undefined`.  
**Example**  
var xs = [{a: 1}, {a: 2}, {a: 3}];
Q.find(Q.propEq('a', 2))(xs); //=> {a: 2}
Q.find(Q.propEq('a', 4))(xs); //=> undefined

<a name="Q.findIndex"></a>
##Q.findIndex(fn, list)
Returns the index of the first element of the list which matches the predicate, or `-1`
if no element matches.

**Params**

- fn `function` - The predicate function used to determine if the element is the
desired one.  
- list `Array` - The array to consider.  

**Returns**: `Number` - The index of the element found, or `-1`.  
**Example**  
var xs = [{a: 1}, {a: 2}, {a: 3}];
Q.findIndex(Q.propEq('a', 2))(xs); //=> 1
Q.findIndex(Q.propEq('a', 4))(xs); //=> -1

<a name="Q.findLast"></a>
##Q.findLast(fn, list)
Returns the last element of the list which matches the predicate, or `undefined` if no
element matches.

**Params**

- fn `function` - The predicate function used to determine if the element is the
desired one.  
- list `Array` - The array to consider.  

**Returns**: `Object` - The element found, or `undefined`.  
**Example**  
var xs = [{a: 1, b: 0}, {a:1, b: 1}];
Q.findLast(Q.propEq('a', 1))(xs); //=> {a: 1, b: 1}
Q.findLast(Q.propEq('a', 4))(xs); //=> undefined

<a name="Q.findLastIndex"></a>
##Q.findLastIndex(fn, list)
Returns the index of the last element of the list which matches the predicate, or
`-1` if no element matches.

**Params**

- fn `function` - The predicate function used to determine if the element is the
desired one.  
- list `Array` - The array to consider.  

**Returns**: `Number` - The index of the element found, or `-1`.  
**Example**  
var xs = [{a: 1, b: 0}, {a:1, b: 1}];
Q.findLastIndex(Q.propEq('a', 1))(xs); //=> 1
Q.findLastIndex(Q.propEq('a', 4))(xs); //=> -1

<a name="Q.flatten"></a>
##Q.flatten(list)
Returns a new list by pulling every item out of it (and all its sub-arrays) and putting
them in a new array, depth-first.

**Params**

- list `Array` - The array to consider.  

**Returns**: `Array` - The flattened list.  
**Example**  
Q.flatten([1, 2, [3, 4], 5, [6, [7, 8, [9, [10, 11], 12]]]]);
//=> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

<a name="Q.foldl"></a>
##Q.foldl(fn, acc, list)
Returns a single item by iterating through the list, successively calling the iterator
function and passing it an accumulator value and the current value from the array, and
then passing the result to the next call.

The iterator function receives two values: *(acc, value)*

Note: `Q.foldl` does not skip deleted or unassigned indices (sparse arrays), unlike
the native `Array.prototype.reduce` method. For more details on this behavior, see:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce#Description

**Params**

- fn `function` - The iterator function. Receives two values, the accumulator and the
       current element from the array.  
- acc `*` - The accumulator value.  
- list `Array` - The list to iterate over.  

**Returns**: `*` - The final, accumulated value.  
**Example**  
var numbers = [1, 2, 3];
var add = function(a, b) {
  return a + b;
};

Q.foldl(add, 10, numbers); //=> 16

<a name="Q.foldlIndexed"></a>
##Q.foldlIndexed(fn, acc, list)
Like `foldl`, but passes additional parameters to the predicate function.

The iterator function receives four values: *(acc, value, index, list)*

Note: `Q.foldlIndexed` does not skip deleted or unassigned indices (sparse arrays),
unlike the native `Array.prototype.reduce` method. For more details on this behavior,
see:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce#Description

**Params**

- fn `function` - The iterator function. Receives four values: the accumulator, the
       current element from `list`, that element's index, and the entire `list` itself.  
- acc `*` - The accumulator value.  
- list `Array` - The list to iterate over.  

**Returns**: `*` - The final, accumulated value.  
**Example**  
var letters = ['a', 'b', 'c'];
var objectify = function(accObject, elem, idx, list) {
  accObject[elem] = idx;
  return accObject;
};

Q.foldlIndexed(objectify, {}, letters); //=> { 'a': 0, 'b': 1, 'c': 2 }

<a name="Q.foldr"></a>
##Q.foldr(fn, acc, list)
Returns a single item by iterating through the list, successively calling the iterator
function and passing it an accumulator value and the current value from the array, and
then passing the result to the next call.

Similar to `foldl`, except moves through the input list from the right to the left.

The iterator function receives two values: *(acc, value)*

Note: `Q.foldr` does not skip deleted or unassigned indices (sparse arrays), unlike
the native `Array.prototype.reduce` method. For more details on this behavior, see:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduceRight#Description

**Params**

- fn `function` - The iterator function. Receives two values, the accumulator and the
       current element from the array.  
- acc `*` - The accumulator value.  
- list `Array` - The list to iterate over.  

**Returns**: `*` - The final, accumulated value.  
**Example**  
var pairs = [ ['a', 1], ['b', 2], ['c', 3] ];
var flattenPairs = function(acc, pair) {
  return acc.concat(pair);
};

Q.foldr(flattenPairs, [], pairs); //=> [ 'c', 3, 'b', 2, 'a', 1 ]

<a name="Q.foldrIndexed"></a>
##Q.foldrIndexed(fn, acc, list)
Like `foldr`, but passes additional parameters to the predicate function. Moves through
the input list from the right to the left.

The iterator function receives four values: *(acc, value, index, list)*.

Note: `Q.foldrIndexed` does not skip deleted or unassigned indices (sparse arrays),
unlike the native `Array.prototype.reduce` method. For more details on this behavior,
see:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduceRight#Description

**Params**

- fn `function` - The iterator function. Receives four values: the accumulator, the
       current element from `list`, that element's index, and the entire `list` itself.  
- acc `*` - The accumulator value.  
- list `Array` - The list to iterate over.  

**Returns**: `*` - The final, accumulated value.  
**Example**  
var letters = ['a', 'b', 'c'];
var objectify = function(accObject, elem, idx, list) {
  accObject[elem] = idx;
  return accObject;
};

Q.foldrIndexed(objectify, {}, letters); //=> { 'c': 2, 'b': 1, 'a': 0 }

<a name="Q.forEach"></a>
##Q.forEach(fn, list)
Iterate over an input `list`, calling a provided function `fn` for each element in the
list.

`fn` receives one argument: *(value)*.

Note: `Q.forEach` does not skip deleted or unassigned indices (sparse arrays), unlike
the native `Array.prototype.forEach` method. For more details on this behavior, see:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach#Description

Also note that, unlike `Array.prototype.forEach`, Ramda's `forEach` returns the original
array. In some libraries this function is named `each`.

**Params**

- fn `function` - The function to invoke. Receives one argument, `value`.  
- list `Array` - The list to iterate over.  

**Returns**: `Array` - The original list.  
**Example**  
var printXPlusFive = function(x) { console.log(x + 5); };
Q.forEach(printXPlusFive, [1, 2, 3]); //=> [1, 2, 3]
//-> 6
//-> 7
//-> 8

<a name="Q.forEachIndexed"></a>
##Q.forEachIndexed(fn, list)
Like `forEach`, but but passes additional parameters to the predicate function.

`fn` receives three arguments: *(value, index, list)*.

Note: `Q.forEachIndexed` does not skip deleted or unassigned indices (sparse arrays),
unlike the native `Array.prototype.forEach` method. For more details on this behavior,
see:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach#Description

Also note that, unlike `Array.prototype.forEach`, Ramda's `forEach` returns the original
array. In some libraries this function is named `each`.

**Params**

- fn `function` - The function to invoke. Receives three arguments:
       (`value`, `index`, `list`).  
- list `Array` - The list to iterate over.  

**Returns**: `Array` - The original list.  
**Example**  
// Note that having access to the original `list` allows for
// mutation. While you *can* do this, it's very un-functional behavior:
var plusFive = function(num, idx, list) { list[idx] = num + 5 };
Q.forEachIndexed(plusFive, [1, 2, 3]); //=> [6, 7, 8]

<a name="Q.functionsIn"></a>
##Q.functionsIn(obj)
Returns a list of function names of object's own and prototype functions

**Params**

- obj `Object` - The objects with functions in it  

**Returns**: `Array` - A list of the object's own properties and prototype
        properties that map to functions.  
**Example**  
Q.functionsIn(R); // returns list of ramda's own and prototype function names

var F = function() { this.x = function(){}; this.y = 1; }
F.prototype.z = function() {};
F.prototype.a = 100;
Q.functionsIn(new F()); //=> ["x", "z"]

<a name="Q.get"></a>
##Q.get()
<a name="Q.groupBy"></a>
##Q.groupBy(fn, list)
Splits a list into sub-lists stored in an object, based on the result of calling a String-returning function
on each element, and grouping the results according to values returned.

**Params**

- fn `function` - Function :: a -> String  
- list `Array` - The array to group  

**Returns**: `Object` - An object with the output of `fn` for keys, mapped to arrays of elements
        that produced that key when passed to `fn`.  
**Example**  
var byGrade = Q.groupBy(function(student) {
  var score = student.score;
  return (score < 65) ? 'F' : (score < 70) ? 'D' :
         (score < 80) ? 'C' : (score < 90) ? 'B' : 'A';
});
var students = [{name: 'Abby', score: 84},
                {name: 'Eddy', score: 58},
                // ...
                {name: 'Jack', score: 69}];
byGrade(students);
// {
//   'A': [{name: 'Dianne', score: 99}],
//   'B': [{name: 'Abby', score: 84}]
//   // ...,
//   'F': [{name: 'Eddy', score: 58}]
// }

<a name="Q.has"></a>
##Q.has(prop, obj)
Returns whether or not an object has an own property with
the specified name

**Params**

- prop `String` - The name of the property to check for.  
- obj `Object` - The object to query.  

**Returns**: `Boolean` - Whether the property exists.  
**Example**  
var obj = {
  foo: 1,
  bar: 2,
};
Q.has('foo', obj);  //=> true

var list = [{foo: 1}, {foo: 2}, {bar: 3}];
Q.filter(Q.has('foo'), list);  //=> [{foo: 1}, {foo: 2}]

<a name="Q.hasIn"></a>
##Q.hasIn(prop, obj)
Returns whether or not an object or its prototype chain has
a property with the specified name

**Params**

- prop `String` - The name of the property to check for.  
- obj `Object` - The object to query.  

**Returns**: `Boolean` - Whether the property exists.  
**Example**  
function Rectangle(width, height) {
    this.width = width;
    this.height = height;
}
Rectangle.prototype.area = function() {
    return this.width * this.height;
};

var square = new Rectangle(2, 2);
Q.hasIn('width', square);  //=> true
Q.hasIn('area', square);  //=> true

<a name="Q.ifElse"></a>
##Q.ifElse(condition, onTrue, onFalse)
Creates a function that will process either the `onTrue` or the `onFalse` function depending
upon the result of the `condition` predicate.

**Params**

- condition `function` - A predicate function  
- onTrue `function` - A function to invoke when the `condition` evaluates to a truthy value.  
- onFalse `function` - A function to invoke when the `condition` evaluates to a falsy value.  

**Returns**: `function` - A new unary function that will process either the `onTrue` or the `onFalse`
                   function depending upon the result of the `condition` predicate.  
**Example**  
// Flatten all arrays in the list but leave other values alone.
var flattenArrays = Q.map(Q.ifElse(Array.isArray, Q.flatten, Q.identity));

flattenArrays([[0], [[10], [8]], 1234, {}]); //=> [[0], [10, 8], 1234, {}]
flattenArrays([[[10], 123], [8, [10]], "hello"]); //=> [[10, 123], [8, 10], "hello"]

<a name="Q.inc"></a>
##Q.inc(n)
Increments its argument.

**Params**

- n `Number`  

**Returns**: `Number`  
**Example**  
Q.inc(42); //=> 43

<a name="Q.indexOf"></a>
##Q.indexOf(target, list)
Returns the position of the first occurrence of an item in an array
(by strict equality),
or -1 if the item is not included in the array.

**Params**

- target `*` - The item to find.  
- list `Array` - The array to search in.  

**Returns**: `Number` - the index of the target, or -1 if the target is not found.  
**Example**  
Q.indexOf(3, [1,2,3,4]); //=> 2
Q.indexOf(10, [1,2,3,4]); //=> -1

<a name="Q.insert"></a>
##Q.insert(index, elt, list)
Inserts the supplied element into the list, at index `index`.  _Note
that this is not destructive_: it returns a copy of the list with the changes.
<small>No lists have been harmed in the application of this function.</small>

**Params**

- index `Number` - The position to insert the element  
- elt `*` - The element to insert into the Array  
- list `Array` - The list to insert into  

**Returns**: `Array` - A new Array with `elt` inserted at `index`.  
**Example**  
Q.insert(2, 'x', [1,2,3,4]); //=> [1,2,'x',3,4]

<a name="Q.insertAll"></a>
##Q.insertAll(index, elts, list)
Inserts the sub-list into the list, at index `index`.  _Note  that this
is not destructive_: it returns a copy of the list with the changes.
<small>No lists have been harmed in the application of this function.</small>

**Params**

- index `Number` - The position to insert the sub-list  
- elts `Array` - The sub-list to insert into the Array  
- list `Array` - The list to insert the sub-list into  

**Returns**: `Array` - A new Array with `elts` inserted starting at `index`.  
**Example**  
Q.insertAll(2, ['x','y','z'], [1,2,3,4]); //=> [1,2,'x','y','z',3,4]

<a name="Q.invoker"></a>
##Q.invoker(len, method)
Turns a named method with a specified arity into a function
that can be called directly supplied with arguments and a target object.

The returned function is curried and accepts `len + 1` parameters where
the final parameter is the target object.

**Params**

- len `Number` - Number of arguments the returned function should take
       before the target object.  
- method `function` - Name of the method to call.  

**Returns**: `function` - A new curried function.  
**Example**  
var sliceFrom = Q.invoker(1, 'slice');
sliceFrom(6, 'abcdefghijklm'); //=> 'ghijklm'
var sliceFrom6 = Q.invoker(2, 'slice', 6);
sliceFrom6(8, 'abcdefghijklm'); //=> 'gh'

<a name="Q.is"></a>
##Q.is(ctor, val)
See if an object (`val`) is an instance of the supplied constructor.
This function will check up the inheritance chain, if any.

**Params**

- ctor `Object` - A constructor  
- val `*` - The value to test  

**Returns**: `Boolean`  
**Example**  
Q.is(Object, {}); //=> true
Q.is(Number, 1); //=> true
Q.is(Object, 1); //=> false
Q.is(String, 's'); //=> true
Q.is(String, new String('')); //=> true
Q.is(Object, new String('')); //=> true
Q.is(Object, 's'); //=> false
Q.is(Number, {}); //=> false

<a name="Q.join"></a>
##Q.join(separator, xs)
Returns a string made by inserting the `separator` between each
element and concatenating all the elements into a single string.

**Params**

- separator `Number` | `String` - The string used to separate the elements.  
- xs `Array` - The elements to join into a string.  

**Returns**: `String` - str The string made by concatenating `xs` with `separator`.  
**Example**  
var spacer = Q.join(' ');
spacer(['a', 2, 3.4]);   //=> 'a 2 3.4'
Q.join('|', [1, 2, 3]);    //=> '1|2|3'

<a name="Q.keys"></a>
##Q.keys(obj)
Returns a list containing the names of all the enumerable own
properties of the supplied object.
Note that the order of the output array is not guaranteed to be
consistent across different JS platforms.

**Params**

- obj `Object` - The object to extract properties from  

**Returns**: `Array` - An array of the object's own properties.  
**Example**  
Q.keys({a: 1, b: 2, c: 3}); //=> ['a', 'b', 'c']

<a name="Q.lPartial"></a>
##Q.lPartial(fn, [...args])
Accepts as its arguments a function and any number of values and returns a function that,
when invoked, calls the original function with all of the values prepended to the
original function's arguments list. In some libraries this function is named `applyLeft`.

**Params**

- fn `function` - The function to invoke.  
- \[...args\] `*` - Arguments to prepend to `fn` when the returned function is invoked.  

**Returns**: `function` - A new function wrapping `fn`. When invoked, it will call `fn`
        with `args` prepended to `fn`'s arguments list.  
**Example**  
var multiply = function(a, b) { return a * b; };
var double = Q.lPartial(multiply, 2);
double(2); //=> 4

var greet = function(salutation, title, firstName, lastName) {
  return salutation + ', ' + title + ' ' + firstName + ' ' + lastName + '!';
};
var sayHello = Q.lPartial(greet, 'Hello');
var sayHelloToMs = Q.lPartial(sayHello, 'Ms.');
sayHelloToMs('Jane', 'Jones'); //=> 'Hello, Ms. Jane Jones!'

<a name="Q.lastIndexOf"></a>
##Q.lastIndexOf(target, list)
Returns the position of the last occurrence of an item (by strict equality) in
an array, or -1 if the item is not included in the array.

**Params**

- target `*` - The item to find.  
- list `Array` - The array to search in.  

**Returns**: `Number` - the index of the target, or -1 if the target is not found.  
**Example**  
Q.lastIndexOf(3, [-1,3,3,0,1,2,3,4]); //=> 6
Q.lastIndexOf(10, [1,2,3,4]); //=> -1

<a name="Q.length"></a>
##Q.length(list)
Returns the number of elements in the array by returning `list.length`.

**Params**

- list `Array` - The array to inspect.  

**Returns**: `Number` - The length of the array.  
**Example**  
Q.length([]); //=> 0
Q.length([1, 2, 3]); //=> 3

<a name="Q.lens"></a>
##Q.lens(get, set)
Creates a lens. Supply a function to `get` values from inside an object, and a `set`
function to change values on an object. (n.b.: This can, and should, be done without
mutating the original object!) The lens is a function wrapped around the input `get`
function, with the `set` function attached as a property on the wrapper. A `map`
function is also attached to the returned function that takes a function to operate
on the specified (`get`) property, which is then `set` before returning. The attached
`set` and `map` functions are curried.

**Params**

- get `function` - A function that gets a value by property name  
- set `function` - A function that gets a value by property name  

**Returns**: `function` - the returned function has `set` and `map` properties that are
        also curried functions.  
**Example**  
var headLens = Q.lens(
    function get(arr) { return arr[0]; },
    function set(val, arr) { return [val].concat(arr.slice(1)); }
);
headLens([10, 20, 30, 40]); //=> 10
headLens.set('mu', [10, 20, 30, 40]); //=> ['mu', 20, 30, 40]
headLens.map(function(x) { return x + 1; }, [10, 20, 30, 40]); //=> [11, 20, 30, 40]

var phraseLens = Q.lens(
    function get(obj) { return obj.phrase; },
    function set(val, obj) {
        var out = Q.clone(obj);
        out.phrase = val;
        return out;
    }
);
var obj1 = { phrase: 'Absolute filth . . . and I LOVED it!'};
var obj2 = { phrase: "What's all this, then?"};
phraseLens(obj1); // => 'Absolute filth . . . and I LOVED it!'
phraseLens(obj2); // => "What's all this, then?"
phraseLens.set('Ooh Betty', obj1); //=> { phrase: 'Ooh Betty'}
phraseLens.map(Q.toUpper, obj2); //=> { phrase: "WHAT'S ALL THIS, THEN?"}

<a name="Q.map"></a>
##Q.map(fn, list)
Returns a new list, constructed by applying the supplied function to every element of the
supplied list.

Note: `Q.map` does not skip deleted or unassigned indices (sparse arrays), unlike the
native `Array.prototype.map` method. For more details on this behavior, see:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map#Description

**Params**

- fn `function` - The function to be called on every element of the input `list`.  
- list `Array` - The list to be iterated over.  

**Returns**: `Array` - The new list.  
**Example**  
var double = function(x) {
  return x * 2;
};

Q.map(double, [1, 2, 3]); //=> [2, 4, 6]

<a name="Q.mapAccumL"></a>
##Q.mapAccumL(fn, acc, list)
The mapAccumL function behaves like a combination of map and foldl; it applies a
function to each element of a list, passing an accumulating parameter from left to
right, and returning a final value of this accumulator together with the new list.

The iterator function receives two values: *(acc, value)*

**Params**

- fn `function` - The function to be called on every element of the input `list`.  
- acc `*` - The accumulator value.  
- list `Array` - The list to iterate over.  

**Returns**: `*` - The final, accumulated value.  
**Example**  
var digits = ['1', '2', '3', '4'];
var append = function(a, b) {
    return [a + b, a + b];
}

Q.mapAccumL(append, 0, digits); //=> ['01234', ['01', '012', '0123', '01234']]

<a name="Q.mapAccumR"></a>
##Q.mapAccumR(fn, acc, list)
The mapAccumR function behaves like a combination of map and foldr; it applies a
function to each element of a list, passing an accumulating parameter from right
to left, and returning a final value of this accumulator together with the new list.

Similar to `mapAccumL`, except moves through the input list from the right to the
left.

The iterator function receives two values: *(acc, value)*

**Params**

- fn `function` - The function to be called on every element of the input `list`.  
- acc `*` - The accumulator value.  
- list `Array` - The list to iterate over.  

**Returns**: `*` - The final, accumulated value.  
**Example**  
var digits = ['1', '2', '3', '4'];
var append = function(a, b) {
    return [a + b, a + b];
}

Q.mapAccumR(append, 0, digits); //=> ['04321', ['04321', '0432', '043', '04']]

<a name="Q.mapIndexed"></a>
##Q.mapIndexed(fn, list)
Like `map`, but but passes additional parameters to the mapping function.
`fn` receives three arguments: *(value, index, list)*.

Note: `Q.mapIndexed` does not skip deleted or unassigned indices (sparse arrays), unlike
the native `Array.prototype.map` method. For more details on this behavior, see:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map#Description

**Params**

- fn `function` - The function to be called on every element of the input `list`.  
- list `Array` - The list to be iterated over.  

**Returns**: `Array` - The new list.  
**Example**  
var squareEnds = function(elt, idx, list) {
  if (idx === 0 || idx === list.length - 1) {
    return elt * elt;
  }
  return elt;
};

Q.mapIndexed(squareEnds, [8, 5, 3, 0, 9]); //=> [64, 5, 3, 0, 81]

<a name="Q.mapObj"></a>
##Q.mapObj(fn, obj)
Map, but for objects. Creates an object with the same keys as `obj` and values
generated by running each property of `obj` through `fn`. `fn` is passed one argument:
*(value)*.

**Params**

- fn `function` - A function called for each property in `obj`. Its return value will
become a new property on the return object.  
- obj `Object` - The object to iterate over.  

**Returns**: `Object` - A new object with the same keys as `obj` and values that are the result
        of running each property through `fn`.  
**Example**  
var values = { x: 1, y: 2, z: 3 };
var double = function(num) {
  return num * 2;
};

Q.mapObj(double, values); //=> { x: 2, y: 4, z: 6 }

<a name="Q.mapObjIndexed"></a>
##Q.mapObjIndexed(fn, obj)
Like `mapObj`, but but passes additional arguments to the predicate function. The
predicate function is passed three arguments: *(value, key, obj)*.

**Params**

- fn `function` - A function called for each property in `obj`. Its return value will
       become a new property on the return object.  
- obj `Object` - The object to iterate over.  

**Returns**: `Object` - A new object with the same keys as `obj` and values that are the result
        of running each property through `fn`.  
**Example**  
var values = { x: 1, y: 2, z: 3 };
var prependKeyAndDouble = function(num, key, obj) {
  return key + (num * 2);
};

Q.mapObjIndexed(prependKeyAndDouble, values); //=> { x: 'x2', y: 'y4', z: 'z6' }

<a name="Q.match"></a>
##Q.match(rx, str)
Tests a regular expression against a String

**Params**

- rx `RegExp` - A regular expression.  
- str `String` - The string to match against  

**Returns**: `Array` - The list of matches, or null if no matches found.  
**Example**  
Q.match(/([a-z]a)/g, 'bananas'); //=> ['ba', 'na', 'na']

<a name="Q.max"></a>
##Q.max(list)
Determines the largest of a list of numbers (or elements that can be cast to numbers)

**Params**

- list `Array` - A list of numbers  

**Returns**: `Number` - The greatest number in the list.  
**Example**  
Q.max([7, 3, 9, 2, 4, 9, 3]); //=> 9

<a name="Q.maxBy"></a>
##Q.maxBy(keyFn, list)
Determines the largest of a list of items as determined by pairwise comparisons from the supplied comparator

**Params**

- keyFn `function` - A comparator function for elements in the list  
- list `Array` - A list of comparable elements  

**Returns**: `*` - The greatest element in the list. `undefined` if the list is empty.  
**Example**  
function cmp(obj) { return obj.x; }
var a = {x: 1}, b = {x: 2}, c = {x: 3};
Q.maxBy(cmp, [a, b, c]); //=> {x: 3}

<a name="Q.min"></a>
##Q.min(list)
Determines the smallest of a list of numbers (or elements that can be cast to numbers)

**Params**

- list `Array` - A list of numbers  

**Returns**: `Number` - The greatest number in the list.  
**Example**  
Q.min([7, 3, 9, 2, 4, 9, 3]); //=> 2

<a name="Q.minBy"></a>
##Q.minBy(keyFn, list)
Determines the smallest of a list of items as determined by pairwise comparisons from the supplied comparator

**Params**

- keyFn `function` - A comparator function for elements in the list  
- list `Array` - A list of comparable elements  

**Returns**: `*` - The greatest element in the list. `undefined` if the list is empty.  
**Example**  
function cmp(obj) { return obj.x; }
var a = {x: 1}, b = {x: 2}, c = {x: 3};
Q.minBy(cmp, [a, b, c]); //=> {x: 1}

<a name="Q.multiply"></a>
##Q.multiply(a, b)
Multiplies two numbers. Equivalent to `a * b` but curried.

**Params**

- a `Number` - The first value.  
- b `Number` - The second value.  

**Returns**: `Number` - The result of `a * b`.  
**Example**  
var double = Q.multiply(2);
var triple = Q.multiply(3);
double(3);       //=>  6
triple(4);       //=> 12
Q.multiply(2, 5);  //=> 10

<a name="Q.negate"></a>
##Q.negate(n)
Negates its argument.

**Params**

- n `Number`  

**Returns**: `Number`  
**Example**  
Q.negate(42); //=> -42

<a name="Q.nth"></a>
##Q.nth(idx, list)
Returns the nth element in a list.
If n is negative the element at index length + n is returned.

**Params**

- idx `Number`  
- list `Array`  

**Returns**: `*` - The nth element of the list.  
**Example**  
var list = ['foo', 'bar', 'baz', 'quux'];
Q.nth(1, list); //=> 'bar'
Q.nth(-1, list); //=> 'quux'
Q.nth(-99, list); //=> undefined

<a name="Q.of"></a>
##Q.of(x)
`of` wraps any object in an Array. This implementation is compatible with the
Fantasy-land Applicative spec, and will work with types that implement that spec.
Note this `of` is different from the ES6 `of`; See
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/of

**Params**

- x `*` - any value  

**Returns**: `Array` - An array wrapping `x`.  
**Example**  
Q.of(1); //=> [1]
Q.of([2]); //=> [[2]]
Q.of({}); //=> [{}]

<a name="Q.omit"></a>
##Q.omit(names, obj)
Returns a partial copy of an object omitting the keys specified.

**Params**

- names `Array` - an array of String property names to omit from the new object  
- obj `Object` - The object to copy from  

**Returns**: `Object` - A new object with properties from `names` not on it.  
**Example**  
Q.omit(['a', 'd'], {a: 1, b: 2, c: 3, d: 4}); //=> {b: 2, c: 3}

<a name="Q.op"></a>
##Q.op(fn)
Uses a placeholder to convert a binary function into something like an infix operation.
When called with the `Q.__` placeholder the second argument is applied to the
second position, and it returns a function waiting for its first argument.
This can allow for more natural processing of functions which are really binary operators.

**Params**

- fn `function` - The binary operation to adjust  

**Returns**: `function` - A new function that acts somewhat like an infix operator.  
**Example**  
var div = Q.op(function (a, b) {
    return a / b;
});

div(6, 3); //=> 2
div(6)(3); //=> 2
div(Q.__, 3)(6); //=> 2
div(Q.__)(3, 6); //=> 2
div(Q.__)(3)(6); //=> 2

<a name="Q.or"></a>
##Q.or(f, g)
A function wrapping calls to the two functions in an `||` operation, returning the result of the first
function if it is truth-y and the result of the second function otherwise.  Note that this is
short-circuited, meaning that the second function will not be invoked if the first returns a truth-y
value.

**Params**

- f `function` - a predicate  
- g `function` - another predicate  

**Returns**: `function` - a function that applies its arguments to `f` and `g` and ORs their outputs together.  
**Example**  
var gt10 = function(x) { return x > 10; };
var even = function(x) { return x % 2 === 0 };
var f = Q.or(gt10, even);
f(101); //=> true
f(8); //=> true

<a name="Q.pCompose"></a>
##Q.pCompose(...functions)
Similar to `compose` but with automatic handling of promises (or, more
precisely, "thenables"). The behavior is identical  to that of
compose() if all composed functions return something other than
promises (i.e., objects with a .then() method). If one of the function
returns a promise, however, then the next function in the composition
is called asynchronously, in the success callback of the promise, using
the resolved value as an input. Note that `pCompose` is a right-
associative function, just like `compose`.

**Params**

- ...functions `function` - A variable number of functions.  

**Returns**: `function` - A new function which represents the result of calling each of the
        input `functions`, passing either the returned result or the asynchronously
        resolved value) of each function call to the next, from right to left.  
**Example**  
var Q = require('q');
var triple = function(x) { return x * 3; };
var double = function(x) { return x * 2; };
var squareAsync = function(x) { return Q.when(x * x); };
var squareAsyncThenDoubleThenTriple = Q.pCompose(triple, double, squareAsync);

//≅ squareAsync(5).then(function(x) { return triple(double(x)) };
squareAsyncThenDoubleThenTriple(5)
    .then(function(result) {
        // result is 150
    });

<a name="Q.pPipe"></a>
##Q.pPipe(...functions)
Creates a new function that runs each of the functions supplied as parameters in turn,
passing to the next function invocation either the value returned by the previous
function or the resolved value if the returned value is a promise. In other words,
if some of the functions in the sequence return promises, `pPipe` pipes the values
asynchronously. If none of the functions return promises, the behavior is the same as
that of `pipe`.

`pPipe` is the mirror version of `pCompose`. `pPipe` is left-associative, which means that
each of the functions provided is executed in order from left to right.

**Params**

- ...functions `function` - A variable number of functions.  

**Returns**: `function` - A new function which represents the result of calling each of the
        input `functions`, passing either the returned result or the asynchronously
        resolved value) of each function call to the next, from left to right.  
**Example**  
var Q = require('q');
var triple = function(x) { return x * 3; };
var double = function(x) { return x * 2; };
var squareAsync = function(x) { return Q.when(x * x); };
var squareAsyncThenDoubleThenTriple = Q.pPipe(squareAsync, double, triple);

//≅ squareAsync(5).then(function(x) { return triple(double(x)) };
squareAsyncThenDoubleThenTriple(5)
    .then(function(result) {
        // result is 150
    });

<a name="Q.partition"></a>
##Q.partition(pred, list)
Takes a predicate and a list and returns the pair of lists of
elements which do and do not satisfy the predicate, respectively.

**Params**

- pred `function` - A predicate to determine which array the element belongs to.  
- list `Array` - The array to partition.  

**Returns**: `Array` - A nested array, containing first an array of elements that satisfied the predicate,
        and second an array of elements that did not satisfy.  
**Example**  
Q.partition(Q.contains('s'), ['sss', 'ttt', 'foo', 'bars']);
//=> [ [ 'sss', 'bars' ],  [ 'ttt', 'foo' ] ]

<a name="Q.pathEq"></a>
##Q.pathEq(path, val, obj)
Determines whether a nested path on an object, seperated by periods,
has a specific value according to strict equality ('==='). Most
likely used to filter a list:

**Params**

- path `String` - The path of the nested property to use  
- val `*` - The value to compare the nested property with  
- obj `Object` - The object to check the nested property in  

**Returns**: `Boolean` - `true` if the value equals the nested object property,
        `false` otherwise.  
**Example**  
var user1 = { address: { zipCode: 90210 } };
var user2 = { address: { zipCode: 55555 } };
var user3 = { name: 'Bob' };
var users = [ user1, user2, user3 ]
var isFamous = Q.pathEq('address.zipCode', 90210);
Q.filter(isFamous, users); //=> [ user1 ]

<a name="Q.pathOn"></a>
##Q.pathOn(sep, path)
Retrieve a nested path on an object separated by the specified
separator value.

**Params**

- sep `String` - The separator to use in `path`.  
- path `String` - The path to use.  

**Returns**: `*` - The data at `path`.  
**Example**  
Q.pathOn('/', 'a/b/c', {a: {b: {c: 3}}}); //=> 3

<a name="Q.pick"></a>
##Q.pick(names, obj)
Returns a partial copy of an object containing only the keys specified.  If the key does not exist, the
property is ignored.

**Params**

- names `Array` - an array of String property names to copy onto a new object  
- obj `Object` - The object to copy from  

**Returns**: `Object` - A new object with only properties from `names` on it.  
**Example**  
Q.pick(['a', 'd'], {a: 1, b: 2, c: 3, d: 4}); //=> {a: 1, d: 4}
Q.pick(['a', 'e', 'f'], {a: 1, b: 2, c: 3, d: 4}); //=> {a: 1}

<a name="Q.pickAll"></a>
##Q.pickAll(names, obj)
Similar to `pick` except that this one includes a `key: undefined` pair for properties that don't exist.

**Params**

- names `Array` - an array of String property names to copy onto a new object  
- obj `Object` - The object to copy from  

**Returns**: `Object` - A new object with only properties from `names` on it.  
**Example**  
Q.pickAll(['a', 'd'], {a: 1, b: 2, c: 3, d: 4}); //=> {a: 1, d: 4}
Q.pickAll(['a', 'e', 'f'], {a: 1, b: 2, c: 3, d: 4}); //=> {a: 1, e: undefined, f: undefined}

<a name="Q.pickBy"></a>
##Q.pickBy(pred, obj)
Returns a partial copy of an object containing only the keys that
satisfy the supplied predicate.

**Params**

- pred `function` - A predicate to determine whether or not a key
       should be included on the output object.  
- obj `Object` - The object to copy from  

**Returns**: `Object` - A new object with only properties that satisfy `pred`
        on it.  
**Example**  
var isUpperCase = function(val, key) { return key.toUpperCase() === key; }
Q.pickBy(isUpperCase, {a: 1, b: 2, A: 3, B: 4}); //=> {A: 3, B: 4}

<a name="Q.pipe"></a>
##Q.pipe(...functions)
Creates a new function that runs each of the functions supplied as parameters in turn,
passing the return value of each function invocation to the next function invocation,
beginning with whatever arguments were passed to the initial invocation.

`pipe` is the mirror version of `compose`. `pipe` is left-associative, which means that
each of the functions provided is executed in order from left to right.

In some libraries this function is named `sequence`.

**Params**

- ...functions `function` - A variable number of functions.  

**Returns**: `function` - A new function which represents the result of calling each of the
        input `functions`, passing the result of each function call to the next, from
        left to right.  
**Example**  
var triple = function(x) { return x * 3; };
var double = function(x) { return x * 2; };
var square = function(x) { return x * x; };
var squareThenDoubleThenTriple = Q.pipe(square, double, triple);

//≅ triple(double(square(5)))
squareThenDoubleThenTriple(5); //=> 150

<a name="Q.pluck"></a>
##Q.pluck(key, list)
Returns a new list by plucking the same named property off all objects in the list supplied.

**Params**

- key `Number` | `String` - The key name to pluck off of each object.  
- list `Array` - The array to consider.  

**Returns**: `Array` - The list of values for the given key.  
**Example**  
Q.pluck('a')([{a: 1}, {a: 2}]); //=> [1, 2]
Q.pluck(0)([[1, 2], [3, 4]]);   //=> [1, 3]

<a name="Q.prepend"></a>
##Q.prepend(el, list)
Returns a new list with the given element at the front, followed by the contents of the
list.

**Params**

- el `*` - The item to add to the head of the output list.  
- list `Array` - The array to add to the tail of the output list.  

**Returns**: `Array` - A new array.  
**Example**  
Q.prepend('fee', ['fi', 'fo', 'fum']); //=> ['fee', 'fi', 'fo', 'fum']

<a name="Q.product"></a>
##Q.product(list)
Multiplies together all the elements of a list.

**Params**

- list `Array` - An array of numbers  

**Returns**: `Number` - The product of all the numbers in the list.  
**Example**  
Q.product([2,4,6,8,100,1]); //=> 38400

<a name="Q.propEq"></a>
##Q.propEq(name, val)
Determines whether the given property of an object has a specific
value according to strict equality (`===`).  Most likely used to
filter a list:

**Params**

- name `Number` | `String` - The property name (or index) to use.  
- val `*` - The value to compare the property with.  

**Returns**: `Boolean` - `true` if the properties are equal, `false` otherwise.  
**Example**  
var abby = {name: 'Abby', age: 7, hair: 'blond'};
var fred = {name: 'Fred', age: 12, hair: 'brown'};
var rusty = {name: 'Rusty', age: 10, hair: 'brown'};
var alois = {name: 'Alois', age: 15, disposition: 'surly'};
var kids = [abby, fred, rusty, alois];
var hasBrownHair = Q.propEq('hair', 'brown');
Q.filter(hasBrownHair, kids); //=> [fred, rusty]

<a name="Q.propOr"></a>
##Q.propOr(p, val, obj)
If the given, non-null object has an own property with the specified name,
returns the value of that property.
Otherwise returns the provided default value.

**Params**

- p `String` - The name of the property to return.  
- val `*` - The default value.  
- obj `Object` - The object to query.  

**Returns**: `*` - The value of given property or default value.  
**Example**  
var alice = {
  name: 'ALICE',
  age: 101
};
var favorite = Q.prop('favoriteLibrary');
var favoriteWithDefault = Q.propOr('Ramda', 'favoriteLibrary');

favorite(alice);  //=> undefined
favoriteWithDefault(alice);  //=> 'Ramda'

<a name="Q.props"></a>
##Q.props(ps, obj)
Acts as multiple `get`: array of keys in, array of values out. Preserves order.

**Params**

- ps `Array` - The property names to fetch  
- obj `Object` - The object to query  

**Returns**: `Array` - The corresponding values or partially applied function.  
**Example**  
Q.props(['x', 'y'], {x: 1, y: 2}); //=> [1, 2]
Q.props(['c', 'a', 'b'], {b: 2, a: 1}); //=> [undefined, 1, 2]

var fullName = Q.compose(Q.join(' '), Q.props(['first', 'last']));
fullName({last: 'Bullet-Tooth', age: 33, first: 'Tony'}); //=> 'Tony Bullet-Tooth'

<a name="Q.rPartial"></a>
##Q.rPartial(fn, [...args])
Accepts as its arguments a function and any number of values and returns a function that,
when invoked, calls the original function with all of the values appended to the original
function's arguments list.

Note that `rPartial` is the opposite of `lPartial`: `rPartial` fills `fn`'s arguments
from the right to the left.  In some libraries this function is named `applyRight`.

**Params**

- fn `function` - The function to invoke.  
- \[...args\] `*` - Arguments to append to `fn` when the returned function is invoked.  

**Returns**: `function` - A new function wrapping `fn`. When invoked, it will call `fn` with
        `args` appended to `fn`'s arguments list.  
**Example**  
var greet = function(salutation, title, firstName, lastName) {
  return salutation + ', ' + title + ' ' + firstName + ' ' + lastName + '!';
};
var greetMsJaneJones = Q.rPartial(greet, 'Ms.', 'Jane', 'Jones');

greetMsJaneJones('Hello'); //=> 'Hello, Ms. Jane Jones!'

<a name="Q.range"></a>
##Q.range(from, to)
Returns a list of numbers from `from` (inclusive) to `to`
(exclusive).

**Params**

- from `Number` - The first number in the list.  
- to `Number` - One more than the last number in the list.  

**Returns**: `Array` - The list of numbers in tthe set `[a, b)`.  
**Example**  
Q.range(1, 5);    //=> [1, 2, 3, 4]
Q.range(50, 53);  //=> [50, 51, 52]

<a name="Q.reject"></a>
##Q.reject(fn, list)
Similar to `filter`, except that it keeps only values for which the given predicate
function returns falsy. The predicate function is passed one argument: *(value)*.

**Params**

- fn `function` - The function called per iteration.  
- list `Array` - The collection to iterate over.  

**Returns**: `Array` - The new filtered array.  
**Example**  
var isOdd = function(n) {
  return n % 2 === 1;
};
Q.reject(isOdd, [1, 2, 3, 4]); //=> [2, 4]

<a name="Q.rejectIndexed"></a>
##Q.rejectIndexed(fn, list)
Like `reject`, but passes additional parameters to the predicate function. The predicate
function is passed three arguments: *(value, index, list)*.

**Params**

- fn `function` - The function called per iteration.  
- list `Array` - The collection to iterate over.  

**Returns**: `Array` - The new filtered array.  
**Example**  
var lastTwo = function(val, idx, list) {
  return list.length - idx <= 2;
};

Q.rejectIndexed(lastTwo, [8, 6, 7, 5, 3, 0, 9]); //=> [8, 6, 7, 5, 3]

<a name="Q.remove"></a>
##Q.remove(start, count, list)
Removes the sub-list of `list` starting at index `start` and containing
`count` elements.  _Note that this is not destructive_: it returns a
copy of the list with the changes.
<small>No lists have been harmed in the application of this function.</small>

**Params**

- start `Number` - The position to start removing elements  
- count `Number` - The number of elements to remove  
- list `Array` - The list to remove from  

**Returns**: `Array` - A new Array with `count` elements from `start` removed.  
**Example**  
Q.remove(2, 3, [1,2,3,4,5,6,7,8]); //=> [1,2,6,7,8]

<a name="Q.replace"></a>
##Q.replace(pattern, replacement, str)
Replace a substring or regex match in a string with a replacement.

**Params**

- pattern `RegExp` | `String` - A regular expression or a substring to match.  
- replacement `String` - The string to replace the matches with.  
- str `String` - The String to do the search and replacement in.  

**Returns**: `String` - A string with all the matches replaced.  
**Example**  
Q.replace(/\d+/g, 'number', '1 2 three'); //=> 'number number three'

var replaceSemicolon = Q.replace(';');
var removeSemicolon = replaceSemicolon('');
removeSemicolon('return 42;'); //=> 'return 42'

<a name="Q.scanl"></a>
##Q.scanl(fn, acc, list)
Scanl is similar to foldl, but returns a list of successively reduced values from the left

**Params**

- fn `function` - The iterator function. Receives two values, the accumulator and the
       current element from the array  
- acc `*` - The accumulator value.  
- list `Array` - The list to iterate over.  

**Returns**: `Array` - A list of all intermediately reduced values.  
**Example**  
var numbers = [1, 2, 3, 4];
var factorials = Q.scanl(Q.multiply, 1, numbers); //=> [1, 1, 2, 6, 24]

<a name="Q.slice"></a>
##Q.slice(a, b, xs)
Returns the elements from `xs` starting at `a` and ending at `b - 1`.

**Params**

- a `Number` - The starting index.  
- b `Number` - One more than the ending index.  
- xs `Array` - The list to take elements from.  

**Returns**: `Array` - The items from `a` to `b - 1` from `xs`.  
**Example**  
var xs = Q.range(0, 10);
Q.slice(2, 5)(xs); //=> [2, 3, 4]

<a name="Q.sort"></a>
##Q.sort(comparator, list)
Returns a copy of the list, sorted according to the comparator function, which should accept two values at a
time and return a negative number if the first value is smaller, a positive number if it's larger, and zero
if they are equal.  Please note that this is a **copy** of the list.  It does not modify the original.

**Params**

- comparator `function` - A sorting function :: a -> b -> Int  
- list `Array` - The list to sort  

**Returns**: `Array` - a new array with its elements sorted by the comparator function.  
**Example**  
var diff = function(a, b) { return a - b; };
Q.sort(diff, [4,2,7,5]); //=> [2, 4, 5, 7]

<a name="Q.sortBy"></a>
##Q.sortBy(fn, list)
Sorts the list according to a key generated by the supplied function.

**Params**

- fn `function` - The function mapping `list` items to keys.  
- list `Array` - The list to sort.  

**Returns**: `Array` - A new list sorted by the keys generated by `fn`.  
**Example**  
var sortByFirstItem = Q.sortBy(prop(0));
var sortByNameCaseInsensitive = Q.sortBy(compose(Q.toLower, prop('name')));
var pairs = [[-1, 1], [-2, 2], [-3, 3]];
sortByFirstItem(pairs); //=> [[-3, 3], [-2, 2], [-1, 1]]
var alice = {
   name: 'ALICE',
   age: 101
};
var bob = {
   name: 'Bob',
  age: -10
};
var clara = {
  name: 'clara',
  age: 314.159
};
var people = [clara, bob, alice];
sortByNameCaseInsensitive(people); //=> [alice, bob, clara]

<a name="Q.split"></a>
##Q.split(sep, str)
Splits a string into an array of strings based on the given
separator.

**Params**

- sep `String` - The separator string.  
- str `String` - The string to separate into an array.  

**Returns**: `Array` - The array of strings from `str` separated by `str`.  
**Example**  
var pathComponents = Q.split('/');
Q.tail(pathComponents('/usr/local/bin/node')); //=> ['usr', 'local', 'bin', 'node']

Q.split('.', 'a.b.c.xyz.d'); //=> ['a', 'b', 'c', 'xyz', 'd']

<a name="Q.strIndexOf"></a>
##Q.strIndexOf(c, str)
Finds the first index of a substring in a string, returning -1 if it's not present

**Params**

- c `String` - A string to find.  
- str `String` - The string to search in  

**Returns**: `Number` - The first index of `c` or -1 if not found.  
**Example**  
Q.strIndexOf('c', 'abcdefg'); //=> 2

<a name="Q.strLastIndexOf"></a>
##Q.strLastIndexOf(c, str)
Finds the last index of a substring in a string, returning -1 if it's not present

**Params**

- c `String` - A string to find.  
- str `String` - The string to search in  

**Returns**: `Number` - The last index of `c` or -1 if not found.  
**Example**  
Q.strLastIndexOf('a', 'banana split'); //=> 5

<a name="Q.substring"></a>
##Q.substring(indexA, indexB, str)
returns a subset of a string between one index and another.

**Params**

- indexA `Number` - An integer between 0 and the length of the string.  
- indexB `Number` - An integer between 0 and the length of the string.  
- str `String` - The string to extract from  

**Returns**: `String` - The extracted substring.  
**Example**  
Q.substring(2, 5, 'abcdefghijklm'); //=> 'cde'

<a name="Q.substringFrom"></a>
##Q.substringFrom(indexA, str)
The trailing substring of a String starting with the nth character:

**Params**

- indexA `Number` - An integer between 0 and the length of the string.  
- str `String` - The string to extract from  

**Returns**: `String` - The extracted substring.  
**Example**  
Q.substringFrom(8, 'abcdefghijklm'); //=> 'ijklm'

<a name="Q.substringTo"></a>
##Q.substringTo(indexA, str)
The leading substring of a String ending before the nth character:

**Params**

- indexA `Number` - An integer between 0 and the length of the string.  
- str `String` - The string to extract from  

**Returns**: `String` - The extracted substring.  
**Example**  
Q.substringTo(8, 'abcdefghijklm'); //=> 'abcdefgh'

<a name="Q.subtract"></a>
##Q.subtract(a, b)
Subtracts two numbers. Equivalent to `a - b` but curried.

**Params**

- a `Number` - The first value.  
- b `Number` - The second value.  

**Returns**: `Number` - The result of `a - b`.  
**Example**  
Q.subtract(10, 8); //=> 2

var minus5 = Q.subtract(Q.__, 5);
minus5(17); //=> 12

var complementaryAngle = Q.subtract(90);
complementaryAngle(30); //=> 60
complementaryAngle(72); //=> 18

<a name="Q.sum"></a>
##Q.sum(list)
Adds together all the elements of a list.

**Params**

- list `Array` - An array of numbers  

**Returns**: `Number` - The sum of all the numbers in the list.  
**Example**  
Q.sum([2,4,6,8,100,1]); //=> 121

<a name="Q.tail"></a>
##Q.tail([list])
Returns all but the first element of a list. If the list provided has the `tail` method,
it will instead return `list.tail()`.

**Params**

- \[list=[]\] `Array` - The array to consider.  

**Returns**: `Array` - A new array containing all but the first element of the input list, or an
        empty list if the input list is empty.  
**Example**  
Q.tail(['fi', 'fo', 'fum']); //=> ['fo', 'fum']

<a name="Q.take"></a>
##Q.take(n, list)
Returns a new list containing the first `n` elements of the given list.  If
`n > * list.length`, returns a list of `list.length` elements.

**Params**

- n `Number` - The number of elements to return.  
- list `Array` - The array to query.  

**Returns**: `Array` - A new array containing the first elements of `list`.  
<a name="Q.takeWhile"></a>
##Q.takeWhile(fn, list)
Returns a new list containing the first `n` elements of a given list, passing each value
to the supplied predicate function, and terminating when the predicate function returns
`false`. Excludes the element that caused the predicate function to fail. The predicate
function is passed one argument: *(value)*.

**Params**

- fn `function` - The function called per iteration.  
- list `Array` - The collection to iterate over.  

**Returns**: `Array` - A new array.  
**Example**  
var isNotFour = function(x) {
  return !(x === 4);
};

Q.takeWhile(isNotFour, [1, 2, 3, 4]); //=> [1, 2, 3]

<a name="Q.tap"></a>
##Q.tap(fn, x)
Runs the given function with the supplied object, then returns the object.

**Params**

- fn `function` - The function to call with `x`. The return value of `fn` will be thrown away.  
- x `*`  

**Returns**: `*` - `x`.  
**Example**  
var sayX = function(x) { console.log('x is ' + x); };
Q.tap(sayX, 100); //=> 100
//-> 'x is 100')

<a name="Q.times"></a>
##Q.times(fn, n)
Calls an input function `n` times, returning an array containing the results of those
function calls.

`fn` is passed one argument: The current value of `n`, which begins at `0` and is
gradually incremented to `n - 1`.

**Params**

- fn `function` - The function to invoke. Passed one argument, the current value of `n`.  
- n `Number` - A value between `0` and `n - 1`. Increments after each function call.  

**Returns**: `Array` - An array containing the return values of all calls to `fn`.  
**Example**  
Q.times(Q.identity, 5); //=> [0, 1, 2, 3, 4]

<a name="Q.toLower"></a>
##Q.toLower(str)
The lower case version of a string.

**Params**

- str `String` - The string to lower case.  

**Returns**: `String` - The lower case version of `str`.  
**Example**  
Q.toLower('XYZ'); //=> 'xyz'

<a name="Q.toPairs"></a>
##Q.toPairs(obj)
Converts an object into an array of key, value arrays.
Only the object's own properties are used.
Note that the order of the output array is not guaranteed to be
consistent across different JS platforms.

**Params**

- obj `Object` - The object to extract from  

**Returns**: `Array` - An array of key, value arrays from the object's own properties.  
**Example**  
Q.toPairs({a: 1, b: 2, c: 3}); //=> [['a', 1], ['b', 2], ['c', 3]]

<a name="Q.toUpper"></a>
##Q.toUpper(str)
The upper case version of a string.

**Params**

- str `String` - The string to upper case.  

**Returns**: `String` - The upper case version of `str`.  
**Example**  
Q.toUpper('abc'); //=> 'ABC'

<a name="Q.unfoldr"></a>
##Q.unfoldr(fn, seed)
Builds a list from a seed value. Accepts an iterator function, which returns either false
to stop iteration or an array of length 2 containing the value to add to the resulting
list and the seed to be used in the next call to the iterator function.

The iterator function receives one argument: *(seed)*.

**Params**

- fn `function` - The iterator function. receives one argument, `seed`, and returns
       either false to quit iteration or an array of length two to proceed. The element
       at index 0 of this array will be added to the resulting array, and the element
       at index 1 will be passed to the next call to `fn`.  
- seed `*` - The seed value.  

**Returns**: `Array` - The final list.  
**Example**  
var f = function(n) { return n > 50 ? false : [-n, n + 10] };
Q.unfoldr(f, 10); //=> [-10, -20, -30, -40, -50]

<a name="Q.uniq"></a>
##Q.uniq(list)
Returns a new list containing only one copy of each element in the original list.
Equality is strict here, meaning reference equality for objects and non-coercing equality
for primitives.

**Params**

- list `Array` - The array to consider.  

**Returns**: `Array` - The list of unique items.  
**Example**  
Q.uniq([1, 1, 2, 1]); //=> [1, 2]
Q.uniq([{}, {}]);     //=> [{}, {}]
Q.uniq([1, '1']);     //=> [1, '1']

<a name="Q.uniqWith"></a>
##Q.uniqWith(pred, list)
Returns a new list containing only one copy of each element in the original list, based
upon the value returned by applying the supplied predicate to two list elements. Prefers
the first item if two items compare equal based on the predicate.

**Params**

- pred `function` - A predicate used to test whether two items are equal.  
- list `Array` - The array to consider.  

**Returns**: `Array` - The list of unique items.  
**Example**  
var strEq = function(a, b) { return String(a) === String(b); };
Q.uniqWith(strEq)([1, '1', 2, 1]); //=> [1, 2]
Q.uniqWith(strEq)([{}, {}]);       //=> [{}]
Q.uniqWith(strEq)([1, '1', 1]);    //=> [1]
Q.uniqWith(strEq)(['1', 1, 1]);    //=> ['1']

<a name="Q.unnest"></a>
##Q.unnest(list)
Returns a new list by pulling every item at the first level of nesting out, and putting
them in a new array.

**Params**

- list `Array` - The array to consider.  

**Returns**: `Array` - The flattened list.  
**Example**  
Q.unnest([1, [2], [[3]]]); //=> [1, 2, [3]]
Q.unnest([[1, 2], [3, 4], [5, 6]]); //=> [1, 2, 3, 4, 5, 6]

<a name="Q.values"></a>
##Q.values(obj)
Returns a list of all the enumerable own properties of the supplied object.
Note that the order of the output array is not guaranteed across
different JS platforms.

**Params**

- obj `Object` - The object to extract values from  

**Returns**: `Array` - An array of the values of the object's own properties.  
**Example**  
Q.values({a: 1, b: 2, c: 3}); //=> [1, 2, 3]

<a name="Q.where"></a>
##Q.where(spec, testObj)
Takes a spec object and a test object and returns true if the test satisfies the spec.
Any property on the spec that is not a function is interpreted as an equality
relation.

If the spec has a property mapped to a function, then `where` evaluates the function, passing in
the test object's value for the property in question, as well as the whole test object.

`where` is well suited to declaratively expressing constraints for other functions, e.g.,
`filter`, `find`, `pickBy`, etc.

**Params**

- spec `Object`  
- testObj `Object`  

**Returns**: `Boolean`  
**Example**  
var spec = {x: 2};
Q.where(spec, {w: 10, x: 2, y: 300}); //=> true
Q.where(spec, {x: 1, y: 'moo', z: true}); //=> false

var spec2 = {x: function(val, obj) { return  val + obj.y > 10; }};
Q.where(spec2, {x: 2, y: 7}); //=> false
Q.where(spec2, {x: 3, y: 8}); //=> true

var xs = [{x: 2, y: 1}, {x: 10, y: 2}, {x: 8, y: 3}, {x: 10, y: 4}];
Q.filter(Q.where({x: 10}), xs); // ==> [{x: 10, y: 2}, {x: 10, y: 4}]

<a name="Q.wrap"></a>
##Q.wrap(fn, wrapper)
Wrap a function inside another to allow you to make adjustments to the parameters, or do
other processing either before the internal function is called or with its results.

**Params**

- fn `function` - The function to wrap.  
- wrapper `function` - The wrapper function.  

**Returns**: `function` - The wrapped function.  
**Example**  
var greet = function(name) {return 'Hello ' + name;};

var shoutedGreet = Q.wrap(greet, function(gr, name) {
    return gr(name).toUpperCase();
});
shoutedGreet("Kathy"); //=> "HELLO KATHY"

var shortenedGreet = Q.wrap(greet, function(gr, name) {
    return gr(name.substring(0, 3));
});
shortenedGreet("Robert"); //=> "Hello Rob"

<a name="Q.xprod"></a>
##Q.xprod(as, bs)
Creates a new list out of the two supplied by creating each possible
pair from the lists.

**Params**

- as `Array` - The first list.  
- bs `Array` - The second list.  

**Returns**: `Array` - The list made by combining each possible pair from
        `as` and `bs` into pairs (`[a, b]`).  
**Example**  
Q.xprod([1, 2], ['a', 'b']); //=> [[1, 'a'], [1, 'b'], [2, 'a'], [2, 'b']]

<a name="Q.zip"></a>
##Q.zip(list1, list2)
Creates a new list out of the two supplied by pairing up
equally-positioned items from both lists.  The returned list is
truncated to the length of the shorter of the two input lists.
Note: `zip` is equivalent to `zipWith(function(a, b) { return [a, b] })`.

**Params**

- list1 `Array` - The first array to consider.  
- list2 `Array` - The second array to consider.  

**Returns**: `Array` - The list made by pairing up same-indexed elements of `list1` and `list2`.  
**Example**  
Q.zip([1, 2, 3], ['a', 'b', 'c']); //=> [[1, 'a'], [2, 'b'], [3, 'c']]

<a name="Q.zipObj"></a>
##Q.zipObj(keys, values)
Creates a new object out of a list of keys and a list of values.

**Params**

- keys `Array` - The array that will be properties on the output object.  
- values `Array` - The list of values on the output object.  

**Returns**: `Object` - The object made by pairing up same-indexed elements of `keys` and `values`.  
**Example**  
Q.zipObj(['a', 'b', 'c'], [1, 2, 3]); //=> {a: 1, b: 2, c: 3}

<a name="Q.zipWith"></a>
##Q.zipWith(fn, list1, list2)
Creates a new list out of the two supplied by applying the function to
each equally-positioned pair in the lists. The returned list is
truncated to the length of the shorter of the two input lists.

**Params**

- fn `function` - The function used to combine the two elements into one value.  
- list1 `Array` - The first array to consider.  
- list2 `Array` - The second array to consider.  

**Returns**: `Array` - The list made by combining same-indexed elements of `list1` and `list2`
        using `fn`.  
**Example**  
var f = function(x, y) {
  // ...
};
Q.zipWith(f, [1, 2, 3], ['a', 'b', 'c']);
//=> [f(1, 'a'), f(2, 'b'), f(3, 'c')]

<a name="Q.allPass"></a>
##Q.allPass(list, optional)
Given a list of predicates, returns a new predicate that will be true exactly when all of them are.

**Params**

- list `Array` - An array of predicate functions  
- optional `*` - Any arguments to pass into the predicates  

**Returns**: `function` - a function that applies its arguments to each of
        the predicates, returning `true` if all are satisfied.  
**Example**  
var gt10 = function(x) { return x > 10; };
var even = function(x) { return x % 2 === 0};
var f = Q.allPass([gt10, even]);
f(11); //=> false
f(12); //=> true

<a name="Q.anyPass"></a>
##Q.anyPass(list, optional)
Given a list of predicates returns a new predicate that will be true exactly when any one of them is.

**Params**

- list `Array` - An array of predicate functions  
- optional `*` - Any arguments to pass into the predicates  

**Returns**: `function` - A function that applies its arguments to each of the predicates, returning
        `true` if all are satisfied.  
**Example**  
var gt10 = function(x) { return x > 10; };
var even = function(x) { return x % 2 === 0};
var f = Q.anyPass([gt10, even]);
f(11); //=> true
f(8); //=> true
f(9); //=> false

<a name="Q.ap"></a>
##Q.ap(fns, vs)
ap applies a list of functions to a list of values.

**Params**

- fns `Array` - An array of functions  
- vs `Array` - An array of values  

**Returns**: `Array` - The value of applying each the function `fns` to each value in `vs`.  
**Example**  
Q.ap([Q.multiply(2), Q.add(3)], [1,2,3]); //=> [2, 4, 6, 4, 5, 6]

<a name="Q.assoc"></a>
##Q.assoc(prop, val, obj)
Makes a shallow clone of an object, setting or overriding the specified
property with the given value.  Note that this copies and flattens
prototype properties onto the new object as well.  All non-primitive
properties are copied by reference.

**Params**

- prop `String` - the property name to set  
- val `*` - the new value  
- obj `Object` - the object to clone  

**Returns**: `Object` - a new object similar to the original except for the specified property.  
**Example**  
var obj1 = {a: 1, b: {c: 2, d: 3}, e: 4, f: 5};
var obj2 = Q.assoc('e', {x: 42}, obj1);
//=>  {a: 1, b: {c: 2, d: 3}, e: {x: 42}, f: 5}

// And moreover, obj2.b is a reference to obj1.b
// No unnecessary objects are created.

<a name="Q.assocPath"></a>
##Q.assocPath(path, val, obj)
Makes a shallow clone of an object, setting or overriding the nodes
required to create the given path, and placing the specifiec value at the
tail end of that path.  Note that this copies and flattens prototype
properties onto the new object as well.  All non-primitive properties
are copied by reference.

**Params**

- path `String` - the dot-delimited path to set  
- val `*` - the new value  
- obj `Object` - the object to clone  

**Returns**: `Object` - a new object similar to the original except along the specified path.  
**Example**  
var obj1 = {a: {b: 1, c: 2, d: {e: 3}}, f: {g: {h: 4, i: 5, j: {k: 6, l: 7}}}, m: 8};
var obj2 = Q.assocPath('f.g.i', {x: 42}, obj1);
//=> {a: {b: 1, c: 2, d: {e: 3}}, f: {g: {h: 4, i: {x: 42}, j: {k: 6, l: 7}}}, m: 8}

<a name="Q.chain"></a>
##Q.chain(fn, list)
`chain` maps a function over a list and concatenates the results.
This implementation is compatible with the
Fantasy-land Chain spec, and will work with types that implement that spec.
`chain` is also known as `flatMap` in some libraries

**Params**

- fn `function`  
- list `Array`  

**Returns**: `Array`  
**Example**  
var duplicate = function(n) {
  return [n, n];
};
Q.chain(duplicate, [1, 2, 3]); //=> [1, 1, 2, 2, 3, 3]

<a name="Q.charAt"></a>
##Q.charAt(index, str)
The character at the nth position in a String:

**Params**

- index `Number` - An integer between 0 and the length of the string.  
- str `String` - The string to extract a char from  

**Returns**: `String` - The character at `index` of `str`.  
**Example**  
Q.charAt(8, 'abcdefghijklm'); //=> 'i'

<a name="Q.charCodeAt"></a>
##Q.charCodeAt(index, str)
The ascii code of the character at the nth position in a String:

**Params**

- index `Number` - An integer between 0 and the length of the string.  
- str `String` - The string to extract a charCode from  

**Returns**: `Number` - The code of the character at `index` of `str`.  
**Example**  
Q.charCodeAt(8, 'abcdefghijklm'); //=> 105
// (... 'a' ~ 97, 'b' ~ 98, ... 'i' ~ 105)

<a name="Q.commuteMap"></a>
##Q.commuteMap(fn, of, list)
Turns a list of Functors into a Functor of a list, applying
a mapping function to the elements of the list along the way.

Note: `commuteMap` may be more useful to convert a list of non-Array Functors (e.g.
Maybe, Either, etc.) to Functor of a list.

**Params**

- fn `function` - The transformation function  
- of `function` - A function that returns the data type to return  
- list `Array` - An Array (or other Functor) of Arrays (or other Functors)  

**Returns**: `Array`  
**Example**  
var plus10map = Q.map(function(x) { return x + 10; });
var as = [[1], [3, 4]];
Q.commuteMap(Q.map(function(x) { return x + 10; }), Q.of, as); //=> [[11, 13], [11, 14]]

var bs = [[1, 2], [3]];
Q.commuteMap(plus10map, Q.of, bs); //=> [[11, 13], [12, 13]]

var cs = [[1, 2], [3, 4]];
Q.commuteMap(plus10map, Q.of, cs); //=> [[11, 13], [12, 13], [11, 14], [12, 14]]

<a name="Q.concat"></a>
##Q.concat(list1, list2)
Returns a new list consisting of the elements of the first list followed by the elements
of the second.

**Params**

- list1 `Array` - The first list to merge.  
- list2 `Array` - The second set to merge.  

**Returns**: `Array` - A new array consisting of the contents of `list1` followed by the
        contents of `list2`. If, instead of an Array for `list1`, you pass an
        object with a `concat` method on it, `concat` will call `list1.concat`
        and pass it the value of `list2`.  
**Example**  
Q.concat([], []); //=> []
Q.concat([4, 5, 6], [1, 2, 3]); //=> [4, 5, 6, 1, 2, 3]
Q.concat('ABC', 'DEF'); // 'ABCDEF'

// operator-style:
Q.concat(Q.__)([4, 5, 6], [1, 2, 3]); //=> [1, 2, 3, 4, 5, 6]

<a name="Q.contains"></a>
##Q.contains(a, list)
Returns `true` if the specified item is somewhere in the list, `false` otherwise.
Equivalent to `indexOf(a)(list) > -1`. Uses strict (`===`) equality checking.

**Params**

- a `Object` - The item to compare against.  
- list `Array` - The array to consider.  

**Returns**: `Boolean` - `true` if the item is in the list, `false` otherwise.  
**Example**  
Q.contains(3)([1, 2, 3]); //=> true
Q.contains(4)([1, 2, 3]); //=> false
Q.contains({})([{}, {}]); //=> false
var obj = {};
Q.contains(obj)([{}, obj, {}]); //=> true

// operator-style
Q.contains(Q.__)([1, 2, 3], 3) //=> true

<a name="Q.countBy"></a>
##Q.countBy(fn, list)
Counts the elements of a list according to how many match each value
of a key generated by the supplied function. Returns an object
mapping the keys produced by `fn` to the number of occurrences in
the list. Note that all keys are coerced to strings because of how
JavaScript objects work.

**Params**

- fn `function` - The function used to map values to keys.  
- list `Array` - The list to count elements from.  

**Returns**: `Object` - An object mapping keys to number of occurrences in the list.  
**Example**  
var numbers = [1.0, 1.1, 1.2, 2.0, 3.0, 2.2];
var letters = Q.split('', 'abcABCaaaBBc');
Q.countBy(Math.floor)(numbers);    //=> {'1': 3, '2': 2, '3': 1}
Q.countBy(Q.toLower)(letters);   //=> {'a': 5, 'b': 4, 'c': 3}

<a name="Q.curry"></a>
##Q.curry(fn)
Creates a new version of `fn` that, when invoked, will return either:
- A new function ready to accept one or more of `fn`'s remaining arguments, if all of
`fn`'s expected arguments have not yet been provided
- `fn`'s result if all of its expected arguments have been provided

**Params**

- fn `function` - The function to curry.  

**Returns**: `function` - A new, curried function.  
**Example**  
var addFourNumbers = function(a, b, c, d) {
  return a + b + c + d;
};

var curriedAddFourNumbers = Q.curry(addFourNumbers);
var f = curriedAddFourNumbers(1, 2);
var g = f(3);
g(4);//=> 10

<a name="Q.divide"></a>
##Q.divide(a, b)
Divides two numbers. Equivalent to `a / b`.

**Params**

- a `Number` - The first value.  
- b `Number` - The second value.  

**Returns**: `Number` - The result of `a / b`.  
**Example**  
Q.divide(71, 100); //=> 0.71

var half = Q.divide(Q.__, 2);
half(42); //=> 21

var reciprocal = Q.divide(1);
reciprocal(4);   //=> 0.25

<a name="Q.eqDeep"></a>
##Q.eqDeep(a, b)
Performs a deep test on whether two items are equal.
Equality implies the two items are semmatically equivalent.
Cyclic structures are handled as expected

**Params**

- a `*`  
- b `*`  

**Returns**: `Boolean`  
**Example**  
var o = {};
Q.eqDeep(o, o); //=> true
Q.eqDeep(o, {}); //=> true
Q.eqDeep(1, 1); //=> true
Q.eqDeep(1, '1'); //=> false

var a = {}; a.v = a;
var b = {}; b.v = b;
Q.eqDeep(a, b); //=> true

<a name="Q.evolve"></a>
##Q.evolve(transformations, object)
Creates a new object by evolving a shallow copy of `object`, according to the
`transformation` functions.  All non-primitive properties are copied by reference.

**Params**

- transformations `Object` - The object specifying transformation functions to apply
       to the object.  
- object `Object` - The object to be transformed.  

**Returns**: `Object` - The transformed object.  
**Example**  
Q.evolve({ elapsed: Q.add(1), remaining: Q.add(-1) }, { name: 'Tomato', elapsed: 100, remaining: 1400 }); //=> { name: 'Tomato', elapsed: 101, remaining: 1399 }

<a name="Q.functions"></a>
##Q.functions(obj)
Returns a list of function names of object's own functions

**Params**

- obj `Object` - The objects with functions in it  

**Returns**: `Array` - A list of the object's own properties that map to functions.  
**Example**  
Q.functions(R); // returns list of ramda's own function names

var F = function() { this.x = function(){}; this.y = 1; }
F.prototype.z = function() {};
F.prototype.a = 100;
Q.functions(new F()); //=> ["x"]

<a name="Q.gt"></a>
##Q.gt(a, b)
Returns true if the first parameter is greater than the second.

**Params**

- a `Number`  
- b `Number`  

**Returns**: `Boolean` - a > b  
**Example**  
Q.gt(2, 6); //=> false
Q.gt(2, 0); //=> true
Q.gt(2, 2); //=> false
Q.gt(Q.__, 2)(10); //=> true
Q.gt(2)(10); //=> false

<a name="Q.gte"></a>
##Q.gte(a, b)
Returns true if the first parameter is greater than or equal to the second.

**Params**

- a `Number`  
- b `Number`  

**Returns**: `Boolean` - a >= b  
**Example**  
Q.gte(2, 6); //=> false
Q.gte(2, 0); //=> true
Q.gte(2, 2); //=> true
Q.gte(Q.__, 6)(2); //=> false
Q.gte(2)(0); //=> true
Q.gte(Q.__)(1, 2); //=> true

<a name="Q.head"></a>
##Q.head([list])
Returns the first element in a list.
In some libraries this function is named `first`.

**Params**

- \[list=[]\] `Array` - The array to consider.  

**Returns**: `*` - The first element of the list, or `undefined` if the list is empty.  
**Example**  
Q.head(['fi', 'fo', 'fum']); //=> 'fi'

<a name="Q.init"></a>
##Q.init([list])
Returns all but the last element of a list.

**Params**

- \[list=[]\] `Array` - The array to consider.  

**Returns**: `Array` - A new array containing all but the last element of the input list, or an
        empty list if the input list is empty.  
**Example**  
Q.init(['fi', 'fo', 'fum']); //=> ['fi', 'fo']

<a name="Q.installTo"></a>
##Q.installTo(obj)
Expose the functions from ramda as properties of another object.
If the provided object is the global object then the ramda
functions become global functions.
Warning: This function *will* mutate the object provided.

**Params**

- obj `Object` - The object to attach ramda functions  

**Returns**: `Object` - a reference to the mutated object.  
**Example**  
var x = {}
Q.installTo(x); // x now contains ramda functions
Q.installTo(this); // add ramda functions to `this` object

<a name="Q.intersection"></a>
##Q.intersection(list1, list2)
Combines two lists into a set (i.e. no duplicates) composed of those elements common to both lists.

**Params**

- list1 `Array` - The first list.  
- list2 `Array` - The second list.  

**Returns**: `Array` - The list of elements found in both `list1` and `list2`.  
**Example**  
Q.intersection([1,2,3,4], [7,6,5,4,3]); //=> [4, 3]

<a name="Q.intersectionWith"></a>
##Q.intersectionWith(pred, list1, list2)
Combines two lists into a set (i.e. no duplicates) composed of those
elements common to both lists.  Duplication is determined according
to the value returned by applying the supplied predicate to two list
elements.

**Params**

- pred `function` - A predicate function that determines whether
       the two supplied elements are equal.  
- list1 `Array` - One list of items to compare  
- list2 `Array` - A second list of items to compare  

**Returns**: `Array` - A new list containing those elements common to both lists.  
**Example**  
var buffaloSpringfield = [
  {id: 824, name: 'Richie Furay'},
  {id: 956, name: 'Dewey Martin'},
  {id: 313, name: 'Bruce Palmer'},
  {id: 456, name: 'Stephen Stills'},
  {id: 177, name: 'Neil Young'}
];
var csny = [
  {id: 204, name: 'David Crosby'},
  {id: 456, name: 'Stephen Stills'},
  {id: 539, name: 'Graham Nash'},
  {id: 177, name: 'Neil Young'}
];

var sameId = function(o1, o2) {return o1.id === o2.id;};

Q.intersectionWith(sameId, buffaloSpringfield, csny);
//=> [{id: 456, name: 'Stephen Stills'}, {id: 177, name: 'Neil Young'}]

<a name="Q.invert"></a>
##Q.invert(obj)
Same as Q.invertObj, however this accounts for objects
with duplicate values by putting the values into an
array.

**Params**

- obj `Object` - The object or array to invert  

**Returns**: `Object` - out A new object with keys
in an array.  
**Example**  
var raceResultsByFirstName = {
  first: 'alice',
  second: 'jake',
  third: 'alice',
};
Q.invert(raceResultsByFirstName);
//=> { 'alice': ['first', 'third'], 'jake':['second'] }

<a name="Q.invertObj"></a>
##Q.invertObj(obj)
Returns a new object with the keys of the given object
as values, and the values of the given object as keys.

**Params**

- obj `Object` - The object or array to invert  

**Returns**: `Object` - out A new object  
**Example**  
var raceResults = {
  first: 'alice',
  second: 'jake'
};
Q.invertObj(raceResults);
//=> { 'alice': 'first', 'jake':'second' }

// Alternatively:
var raceResults = ['alice', 'jake'];
Q.invertObj(raceResults);
//=> { 'alice': '0', 'jake':'1' }

<a name="Q.last"></a>
##Q.last([list])
Returns the last element from a list.

**Params**

- \[list=[]\] `Array` - The array to consider.  

**Returns**: `*` - The last element of the list, or `undefined` if the list is empty.  
**Example**  
Q.last(['fi', 'fo', 'fum']); //=> 'fum'

<a name="Q.liftN"></a>
##Q.liftN(fn)
"lifts" a function to be the specified arity, so that it may "map over" that many
lists (or other Functors).

**Params**

- fn `function` - The function to lift into higher context  

**Returns**: `function` - The function `fn` applicable to mappable objects.  
**Example**  
var madd3 = Q.liftN(3, Q.curryN(3, function() {
    return Q.foldl(Q.add, 0, arguments);
}));
madd3([1,2,3], [1,2,3], [1]); //=> [3, 4, 5, 4, 5, 6, 5, 6, 7]

<a name="Q.lt"></a>
##Q.lt(a, b)
Returns true if the first parameter is less than the second.

**Params**

- a `Number`  
- b `Number`  

**Returns**: `Boolean` - a < b  
**Example**  
Q.lt(2, 6); //=> true
Q.lt(2, 0); //=> false
Q.lt(2, 2); //=> false
Q.lt(5)(10); //=> true
Q.lt(Q.__, 5)(10); //=> false // right-sectioned currying

<a name="Q.lte"></a>
##Q.lte(a, b)
Returns true if the first parameter is less than or equal to the second.

**Params**

- a `Number`  
- b `Number`  

**Returns**: `Boolean` - a <= b  
**Example**  
Q.lte(2, 6); //=> true
Q.lte(2, 0); //=> false
Q.lte(2, 2); //=> true
Q.lte(Q.__, 2)(1); //=> true
Q.lte(2)(10); //=> true
Q.lte(Q.__)(5, 4) // => true

<a name="Q.mathMod"></a>
##Q.mathMod(m, p)
mathMod behaves like the modulo operator should mathematically, unlike the `%`
operator (and by extension, Q.modulo). So while "-17 % 5" is -2,
mathMod(-17, 5) is 3. mathMod requires Integer arguments, and returns NaN
when the modulus is zero or negative.

**Params**

- m `Number` - The dividend.  
- p `Number` - the modulus.  

**Returns**: `Number` - The result of `b mod a`.  
**Example**  
Q.mathMod(-17, 5);  //=> 3
Q.mathMod(17, 5);   //=> 2
Q.mathMod(17, -5);  //=> NaN
Q.mathMod(17, 0);   //=> NaN
Q.mathMod(17.2, 5); //=> NaN
Q.mathMod(17, 5.3); //=> NaN

var clock = Q.mathMod(Q.__, 12);
clock(15); //=> 3
clock(24); //=> 0

var seventeenMod = Q.mathMod(17);
seventeenMod(3);  //=> 2
seventeenMod(4);  //=> 1
seventeenMod(10); //=> 7

<a name="Q.mixin"></a>
##Q.mixin(a, b)
Create a new object with the own properties of a
merged with the own properties of object b.
This function will *not* mutate passed-in objects.

**Params**

- a `Object` - source object  
- b `Object` - object with higher precedence in output  

**Returns**: `Object` - The destination object.  
**Example**  
Q.mixin({ 'name': 'fred', 'age': 10 }, { 'age': 40 });
//=> { 'name': 'fred', 'age': 40 }

var resetToDefault = Q.mixin(Q.__, {x: 0});
resetToDefault({x: 5, y: 2}); //=> {x: 0, y: 2}

<a name="Q.modulo"></a>
##Q.modulo(a, b)
Divides the second parameter by the first and returns the remainder.
Note that this functions preserves the JavaScript-style behavior for
modulo. For mathematical modulo see `mathMod`

**Params**

- a `Number` - The value to the divide.  
- b `Number` - The pseudo-modulus  

**Returns**: `Number` - The result of `b % a`.  
**Example**  
Q.modulo(17, 3); //=> 2
// JS behavior:
Q.modulo(-17, 3); //=> -2
Q.modulo(17, -3); //=> 2

var isOdd = Q.modulo(Q.__, 2);
isOdd(42); //=> 0
isOdd(21); //=> 1

<a name="Q.path"></a>
##Q.path(path)
Retrieve a nested path on an object separated by periods

**Params**

- path `String` - The dot path to use.  

**Returns**: `*` - The data at `path`.  
**Example**  
Q.path('a.b', {a: {b: 2}}); //=> 2

<a name="Q.repeat"></a>
##Q.repeat(value, n)
Returns a fixed list of size `n` containing a specified identical value.

**Params**

- value `*` - The value to repeat.  
- n `Number` - The desired size of the output list.  

**Returns**: `Array` - A new array containing `n` `value`s.  
**Example**  
Q.repeat('hi', 5); //=> ['hi', 'hi', 'hi', 'hi', 'hi']

var obj = {};
var repeatedObjs = Q.repeat(obj, 5); //=> [{}, {}, {}, {}, {}]
repeatedObjs[0] === repeatedObjs[1]; //=> true

<a name="Q.union"></a>
##Q.union(as, bs)
Combines two lists into a set (i.e. no duplicates) composed of the
elements of each list.

**Params**

- as `Array` - The first list.  
- bs `Array` - The second list.  

**Returns**: `Array` - The first and second lists concatenated, with
        duplicates removed.  
**Example**  
Q.union([1, 2, 3], [2, 3, 4]); //=> [1, 2, 3, 4]

<a name="Q.unionWith"></a>
##Q.unionWith(pred, list1, list2)
Combines two lists into a set (i.e. no duplicates) composed of the elements of each list.  Duplication is
determined according to the value returned by applying the supplied predicate to two list elements.

**Params**

- pred `function` - A predicate used to test whether two items are equal.  
- list1 `Array` - The first list.  
- list2 `Array` - The second list.  

**Returns**: `Array` - The first and second lists concatenated, with
        duplicates removed.  
**Example**  
function cmp(x, y) { return x.a === y.a; }
var l1 = [{a: 1}, {a: 2}];
var l2 = [{a: 1}, {a: 4}];
Q.unionWith(cmp, l1, l2); //=> [{a: 1}, {a: 2}, {a: 4}]

<a name="Q.useWith"></a>
##Q.useWith(fn, ...transformers)
Accepts a function `fn` and any number of transformer functions and returns a new
function. When the new function is invoked, it calls the function `fn` with parameters
consisting of the result of calling each supplied handler on successive arguments to the
new function.

If more arguments are passed to the returned function than transformer functions, those
arguments are passed directly to `fn` as additional parameters. If you expect additional
arguments that don't need to be transformed, although you can ignore them, it's best to
pass an identity function so that the new function reports the correct arity.

**Params**

- fn `function` - The function to wrap.  
- ...transformers `function` - A variable number of transformer functions  

**Returns**: `function` - The wrapped function.  
**Example**  
// Example 1:

// Number -> [Person] -> [Person]
var byAge = Q.useWith(Q.filter, Q.propEq('age'), Q.identity);

var kids = [
    {name: 'Abbie', age: 6},
    {name: 'Brian', age: 5},
    {name: 'Chris', age: 6},
    {name: 'David', age: 4},
    {name: 'Ellie', age: 5}
];

byAge(5, kids); //=> [{name: 'Brian', age: 5}, {name: 'Ellie', age: 5}]


// Example 2:

var double = function(y) { return y * 2; };
var square = function(x) { return x * x; };
var add = function(a, b) { return a + b; };
// Adds any number of arguments together
var addAll = function() {
  return Q.foldl(add, 0, arguments);
};

// Basic example
var addDoubleAndSquare = Q.useWith(addAll, double, square);

//≅ addAll(double(10), square(5));
addDoubleAndSquare(10, 5); //=> 45

// Example of passing more arguments than transformers
//≅ addAll(double(10), square(5), 100);
addDoubleAndSquare(10, 5, 100); //=> 145

// If there are extra _expected_ arguments that don't need to be transformed, although
// you can ignore them, it might be best to pass in the identity function so that the new
// function correctly reports arity.
var addDoubleAndSquareWithExtraParams = Q.useWith(addAll, double, square, Q.identity);
// addDoubleAndSquareWithExtraParams.length //=> 3
//≅ addAll(double(10), square(5), Q.identity(100));
addDoubleAndSquare(10, 5, 100); //=> 145

<a name="Q.commute"></a>
##Q.commute(of, list)
Turns a list of Functors into a Functor of a list.

Note: `commute` may be more useful to convert a list of non-Array Functors (e.g.
Maybe, Either, etc.) to Functor of a list.

**Params**

- of `function` - A function that returns the data type to return  
- list `Array` - An Array (or other Functor) of Arrays (or other Functors)  

**Returns**: `Array`  
**Example**  
var as = [[1], [3, 4]];
Q.commute(Q.of, as); //=> [[1, 3], [1, 4]]

var bs = [[1, 2], [3]];
Q.commute(Q.of, bs); //=> [[1, 3], [2, 3]]

var cs = [[1, 2], [3, 4]];
Q.commute(Q.of, cs); //=> [[1, 3], [2, 3], [1, 4], [2, 4]]

<a name="Q.constructN"></a>
##Q.constructN(n, Fn)
Wraps a constructor function inside a curried function that can be called with the same
arguments and returns the same type. The arity of the function returned is specified
to allow using variadic constructor functions.

**Params**

- n `Number` - The arity of the constructor function.  
- Fn `function` - The constructor function to wrap.  

**Returns**: `function` - A wrapped, curried constructor function.  
**Example**  
// Variadic constructor function
var Widget = function() {
  this.children = Array.prototype.slice.call(arguments);
  // ...
};
Widget.prototype = {
  // ...
};
var allConfigs = {
  // ...
};
Q.map(Q.constructN(1, Widget), allConfigs); // a list of Widgets

<a name="Q.lift"></a>
##Q.lift(fn)
"lifts" a function of arity > 1 so that it may "map over" an Array or
other Functor.

**Params**

- fn `function` - The function to lift into higher context  

**Returns**: `function` - The function `fn` applicable to mappable objects.  
**Example**  
var madd3 = Q.lift(Q.curryN(3, function(a, b, c) {
    return a + b + c;
}));
madd3([1,2,3], [1,2,3], [1]); //=> [3, 4, 5, 4, 5, 6, 5, 6, 7]

var madd5 = Q.lift(Q.curryN(5, function(a, b, c, d, e) {
    return a + b + c + d + e;
}));
madd5([1,2], [3], [4, 5], [6], [7, 8]); //=> [21, 22, 22, 23, 22, 23, 23, 24]

<a name="Q.project"></a>
##Q.project(props, objs)
Reasonable analog to SQL `select` statement.

**Params**

- props `Array` - The property names to project  
- objs `Array` - The objects to query  

**Returns**: `Array` - An array of objects with just the `props` properties.  
**Example**  
var abby = {name: 'Abby', age: 7, hair: 'blond', grade: 2};
var fred = {name: 'Fred', age: 12, hair: 'brown', grade: 7};
var kids = [abby, fred];
Q.project(['name', 'grade'], kids); //=> [{name: 'Abby', grade: 2}, {name: 'Fred', grade: 7}]

<a name="Q.construct"></a>
##Q.construct(Fn)
Wraps a constructor function inside a curried function that can be called with the same
arguments and returns the same type.

**Params**

- Fn `function` - The constructor function to wrap.  

**Returns**: `function` - A wrapped, curried constructor function.  
**Example**  
// Constructor function
var Widget = function(config) {
  // ...
};
Widget.prototype = {
  // ...
};
var allConfigs = {
  // ...
};
Q.map(Q.construct(Widget), allConfigs); // a list of Widgets

<a name="Q.abate"></a>
##Q.abate(f, obj)
Returns a new list by concatenating into list results of applying the function to all object key value pairs

**Params**

- f `function` - The function executed for each key value pair  
- obj `Object` - The obj to consider.  

**Returns**: `Array` - The list of results of applying the function to all key value pairs  
**Example**  
Q.abate(function(d){ return [-d,d];},{ a:4,b:9,c:16}); //=> [-4,4,-9,9,-16,16]

<a name="Q.amend"></a>
##Q.amend(left, right, lKey, rKey)
Amend left list object with keys from right list objects
joining by key

**Params**

- left `Array` - The original list  
- right `Array` - The extension list  
- lKey `String` - The original list key  
- rKey `String` - The extension list key, if a omitted assumed equal with lKey  

**Returns**: `function` - The predicate function.  
**Example**  
var left = [{ id:1, b:2},{ id:2, b:2}];
var right =[{ id:1, d:4},{ id:2, d:5}];
Q.amend(left,right,'id') => [{"id":1,"b":2,"d":4},{"id":2,"b":2,"d":5}]

<a name="Q.assembler"></a>
##Q.assembler(keys)
Returns a function that when supplied with arguments returns object created by given keys.
Returned function sets filed where it lacks arguments to undefined, ignores surplus arguments.

**Params**

- keys `Array` - keys for the created object  

**Returns**: `*` - The construct function  
**Example**  
var trend = Q.construct(["year", "amount", "name"]);
trend(1937,100, 'foo') => { year:1937, amount: 100, name: 'foo'}

<a name="Q.collect"></a>
##Q.collect(f, obj)
Returns a new list by collecting into list results of applying the function to all object key value pairs

**Params**

- f `function` | `String` - The function executed for each key value pair  
- obj `Object` - The obj to consider.  

**Returns**: `Array` - The list of results of applying the function to all key value pairs  
**Example**  
Q.collect(Math.sqrt,{ a:4,b:9,c:16}); //=> [2, 3, 4]

<a name="Q.curtail"></a>
##Q.curtail(fn, list)
Returns a new list by concatenating into list results of applying the function to all elements and their index

**Params**

- fn `function` - The function executed for each key value pair  
- list `Array` - The array  

**Returns**: `Array` - The list of results of applying the function to all key value pairs  
**Example**  
Q.curtail(function(d){ return [-d,d];},[4,9,16]); //=> [-4,4,-9,9,-16,16]

<a name="Q.division"></a>
##Q.division(divisor, dividend)
Divides two numbers. Equivalent to `a / b`.

**Params**

- divisor `Number` - The number you divide by  
- dividend `Number` - The amount that you want to divide up.  

**Returns**: `Number` - The quotient of `dividend / divisor`.  
**Example**  
Q.quotient(100,71); //=> 0.71

Q.map(Q.quotient(16),[1,2,4,8,16]) //=> [16,8,4,2,1]

<a name="Q.group"></a>
##Q.group(f, list)
Splits a list into sub-lists stored in an object, based on the result of calling a String-returning function
on each element, and grouping the results according to values returned.

**Params**

- f `function` | `String` - function or string  
- list `Array` - The array to group  

**Returns**: `Object` - An object with the output of `f` for keys, mapped to arrays of elements
        that produced that key when passed to `f`.  
**Example**  
Q.group(function(num) { return Math.floor(num); },[4.2, 6.1, 6.4]) =>( { '4': [4.2], '6': [6.1, 6.4] })

<a name="Q.innerJoin"></a>
##Q.innerJoin(on, columns, left, right)
Returns an inner join of two arrays.

**Params**

- on `String` | `Array` | `function` - it could be either string, array of two string or function  
- columns `Array` | `function` - it could be either array of strings or function  
- left `Array` - left array of objects to be joined  
- right `Array` - right array of objects to be joined  

**Returns**: `*` - The inner join of the arrays  
**Example**  
Q.join("id", ["a","b"],[{id:1, a: 1},{id:2,a:3}],[{id:1, b: 11},{id:22,a:33}]) // =>([{ a: 1, b:11}]);

<a name="Q.isNull"></a>
##Q.isNull(f, auto, obj)
Returns the requested value or provided default value if requested value is null or undefined

**Params**

- f `function` | `String` - function or string  
- auto `Object` - default value if requested value is null or undefined  
- obj `Object` - Object containing the requested value  

**Returns**: `Object` - An object with the output of `f` for keys, mapped to arrays of elements
        that produced that key when passed to `f`.  
**Example**  
Q.isNull({a:1},"a",2) // => 1
Q.isNull({b:1},"a",2) // => 2
Q.isNull(null,"a",3) // => 3

<a name="Q.lay"></a>
##Q.lay(end, [start], [step])
Returns a list of numbers from `start` (inclusive) to `end`
(exclusive) using tep.

**Params**

- end `Number` - step more than the last number in the list.  
- \[start\] `Number` - first number in the list. Assumed 0 if null  
- \[step\] `Number` - difference between two numbers. Assumed 1 if null  

**Returns**: `Array` - The list of numbers.  
**Example**  
Q.lay(5);    //=> [1, 2, 3, 4]
Q.lay(53, 50);  //=> [50, 51, 52]
Q.lay(4, 8, -1);  //=> [8, 7, 6, 5]

<a name="Q.least"></a>
##Q.least(f, list)
Determines the smallest of a list of items as determined by pairwise comparisons from the supplied comparator

**Params**

- f `function` | `String` - A comparator function or field specifier for elements in the list  
- list `Array` - A list of comparable elements  

**Returns**: `*` - The smallest element in the list. `undefined` if the list is empty.  
**Example**  
function cmp(obj) { return obj.x; }
var a = {x: 1}, b = {x: 2}, c = {x: 3};
Q.min(cmp, [a, b, c]); //=> {x: 1}

<a name="Q.minus"></a>
##Q.minus(subtrahend, minuend)
Subtracts two numbers. Equivalent to `a - b` but curried.

**Params**

- subtrahend `Number` - The number that is to be subtracted. The second number in a subtraction.  
- minuend `Number` - The number from which another number (the Subtrahend) is to be subtracted.  

**Returns**: `Number` - The difference  of `minuend - subtrahend`.  
**Example**  
Q.minus( 8,10); //=> 2
Q.map(Q.minus(10), [10,20,30]); //=> [0,10,20]

<a name="Q.most"></a>
##Q.most(f, list)
Determines the largest of a list of items as determined by pairwise comparisons from the supplied comparator

**Params**

- f `function` | `String` - A comparator function or field specifier for elements in the list  
- list `Array` - A list of comparable elements  

**Returns**: `*` - The largest element in the list. `undefined` if the list is empty.  
**Example**  
function cmp(obj) { return obj.x; }
var a = {x: 1}, b = {x: 2}, c = {x: 3};
Q.max(cmp, [a, b, c]); //=> {x: 3}

<a name="Q.order"></a>
##Q.order(f, list)
Sorts the list according to a key generated by the supplied function.

**Params**

- f `function` | `String` - The function mapping `list` items to keys, or property string.  
- list `Array` - The list to sort.  

**Returns**: `Array` - A new list sorted by the keys generated by `f`.  
**Example**  
var entries = [{ name: 'ALICE', age: 101 }, {name: 'Bob',age: -400},{name: 'clara',age: 314.159}];
Q.sort(function(d){ return Math.abs(d.age);},entries)
=> [{"name":"ALICE","age":101},{"name":"clara","age":314.159},{"name":"Bob","age":-400}]
 Q.sort("age", [{ name: 'ALICE', age: 101 }, {name: 'Bob',age: -400},{name: 'clara',age: 314.159}])
=> [{"name":"Bob","age":-400},{"name":"ALICE","age":101},{"name":"clara","age":314.159}]
 Q.sort("-age", [{ name: 'ALICE', age: 101 }, {name: 'Bob',age: -400},{name: 'clara',age: 314.159}])
=>[{"name":"clara","age":314.159},{"name":"ALICE","age":101},{"name":"Bob","age":-400}]

<a name="Q.remainder"></a>
##Q.remainder(divisor, dividend)
Divides the second parameter by the first and returns the remainder.
Note that this functions preserves the JavaScript-style behavior for
modulo. For mathematical modulo see `mathMod`

**Params**

- divisor `Number` - The pseudo-modulus  
- dividend `Number` - The value to the divide.  

**Returns**: `Number` - The result of `dividend % divisor`.  
**Example**  
Q.remainder(3,17); //=> 2
// JS behavior:
Q.remainder(3,-17); //=> -2
Q.remainder(17, -3); //=> 2

var isOdd = Q.modulo(2);
isOdd(42); //=> 0
isOdd(21); //=> 1

<a name="Q.sift"></a>
##Q.sift(f, list)
Returns a new list containing only those items that match a given predicate function.
The predicate function is passed one argument: *(value)*.

**Params**

- f `function` | `Object` - The function called per iteration, or functor description.  
- list `Array` - The collection to iterate over.  

**Returns**: `Array` - The new filtered array.  
**Example**  
var isEven = function(n) {
  return n % 2 === 0;
};
Q.sift(isEven, [1, 2, 3, 4]); //=> [2, 4]

<a name="Q.single"></a>
##Q.single(f, list)
Returns the first element of the list which matches the predicate, or `undefined` if no
element matches.

**Params**

- f `function` | `Object` - The predicate function used to determine if the element is the
       desired one. Or specification object  
- list `Array` - The array to consider.  

**Returns**: `Object` - The element found, or `undefined`.  
**Example**  
var xs = [{a: 1}, {a: 2}, {a: 3}];
Q.find(function(d){ return d.a == 2;}, xs); //=> {a: 2}
Q.find({ a : 2}, xs); //=> {a: 2}
Q.find({a: 4},(xs); //=> undefined

<a name="Q.sumBy"></a>
##Q.sumBy(list)
Adds together all the elements of a list.

**Params**

- list `Array` - An array of numbers  

**Returns**: `Number` - The sum of all the numbers in the list.  
**Example**  
Q.sumBy("a",[{a:2},{a:4},{a:6},{a:8},{a:100},{a:1}]); //=> 121
Q.sumBy(function(d){ return 2* d.a;},[{a:2},{a:4},{a:6},{a:8},{a:100},{a:1}]) //=>242
Q.sumBy(Q.identity,[2,4,6,8,100,100])//=> 220

<a name="Q.taper"></a>
##Q.taper(f, acc, obj)
Returns a single item by iterating through the obj, successively calling the iterator
function and passing it an accumulator value, the object value for the current key, and the current key
then passing the result to the next call.

The iterator function receives two values: *(acc, value)*

**Params**

- f `function` - The iterator function. Receives three values, the accumulator,
 the object value for the current key, and the current key  
- acc `*` - The accumulator value.  
- obj `Object` - The object to iterate over.  

**Returns**: `*` - The final, accumulated value.  
**Example**  
Q.taper(function(acc, val) { return acc+ val; }, 10,  {a: 2, b : 4}); //=> 16
Q.taper(function(acc, val,key){return acc.concat( val,key);},[1,"e"], {a: 2, b : 4});//=>[[1,"e", 2,"a",4,"b"]

