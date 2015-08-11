angular.module('myApp').factory('Crusts', ['$resource',
    function($resource){
        return $resource('/api/crusts/:id');
    }]);

angular.module('myApp').factory('Toppings', ['$resource',
    function($resource){
        return $resource('/api/toppings/:id');
    }]);