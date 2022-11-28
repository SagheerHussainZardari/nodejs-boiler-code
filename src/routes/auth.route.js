import {Router} from "express"
import AuthService from "../services/auth.service.js"
const authRouter = new Router();

authRouter.post("/login", (req,res)=>{
    AuthService.login(req,res)
})

authRouter.post("/register", (req,res)=>{
    AuthService.register(req,res)
})

export default authRouter;
