const Product =require('../models/product')
const User =require('../models/user')


async function addProduct(req,res,next){
    const {title,description,category,image,status,prize}=req.body;
    const product =new Product()
    product.title =title
    product.description =description
    product.category =category
    product.image =image
    product.status =status
    product.prize =prize


  try{
     await product.save()
     return res.json({
        success:true,
        message:"successfully added product",
        product,
     })
  }catch(error){
    return console.log(error)
  }
}


async function viewProduct(req,res,next){
      try{
        const products= await Product.find()
        return res.status(200).json({
            success:true,
            message:"take all product",
            products

        })

      }catch(error){
         return console.log(error)
      }


}


const viewUsers= async(req,res,next)=>{
  try{
    const users=await User.find()
      return res.json({
        message:"succesfully get all users",
        users
      })
  }catch(error){
    return console.log(error)
  }

}


const deleteUser=async(req,res,next)=>{
  console.log(req.params.id)
  try{
     const data= await User.findByIdAndRemove({_id:req.params.id})
     return res.json({
      message:"delete",
      data
    
     })
  }catch(error){

  }
}





module.exports={addProduct,viewProduct,viewUsers,deleteUser}