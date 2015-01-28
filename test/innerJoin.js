var chai  = require('chai'),
    should = chai.should(),
    expect = chai.expect,
    Q = require('../dist/q.js');

describe("#innerJoin(on,columns,left,right)", function() {
    it("should return [{id:1, a: 1, b:11}]", function () {
        Q.innerJoin("id", Q.mixin,[{id:1, a: 1},{id:2,a:3}],[{id:1, b: 11},{id:22,a:33}]).should.eql([{id:1, a: 1, b:11}]);
    });

    it("should return [{key:1,id:1, a: 1, b:11}]", function () {
        Q.innerJoin(["id","key"],Q.mixin,[{id:1, a: 1},{id:2,a:3}],[{key:1, b: 11},{key:22,a:33}])
            .should.eql([{key:1,id:1, a: 1, b:11}]);
    });

    it("should return [{key:1,id:1, a: 1, b:11}]", function () {
        var fn = function(left,right) {
            return left.id == right.key;
        };
        Q.innerJoin(fn,Q.mixin,[{id:1, a: 1},{id:2,a:3}],[{key:1, b: 11},{key:22,a:33}])
            .should.eql([{key:1,id:1, a: 1, b:11}]);
    });

    it("should return [{ a: 1, b:11}]", function () {
        Q.innerJoin("id", ["a","b"],[{id:1, a: 1},{id:2,a:3}],[{id:1, b: 11},{id:22,a:33}]).should.eql([{ a: 1, b:11}]);
    });
});