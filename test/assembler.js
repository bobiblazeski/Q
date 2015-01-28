var chai  = require('chai'),
    should = chai.should(),
    expect = chai.expect,
    Q = require('../dist/q.js');

describe('#assembler(keys)', function () {
    it("should return { year:1937, amount: 100, name: 'foo'}", function () {
        var trend = Q.assembler(["year", "amount", "name"]);
        trend(1937,100, 'foo').should.deep.equal({ year:1937, amount: 100, name: 'foo'});
    });

    it("should set lacking field to undefined ", function () {
        var trend = Q.assembler(["year", "amount", "name"]);
        trend(1937,100).should.deep.equal({ year:1937, amount: 100, name: undefined});
    });

    it("should ignore surplus arguments", function () {
        var trend = Q.assembler(["year", "amount", "name"]);
        trend(1937,100, 'foo',11,'bar').should.deep.equal({ year:1937, amount: 100, name: 'foo'});
    });
});