const express = require("express")
const { AdminCRUDModel } = require("../Models/admin.crud.model")
const adminAccessRouter = express.Router()

//Middleware Validtion
const CustomValidtor = (req,res,next) => {
    if(req.method === "POST"){
      if(req.body && req.body.title &&  req.body.price && req.body.productURL ){
        next()
      }else{
        res.send({"Error":"Please check your filed validation Failed !"})
      }
    }
  }
//CREATE
adminAccessRouter.post("/createproduct", CustomValidtor ,async (req, res) => {
    try {
      const payload = req.body;
      console.log("payload:", payload);
      await AdminCRUDModel.insertMany([payload]);
      res.send("Successfully add your post here");
    } catch (e) {
      console.log({ msg: "failed to Post \n" }, e.message);
      res.send({ msg: "Failed post your note" });
    }
  });
  
  // READ
  adminAccessRouter.get("/", async (req, res) => {
    
    try {
      const usersData = await AdminCRUDModel.find()
      res.send(usersData);
    } catch (e) {
      console.log({ msg: "failed to Post" }, e.message);
      res.send({ msg: "Failed post your note" });
    }
  });
  
  //Update
  adminAccessRouter.patch("/updateproduct/:userID", async (req, res) => {
    const userID = req.params.userID;
    const payload = req.body;
    try {
      const userUpdate = await AdminCRUDModel.findByIdAndUpdate(
        { _id: userID },
        payload
      );
      console.log(userUpdate);
      res.send("Update");
    } catch (e) {
      console.log({ msg: "failed to Post" }, e.message);
      res.send({ msg: "Failed post your note" });
    }
  });
  
  // delete
  adminAccessRouter.delete("/deleteproduct/:userID", async (req, res) => {
    const { userID } = req.params;
    try {
      const userD = await AdminCRUDModel.findByIdAndDelete({ _id: userID });
      res.send(`Sucessfully deleted User ${userID}`);
      console.log("Deleted");
    } catch (e) {
      console.log({ msg: "failed to Post " }, e.message);
      res.send({ msg: "Failed post your note" });
    }
  });

module.exports = {adminAccessRouter}