function createConnection(config) {
    return function (req, res, next) {
        req.getConnection(function (err, mysql) {
            if (err) {
                return next(err);
            }

            req.mysql = mysql;

            next();
        });
    };
}

module.exports = createConnection;
