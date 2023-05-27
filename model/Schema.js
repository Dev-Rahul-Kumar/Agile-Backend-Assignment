const mongoose = require('mongoose');


// const AutoIncrements = require('mongoose-sequence')(mongoose);
// const AutoIncrement = AutoIncrements(mongoose.connection);



var data =  mongoose.Schema({
    
    name: {
        type: String       
    },
    tagline: {
        type: String
    },
    schedule: {
        type:Date
    },
    description: {
        type:String
    },
    moderator: {
        type:String
    },
    category: {
        type:String
    },
    sub_category: {
        type:String
    },
    rigor_rank: {
        type: String
    },
    attendees: {
        type:[String]
    },
    files:{
        type:String
    }

},{timestamps:true});

// data.plugin(AutoIncrement,{inc_field: '_id'});





var Userdata =new mongoose.model('Userdata',data);








module.exports = Userdata;
// data.plugin(auto_increment.plugin,Userdata);




