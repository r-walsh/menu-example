angular.module('menu')
.controller('mainCtrl', function( $scope, $http ) {

	$scope.getFood = function() {
		$http.get('/api/food').then(function( response ) {
			$scope.foods = response.data;
		});
	}
	$scope.getFood();

	$scope.addNewFood = function( food ) {
		$http.post('/api/food', food).then(function( response ) {
			$scope.foods = response.data;
		});
	}

	$scope.deleteFood = function( foodId ) {
		$http.delete('/api/food?id=' + foodId).then(function( response ) {
			$scope.getFood();
		});
	}

	$scope.getOneFood = function( foodId ) {
		$http.get('/api/good/one/' + foodId)
	}

	// $scope.food = $http({
	// 	method: 'GET',
	// 	url: '/api/food'
	// }).then(function( response ) {
	// 	return response.data;
	// });

	// $scope.food = $http({
	// 	method: 'POST',
	// 	url: '/api/food',
	// 	data: food
	// }).then(function( response ) {
	// 	return response.data;
	// });
});