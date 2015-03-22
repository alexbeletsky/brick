function stub(obj, skip) {
    Object.keys(obj).forEach(function (key) {
        if (typeof obj[key] === 'function' && skip.indexOf(key) < 0) {
            obj[key] = function () {};
        }
    });

    return obj;
}

module.exports = stub;
