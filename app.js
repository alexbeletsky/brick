var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var morgan = require('morgan');
var cors = require('cors');

var middleware = require('./source/middleware');
var logger = require('./source/utils/logger');

var app = express();
var env = process.env.NODE_ENV || 'development';
var port = process.env.PORT || 3010;

morgan.format('custom', ':method :url :req[content-type] :req[content-length] HTTP/:http-version :status :res[content-length] - :response-time ms');
app.use(morgan('custom', {stream: logger.stream()}));

app.use(bodyParser.json());
app.use(methodOverride());
app.use(cors());
app.use(express.static(__dirname + '/public'));

require('./source/api')(app);
app.use(middleware.errors());

app.listen(port, function () {
    logger.info('editor-app listening on port ' + port + ' ' + env);
});
