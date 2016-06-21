angular.module('myApp').controller('menuController', ['$scope',
    function($scope){
    $scope.crusts = [
        { name: "Hand-Tossed Style Pizza" , price: 1.00},
        { name: "Stuffed Crust Pizza" , price: 2.00},
        { name: "Thin Crust Pizza" , price: 1.50}
    ];
    $scope.selectedCrust = "";
    $scope.selectedCrustPrice = "";
    $scope.updateSelectedCrust = function(selectedCrust){
        $scope.selectedCrust = selectedCrust;
        $scope.selectedCrustPrice = "$" + parseFloat(Math.round($scope.selectedCrust.price * 100) / 100).toFixed(2);
    };    
    $scope.meatToppings = [
        { name: "Candian Bacon" , price: 1.00 },
        { name: "Grilled Chicken" , price: 1.00 },
        { name: "Meatballs" , price: 1.00 },
        { name: "Pepperoni" , price: 1.00 },
        { name: "Sausage" , price: 1.00 }
    ];
    $scope.veggieToppings = [
        { name: "Banana Peppers", price: 0.50 },
        { name: "Black Olives", price: 0.50 },
        { name: "Green Peppers", price: 0.50 },
        { name: "Red Onions", price: 0.50 },
        { name: "Pineapples", price: 0.50 },
        { name: "Tomatoes", price: 0.50 }
    ];
    $scope.spicyToppings = [
        { name: "Basil", price: 0.50 },
        { name: "Garlic", price: 0.50 },
        { name: "Hot Giardiniera", price: 0.50 },
        { name: "Jalapenos", price: 0.50 }
    ];
    $scope.cheeseToppings = [
        { name: "Asiago", price: 0.50 },
        { name: "Cheddar", price: 0.50 },
        { name: "Mozzarella", price: 0.50 },
        { name: "Parmasian", price: 0.50 },
        { name: "Ricotta", price: 0.50 }
    ];
    $scope.toppings = [
        $scope.meatToppings,
        $scope.veggieToppings,
        $scope.spicyToppings,
        $scope.cheeseToppings
    ];
    $scope.pizzaSizes = [
        'Small - 6"',
        'Medium - 12"',
        'Large - 14"',
    ];
    $scope.toppingPrices = [
        {   "Topping": "Cheese",
            'Small - 6"': 3.95,
            'Medium - 12"': 7.95,
            'Large - 14"': 9.50 },
        {   "Topping": "One Topping",
            'Small - 6"': 4.95,
            'Medium - 12"': 8.95,
            'Large - 14"': 9.95 },
        {   "Topping": "Two Toppings",
            'Small - 6"': 5.45,
            'Medium - 12"': 7.95,
            'Large - 14"': 9.50 }
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