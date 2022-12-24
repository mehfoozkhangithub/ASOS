require("dotenv").config();
const express = require("express");
const { UserModel } = require("../Models/user.model");
const userRouter = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

userRouter.get("/", async (req, res) => {
  const allUsers = await UserModel.find();
  res.send(allUsers);
});

userRouter.post("/signup", async (req, res) => {

  const { fname,lname, email, password,dateOfBirth } = req.body;
  const UserPresent = await UserModel.findOne({ email });
  if (UserPresent?.email) {
    res.send({ "msg": "User already exists!" ,
               "isRegisterd":true
  });
  } else {
    try {
      bcrypt.hash(password, 8, async (e, hash) => {
        const newUser = new UserModel({
          email: email,
          password: hash,
          fname: fname,
          lname:lname,
          dateOfBirth:dateOfBirth,
        });
        await newUser.save();
      });
      res.send({ User: "User Created Successfully!" });
    } catch (e) {
      console.log(e);
      res.send({ e: e.message });
    }
  }
});

userRouter.post("/login", async(req,res) => {
  const {email,password} = req.body
  const isPresent = await UserModel.findOne({email})
   console.log(isPresent)
  if(isPresent){
      const id = isPresent._id
      const hash_password = isPresent.password
      bcrypt.compare(password,hash_password, function(e,result){
          if(result== true){
              const token = jwt.sign({userID:id},process.env.S_KEY,{expiresIn:'1h'})
              res.send({Login:"login Success",token:token,isUser:true,userData:isPresent})
          }else{
            res.send({Login:"login failed",password:"wrong"})
          }
      })
  }else{
      res.send({msg:"Login Failed !",isUser:false})

  }
  
})

module.exports = { userRouter };
