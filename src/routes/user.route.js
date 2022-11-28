import { Router } from "express";
import UserService from "../services/user.service.js"
const userRouter = new Router()
import verifyToken from '../middlewares/authJwt.middleware.js'

userRouter.get("/",verifyToken,(req,res)=>{
    UserService.list(req,res);
});

userRouter.get("/:id",verifyToken,(req,res)=>{
    UserService.get(req,res);
});

userRouter.delete("/:id",verifyToken,(req,res)=>{
    UserService.delete(req,res);
});

userRouter.patch("/:id",verifyToken,(req,res)=>{
    UserService.update(req,res);
});

export default userRouter;
