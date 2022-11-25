import {Router} from "express"
import userRouter from "./user.route.js";
import authRouter from "./auth.route.js";

const router = new Router();

router.use("/users",userRouter);
router.use("/auth",authRouter);

router.get("*",(req,res) =>{
    res.send("404");
});

export default router;
