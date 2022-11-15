const mongoose = require('mongoose')

const cartSchema = mongoose.Schema({
    productid:{type:mongoose.Schema.Types.ObjectId},
    title: { type: String },
    description: { type: String },
    category: { type: String },
    image: { type: String },
    status: { type: String },
    prize: { type: String },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    }
   
})

module.exports=mongoose.model('Cart',cartSchema)