var express = require('express');
var router = express.Router();
var pg = require('pg');
var connectionString = process.env.DATABASE_URL || 'postgres://localhost:5432';

router.route('/crusts')
    .get(function(req, res){
        res.json();
    })
;

router.route('/toppings')
    .get(function(req, res){
        res.json([
            {
                name: "Candian Bacon",
                price: 1.00,
                type: "Meat"
            },
            {
                name: "Grilled Chicken",
                price: 1.00,
                type: "Meat"
            },
            {
                name: "Meatballs",
                price: 1.00,
                type: "Meat"
            },
            {
                name: "Pepperoni",
                price: 1.00,
                type: "Meat"
            },
            {
                name: "Sausage",
                price: 1.00,
                type: "Meat"
            },
            {
                name: "Banana Peppers",
                price: 0.50,
                type: "Veggie"
            },
            {
                name: "Black Olives",
                price: 0.50,
                type: "Veggie"
            },
            {
                name: "Green Peppers",
                price: 0.50,
                type: "Veggie"
            },
            {
                name: "Red Onions",
                price: 0.50,
                type: "Veggie"
            },
            {
                name: "Pineapples",
                price: 0.50,
                type: "Veggie"
            },
            {
                name: "Tomatoes",
                price: 0.50,
                type: "Veggie"
            },
            {
                name: "Basil",
                price: 0.50,
                type: "Spice"
            },
            {
                name: "Garlic",
                price: 0.50,
                type: "Spice"
            },
            {
                name: "Hot Giardiniera",
                price: 0.50,
                type: "Spice"
            },
            {
                name: "Jalapenos",
                price: 0.50,
                type: "Spice"
            },
            {
                name: "Asiago",
                price: 1.00,
                type: "Cheese"
            },
            {
                name: "Cheddar",
                price: 1.00,
                type: "Cheese"
            },
            {
                name: "Mozzarella",
                price: 1.00,
                type: "Cheese"
            },
            {
                name: "Parmasian",
                price: 1.00,
                type: "Cheese"
            },
            {
                name: "Ricotta",
                price: 1.00,
                type: "Cheese"
            }
        ]);
    })
;

module.exports = router;