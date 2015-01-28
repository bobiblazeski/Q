var chai  = require('chai'),
    should = chai.should(),
    expect = chai.expect,
    Q = require('../dist/q.js');

describe('#sift(f, data)', function () {
    it('should return [4,5]', function () {
        Q.sift(function (d) {
            return d > 3
        }, [1, 2, 3, 4, 5]).should.eql([4, 5]);
    });

    it('should return []', function () {
        Q.sift(function (d) {
            return d > 13
        }, [1, 2, 3]).should.eql([]);
    });

    it('should return [2, 4]', function () {
        var isEven = function (n) {
            return n % 2 === 0;
        };
        Q.sift(isEven, [1, 2, 3, 4]).should.eql([2, 4]);
    });

    it("should return [{ name: 'Buzz' , errors:''}]", function () {
        Q.sift(Q.where({name: 'Buzz', errors: ''}),[
            { name: "Buzz" , errors:''},
            { name: "Buzz" , errors:'Something'},
            { name: "Bar" , errors:''}
        ]).should.eql([{ name: "Buzz" , errors:''}]);

    });
});