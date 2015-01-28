var chai  = require('chai'),
    should = chai.should(),
    expect = chai.expect,
    Q = require('../dist/q.js');

describe('#collect(f, obj)', function () {
    it("should return  [2, 3, 4]", function () {
        Q.collect(Math.sqrt,{ a:4,b:9,c:16}).should.eql([2, 3, 4]);
    });

    it("should return [[4, 'a'],[9,'b'],[16,'c']]", function () {
        Q.collect(function(v,k){ return [v,k]},{ a:4,b:9,c:16}).should.eql([[4, 'a'],[9,'b'],[16,'c']]);
    });
});