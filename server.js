var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var cors = require('cors');
var foodCtrl = require('./controller/foodCtrl');
var userCtrl = require('./controller/userCtrl');
var mongoose = require('mongoose');
var mongoUri = 'mongodb://localhost:27017/newMenu'
var port = 8090;

app.use(bodyParser.json());
app.use(cors());
app.use(express.static(__dirname + '/public'));

mongoose.connect(mongoUri);
mongoose.connection.once('open', function() {
	console.log('Connected to MongoDB at ' + mongoUri);
});

////////
//FOOD//
////////

app.get('/api/food', foodCtrl.getFoods);
app.get('/api/food/one/:id', foodCtrl.getFood);
app.post('/api/food', foodCtrl.addFood);
app.delete('/api/food', foodCtrl.removeFood);
app.post('/api/food/review', foodCtrl.addReview);


////////
//USER//
////////

app.post('/api/user', userCtrl.addUser);




app.listen(port, function() {
	console.log('Listening on ' + port);
});