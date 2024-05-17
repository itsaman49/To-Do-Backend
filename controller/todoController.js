

const getData=async(reeq,res)=>{
    console.log("This is controller");
    res.send("This route will give you all the data")
}

module.exports={getData}