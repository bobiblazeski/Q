var chai  = require('chai'),
    should = chai.should(),
    expect = chai.expect,
    Q = require('../dist/q.js');

describe('#least(f,list)', function () {
    it('should return 1', function () {
        Q.least(Q.identity, [1, 2, 3, 4, 5]).should.equal(1);
    });

    it('should return {a:0,b:2}', function () {
        Q.least("a", [{a:1,b:2},{a:0,b:2}]).should.deep.equal({a:0,b:2});
    });

    it('should return undefined', function () {
        expect(Q.least(Q.identity, [])).to.be.undefined;
    });
});