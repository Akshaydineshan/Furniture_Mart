const User = require('../models/user')
const Cart =require('../models/cart')
const jwt =require('jsonwebtoken')
const jwtcheck =require('../middleware/jwtcheck')
const cart = require('../models/cart')
const Product =require('../models/product')





//signup
const userSignup = async (req, res, next) => {
    const { name, email, password } = req.body
    let existUser
    try {
        existUser = await User.findOne({ email })
    } catch (error) {
        return console.log(error);
    }

    if (!existUser) {
        let user = new User();
        user.name = name
        user.email = email
        user.password = password
        user.blog=[]
        try {
            await user.save()
            const token =jwt.sign({existUser:user},"secret123")

            return res.status(200).json({
                success: true,
                message: "User Register Successfull",
                user,
                token,

            })

        } catch (error) {
            return console.log(error)

        }

    } else {
        return res.status(400).json({
            success: false,
            message: "email already exist !"
        })
    }
}


//signin

const userSignin =async(req,res,next)=>{
    const {email,password}=req.body;
    let existUser
    try{
        existUser = await User.findOne({email})
       
    }catch(error){
        return console.log(error)
    }
    if(!existUser){
        return res.json({
            success:false,
            message:"email not found"
        })
    }else{
        if(password ==existUser.password){
            
            const token=jwt.sign({existUser},"secret123")

            return res.status(200).json({
                success:true,
                message:"Login success",
                token,
                user:existUser
            })
            
        }else{
            return res.json({
                success:false,
                message:"password mismatch"
            })
        }

    }
}

const addCart =async (req,res,next)=>{
    console.log("cccccccc")
    const {title,description,prize,image,status,category,user}=req.body
   let  cart =new Cart()
        
    cart.title =title 
    cart.description =description 
    cart.category =category 
    cart.status =status 
    cart.image =image 
    cart.prize =prize 
    cart.user =user

     try{
         const cartadded= await cart.save()
        return res.json({
            message:"cart addded",
            cart:cartadded,
          
        })
      
     }catch(error){
        return console.log(error)
     }
}


const viewCart =async(req,res,next)=>{
    console.log("dddddddddddddd",req.params.id)
   
    try{
       const data=await Cart.find({user:req.params.id})
    return res.json({
        message:"view cart success",
        data:data
    })
    }catch(error){
          return console.log(error)
    }
}


const getSingleProduct =async(req,res,next)=>{
    console.log("single",req.params.id)
    try{
        const data=await Product.findById({_id:req.params.id})
     return res.json({
         message:"get single product",
         data:data
     })
     }catch(error){
           return console.log(error)
     }

}


async function cartItemDelete(req,res,next){
     try{
        const data=await Cart.findByIdAndRemove({_id:req.params.id})
        res.json({
            message:"deleted cartt item"
        })

     }catch(error){

     }
}







module.exports = { userSignup,userSignin,addCart,viewCart,getSingleProduct,cartItemDelete}