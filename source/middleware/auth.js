
function auth() {
    return function (req, res, next) {
        next();
    };
}

module.exports = auth;
