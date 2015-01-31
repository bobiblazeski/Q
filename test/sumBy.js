var chai  = require('chai'),
    should = chai.should(),
    expect = chai.expect,
    Q = require('../dist/q.js');

describe('#sumBy(fn,list)', function () {
    it("should return 121", function () {
        Q.sumBy("a",[{a:2},{a:4},{a:6},{a:8},{a:100},{a:1}]).should.equal(121);
    });

    it("should return 242", function () {
        Q.sumBy(function(d){ return 2* d.a;},[{a:2},{a:4},{a:6},{a:8},{a:100},{a:1}]).should.equal(242);
    });

    it("should return 220", function () {
        Q.sumBy(Q.identity,[2,4,6,8,100,100]).should.equal(220);
    });
});