Q = {};


Q.lay = function (end, start, step) {
    start = start || 0;
    step = step == null ? 1 : step;
    var res = [],
        i = start;
    if (step > 0) {
        for (; i < end; i += step)
            res.push(i);
    } else if (step < 0) {
        for (; i > end; i += step)
            res.push(i);
    }
    return res;
};

Q.single = function (f, data) {
    var len = data.length,
        fn = typeof f == 'function' ? f : Q.mold(f);
    for (var i = 0; i < len; ++i) {
        if (fn(data[i]))
            return data[i];
    }
    return null;
};

Q.mold = function (spec) {
    return function (obj) {
        for (var key in spec) {
            if (spec[key] != obj[key])
                return false;
        }
        return true;
    }
};

Q.amend = function (left, right, lKey, rKey) {
    rKey = rKey || lKey;
    return Q.map(function (l) {
        var found = Q.find(function (r) {
            return l[lKey] == r[rKey];
        }, right);
        return Q.mixin(l, found ? found : {});
    }, left);
};

Q.sift = function (f, data) {
    var res = [],
        len = data.length,
        fn = typeof f == 'function' ? f : Q.where(f);
    for (var i = 0; i < len; ++i) {
        if (fn(data[i]))
            res.push(data[i]);
    }
    return res;
};

Q.min = function (field, array) {
    return R.minBy(R.prop(field), array);
};

Q.max = function (field, array) {
    return R.maxBy(R.prop(field), array);
};

Q.groupBy = function (f, data) {
    return R.groupBy(typeof f == 'function' ? f : R.prop(f), data);
};

Q.sortBy = function (f, data) {
    return R.sortBy(typeof f == 'function' ? f
        : f[0] == '-' ? function (d) {
        return -1 * d[f.substring(1)]
    } : R.prop(f), data);
};

Q.collect = function (f, obj) {
    var res = [];
    for (var key in obj)
        res.push(f(obj[key], key));
    return res;
};

Q.map = function (f, array) {
    var res = [];
    for (var i = 0; i < array.length; ++i)
        res.push(f(array[i], i));
    return res;
};

Q.taper = function (f, res, obj) {
    for (var key in obj)
        res = f(res, obj[key]);
    return res;
};

Q.mapValues = function (f, obj) {
    var res = {};
    for (var key in obj)
        res[key] = f(obj[key]);
    return res;
};

Q.abate = function (f, obj) {
    var res = [];
    for (var key in obj)
        res = res.concat(f(obj[key], key));
    return res;
};

Q.expand = function (fn, arr) {
    return Q.map(function (d) {
        return Q.mixin(d, fn(d));
    }, arr);
};

Q.reduce = function (fn, res, arr) {
    for (var i = 0; i < arr.length; ++i) {
        res = fn(res, arr[i]);
    }
    return res;
};

Q.map = function (fn, list) {
    var idx = -1, len = list.length, result = new Array(len);
    while (++idx < len) {
        result[idx] = fn(list[idx]);
    }
    return result;
};

Q.mixin = function mixin(left, right) {
    var res = {}, key = "";
    for (key in left)
        res[key] = left[key];
    for (key in right)
        res[key] = right[key];
    return res;
};