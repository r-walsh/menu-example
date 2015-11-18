var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Food = Schema({
	name: { type: String, required: true },
	price: Number,
	reviews: Array,
	calories: { type: Number, default: 0 }
});

module.exports = mongoose.model('Food', Food)