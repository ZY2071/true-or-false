module.exports = function (value) {
    if (typeof (value) == 'object') {
        if (value === null) {
            return !!value;
        }
        if (value instanceof Array) {
            return !!value.length;
        } else {
            return !!Object.keys(value).length;
        }
    } else {
        return !!value;
    }
}