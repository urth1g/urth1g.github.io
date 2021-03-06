function merge() {
    var sets = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        sets[_i - 0] = arguments[_i];
    }
    if (sets.length > 1) {
        sets[0] = sets[0].slice(0, -1);
        var xl = sets.length - 1;
        for (var x = 1; x < xl; ++x) {
            sets[x] = sets[x].slice(1, -1);
        }
        sets[xl] = sets[xl].slice(1);
        return sets.join('');
    }
    else {
        return sets[0];
    }
}
exports.merge = merge;
function subexp(str) {
    return "(?:" + str + ")";
}
exports.subexp = subexp;
function typeOf(o) {
    return o === undefined ? "undefined" : (o === null ? "null" : Object.prototype.toString.call(o).split(" ").pop().split("]").shift().toLowerCase());
}
exports.typeOf = typeOf;
function toUpperCase(str) {
    return str.toUpperCase();
}
exports.toUpperCase = toUpperCase;
function toArray(obj) {
    return obj !== undefined && obj !== null ? (obj instanceof Array ? obj : (typeof obj.length !== "number" || obj.split || obj.setInterval || obj.call ? [obj] : Array.prototype.slice.call(obj))) : [];
}
exports.toArray = toArray;
function assign(target, source) {
    var obj = target, as = any;
    if (source) {
        for (var key in source) {
            obj[key] = source[key];
        }
    }
    return obj;
}
exports.assign = assign;
