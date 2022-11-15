const User = require('../models/user')
const Cart = require('../models/cart')
const jwt = require('jsonwebtoken')
const jwtcheck = require('../middleware/jwtcheck')
const cart = require('../models/cart')
const Product = require('../models/product')
const Order = require('../models/order')





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
        user.blog = []
        try {
            await user.save()
            const token = jwt.sign({ existUser: user }, "secret123")

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

const userSignin = async (req, res, next) => {
    const { email, password } = req.body;
    let existUser
    try {
        existUser = await User.findOne({ email })

    } catch (error) {
        return console.log(error)
    }
    if (!existUser) {
        return res.json({
            success: false,
            message: "email not found"
        })
    } else {
        if (password == existUser.password) {

            const token = jwt.sign({ existUser }, "secret123")

            return res.status(200).json({
                success: true,
                message: "Login success",
                token,
                user: existUser
            })

        } else {
            return res.json({
                success: false,
                message: "password mismatch"
            })
        }

    }
}

const addCart = async (req, res, next) => {
    console.log("cccccccc")
    const { title, description, prize, image, status, category, user, _id } = req.body
    let cart = new Cart()
    cart.productid = _id
    cart.title = title
    cart.description = description
    cart.category = category
    cart.status = status
    cart.image = image
    cart.prize = prize
    cart.user = user

    try {
        const cartadded = await cart.save()
        return res.json({
            message: "cart addded",
            cart: cartadded,

        })

    } catch (error) {
        return console.log(error)
    }
}


const viewCart = async (req, res, next) => {
    console.log("dddddddddddddd", req.params.id)

    try {
        const data = await Cart.find({ user: req.params.id })
        return res.json({
            message: "view cart success",
            data: data
        })
    } catch (error) {
        return console.log(error)
    }
}


const getSingleProduct = async (req, res, next) => {
    console.log("single", req.params.id)
    try {
        const data = await Product.findById({ _id: req.params.id })
        return res.json({
            message: "get single product",
            data: data
        })
    } catch (error) {
        return console.log(error)
    }

}


async function cartItemDelete(req, res, next) {
    try {
        const data = await Cart.findByIdAndRemove({ _id: req.params.id })
        res.json({
            message: "deleted cartt item"
        })

    } catch (error) {

    }
}



const order = async (req, res, next) => {

      
    let order = new Order()
    order.user = req.body[0].user;
    order.productname=req.body[0].title
    order.productimage=req.body[0].image
    order.productprice=req.body[0].prize
    for(var i = 0; i < req.body.length; i++) {
        order.productid[i] = req.body[i].productid
    }

    try {
        const ordersave = await order.save()
        res.json({
            message: "order successfully",
            order: ordersave
        })


    } catch (error) {
        return console.log(error)
    }




}


const viewOrders =async (req,res,next)=>{
   try{
   const data= await Order.find({user:req.params.id})
   console.log(data)
       res.json({
        message:"get orders ",
        orders:data
       })


   }catch(error){
    return console.log(error)
   }
}


const viewOrderProduct=async(req,res,next)=>{
    console.log("2222")
    const data =await Product.find({_id:req.params.id})
    console.log("jh",data)
    res.json({
        message:"get order product details",
        data
    })
}

const cancelOrder = async (req, res, next) => {
  
    try {
      const del= await Order.findByIdAndRemove({_id: req.params.id })
    
      return res.status(200).json({
        message: "order cancelled",
        del
  
      })
  
    } catch(error) {
      return console.log(error)
    }
  
  }







module.exports = { userSignup, userSignin, addCart, viewCart, getSingleProduct, cartItemDelete, order,viewOrders,viewOrderProduct,cancelOrder}