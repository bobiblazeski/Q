var chai  = require('chai'),
    should = chai.should(),
    expect = chai.expect,
    Q = require('../dist/q.js');

describe('#lay(end,start,step)', function () {
    it('should return [0,4]', function () {
        Q.lay(5).should.eql([0, 1, 2, 3, 4]);
        Q.lay(5, 0).should.eql([0, 1, 2, 3, 4]);
        Q.lay(5, 0, 1).should.eql([0, 1, 2, 3, 4]);
    });

    it('should return [50, 51, 52]', function () {
        Q.lay(53, 50).should.eql([50, 51, 52]);
    });

    it('should return [8, 7, 6, 5]', function () {
        Q.lay(4, 8, -1).should.eql([8, 7, 6, 5]);
    });

    it('should return [2,3,4]', function () {
        Q.lay(5, 2).should.eql([2, 3, 4]);
        Q.lay(5, 2, 1).should.eql([2, 3, 4]);
    });


    it('should return [2,4,6]', function () {
        Q.lay(7, 2, 2).should.eql([2, 4, 6]);
    });

    it('should return [0,-1,-2,-3]', function () {
        Q.lay(-4, 0, -1).should.eql([0, -1, -2, -3]);
    });

    it('should return []', function () {
        Q.lay(5, 0, 0).should.eql([]);
        Q.lay(5, 7).should.eql([]);
    });
});