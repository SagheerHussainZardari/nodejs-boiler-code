import {Router} from "express"
import userRouter from "./user.route.js";
import authRouter from "./auth.route.js";
import { sendResult } from "../helpers/utils.js";
import attendanceRouter from "./attendance.route.js";

const router = new Router();

router.use("/users",userRouter);
router.use("/auth",authRouter);
router.use("/attendance",attendanceRouter);

router.get("*",(req,res) =>{
    sendResult(res,[],"Page Not Found!", "error",404);
});

export default router;
