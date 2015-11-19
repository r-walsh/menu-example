var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Food = Schema({
	name: { type: String, required: true },
	price: Number,
	reviews: [{
			reviewer: { type: Schema.Types.ObjectId, ref: 'User', required: true }
		,	rating: { type: Number, required: true }
		,	comments: String
	}],
	calories: { type: Number, default: 0 }
});

module.exports = mongoose.model('Food', Food)