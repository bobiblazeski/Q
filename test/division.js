var chai  = require('chai'),
    should = chai.should(),
    expect = chai.expect,
    Q = require('../dist/q.js');

describe('#division(divisor, dividend)', function () {
    it("should return 5", function () {
        Q.division(2,7).should.equal(3.5);
    });

    it("should return [1,2,3,4]", function () {
        Q.map(Q.division(2),[2,4,6,8]).should.eql([1,2,3,4]);
    });
});