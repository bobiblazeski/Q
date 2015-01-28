if(typeof require != undefined) {
    var chai  = require('chai'),
        Q = require('../dist/q.js');
}
var should = chai.should(),
    expect = chai.expect;


describe('#abate(fn,acc,list)', function () {
    it("should return [-4,4,-9,9,-16,16]", function () {
        Q.abate(function(d){ return [-d,d];},{ a:4,b:9,c:16}).should.eql( [-4,4,-9,9,-16,16]);
    });
});