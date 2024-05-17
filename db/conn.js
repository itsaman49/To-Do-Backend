const mongoose=require("mongoose");
const MONGO_URI=process.env.MONGO_URI
async function connectDB(){
    await mongoose.connect(MONGO_URI)
    .then(()=>{
        console.log("Connected to Database")
    })
    .catch((error)=>{
        console.log("error occured "+ error);
    })
}

module.exports=connectDB;