var controllerModule = angular.module('main.controllers', []);

controllerModule.controller('mainController', ['$scope', 'mainService',
function($scope, mainService) {
    mainService.get()
    .success(function(data) {
				$scope.data = data;
			});
}]);

controllerModule.controller('userController', ['$scope', 'userService', 
function($scope, mainService) {
	console.log($scope.flash);
    $scope.username = mainService.get();
}]);