const jwt= require('jsonwebtoken')
const config= require('./config.json')

module.exports=(req,res,next)=>{

    const token= req.headers['x-access-token']
    if(token){
        jwt.verify(token,config.secret,function(err,decoded){
            if(err){
                return res.status(401).json({"error":true,"message":"unauthrozied access"})
            }
            req.decoded= decoded
            next()
        })
    }else {
        res.status(403).send({"error":true,"message":"no token found"})
    }
}