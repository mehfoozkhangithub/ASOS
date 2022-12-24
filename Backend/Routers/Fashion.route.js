const express = require("express");

const { menModel } = require("../Models/Fasion.model");

const men = express.Router();

men.get("/", async (req, res) => {
  const {orderBy} = req.query
  try {
    const product =  orderBy?.length == 0 ? await menModel.find() : await menModel.find().sort({'price': orderBy });
    res.send(product);
  } catch (err) {
    console.log(err);
    res.send({ massage: "Something Went Wrong" });
  }
});

men.get("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const men = await menModel.findById(id);
    res.send(men);
  } catch (err) {
    console.log(err);
    res.send({ massage: "Something Went Wrong" });
  }
});

men.post("/create", async (req, res) => {
  const payload = req.body;
  // console.log(payload)
  try {
    const new_user = new menModel(payload);
    await new_user.save();
    res.send({ massage: "Created Successfully" });
  } catch (err) {
    console.log(err);
    res.send({ massage: "Something Went Wrong" });
  }
});

men.patch("/update/:productsID", async (req, res) => {
  try {
    const payload = req.body;
    const productsID = req.params.productsID;
    // const userID = req.body.userID;
    // const product = await menModel.findOne({ _id: productsID });
    // if (userID !== product.userID) {
    //   res.send("Not Authorised");
    // } else {
    await menModel.findByIdAndUpdate({ _id: productsID }, payload);
    res.send({ massage: "Updated Successfully" });
    // }
  } catch (err) {
    console.log(err);
    res.send({ massage: "Something Went Wrong" });
  }
});

men.delete("/delete/:productsID", async (req, res) => {
  try {
    const productsID = req.params.productsID;
    //   const userID = req.body.userID;
    //   const product = await menModel.findOne({ _id: productsID });
    //   if (userID !== product.userID) {
    //     res.send("Not Authorised");
    //   }
    //  else{
    await menModel.findByIdAndDelete({ _id: productsID });
    res.send({ massage: "Deleted Successfully" });
    //  }
  } catch (err) {
    console.log(err);
    res.send({ massage: "Something Went Wrong" });
  }
});

module.exports = { men };
