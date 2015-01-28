var chai  = require('chai'),
    should = chai.should(),
    expect = chai.expect,
    Q = require('../dist/q.js');

describe('#taper(f,acc, obj)', function () {
    it("should return  16", function () {
        Q.taper(function(acc, val) { return acc+ val; }, 10,  {a: 2, b : 4}).should.equal(16);
    });

    it('should return [[1,"e", 2,"a",4,"b"]', function () {
        Q.taper(function(r,v,k){return r.concat(v,k);},[1,"e"], {a: 2, b : 4}).should.eql([1,"e", 2,"a",4,"b"]);
    });
});