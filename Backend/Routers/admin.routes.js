require("dotenv").config();
const express = require("express");
const { AdminModel } = require("../Models/admin.model");
const adminRouter = express.Router();
// const bcrypt = require("bcrypt");
// const jwt = require("jsonwebtoken");

adminRouter.get("/", async (req, res) => {
  const adminData = await AdminModel.find();
  res.send(adminData);
});

// adminRouter.post("/adminsignup", async (req, res) => {
//   const { adminID, password } = req.body;
//   const AdminPresent = await AdminModel.findOne({ adminID });
//   if (AdminPresent?.adminID) {
//     res.send({ Admin: "Admin already exists!" });
//   } else {
//     try {
//       bcrypt.hash(password, 8, async (e, hash) => {
//         const newUser = new AdminModel({
//           adminID: adminID,
//           password: hash,
//         });
//         await newUser.save();
//       });
//       res.send({ Admin: "Admin Created Successfully!" });
//       // console.log(newUser);

//     } catch (e) {
//       res.send({ e: e.message });
//     }
//   }
// });

adminRouter.post("/adminlogin", async(req,res) => {
 try{
  const {adminID,password} = req.body
  const isPresent = await AdminModel.findOne({adminID})
  // const isPresent2 = await AdminModel.findOne({password})


  if(isPresent){
      const id = isPresent._id
      const hash_password = isPresent.password
      bcrypt.compare(password,hash_password, function(e,result){
          if(result== true){
              const token = jwt.sign({adminId:id},process.env.S_KEY,{expiresIn:'1h'})
              res.send({Admin:" admin login Success","Token":token})
          }
      })
           

    

  }else{
      res.send({"Err":"Admin Login Failed !"})

  }
 }
  catch(e){
    console.log(e);
    res.send({Error:"Something is Error getting from Admin"})
  }
})

module.exports = { adminRouter };
