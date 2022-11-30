import Jwt from "jsonwebtoken";
import logger from "../logger.js";
import {sendResult} from "../helpers/utils.js";
const verifyToken = (req,res,next) => {
      Jwt.verify(req.headers.authorization ? req.headers.authorization.split(" ")[1] : "",process.env.JWT_SECRET,(err,result)=>{
            if(err){
              logger.error("Token InValid: "+req.headers.authorization.split(" ")[1])
              return  sendResult(res,[],"UnAuthorized","error",403)
            }
            req.userId = result.id;
            logger.info("Token valid",result)
            
            return next()
        }) 
}

export default verifyToken;