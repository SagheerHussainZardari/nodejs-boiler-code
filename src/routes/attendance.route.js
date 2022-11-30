import { Router } from "express";
import {checkin} from "../controllers/attendance.controller.js"
const attendanceRouter = new Router()
import verifyToken from "../middlewares/authJwt.middleware.js"

attendanceRouter.get("/checkin",verifyToken,checkin);

export default attendanceRouter;
