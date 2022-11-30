import User from "../models/user.model.js";
import bcrypt from "bcrypt"
import {sendResult} from "../helpers/utils.js";
import Jwt  from "jsonwebtoken";

const login = (req,res) =>{
    User.findOne({email: req.body.email}).then(user=>{
        if(user){
            if(bcrypt.compareSync(req.body.password, user.password)){

                Jwt.sign({
                    "id":user._id,
                    "useremail": user.email,
                    "username": user.name
                }, process.env.JWT_SECRET,(err, token) =>{
                    sendResult(res,{"token":token },"LoggedIn Successfully","success",200);
                });

            }else{
                sendResult(res,[],"InValid User","error",400);
            }
        }else{
            sendResult(res,[],"No User User","error",404);
        }
    }).catch(err =>{
        sendResult(res,[],err.message,"error",404);
    })
}

const register = (req, res) =>{
    req.body.password =  bcrypt.hashSync(req.body.password,10);
    User.create(req.body).then((user) =>{
        Jwt.sign({
            "id":user._id,
            "useremail": user.email,
            "username": user.name
        }, process.env.JWT_SECRET,(err, token) =>{
            sendResult(res,{"token":token },"Registered Successfully","success",200);
        });
    }).catch(err =>{
        sendResult(res,null,err.message,"error",400);
    })
}

export  {login, register}