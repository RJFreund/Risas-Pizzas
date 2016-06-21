angular.module('myApp').config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/");
    $stateProvider
        .state('home', {
            url: "/",
            templateUrl: "/views/content/index",
            resolve: {
                getTitle: function(){ return "Risa's Pizzas" },
                getHeaderTitle: function(){ return "Welcome to Risa's Pizzas"; }
            }
        })
        .state('menu', {
            url: '/menu',
            templateUrl: '/views/content/menu',
            resolve: {
                getHeaderTitle: function(){return "Risa's Pizzas Menu" }
            },
            controller: 'menuController'
        })
        .state('about', {
            url: '/about',
            templateUrl: '/views/content/about',
            resolve: {
                getHeaderTitle: function(){ return "About Risa's Pizzas"; }
            }
        })
        .state('locations', {
            url: '/locations',
            templateUrl: '/views/content/locations'
        })
        .state('contact', {
            url: '/contact',
            templateUrl: '/views/content/contact'
        });
});