import mongoose from "mongoose";

const connection = mongoose.connect("mongodb://localhost:27017/node-practise-1",{
    
}).then(()=>{
    console.log("Connected to database successfully");
}).catch((err)=>{
    console.log("Connection Failed ", err);
});

export default connection;
