const express=require("express");

const router=express.Router();

const {getData,addData,updateData,deleteData}=require('../controller/todoController.js')

router.get('/getData',getData);
router.post('/addData',addData);
router.put('/updateData/:id',updateData);
router.delete('/deleteData/:id',deleteData);


module.exports=router