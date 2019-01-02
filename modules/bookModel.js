var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

const userModel = new Schema({
    title:{
        type:String
    },
    author: {
        type:String
    },
    author:{
        type:String
    },
    genre: {
        type:String
    },
    read: {
        type:Boolean, default: false
    }
    
    });

module.export = mongoose.model('Book',userModel);