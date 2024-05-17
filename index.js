const express=require("express");
const app=express();
require('dotenv').config();
const connectDB=require('./db/conn');
const TodoRoutes=require('./routes/todoRoutes')
const PORT=process.env.PORT || 5000;

connectDB();

app.use(express.json())
app.use('/api',TodoRoutes);

app.get('/',(req,res)=>{
    res.send("this is a sample todo list")
})

app.listen(PORT,()=>{
    console.log(`listening at http://localhost:${PORT}`)
})