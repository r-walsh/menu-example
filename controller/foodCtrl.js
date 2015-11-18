var Food = require('../models/Food')

module.exports = {

	getFoods: function( req, res ) {
		Food.find().then(function( response ) {
			res.send(response);
		})
	},

	addFood: function( req, res ) {
		new Food(req.body).save(function( err, data ) {
			if (err) {
				res.status(500).send(err);
			} else {
				res.send(data);
			}
		});
	},

	removeFood: function( req, res ) {
		Food.findByIdAndRemove(req.query.id, function( err, data ) {
			if (err) {
				res.status(500).send(err);
			} else {
				res.send(data);
			}
		});
	},

	getFood: function( req, res ) {
		console.log(req.params);
		Food.findById(req.params.id, function( err, data ) {
			if (err) {
				res.status(500).send(err);
			} else {
				res.send(data);
			}
		});
	}

}