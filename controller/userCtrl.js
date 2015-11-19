var User = require('../models/User')

module.exports = {

	addUser: function( req, res ) {

		new User(req.body).save(function( err, user ) {
			if (err) {
				res.status(500).send(err);
			} else {
				res.send(user);
			}
		});

	}

}