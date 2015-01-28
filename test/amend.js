var chai  = require('chai'),
    should = chai.should(),
    expect = chai.expect,
    Q = require('../dist/q.js');

describe('#amend(left,right,key)', function () {
    it('should return [{"id":1,"b":2,"d":4},{"id":2,"b":2,"d":5}]', function () {
        var left = [{id: 1, b: 2}, {id: 2, b: 2}];
        var right = [{id: 1, d: 4}, {id: 2, d: 5}];
        Q.amend(left, right, 'id').should.eql([{"id": 1, "b": 2, "d": 4}, {"id": 2, "b": 2, "d": 5}]);
    });

    it('should return [{ id:1, b:2},{ id:2, b:2}]', function () {
        var left = [{id: 1, b: 2}, {id: 2, b: 2}];
        var right = [{id: 3, d: 4}, {id: 4, d: 5}];
        Q.amend(left, right, 'id').should.eql([{id: 1, b: 2}, {id: 2, b: 2}]);
    });

    it('should return [{"id":1,"b":2,"key":1,"d":4},{"id":2,"b":2}]', function () {
        var left = [{id: 1, b: 2}, {id: 2, b: 2}];
        var right = [{key: 1, d: 4}, {key: 1, d: 5}];
        Q.amend(left, right, 'id', 'key').should.eql([{"id": 1, "b": 2, "key": 1, "d": 4}, {"id": 2, "b": 2}]);
    });
});