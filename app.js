const express = require("express");
const app = express();

const gaestebuchRoutes = require('./api/routes/gaestebuch')
// Add headers, um CORS-Fehler zu umgehen
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use(function (req, res, next) {

    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', '*');

    if (req.method === 'OPTIONS'){
        res.header('Access-Control-Allow-Methods','GET,PUT,POST,PATCH,DELETE');
        return res.status(200).json({});

    }

   next();
});

app.use('/gaestebuch', gaestebuchRoutes);

module.exports = app;