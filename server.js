
// nötigen Module implementieren
var http = require("http");
var path = require("path");

var express = require("express");

var bodyParser = require("body-parser");

// initiate 'app' variable with Express functionality
var app = express();

// Express view engine mit ejs aktivieren und den Ordner views einbeziehen
app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "ejs");

//app.use(express.static(__dirname + '/public'));
app.use('/public', express.static('public'));

// Array mit Einträgen für das Gästebuch
var entries = [];
// Einträge in allen views sichtbar machen
app.locals.entries = entries;

// body-parser der die Formulardaten parsen soll // parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));



// index.ejs wird zuerst im views-Verzeichnis aufgerufen und gerendert
app.get("/", function(req, res) {
    res.render("index");
});

// page 'neu' erzeugt neuen Eintrag im Gästebuch
app.get("/neu", function(req, res) {
    res.render("neu");
});

// Einträge werden auf Betreff und Inhalt überprüft, gepusht, wenn's passt,
// und gleich angezeigt
app.post("/neu", function(req, res) {
    if (!req.body.title || !req.body.feedbackNachricht) {
        res.status(400).send("Einträge müssen einen Betreff und Inhalt haben.");
        return;
    }
    entries.push({
        title: req.body.title,
        feedbackNachricht: req.body.feedbackNachricht,
        published: new Date()
    });
    res.redirect("/");
});

// Die create Server Methode wird jetzt in der app.js implementiert
http.createServer(app).listen(3000, function() {
    console.log("Gästebuch gestartet auf port 3000.");
});
