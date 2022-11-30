import {Router} from "express"
import {login, register}  from "../controllers/auth.controller.js"
const authRouter = new Router();

authRouter.post("/login", login)
authRouter.post("/register", register)

export default authRouter;
