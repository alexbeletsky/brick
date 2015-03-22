var util = require('util');
var logger = require('../utils/logger');

function errors(err, req, res, next) {
    function includeStack(stack) {
        return process.env.NODE_ENV === 'production' ? [] : stack;
    }

    return function (err, req, res, next) {
        err = util.isError(err) ? {message: err.message, stack: includeStack(err.stack)} : err;
        if (!err.status) {
            err.status = 500;
        }

        logger.error(err);
        return !err.logOnly && res.status(err.status).json(err);
    };
}

module.exports = errors;
