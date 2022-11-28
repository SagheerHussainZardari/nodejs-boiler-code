import User from "../models/user.model.js";
import bcrypt from "bcrypt"
import ResponseService from "./response.service.js";
import Jwt  from "jsonwebtoken";
class AuthService{
    login(req,res){
        User.findOne({email: req.body.email}).then(user=>{
            if(user){
                if(bcrypt.compareSync(req.body.password, user.password)){

                    Jwt.sign({
                        "useremail": user.email,
                        "username": user.name
                    }, process.env.JWT_SECRET,(err, token) =>{
                        ResponseService.sendResult(res,{"token":token },"LoggedIn Successfully","success",200);
                    });

                }else{
                    ResponseService.sendResult(res,[],"InValid User","error",400);
                }
            }else{
                ResponseService.sendResult(res,[],"No User User","error",404);
            }
        }).catch(err =>{
            ResponseService.sendResult(res,[],err.message,"error",404);
        })
    }

    register(req,res){
        req.body.password =  bcrypt.hashSync(req.body.password,10);
        User.create(req.body).then((user) =>{
            Jwt.sign({
                "useremail": user.email,
                "username": user.name
            }, process.env.JWT_SECRET,(err, token) =>{
                ResponseService.sendResult(res,{"token":token },"Registered Successfully","success",200);
            });
        }).catch(err =>{
            ResponseService.sendResult(res,null,err.message,"error",400);
        })
    }
}
export default new AuthService();
