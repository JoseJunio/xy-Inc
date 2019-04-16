var express = require('express');
var mongoose = require('mongoose');
var path = require('path');
var bodyParser = require("body-parser");
var poiRouter = require('./routes/poi');
var app = express();
var ObjectID = require('mongoose').ObjectID;
var PoiModel = require('./models/poi.model')

mongoose.connect('mongodb://192.168.99.100:27017');

app.use(bodyParser.json());

app.use(function(req, res, next){
    console.log(`${new Date().toString()} => ${req.originalUrl}`);
    next();
});

app.use(poiRouter);

// Handler for 404 - Resource Not Found
app.use(function(req, res, next){
   //res.status(201).send(res.body);
   res.status(404).send('Resource Not Found');
});

// Handler for Error 500
app.use(function(err, req, res, next){
  console.error(err.stack)
  res.sendFile(path.join(__dirname, '/public/error500.html'));
});

app.listen(3000, function(){
    console.log('O servidor está rodando na porta 3000');
});

initDatabase();


function initDatabase(){
    const data = [
        {name: "Lanchonete", coordX: 27, coordY:12},
        {name: "Posto", coordX: 31, coordY:18},
        {name: "Joalheria", coordX: 15, coordY: 12},
        {name: "Pub", coordX: 12, coordY:8},
        {name: "Supermercado", coordX: 23, coordY: 6},
        {name: "Churrascaria", coordX: 28, coordY:2}
    ]

    for(var i in data){
        var model = new PoiModel({name: data[i].name, coordX: data[i].coordX, coordY:data[i].coordY});
        model.save();
    }
}