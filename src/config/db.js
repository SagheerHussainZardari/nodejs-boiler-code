import mongoose from "mongoose";

const connection = function(){
    mongoose.connect(process.env.MONGO_URI,{
    
    }).then(()=>{
        console.log("Connected to database successfully");
    }).catch((err)=>{
        console.log("Connection Failed ", err);
    });
}

export default connection;
