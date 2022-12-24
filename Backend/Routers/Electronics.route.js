const express = require("express");

const { ElectronicsModel } = require("../Models/Electronics.model");

const Electronics = express.Router();

Electronics.get("/", async (req, res) => {
  const {orderBy} = req.query
  try {
    const product =  orderBy?.length == 0 ? await ElectronicsModel.find() : await ElectronicsModel.find().sort({'price': orderBy });
    res.send(product);
  } catch (err) {
    console.log(err);
    res.send({ massage: "Something Went Wrong" });
  }
});

Electronics.get("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const Electronics = await ElectronicsModel.findById(id);
    res.send(Electronics);
  } catch (err) {
    console.log(err);
    res.send({ massage: "Something Went Wrong" });
  }
});

Electronics.post("/create", async (req, res) => {
  const payload = req.body;
  // console.log(payload)
  try {
    const new_user = new ElectronicsModel(payload);
    await new_user.save();
    res.send({ massage: "Created Successfully" });
  } catch (err) {
    console.log(err);
    res.send({ massage: "Something Went Wrong" });
  }
});

Electronics.patch("/update/:productsID", async (req, res) => {
  try {
    const payload = req.body;
    const productsID = req.params.productsID;
    // const userID = req.body.userID;
    // const product = await ElectronicsModel.findOne({ _id: productsID });
    // if (userID !== product.userID) {
    //   res.send("Not Authorised");
    // } else {
    await ElectronicsModel.findByIdAndUpdate({ _id: productsID }, payload);
    res.send({ massage: "Updated Successfully" });
    // }
  } catch (err) {
    console.log(err);
    res.send({ massage: "Something Went Wrong" });
  }
});

Electronics.delete("/delete/:productsID", async (req, res) => {
  try {
    const productsID = req.params.productsID;
    //   const userID = req.body.userID;
    //   const product = await ElectronicsModel.findOne({ _id: productsID });
    //   if (userID !== product.userID) {
    //     res.send("Not Authorised");
    //   }
    //  else{
    await ElectronicsModel.findByIdAndDelete({ _id: productsID });
    res.send({ massage: "Deleted Successfully" });
    //  }
  } catch (err) {
    console.log(err);
    res.send({ massage: "Something Went Wrong" });
  }
});

module.exports = { Electronics };
