var app = angular.module('fsApp');

app.controller('mainCtrl', function($scope, authService){

	var updateUser = function(){
		authService.updateUser()
			.then(function(data){
				$scope.user = data;
			})
	}

	updateUser();

	$scope.logout = function(){
		authService.logout()
			.then(function(data){
				updateUser();
			})
	}

})