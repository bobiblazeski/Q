var chai  = require('chai'),
    should = chai.should(),
    expect = chai.expect,
    Q = require('../dist/q.js');

describe('#group(f, list)', function () {
    it("should return { '4': [4.2], '6': [6.1, 6.4] }", function () {
        Q.group(function(num) { return Math.floor(num); },[4.2, 6.1, 6.4])
            .should.deep.equal( { '4': [4.2], '6': [6.1, 6.4] });
    });

    it("should return { '3': ['one', 'two'], '5': ['three'] }", function () {
        Q.group("length",['one', 'two', 'three'])
            .should.deep.equal(  { '3': ['one', 'two'], '5': ['three'] });
    });
});