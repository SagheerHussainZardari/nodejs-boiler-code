import Jwt from "jsonwebtoken";
import ResponseService from "../services/response.service.js";
const verifyToken = (req,res,next) => {
      Jwt.verify(req.headers.authorization ? req.headers.authorization.split(' ')[1] : '',process.env.JWT_SECRET,(err,result)=>{
            if(err){
              return  ResponseService.sendResult(res,[],"UnAuthorized","error",403)
            }
            return next()
        }) 
}

export default verifyToken;