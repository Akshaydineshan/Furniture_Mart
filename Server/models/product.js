const mongoose = require('mongoose')

const productSchema = mongoose.Schema({
    title: { type: String },
    description: { type: String },
    category: { type: String },
    image: { type: String },
    status: { type: String },
    prize: { type: String },
  
   
})

module.exports=mongoose.model('Product',productSchema)