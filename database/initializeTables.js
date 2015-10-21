var pg = require('pg');
var connectionString = process.env.DATABASE_URL || 'postgres://localhost:5432';
var format = require('string-format');
format.extend(String.prototype);


/*
 var tables = [
 {
 name: "Crusts",
 columns: ['id', 'name', 'price'],
 columnTypes: ['SERIAL PRIMARY KEY', 'VARCHAR(40)', 'DECIMAL'],
 data: [
 [, "Hand-Tossed Style Pizza", 0.50],
 [, "Stuffed Crust Pizza", 2.00],
 [, "Thin Crust Pizza", 1.00]
 ]
 }
 ];
 */

var databaseInitializer = (function(){
    var instance = {};
    var initializeTablesArray = [
        format('' +
            'CREATE TABLE IF NOT EXISTS Crusts (' +
            'id SERIAL PRIMARY KEY, ' +
            'name TEXT, ' +
            'price DECIMAL' +
            ')' +
            '' +
            'INSERT INTO Crusts (name, price)'
        )
    ];
    instance.initializeTables = function(){

    };

    return instance;
})();

/*
var databaseInitializer = {
    initializeTables: function(){
        var tables = [
            {
                name: "Crusts",
                columns: ['id', 'name', 'price'],
                columnTypes: ['SERIAL PRIMARY KEY', 'VARCHAR(40)', 'DECIMAL'],
                data: [
                    [, "Hand-Tossed Style Pizza", 0.50],
                    [, "Stuffed Crust Pizza", 2.00],
                    [, "Thin Crust Pizza", 1.00]
                ]
            }
        ];

        for (var table in tables) {
            initializeTable(table);
        }
    }
};

function initializeTable(table){
    var client = getClient();
    client.connect();
    client.query(
        format('CREATE TABLE IF NOT EXISTS {0} {1}', table.name, table.columns ),
        function(err, result){
            done();
            if (err){ console.log(err); return; }
            if (result){
                console.log(format('{0} table created successfully', table.name));
                console.log(format('Populating table {0}', table.name));
                populateTable(table);
            }
            console.log(format('{0} table already exists', table.name));
            return;
        });
}

function populateTable(table){
    for (var rowIndex in table.data)
    {
        var rowData = table.data[rowIndex];
        for (var columnIndex in table.columns)
        {
            var column = table.columns[columnIndex];
            var columnType = table.columnTypes[columnIndex];
            if (shouldSkipInsertingColumnData(column, columnType, rowData))
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

function shouldSkipInsertingColumnData(column, columnType){
    var shouldSkipInsertingColumnData = false;
    if (columnType.toUpperCase().indexOf("SERIAL") > -1 ||
        column.toLowerCase().indexOf("id") == 0 ||
        rowData
    )
    {
        shouldSkipInsertingColumnData = true;
    }
    return shouldSkipInsertingColumnData;

}
*/

module.exports = databaseInitializer;