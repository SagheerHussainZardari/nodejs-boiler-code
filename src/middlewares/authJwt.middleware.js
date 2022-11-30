import Jwt from "jsonwebtoken";
import logger from "../logger.js";
import {sendResult} from "../helpers/utils.js";
const verifyToken = (req,res,next) => {
      Jwt.verify(req.headers.authorization ? req.headers.authorization.split(" ")[1] : "",process.env.JWT_SECRET,(err,result)=>{
            if(err){
              logger.error("Token InValid")
              return  sendResult(res,[],"UnAuthorized","error",403)
            }
            logger.info("Token valid , userId="+result.id)
            req.userId = result.id;
            return next()
        }) 
}

export default verifyToken;