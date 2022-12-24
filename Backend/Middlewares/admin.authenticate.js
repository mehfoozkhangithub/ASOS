require('dotenv').config()
const jwt = require("jsonwebtoken")

const Adminathuenticate = (req,res,next) =>{
    var token = req.headers?.authorization?.split(" ")[1]
    if(token){
        jwt.verify(token, process.env.S_KEY, function(e,decoded){
            if(decoded){
                req.body.userID = decoded.userID
                next()
            }else{
                res.send({Token:" Admin TOken Is Wrong!"})
            }
        })
    }else{
        res.send({Failed:"Please login again Admin from Middleware!"})
    }
}

module.exports = {Adminathuenticate}