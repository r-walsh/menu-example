var Food = require('../models/Food')

module.exports = {

	getFoods: function( req, res ) {
		Food.find().populate('reviews.reviewer').exec()
			.then(function( food, err ) {
				if (err) {
					res.status(500).send(err);
				} else {
					res.send(food);
				}
			});
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
		Food.findById(req.params.id, function( err, data ) {
			if (err) {
				res.status(500).send(err);
			} else {
				res.send(data);
			}
		});
	},

	addReview: function( req, res ) {
		Food.findById(req.query.id, function( err, food ) {
			if (err) {
				res.status(500).send(err);
			} else {
				food.reviews.push(req.body);
				food.save(function( err, review ) {
					if (err) {
						res.status(500).send(err);
					} else {
						res.send(review);
					}
				});
			}
		});
	}

}