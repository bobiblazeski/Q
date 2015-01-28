var chai  = require('chai'),
    should = chai.should(),
    expect = chai.expect,
    Q = require('../dist/q.js');

describe('#expand(fn,list)', function () {
    it('should return [{"a":1,"b":2},{"a":3,"b":6}]', function () {
        Q.expand(function(val){ return {b: val.a*2};},[{a:1},{a:3}]).should.eql([{"a":1,"b":2},{"a":3,"b":6}]);
    });
});