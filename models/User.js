var 	mongoose = require('mongoose')
	,	Schema = mongoose.Schema;

var User = Schema({

		name: { type: String, required: true }
	,	email: { type: String, required: true }
	,	itemsReviewed: [{ type: Schema.Types.ObjectId }]
	,	password: { type: String, required: true }

});


module.exports = mongoose.model('User', User);

// User.methods.generateHash = function( password ) {
// 	return bcrypt.hashSync(password, genSalt(8), null);
// }

// User.emthods.validatePassword = function( password ) {
// 	return bcrypt.compareSync(password, this.password);
// }