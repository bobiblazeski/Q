// TODO Probably should be excluded, seems not general enough
var expand = function (fn, arr) {
    return map(function (d) {
        return mixin(d, fn(d));
    }, arr);
};