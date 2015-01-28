var chai  = require('chai'),
    should = chai.should(),
    expect = chai.expect,
    Q = require('../dist/q.js');

describe('#remainder(divisor, dividend)', function () {
    it("should return 2", function () {
        Q.remainder(3,17).should.equal(2);
    });

    it("should return -2", function () {
        Q.remainder(3,-17).should.equal(-2);
    });

    it("should check is number odd", function () {
        var isOdd = Q.remainder(2);
        isOdd(42).should.equal(0);
        isOdd(21).should.equal(1);
    });
});