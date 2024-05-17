const todoModel = require('../model/todoModel');

const getData = async (req, res) => {
    try{
        const data = await todoModel.find();
        res.send(data);
    }
    catch(error){
        res.send(error)
    }
}

const addData = async (req, res) => {
    try {
        const text = req.body.text;
        const entry = new todoModel({
            text: text
        })
        // console.log(entry);
        if (entry.text) {
            const result = await entry.save();
            res.send({ message: "Data added successfully." })
        }
        else {
            res.send({ message: "There is an error occured while adding the data." })

        }
    } 
    catch(e){
        res.send("error "+ e);
    }  
     
}

const updateData = async (req, res) => {
    try{
        const text_id=req.params.id;
        const newText=req.body.text;
        const data=await todoModel.updateOne({_id:text_id},{text:newText})
        if(data){
            res.send({message:"Text updated successfully"})
        }
        else{
            res.send({message:"There is a problem"})
        }
    }
    catch(error){
        res.send(error);
    }
}

const deleteData = async (req, res) => {
    try{
        const text_id=req.params.id;
        const data=await todoModel.deleteOne({_id:text_id});
        if(data){
            res.send({message:"Data deleted successfully"})
        }
        else{
            res.send({message:"There is a problem while deleting the data."})
        }
    }
    catch(error){
        res.send(error);
    }
}

module.exports = { getData, addData, updateData, deleteData }