var pg = require('pg');
var connectionString = process.env.DATABASE_URL || 'postgres://localhost:5432';

var databaseInitializer = {
    initializeTables: function(){
        var tables = [
            {
                name: "Crusts",
                columns: [
                    {
                        name: "id",
                        type: "SERIAL PRIMARY KEY"
                    },
                    {
                        name: "name",
                        type: "VARCHAR(40)"
                    },
                    {
                        name: "price",
                        type: "DECIMAL"
                    }
                ]
            }
        ];
        tables[0].rows[0][tables.columns[1]] = 'Hand-Tossed Style Pizza';
        tables[0].rows[0][tables.columns[2]] = 0.50;

        tables[0].rows[1][tables.columns[1]] = 'Thin Crust Pizza';
        tables[0].rows[1][tables.columns[2]] = 1.00

        tables[0].rows[2][tables.columns[1]] = 'Stuffed Crust Pizza';
        tables[0].rows[2][tables.columns[2]] = 2.00;

        for (var table in tables) {
            initializeTable(table);
        }
    }
};

function initializeTable(table){
    var client = getClient();
    client.connect();
    client.query(
        'CREATE TABLE IF NOT EXISTS ' +
        table.name +
        table.columns,
        function(err, result){
            done();
            if (err){ console.log(err); return; }
            if (result){
                console.log(table.name + ' table created successfully');
                console.log('Populating table ' + table.name);
                populateTable(table);
            }
            console.log( table.name + ' table already exists'); return;
        });
}

function populateTable(table){
    for (var row in table.rows)
    {
        for (var column in table.columns)
        {
            if (column.type.toString().toUpperCase().indexOf("SERIAL") > -1 ||
                column.type.toString().toLowerCase().indexOf("id") == 0)
            {
                continue;
            }
            getClient().query(
                "INSERT INTO $1 ($2) " +
                "SELECT $2) " +
                "WHERE NOT EXISTS " +
                "(SELECT 1 " +
                "FROM $1 " +
                "WHERE $3=$4)", [table.name, table.columns.join(', '), table.columns[1], row[table.columns[1]]]
            );
        }
    }
}

function getClient(){
    return new pg.Client(connectionString);
}

module.exports = databaseInitializer;