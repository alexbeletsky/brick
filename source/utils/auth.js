var middleware = require('../middleware');

function applyAuthentication(app, routesToSecure) {
    routesToSecure.forEach(function (route) {
        app.all(route + '/*', middleware.access.auth());
    });

    return app;
}

module.exports = applyAuthentication;
