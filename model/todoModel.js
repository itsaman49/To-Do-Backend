const mongoose=require("mongoose");

const todoSchema=new mongoose.Schema({
    text:{
        type:String,
        require:true,
    },
    isdeleted:{
        type:boolean,
        default:false
    }
},{
    timestamps:true
})

module.exports=('todolist',todoSchema);