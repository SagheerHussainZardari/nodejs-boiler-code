import Jwt from "jsonwebtoken";

const verifyToken = (req,res,next) => {
      Jwt.verify(req.headers.authorization ? req.headers.authorization.split(' ')[1] : '',process.env.JWT_SECRET,(err,result)=>{
            if(err){
                return res.status(403).json({
                    "message": "UnAuthorized"
                })
            }
            return next()
        }) 
}

export default verifyToken;