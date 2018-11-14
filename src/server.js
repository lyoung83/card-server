const Express = require('express'),
    middleware = require('./middleware');

const server = Express()

server.use(middleware)

server.listen(
    process.env.PORT || 4000,
    "localhost",
    () => console.log(`server listening on port ${process.env.PORT || 4000}`)
);

module.exports = () => server;