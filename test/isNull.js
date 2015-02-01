if(typeof require != undefined) {
    var chai  = require('chai'),
        Q = require('../dist/q.js');
}
var should = chai.should(),
    expect = chai.expect;


describe('#isNull(f,auto,obj)', function () {
    it("should return 1", function () {
        Q.isNull("a",2,{a:1}).should.equal(1);
    });

    it("should return 2", function () {
        Q.isNull("a",2,{b:1}).should.equal(2);
    });

    it("should return 3", function () {
        Q.isNull("a",3,null).should.equal(3);
    });

    it("should return 4", function () {
        Q.isNull(Q.prop('c'),4,null).should.equal(4);
    });

    it("should return 5", function () {
        Q.isNull(Q.prop('c'),4,{c:5}).should.equal(5);
    });

});