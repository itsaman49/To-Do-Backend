const express=require("express");

const router=express.Router();

const {getData}=require('../controller/todoController.js')

router.get('/getData',getData);
router.post('/addData',addData);
router.put('/updateData',updateData);
router.delete('/deleteData',deleteData);


module.exports=router