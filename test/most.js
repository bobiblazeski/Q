var chai  = require('chai'),
    should = chai.should(),
    expect = chai.expect,
    Q = require('../dist/q.js');

describe('#most(f,list)', function () {
    it('should return 5', function () {
        Q.most(Q.identity, [1, 2, 3, 4, 5]).should.equal(5);
    });

    it('should return {a:0,b:2}', function () {
        Q.most("a", [{a:1,b:2},{a:0,b:2}]).should.deep.equal({a:1,b:2});
    });

    it('should return undefined', function () {
        expect(Q.most(Q.identity, [])).to.be.undefined;
    });
});