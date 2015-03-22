module.exports = {
    validate: require('./validate'),
    errors: require('./errors'),
    access: {
        auth: require('./auth'),
        id: require('./checkId'),
        guest: require('./guest')
    },
    db: {
        // mysql: require('./mysql'),
        // mongo: require('./mongo')
    }
};
