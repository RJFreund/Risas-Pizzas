angular.module('myApp').controller('menuController', ['$scope', 'Crusts', 'Toppings',
    function($scope, Crusts, Toppings){
    $scope.crusts = Crusts.query();
    $scope.toppings = Toppings.query();
    $scope.pizzaSizes = [
        'Small - 6"',
        'Medium - 12"',
        'Large - 14"',
    ];
    $scope.toppingPrices = [
        {
            "Topping": "Cheese",
            'Small - 6"': 3.95,
            'Medium - 12"': 7.95,
            'Large - 14"': 9.50
        },
        {
            "Topping": "One Topping",
            'Small - 6"': 4.95,
            'Medium - 12"': 8.95,
            'Large - 14"': 9.95
        },
        {
            "Topping": "Two Toppings",
            'Small - 6"': 5.45,
            'Medium - 12"': 7.95,
            'Large - 14"': 9.50
        }
    ];

    $scope.pizzaOrder = [
        {
            pizza: {
                name: "Cheese and Bacon",
                toppings: [
                    {
                        name: 'cheese',
                        price: 1
                    },
                    {
                        name:'bacon',
                        price: 0.50
                    }
                ],
                crust: {
                    name: 'thin crust',
                    price: 1
                }
            },
            quantity: 2
        }
    ];
}]);