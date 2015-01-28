var chai  = require('chai'),
    should = chai.should(),
    expect = chai.expect,
    Q = require('../dist/q.js');

describe('#order(f, list)', function () {
    it("should return entries sorted age", function () {
        Q.order("age",[{ name: 'ALICE', age: 101 }, {name: 'Bob',age: -400},{name: 'clara',age: 314}])
            .should.deep.eql([{"name":"Bob","age":-400},{"name":"ALICE","age":101},{"name":"clara","age":314}]);
    });

    it("should return entries sorted by ABS of age", function () {
        var entries = [{ name: 'ALICE', age: 101 }, {name: 'Bob',age: -400},{name: 'clara',age: 314.159}];
        Q.order(function(d){ return Math.abs(d.age);},entries)
            .should.deep.eql([{ name: 'ALICE', age: 101 }, {name: 'clara',age: 314.159},{name: 'Bob',age: -400}]);
    });

    it("should return entries sorted name", function () {
        var entries = [{ name: 'ALICE', age: 101 }, {name: 'Bob',age: -400},{name: 'clara',age: 314.159}];
        Q.order("name",[entries[2],entries[0],entries[1]]).should.deep.eql(entries);
    });

    it("should return entries sorted absolute age", function () {
        var entries = [{ name: 'ALICE', age: 101 }, {name: 'Bob',age: -400},{name: 'clara',age: 314.159}];
        Q.order("age",entries)
            .should.deep.eql([{name: 'Bob',age: -400},{ name: 'ALICE', age: 101 }, {name: 'clara',age: 314.159}]);
    });

    it("should return entries sorted reverse by age", function () {
        Q.order("-age",[{ name: 'ALICE', age: 101 }, {name: 'Bob',age: -400},{name: 'clara',age: 314.159}])
            .should.deep.eql([{name: 'clara',age: 314.159},{ name: 'ALICE', age: 101 }, {name: 'Bob',age: -400}]);
    });
});