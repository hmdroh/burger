var connection = require("./connection");
var tableName = "burgers";
var orm = {
    selectAll: function (cb) { 
        query = "SELECT * FROM burgers";
        connection.query(query, function(err,data){
            cb(data);
            console.log(query);
        });
    },
    insertOne: function (burger_name, cb) { 
        query = "INSERT INTO burgers (burger_name, devoured) VALUES (?, FALSE)";
        connection.query(query, [burger_name], function(err,data){
            cb(true);
            console.log(query, burger_name);
            
        });
    },
    updateOne: function (id, cb) { 
        query = "UPDATE burgers SET devoured=TRUE WHERE id = ?";
        connection.query(query, [id], function(err,data){
            if(err) throw err;
            cb(true);
            console.log(query);
        });
    }
};

module.exports = orm;