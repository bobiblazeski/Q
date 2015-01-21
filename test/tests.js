var should = chai.should(),
    expect = chai.expect;

describe('Q', function(){

    describe('#lay(end,start,step)', function(){
        it('should return [0,4]', function(){
            Q.lay(5).should.eql([0,1,2,3,4]);
            Q.lay(5,0).should.eql([0,1,2,3,4]);
            Q.lay(5,0,1).should.eql([0,1,2,3,4]);
        });

        it('should return [50, 51, 52]', function(){
            Q.lay(53, 50).should.eql([50, 51, 52]);
        });

        it('should return [8, 7, 6, 5]', function(){
            Q.lay(4, 8, -1).should.eql([8, 7, 6, 5]);
        });

        it('should return [2,3,4]', function(){
            Q.lay(5,2).should.eql([2,3,4]);
            Q.lay(5,2,1).should.eql([2,3,4]);
        });


        it('should return [2,4,6]', function(){
            Q.lay(7,2,2).should.eql([2,4,6]);
        });

        it('should return [0,-1,-2,-3]', function(){
            Q.lay(-4,0,-1).should.eql([0,-1,-2,-3]);
        });

        it('should return []', function(){
            Q.lay(5,0,0).should.eql([]);
            Q.lay(5,7).should.eql([]);
        });
    });

    describe('#single(func,data)', function(){
        it('should return 4', function(){
            Q.single(function(d){ return d > 3},[1,2,3,4,5]).should.equal(4);
        });

        it('should return {a:1,b:11}', function(){
            Q.single({a:1},[{a:2,b:5},{a:1,b:11}]).should.eql({a:1,b:11});
        });

        it('should return undefined', function(){
            expect(Q.single({a:11},[{a:2,b:5},{a:1,b:11}])).to.be.undefined;
            expect(Q.single(function (d){ return d.a > 2000;},[{a:2,b:5},{a:1,b:11}])).to.be.undefined;
        });
    });

    describe('#mold(spec)', function(){
        it('should return true', function(){
            Q.single(function(d){ return d > 3},[1,2,3,4,5]).should.equal(4);
            (Q.mold({a:1})({a:1,b:1})).should.be.true;
        });

        it('should return false', function(){
            (Q.mold({a:11})({a:1,b:1})).should.be.false;
        });
    });

    describe('#amend(left,right,key)', function(){
        it('should return [{"id":1,"b":2,"d":4},{"id":2,"b":2,"d":5}]', function(){
            var left = [{ id:1, b:2},{ id:2, b:2}];
            var right =[{ id:1, d:4},{ id:2, d:5}];
            Q.amend(left,right,'id').should.eql([{"id":1,"b":2,"d":4},{"id":2,"b":2,"d":5}]);
        });

        it('should return [{ id:1, b:2},{ id:2, b:2}]', function(){
            var left = [{ id:1, b:2},{ id:2, b:2}];
            var right =[{ id:3, d:4},{ id:4, d:5}];
            Q.amend(left,right,'id').should.eql([{ id:1, b:2},{ id:2, b:2}]);
        });

        it('should return [{"id":1,"b":2,"key":1,"d":4},{"id":2,"b":2}]', function(){
            var left = [{ id:1, b:2},{ id:2, b:2}];
            var right =[{ key:1, d:4},{ key:1, d:5}];
            Q.amend(left,right,'id','key').should.eql([{"id":1,"b":2,"key":1,"d":4},{"id":2,"b":2}]);
        });

    });
});