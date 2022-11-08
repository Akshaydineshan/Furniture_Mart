const mongoose = require('mongoose')
const user = require('../../../Event_Management/Event_Server/models/user')

const userSchema = mongoose.Schema({
    name: {
        type: String
    },
    email: {
        type: String,
        unique:true
    },
    password: {
        type: String
    },
    role:{
       type:String,
       default:'user'
    },
    created:{
        type:Date,
        default:Date.now
    }
    

  
})


module.exports=mongoose.model('User',userSchema);