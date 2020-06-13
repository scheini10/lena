const http = require('http');
const app = require('./app');

const port = process.env.PORT || 3000;
const ip = process.env.IP;
const server = http.createServer(app);

//server.listen(port) {
//    console.log('läuft')};

    server.listen(port, ip, () => {
        console.log(`Der Server läuft auf ${ip}:${port}.`)
    });
