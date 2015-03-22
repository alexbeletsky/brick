var mongo = require('mongojs');

function createConnection(config) {
    var connection, collections = ['shifts', 'demands', 'plannings', 'vacations'];

    if (!connection) {
        connection = mongo.connect(config.connection, collections);
        if (!connection) {
            throw new Error('could not connect to ' + config.connection);
        }
    }

    return function (req, res, next) {
        req.mongo = connection;
        next();
    };
}

module.exports = createConnection;
