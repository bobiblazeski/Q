var should = chai.should(),
    expect = chai.expect;

describe('Q', function () {

    describe('#lay(end,start,step)', function () {
        it('should return [0,4]', function () {
            Q.lay(5).should.eql([0, 1, 2, 3, 4]);
            Q.lay(5, 0).should.eql([0, 1, 2, 3, 4]);
            Q.lay(5, 0, 1).should.eql([0, 1, 2, 3, 4]);
        });

        it('should return [50, 51, 52]', function () {
            Q.lay(53, 50).should.eql([50, 51, 52]);
        });

        it('should return [8, 7, 6, 5]', function () {
            Q.lay(4, 8, -1).should.eql([8, 7, 6, 5]);
        });

        it('should return [2,3,4]', function () {
            Q.lay(5, 2).should.eql([2, 3, 4]);
            Q.lay(5, 2, 1).should.eql([2, 3, 4]);
        });


        it('should return [2,4,6]', function () {
            Q.lay(7, 2, 2).should.eql([2, 4, 6]);
        });

        it('should return [0,-1,-2,-3]', function () {
            Q.lay(-4, 0, -1).should.eql([0, -1, -2, -3]);
        });

        it('should return []', function () {
            Q.lay(5, 0, 0).should.eql([]);
            Q.lay(5, 7).should.eql([]);
        });
    });

    describe('#find(func,data)', function () {
        it('should return 4', function () {
            Q.find(function (d) {
                return d > 3
            }, [1, 2, 3, 4, 5]).should.equal(4);
            var findCurried= Q.find(function (d) {
                return d > 3
            });
            findCurried([1, 2, 3, 4, 5]).should.equal(4)
        });

        it('should return {a:1,b:11}', function () {
            Q.find({a: 1}, [{a: 2, b: 5}, {a: 1, b: 11}]).should.eql({a: 1, b: 11});
        });

        it('should return undefined', function () {
            expect(Q.find({a: 11}, [{a: 2, b: 5}, {a: 1, b: 11}])).to.be.undefined;
            expect(Q.find(function (d) {
                return d.a > 2000;
            }, [{a: 2, b: 5}, {a: 1, b: 11}])).to.be.undefined;
        });
    });

    describe('#mold(spec)', function () {
        it('should return true', function () {
            Q.find(function (d) {
                return d > 3
            }, [1, 2, 3, 4, 5]).should.equal(4);
            (Q.mold({a: 1})({a: 1, b: 1})).should.be.true;
        });

        it('should return false', function () {
            (Q.mold({a: 11})({a: 1, b: 1})).should.be.false;
        });
    });

    describe('#amend(left,right,key)', function () {
        it('should return [{"id":1,"b":2,"d":4},{"id":2,"b":2,"d":5}]', function () {
            var left = [{id: 1, b: 2}, {id: 2, b: 2}];
            var right = [{id: 1, d: 4}, {id: 2, d: 5}];
            Q.amend(left, right, 'id').should.eql([{"id": 1, "b": 2, "d": 4}, {"id": 2, "b": 2, "d": 5}]);
        });

        it('should return [{ id:1, b:2},{ id:2, b:2}]', function () {
            var left = [{id: 1, b: 2}, {id: 2, b: 2}];
            var right = [{id: 3, d: 4}, {id: 4, d: 5}];
            Q.amend(left, right, 'id').should.eql([{id: 1, b: 2}, {id: 2, b: 2}]);
        });

        it('should return [{"id":1,"b":2,"key":1,"d":4},{"id":2,"b":2}]', function () {
            var left = [{id: 1, b: 2}, {id: 2, b: 2}];
            var right = [{key: 1, d: 4}, {key: 1, d: 5}];
            Q.amend(left, right, 'id', 'key').should.eql([{"id": 1, "b": 2, "key": 1, "d": 4}, {"id": 2, "b": 2}]);
        });
    });

    describe('#filter(f, data)', function () {
        it('should return [4,5]', function () {
            Q.filter(function (d) {
                return d > 3
            }, [1, 2, 3, 4, 5]).should.eql([4, 5]);
        });

        it('should return []', function () {
            Q.filter(function (d) {
                return d > 13
            }, [1, 2, 3]).should.eql([]);
        });

        it('should return [2, 4]', function () {
            var isEven = function (n) {
                return n % 2 === 0;
            };
            Q.filter(isEven, [1, 2, 3, 4]).should.eql([2, 4]);
        });
    });

    describe('#min(f,list)', function () {
        it('should return 1', function () {
            Q.min(Q.identity, [1, 2, 3, 4, 5]).should.equal(1);
        });

        it('should return {a:0,b:2}', function () {
            Q.min("a", [{a:1,b:2},{a:0,b:2}]).should.deep.equal({a:0,b:2});
        });

        it('should return undefined', function () {
            expect(Q.min(Q.identity, [])).to.be.undefined;
        });
    });

    describe('#max(f,list)', function () {
        it('should return 5', function () {
            Q.max(Q.identity, [1, 2, 3, 4, 5]).should.equal(5);
        });

        it('should return {a:0,b:2}', function () {
            Q.max("a", [{a:1,b:2},{a:0,b:2}]).should.deep.equal({a:1,b:2});
        });

        it('should return undefined', function () {
            expect(Q.max(Q.identity, [])).to.be.undefined;
        });
    });

    describe('#field(property,obj)', function () {
        it('should return 5', function () {
            Q.field("a",{a:5,c:4}).should.equal(5);
        });

        it('should return 11', function () {
            var getLength = Q.field("length");
            getLength({length:11,a:7}).should.equal(11);
        });

        it('should return undefined', function () {
            expect(Q.field('a', {b:1})).to.be.undefined;
        });
    });

    describe('#identity(x)', function () {
        it('should return 5', function () {
            Q.identity(5).should.equal(5);
        });

        it('should return "abc"', function () {
            Q.identity( "abc").should.equal( "abc");
        });

        it('should return undefined', function () {
            expect(Q.identity()).to.be.undefined;
        });
    });

    describe('#group(f, list)', function () {
        it("should return { '4': [4.2], '6': [6.1, 6.4] }", function () {
            Q.group(function(num) { return Math.floor(num); },[4.2, 6.1, 6.4])
                .should.deep.equal( { '4': [4.2], '6': [6.1, 6.4] });
        });

        it("should return { '3': ['one', 'two'], '5': ['three'] }", function () {
            Q.group("length",['one', 'two', 'three'])
                .should.deep.equal(  { '3': ['one', 'two'], '5': ['three'] });
        });
    });

    describe('#sort(f, list)', function () {
        it("should return entries sorted age", function () {
            var entries = [{ name: 'ALICE', age: 101 }, {name: 'Bob',age: -400},{name: 'clara',age: 314.159}];
            Q.sort("age",entries)
                .should.eql([{name: 'Bob',age: -400},{ name: 'ALICE', age: 101 }, {name: 'clara',age: 314.159}]);
        });

        it("should return entries sorted by ABS of age", function () {
            var entries = [{ name: 'ALICE', age: 101 }, {name: 'Bob',age: -400},{name: 'clara',age: 314.159}];
            Q.sort(function(d){ return Math.abs(d.age);},entries)
                .should.eql([{ name: 'ALICE', age: 101 }, {name: 'clara',age: 314.159},{name: 'Bob',age: -400}]);
        });

        it("should return entries sorted name", function () {
            var entries = [{ name: 'ALICE', age: 101 }, {name: 'Bob',age: -400},{name: 'clara',age: 314.159}];
            Q.sort("name",[entries[2],entries[0],entries[1]]).should.eql(entries);
        });

        it("should return entries sorted absolute age", function () {
            var entries = [{ name: 'ALICE', age: 101 }, {name: 'Bob',age: -400},{name: 'clara',age: 314.159}];
            Q.sort("age",entries)
                .should.eql([{name: 'Bob',age: -400},{ name: 'ALICE', age: 101 }, {name: 'clara',age: 314.159}]);
        });

        it("should return entries sorted reverse by age", function () {
            var entries = [{ name: 'ALICE', age: 101 }, {name: 'Bob',age: -400},{name: 'clara',age: 314.159}];
            Q.sort("-age",entries)
                .should.eql([{name: 'clara',age: 314.159},{ name: 'ALICE', age: 101 }, {name: 'Bob',age: -400}]);
        });
    });

    describe('#pluck(key, list)', function () {
        it("should return [1, 2]", function () {
            Q.pluck('a',[{a: 1}, {a: 2}]).should.eql([1, 2]);
        });

        it("should return [1, 3]", function () {
            Q.pluck(0,[[1, 2], [3, 4]]).should.eql([1, 3]);
        });
    });

    describe('#collect(f, obj)', function () {
        it("should return  [2, 3, 4]", function () {
            Q.collect(Math.sqrt,{ a:4,b:9,c:16}).should.eql([2, 3, 4]);
        });

        it("should return [[4, 'a'],[9,'b'],[16,'c']]", function () {
            Q.collect(function(v,k){ return [v,k]},{ a:4,b:9,c:16}).should.eql([[4, 'a'],[9,'b'],[16,'c']]);
        });
    });

    describe('#map(f, list)', function () {
        it("should return  [2, 4, 6]", function () {
            Q.map(function(x) { return x * 2; }, [1, 2, 3]).should.eql([2, 4, 6]);
        });

        it("should return empty list", function () {
            Q.collect(Math.abs,[]).should.eql([]);
        });
    });

    describe('#taper(f,acc, obj)', function () {
        it("should return  16", function () {
            Q.taper(function(acc, val) { return acc+ val; }, 10,  {a: 2, b : 4}).should.equal(16);
        });

        it('should return [[1,"e", 2,"a",4,"b"]', function () {
            Q.taper(function(r,v,k){return r.concat(v,k);},[1,"e"], {a: 2, b : 4}).should.eql([1,"e", 2,"a",4,"b"]);
        });
    });

    describe('#mapValues(f,obj)', function () {
        it("should return { 'a': 3, 'b': 6, 'c': 9 }", function () {
            Q.mapValues(function(num) { return num * 3; },{ 'a': 1, 'b': 2, 'c': 3})
                .should.deep.equal({ 'a': 3, 'b': 6, 'c': 9 })
        });

        it("should return { 'fred': 40, 'pebbles': 1 }", function () {
            var characters = {
                'fred': { 'name': 'fred', 'age': 40 },
                'pebbles': { 'name': 'pebbles', 'age': 1 }
            };
            Q.mapValues('age',characters)
                .should.deep.equal({ 'fred': 40, 'pebbles': 1 })
        });
    });

    describe('#mixin(f,obj)', function () {
        it("should return  { 'name': 'fred', 'age': 40 }", function () {
            Q.mixin({ 'name': 'fred', 'age': 10 }, { 'age': 40 }).should.deep.equal( { 'name': 'fred', 'age': 40 });
        });
    });

    describe('#fold(fn,acc,list)', function () {
        it("should return  16", function () {
            Q.fold(function(a, b) { return a + b; }, 10, [1, 2, 3]).should.deep.equal(16);
        });
    });

    describe('#fold(fn,acc,list)', function () {
        it("should return [-4,4,-9,9,-16,16]", function () {
            Q.abate(function(d){ return [-d,d];},{ a:4,b:9,c:16}).should.eql( [-4,4,-9,9,-16,16]);
        });
    });

    describe('#curtail(fn,list)', function () {
        it("should return [-4,4,-9,9,-16,16]", function () {
            Q.curtail(function(d){ return [-d,d];},[4,9,16]).should.eql( [-4,4,-9,9,-16,16]);
        });
    });

    describe('#range(from,to)', function () {
        it("should return [1, 2, 3, 4]", function () {
            Q.range(1, 5).should.eql([1, 2, 3, 4]);
        });

        it("should return [1, 2, 3, 4]", function () {
            Q.range(50, 53).should.eql([50, 51, 52]);
        });

        it("should return []", function () {
            Q.range(11, 2).should.eql([]);
        });
    });

    describe('#unique(list)', function () {
        it("should return [1, 2, 3, 4]", function () {
            Q.range(1, 5).should.eql([1, 2, 3, 4]);
        });

        it("should return [1, 2, 3, 4]", function () {
            Q.range(50, 53).should.eql([50, 51, 52]);
        });

        it("should return []", function () {
            Q.range(11, 2).should.eql([]);
        });
    });

    describe('#pick(names, obj)', function () {
        it("should return {a: 1, d: 4}", function () {
            Q.pick(['a', 'd'], {a: 1, b: 2, c: 3, d: 4}).should.eql({a: 1, d: 4});
        });

        it("should return {a: 1}", function () {
            Q.pick(['a', 'e', 'f'], {a: 1, b: 2, c: 3, d: 4}).should.eql({a: 1});

        });
    });

    describe('#omit(keys, obj)', function () {
        it("should return {a: 1, d: 4}", function () {
            Q.omit(['c', 'b'], {a: 1, b: 2, c: 3, d: 4}).should.eql({a: 1, d: 4});
        });

        it("should return {a: 1}", function () {
            Q.omit(['b', 'c', 'd','f'], {a: 1, b: 2, c: 3, d: 4}).should.eql({a: 1});
        });

        it("should return {a: 1}", function () {

            Q.omit(['a', 'd'], {a: 1, b: 2, c: 3, d: 4}).should.eql({b: 2, c: 3});
        });
    });

    describe('#omit(keys, obj)', function () {
        it("should return {a: 1, d: 4}", function () {
            Q.omit(['c', 'b'], {a: 1, b: 2, c: 3, d: 4}).should.eql({a: 1, d: 4});
            Q.keys({a: 1, b: 2, c: 3}).should.eql(['a', 'b', 'c']);
        });


    });
});