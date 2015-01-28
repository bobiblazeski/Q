var chai  = require('chai'),
    should = chai.should(),
    expect = chai.expect,
    Q = require('../dist/q.js');

describe('#minus(minuend,subtrahend)', function () {
    it("should return 5", function () {
        Q.minus(2,7).should.equal(5);
    });

    it("should return [8,7,6,5]", function () {
        Q.map(Q.minus(1),[2,3,4,5]).should.eql([1,2,3,4]);
    });
});