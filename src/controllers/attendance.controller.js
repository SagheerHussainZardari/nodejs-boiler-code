import { sendResult } from "../helpers/utils.js";
import logger from "../logger.js"
import Attendance from "../models/attendance.model.js";
import User from "../models/user.model.js";

export const checkin = (req,res) =>{
    if(req.userId){
        // logger.info(req.userId)
        Attendance.find({"user_id":req.userId}).then(users=>{
            if(users.length > 0){
                Attendance.findOneAndUpdate({"user_id":req.userId},{checkout: Date.now()}).then(attendance =>{
                    sendResult(res,attendance,"Checkout Updated Success", "success", 200);
                })
            }else{
                Attendance.create({
                    user_id: req.userId,
                    checkin: Date.now(),
                    checkout: null,
                }).then(attendance =>{
                    sendResult(res,attendance,"CheckedIn Success", "success", 200);
                })
            }
        })
    }
}