var chai  = require('chai'),
    should = chai.should(),
    expect = chai.expect,
    Q = require('../dist/q.js');

describe('#single(func,data)', function () {
    it('should return 4', function () {
        Q.single(function (d) {
            return d > 3
        }, [1, 2, 3, 4, 5]).should.equal(4);
        var singleCurried= Q.single(function (d) {
            return d > 3
        });
        singleCurried([1, 2, 3, 4, 5]).should.equal(4)
    });

    it('should return {a:1,b:11}', function () {
        Q.single({a: 1}, [{a: 2, b: 5}, {a: 1, b: 11}]).should.eql({a: 1, b: 11});
    });

    it('should return undefined', function () {
        expect(Q.single({a: 11}, [{a: 2, b: 5}, {a: 1, b: 11}])).to.be.undefined;
        expect(Q.single(function (d) {
            return d.a > 2000;
        }, [{a: 2, b: 5}, {a: 1, b: 11}])).to.be.undefined;
    });
});