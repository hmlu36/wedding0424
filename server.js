const { createServer } = require('bottender/express');

const bot = require('./bot'); // implement your bot logic

const server = createServer(bot);

server.listen(5000, () => {
    console.log('server is running on 5000 port...');
});