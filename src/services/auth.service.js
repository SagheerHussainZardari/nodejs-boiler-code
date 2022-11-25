import User from "../models/user.model.js";
import bcrypt from "bcrypt"
import ResponseService from "./response.service.js";

class AuthService{
    login(req,res){
        User.findOne({email: req.body.email}).then(user=>{
            if(user){
                if(bcrypt.compareSync(req.body.password, user.password)){
                    ResponseService.sendResult(res,[],"Valid User","success",200);
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
}
export default new AuthService();
