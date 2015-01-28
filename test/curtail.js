var chai  = require('chai'),
    should = chai.should(),
    expect = chai.expect,
    Q = require('../dist/q.js');

describe('#curtail(fn,list)', function () {
    it("should return [-4,4,-9,9,-16,16]", function () {
        Q.curtail(function(d){ return [-d,d];},[4,9,16]).should.eql( [-4,4,-9,9,-16,16]);
    });
});