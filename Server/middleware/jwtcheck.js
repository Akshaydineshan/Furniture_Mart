 
 const jwt =require('jsonwebtoken')

 module.exports =(req,res,next)=>{
    console.log("inside jsonweb")
    const token = req.headers['auth-head']
    console.log(token);
    if(token){
        jwt.verify(token,'secret123',(err,dec)=>{
            req.dec =dec
            next()
        })
    }else{
        res.json({
            message:"notoken provided"
        })
    }

 }