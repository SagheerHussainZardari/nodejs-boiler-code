import User from "../models/user.model.js";
import bcrypt from "bcrypt"
import ResponseService from "./response.service.js";


class UserService {
    list(req,res){
        User.find().then((users) => {
            ResponseService.sendResult(res,users,"Users fetched Successfully!","success",200);
        }).catch(err =>{
            ResponseService.sendResult(res,null,err.message,"error",400);
        })
    }

    get(req,res){
        User.findById(req.params.id).then((user)=>{
            ResponseService.sendResult(res,user,"User fetched Successfully!","success",200);
        }).catch(err =>{
            ResponseService.sendResult(res,null,err.message,"error",400);
        })
    }

    delete(req,res){
        User.findByIdAndDelete(req.params.id).then((user)=>{
            ResponseService.sendResult(res,null,"User deleted successfully!","success",200);
        }).catch(err =>{
            ResponseService.sendResult(res,null,err.message,"error",400);
        })
    }

    update(req,res){
        User.findByIdAndUpdate(req.params.id,req.body).then((data)=>{
            User.findById(req.params.id).then(user =>{
                ResponseService.sendResult(res,user,"User updated successfully!","success",200);
            }).catch(err =>{
                ResponseService.sendResult(res,null,err.message,"error",400);   
            })
        }).catch(err =>{
            ResponseService.sendResult(res,null,err.message,"error",400);
        })
    }
}


export default new UserService();
