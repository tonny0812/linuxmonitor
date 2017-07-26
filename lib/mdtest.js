var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var config = require("../config/config");

function connect() {
     var db = mongoose.createConnection(config.mongodb.uri,config.mongodb.options);
     db.on('error',console.error.bind(console,'连接错误:'));
     var serverSchema = new Schema({
        _id: {type:String,required:true,index:{unique:true}},    //IP地址
        systemtype: String, 
        release: String,
        totalmem: String,
        cpus: String,
        IFACE: String,
    },{versionKey:false});

     var servers = db.model('servers', serverSchema);

     var serversEntity = new servers({_id:'10.0.0.1',totalmem:'asss'});

     serversEntity.save();
}

connect();
