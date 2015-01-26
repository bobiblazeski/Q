(function () {

    function btop(value) {
        return value ? 0 : -1;
    }

    function  _convertDotToSubObject(keyParts, value) {

        var subObject = {},
            currentValue = subObject;

        for (var i = 0, n = keyParts.length - 1; i < n; i++) {
            currentValue = currentValue[keyParts[i]] = {};
        }

        currentValue[keyParts[i]] = value;

        return subObject;
    }

    function _comparable(value) {
        if(value instanceof Date) {
            return value.getTime();
        } else {
            return value;
        }
    }

    /**
     * tests against data
     */

    function priority(exprs, data) {
        console.log(JSON.stringify(exprs));
        var exprs = exprs,
            priority = 0;

        //generally, expressions are ordered from least efficient, to most efficient.
        for(var i = 0, n = exprs.length; i < n; i++) {

            var expr = exprs[i],
                p;

            if(!~(p = expr.e(expr.v, _comparable(data), data))) return -1;

            priority += p;

        }
        return priority;
    }

    var _prepare = {
        $eq: function(a) {
            var fn;
            if(a instanceof RegExp) {
                return a;
            } else if (a instanceof Function) {
                fn = a;
            } else {

                fn = function(b) {
                    if(b instanceof Array) {
                        return ~b.indexOf(a);
                    } else {
                        return a == b;
                    }
                }
            }
            return {
                test: fn
            }
        },

        $ne: function(a) {
            return _prepare.$eq(a);
        }
    };

    function _getExpr(type, key, value) {

        var v = _comparable(value);

        return {

            //k key
            k: key,

            //v value
            v: _prepare[type] ? _prepare[type](v) : v,

            //e eval
            e: _testers[type]
        };

    }


    var _testers = {
        $eq: function (a, b) {
            return btop(a.test(b));
        },
        $ne: function (a, b) {
            return btop(!a.test(b));
        },
        $lt: function (a, b) {
            return btop(a > b);
        },
        $gt: function (a, b) {
            return btop(a < b);
        },
        $lte: function (a, b) {
            return btop(a >= b);
        },
        $gte: function (a, b) {
            return btop(a <= b);
        },
        $exists: function (a, b) {
            return btop(a === (b != null))
        },
        $in: function (a, b) {
            //intersecting an array
            if (b instanceof Array) {
                for (var i = b.length; i--;) {
                    if (~a.indexOf(b[i])) return i;
                }

            } else {
                return btop(~a.indexOf(b));
            }
            return -1;
        },
        $not: function (a, b) {
            if (!a.test) throw new Error("$not test should include an expression, not a value. Use $ne instead.");
            return btop(!a.test(b));
        },
        $type: function (a, b, org) {
            //instanceof doesn't work for strings / boolean. instanceof works with inheritance
            return org ? btop(org instanceof a || org.constructor == a) : -1;
        },
        $nin: function (a, b) {
            return ~_testers.$in(a, b) ? -1 : 0;
        },
        $mod: function (a, b) {
            return b % a[0] == a[1] ? 0 : -1;
        },
        $all: function (a, b) {
            if (!b) b = [];
            for (var i = a.length; i--;) {
                var a1 = a[i];
                var indexInB = ~b.indexOf(a1);
                if (!indexInB) return -1;
            }
            return 0;
        },
        $size: function (a, b) {
            return b ? btop(a == b.length) : -1;
        },
        $or: function (a, b) {
            var i = a.length, p, n = i;
            for (; i--;) {
                if (~priority(a[i], b)) {
                    return i;
                }
            }
            return btop(n == 0);
        },
        $nor: function (a, b) {
            var i = a.length, n = i;
            for (; i--;) {
                if (~priority(a[i], b)) {
                    return -1;
                }
            }
            return 0;
        },
        $and: function (a, b) {

            for (var i = a.length; i--;) {
                if (!~priority(a[i], b)) {
                    return -1;
                }
            }
            return 0;
        },
        $trav: function (a, b) {
            if (b instanceof Array) {
                for (var i = b.length; i--;) {
                    var subb = b[i];
                    if (subb[a.k] && ~priority(a, subb[a.k])) return i;
                }
                return -1;
            }
            //continue to traverse even if there isn't a value - this is needed for
            //something like name:{$exists:false}
            return priority(a, b ? b[a.k] : void 0);
        },
        $regex: function (a, b) {
            var aRE = new RegExp(a);
            return aRE.test(b) ? 0 : -1;
        }
    };

//traversable statements
    var TRAV_OP = {
        $and: true,
        $or: true,
        $nor: true,
        $trav: true,
        $not: true
    };


    function parse(statement, key) {

        //fixes sift(null, []) issue
        if (!statement) statement = {$eq: statement};

        var testers = [];

        //if the statement is an object, then we're looking at something like: { key: match }
        if (Object.prototype.toString.call(statement) === "[object Object]") {

            for (var k in statement) {

                //find the apropriate operator. If one doesn't exist and the key does not start
                //with a $ character, then it's a property, which means we create a new statement
                //(traversing)
                var operator;
                if (!!_testers[k]) {
                    operator = k;
                } else if (k.substr(0, 1) !== '$') {
                    operator = '$trav';
                } else {
                    throw new Error('Unknown operator.');
                }

                //value of given statement (the match)
                var value = statement[k];

                //default = match
                var exprValue = value;

                //if we're working with a traversable operator, then set the expr value
                if (TRAV_OP[operator]) {


                    //using dot notation? convert into a sub-object
                    if (~k.indexOf(".")) {
                        var keyParts = k.split(".");
                        k = keyParts.shift(); //we're using the first key, so remove it

                        exprValue = value = _convertDotToSubObject(keyParts, value);
                    }

                    //*if* the value is an array, then we're dealing with something like: $or, $and
                    if (value instanceof Array) {

                        exprValue = [];

                        for (var i = value.length; i--;) {
                            exprValue.push(parse(value[i]));
                        }

                        //otherwise we're dealing with $trav
                    } else {
                        exprValue = parse(value, k);
                    }
                }

                testers.push(_getExpr(operator, k, exprValue));

            }


            //otherwise we're comparing a particular value, so set to eq
        } else {
            testers.push(_getExpr('$eq', k, statement));
        }

        var stmt = {
            exprs: testers,
            k: key,
            test: function (value) {
                return !!~stmt.priority(value);
            },
            priority: function (value) {
                return priority(testers, value);
            }
        };
        console.log(JSON.stringify(testers));
        //return function(val){
        //    return stmt.test(val);
        //}
        return stmt;
        //function (value) {
        //    return !!~stmt.priority(value);
        //}

    }

//node.js?
    if ((typeof module != 'undefined') && (typeof module.exports != 'undefined')) {
        module.exports = sift;
    } else

//browser?
    if (typeof window != 'undefined') {
        window.sf = parse;
    }

})
();