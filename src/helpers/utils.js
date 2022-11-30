
export const sendResult = (res,data,message,type,status) =>{
    res.status(status).send({
        data: data ?? [],
        type: type,
        message: message,
        status: status
    })
}
