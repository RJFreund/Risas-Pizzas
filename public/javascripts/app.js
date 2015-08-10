var myApp = angular.module('myApp', ['ui.router']);
myApp.run(
    ['$rootScope', '$state', '$stateParams',
        function ($rootScope,   $state,   $stateParams) {
            $rootScope.$state = $state;
            $rootScope.$stateParams = $stateParams;
        }
    ]
);

myApp.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/");
    $stateProvider
        .state('home', {
            url: "/",
            templateUrl: "/index",
            resolve: {
                getTitle: function(){ return "Risa's Pizzas" },
                getHeaderTitle: function(){ return "Welcome to Risa's Pizzas"; }
            }
        })
        .state('menu', {
            url: '/menu',
            templateUrl: '/menu',
            resolve: {
                getHeaderTitle: function(){return "Risa's Pizzas Menu" }
            }
        })
        .state('about', {
            url: '/about',
            templateUrl: '/about',
            resolve: {
                getHeaderTitle: function(){ return "About Risa's Pizzas"; }
            }
        })
        .state('locations', {
            url: '/locations',
            templateUrl: '/locations'
        })
        .state('contact', {
            url: '/contact',
            templateUrl: '/contact'
        });
});
myApp.controller('AppController', ['$scope', '$rootScope', '$filter', function($scope, $rootScope, $filter){
    $scope.getPageTitle = function(){
        if ($rootScope.$state.$current.resolve.hasOwnProperty('getTitle'))
            return $rootScope.$state.$current.resolve.getTitle();
        return $filter('capitalize')($rootScope.$state.current.name) + " - Risa's Pizzas";
    };
}]);

myApp.filter('capitalize', function() {
    return function(input) {
        return input.charAt(0).toUpperCase() + input.substr(1);
    }
});