angular.module('myApp').controller('AppController', ['$scope', '$rootScope', '$filter', function($scope, $rootScope, $filter){
    $scope.getPageTitle = function(){
        if ($rootScope.$state.$current.resolve.hasOwnProperty('getTitle'))
            return $rootScope.$state.$current.resolve.getTitle();
        return $filter('capitalize')($rootScope.$state.current.name) + " - Risa's Pizzas";
    };

    $scope.getCurrentYear = function(){
    	var now = new Date();
    	return now.getFullYear();
	};
}]);