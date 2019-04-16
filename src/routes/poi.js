var PoiModel = require('../models/poi.model')
var express = require('express');
var router = express.Router();

router.get('/listAllPois', function(req, res){
    PoiModel.find({})
        .then(doc =>{
            return res.json(doc);
        })
        .catch(err => {
            return status(500).json(err);
        });
});

router.get('/listRangePois', function(req, res){
    if(!req.query.coordX){
        return res.status(400).send('Está faltando o parametro coordX na Url.')
    }

    if(!req.query.coordY){
        return res.status(400).send('Está faltando o parametro coordX na Url.')
    }

    var coordinates = {coordX: req.query.coordX, coordY: req.query.coordY}
    console.log(coordinates);
    PoiModel.find({$or:[{coordX:{$lte: (coordinates.coordX + 10)}},
                   {coordY:{$lte: (coordinates.coordY + 10)}}
                    ]})
        .then(doc =>{
            console.log(doc)
            return res.json(doc);
        })
        .catch(err => {
            return status(500).json(err);
        });
});

router.post('/poi', function(req, res){
    if(!req.body){
        return Response.status(400).send('Request body is missing');
    }

    var model = new PoiModel(req.body);
    console.log('model: ' + model);
    model.save()
        .then(doc => {
            if(!doc || doc.length === 0){
                return res.status(500).send(doc);
            }
            return res.status(201).send(doc);
        })
        .catch(err => {
            return res.status(500).json(err);
        });
});

module.exports = router;