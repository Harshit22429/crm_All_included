const mongoose = require('mongoose');
const AutoIncrement = require('mongoose-sequence')(mongoose);


const User = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    userProfile:{
        type:String
        

    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    phone:{
        type:Number,
        required:true,
        unique:true
    },    
    parentId:{
        type:String        
    },
    createdAt:{
        type:String,
        default:Date.now()
    }
})
User.plugin(AutoIncrement,{
    inc_field:"userId",
    start_seq:1000
})

module.exports = mongoose.model("user", User);