class ResponseService {
    sendResult(res,data,message,type,status){
        res.status(status).send({
            result: data ?? [],
            error: type == "error" ? message : null,
            message: type == "success" ? message : null,
            status: status
        })
    }
}

export default new ResponseService();
