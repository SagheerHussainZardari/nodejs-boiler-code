import { Router } from "express";
import {list,get,destroy,update} from "../controllers/user.controller.js"
const userRouter = new Router()
import verifyToken from "../middlewares/authJwt.middleware.js"

userRouter.get("/",verifyToken,list);
userRouter.get("/:id",verifyToken,get);
userRouter.delete("/:id",verifyToken,destroy);
userRouter.patch("/:id",verifyToken,update);

export default userRouter;
