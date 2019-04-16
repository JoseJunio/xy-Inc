var mongoose = require('mongoose');
var PoiSchema = new mongoose.Schema({
    name: String,
    coordX: String,
    coordY: String
});

module.exports = mongoose.model('Poi', PoiSchema)
