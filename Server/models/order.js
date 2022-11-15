const mongoose =require('mongoose')

const orderSchema =mongoose.Schema({
    user:{type:mongoose.Schema.Types.ObjectId},
    productid:[{type:mongoose.Schema.Types.ObjectId}],
    orderdate:{type:Date,default:Date.now},
    productname:{type:String},
    productimage:{type:String},
    productprice:{type:String},
    orderstatus:{type:String,default:"order placed"},

})
module.exports=mongoose.model('Order',orderSchema)