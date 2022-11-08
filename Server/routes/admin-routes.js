const express =require("express")
const router =express.Router()
const adminController =require('../controllers/admin-controller')


router.post('/addProduct',adminController.addProduct)
router.get('/viewProduct',adminController.viewProduct)
router.get('/viewUsers',adminController.viewUsers)
router.delete('/deleteuser/:id',adminController.deleteUser)


module.exports=router