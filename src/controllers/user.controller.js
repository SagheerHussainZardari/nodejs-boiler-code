import User from "../models/user.model.js";
import bcrypt from "bcrypt"
import {sendResult} from "../helpers/utils.js";


const list = (req,res) =>{
    User.find().then((users) => {
        sendResult(res,users,"Users fetched Successfully!","success",200);
    }).catch(err =>{
        sendResult(res,null,err.message,"error",400);
    })
}

const get = (req,res) =>{
    User.findById(req.params.id).then((user)=>{
        if(user){
            sendResult(res,user,"User fetched Successfully!","success",200);
        }else{
            sendResult(res,[],"No User Found!","error",404);
        }

    }).catch(err =>{
        sendResult(res,null,err.message,"error",400);
    })
}

const destroy = (req,res) =>{
    User.findByIdAndDelete(req.params.id).then((user)=>{
        sendResult(res,null,"User deleted successfully!","success",200);
    }).catch(err =>{
        sendResult(res,null,err.message,"error",400);
    })
}

const update = (req,res) =>{
    User.findByIdAndUpdate(req.params.id,req.body).then((data)=>{
        User.findById(req.params.id).then(user =>{
            if(user){
                sendResult(res,user,"User updated successfully!","success",200);
            }else{
                sendResult(res,[],"No User Found!","error",404);
            }
        }).catch(err =>{
            sendResult(res,null,err.message,"error",400);   
        })
    }).catch(err =>{
        sendResult(res,null,err.message,"error",400);
    })
}

export  {list,get,destroy,update};