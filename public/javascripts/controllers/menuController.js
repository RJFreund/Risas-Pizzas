angular.module('myApp').controller('menuController', function($scope){
    $scope.toppingPrices = [
        {
            "Topping": "Cheese",
            'Small - 6"': '3.95',
            'Medium - 12"': '7.95',
            'Large - 14"': '9.50'
        },
        {
            "Topping": "One Topping",
            'Small - 6"': '4.95',
            'Medium - 12"': '8.95',
            'Large - 14"': '9.95'
        },
        {
            "Topping": "Two Toppings",
            'Small - 6"': '5.45',
            'Medium - 12"': '7.95',
            'Large - 14"': '9.50'
        }
    ];
    $scope.crustTypes = [
        'Select Your Crust',
        'Hand-Tossed Style Pizza',
        'Stuffed Crust Pizza',
        'Thin Crust Pizza'
    ];
});