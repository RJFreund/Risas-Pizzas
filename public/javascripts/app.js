var myApp = angular.module('myApp', ['ui.router', 'ngResource']);
myApp.run(
    ['$rootScope', '$state', '$stateParams',
        function ($rootScope,   $state,   $stateParams) {
            $rootScope.$state = $state;
            $rootScope.$stateParams = $stateParams;
        }
    ]
);