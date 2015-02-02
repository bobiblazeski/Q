<a name="Q"></a>
#class: Q
Documentation for additional functionality added to excellent www.ramdajs.com

**Members**

* [class: Q](#Q)
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

