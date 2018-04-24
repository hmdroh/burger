var orm = require("../config/orm");

var exec = {
    selectAll: function(cb){
        orm.selectAll(cb);
    },
    updateToDev: function(id, cb){
        orm.updateOne(id, cb);
    },
    insertNew: function(data, cb){
        orm.insertOne(data,cb);
    }
}

module.exports = exec;