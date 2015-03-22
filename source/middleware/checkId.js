function checkId(param) {
    return function (req, res, next) {
        var id = +req.query[param];

        if (!id) {
            return next({message: 'missing ' + param, status: 412});
        }

        if (req.user.id !== id) {
            return next({message: 'wrong ' + param, status: 401});
        }

        next();
    };
}

module.exports = checkId;
