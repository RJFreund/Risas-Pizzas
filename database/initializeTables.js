var pg = require('pg');
var connectionString = process.env.DATABASE_URL || 'postgres://localhost:5432';

var crusts = [
    {
        name: 'Hand-Tossed Style Pizza',
        price: 0.50
    },
    {
        name: 'Thin Crust Pizza',
        price: 1.00
    },
    {
        name: 'Stuffed Crust Pizza',
        price: 2.00
    }
];

var client = new pg.Client(connectionString);
client.connect();
client.query(
    'CREATE TABLE IF NOT EXISTS ' +
    'Crusts(id SERIAL PRIMARY KEY, name VARCHAR(40), price DECIMAL)',
    function(err, result){
        done();
        if (err) console.log(err);
    });
for (var crust in crusts){
    client.query(
        "INSERT INTO Crusts (name, price) " +
        "SELECT '$1', $2) " +
        "WHERE NOT EXISTS " +
        "(SELECT 1 " +
        "FROM Crusts " +
        "WHERE name=$1)", [crust.name, crust.price]
    );
}
console.log('Tables initialized successfully');