import { Router } from "express";
import UserService from "../services/user.service.js"
const userRouter = new Router()


userRouter.get("/",(req,res)=>{
    UserService.list(req,res);
});

userRouter.get("/:id",(req,res)=>{
    UserService.get(req,res);
});

userRouter.post("/",(req,res)=>{
    UserService.create(req,res);
});

userRouter.delete("/:id",(req,res)=>{
    UserService.delete(req,res);
});

userRouter.patch("/:id",(req,res)=>{
    UserService.update(req,res);
});

export default userRouter;
