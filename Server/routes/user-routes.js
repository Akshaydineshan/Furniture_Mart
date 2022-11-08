const express =require("express")
const router =express.Router()
const userController=require('../controllers/user-controller')
const jwtcheck =require('../middleware/jwtcheck')
const User=require('../models/user')



router.post('/signup',userController.userSignup)
router.post('/signin',userController.userSignin)
router.get('/profile',jwtcheck,(req,res,next)=>{
    User.findById({_id:req.dec.existUser._id},(error,data)=>{
        if(!error){
            res.json({
                user:data
            })
        }
    })

    
  
})

router.post("/addcart",userController.addCart)
router.get("/viewcart/:id",userController.viewCart)
router.get('/singleproduct/:id',userController.getSingleProduct)
router.delete('/cart-item-delete/:id',userController.cartItemDelete)





module.exports=router


