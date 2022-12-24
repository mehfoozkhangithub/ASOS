const express = require("express");

const { DairyModel } = require("../Models/Dairy.model");

const Dairy = express.Router();

Dairy.get("/", async (req, res) => {
  const {orderBy}= req.query
  try {
    const product =  orderBy?.length == 0 ? await DairyModel.find() : await DairyModel.find().sort({'price': orderBy });
    res.send(product);
  } catch (err) {
    console.log(err);
    res.send({ massage: "Something Went Wrong" });
  }
});

Dairy.get("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const Dairy = await DairyModel.findById(id);
    res.send(Dairy);
  } catch (err) {
    console.log(err);
    res.send({ massage: "Something Went Wrong" });
  }
});

Dairy.post("/create", async (req, res) => {
  const payload = req.body;
  // console.log(payload)
  try {
    const new_user = new DairyModel(payload);
    await new_user.save();
    res.send({ massage: "Created Successfully" });
  } catch (err) {
    console.log(err);
    res.send({ massage: "Something Went Wrong" });
  }
});

Dairy.patch("/update/:productsID", async (req, res) => {
  try {
    const payload = req.body;
    const productsID = req.params.productsID;
    // const userID = req.body.userID;
    // const product = await DairyModel.findOne({ _id: productsID });
    // if (userID !== product.userID) {
    //   res.send("Not Authorised");
    // } else {
    await DairyModel.findByIdAndUpdate({ _id: productsID }, payload);
    res.send({ massage: "Updated Successfully" });
    // }
  } catch (err) {
    console.log(err);
    res.send({ massage: "Something Went Wrong" });
  }
});

Dairy.delete("/delete/:productsID", async (req, res) => {
  try {
    const productsID = req.params.productsID;
    //   const userID = req.body.userID;
    //   const product = await DairyModel.findOne({ _id: productsID });
    //   if (userID !== product.userID) {
    //     res.send("Not Authorised");
    //   }
    //  else{
    await DairyModel.findByIdAndDelete({ _id: productsID });
    res.send({ massage: "Deleted Successfully" });
    //  }
  } catch (err) {
    console.log(err);
    res.send({ massage: "Something Went Wrong" });
  }
});

module.exports = { Dairy };
