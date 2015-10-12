
var serviceModule = angular.module('main.services',[]);

serviceModule.factory('mainService', ['$http', function($http) {
		return {
			get : function() {
				return $http.get('/api/test');
			}
		}
	}])

serviceModule.factory('userService', ['$http', function($http) {
		return {
			get : function() {
				return 'user';
			}
		}
	}])
