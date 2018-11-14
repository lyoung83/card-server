const BodyParser = require('body-parser'),
cors = require('cors');
const router = require('./router');
const logger = require('./logger');



module.exports = [
    cors(),
    BodyParser.json(),
    logger(),
    router()
]