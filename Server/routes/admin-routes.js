const express =require("express")
const router =express.Router()
const adminController =require('../controllers/admin-controller')


router.post('/addProduct',adminController.addProduct)
router.get('/viewProduct',adminController.viewProduct)
router.get('/viewUsers',adminController.viewUsers)
router.delete('/deleteuser/:id',adminController.deleteUser)
router.get('/vieworders',adminController.viewOrders)
router.delete('/deleteproduct/:id',adminController.deleteProduct)
router.get('/getproduct/:id',adminController.getProduct)
router.put('/updateproduct/:id',adminController.updateProduct)


module.exports=router