const express = require("express");

const { apples_pearsModel } = require("../Models/apples_pears.model");

const apples_pears = express.Router();

apples_pears.get("/", async (req, res) => {
  const {orderBy} = req.query
  try {
    const product =  orderBy?.length == 0 ? await apples_pearsModel.find() : await apples_pearsModel.find().sort({'price': orderBy });
    res.send(product);
  } catch (err) {
    console.log(err);
    res.send({ massage: "Something Went Wrong" });
  }
});

apples_pears.get("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const apples_pears = await apples_pearsModel.findById(id);
    res.send(apples_pears);
  } catch (err) {
    console.log(err);
    res.send({ massage: "Something Went Wrong" });
  }
});

apples_pears.post("/create", async (req, res) => {
  const payload = req.body;
  // console.log(payload)
  try {
    const new_user = new apples_pearsModel(payload);
    await new_user.save();
    res.send({ massage: "Created Successfully" });
  } catch (err) {
    console.log(err);
    res.send({ massage: "Something Went Wrong" });
  }
});

apples_pears.patch("/update/:productsID", async (req, res) => {
  try {
    const payload = req.body;
    const productsID = req.params.productsID;
    // const userID = req.body.userID;
    // const product = await apples_pearsModel.findOne({ _id: productsID });
    // if (userID !== product.userID) {
    //   res.send("Not Authorised");
    // } else {
    await apples_pearsModel.findByIdAndUpdate({ _id: productsID }, payload);
    res.send({ massage: "Updated Successfully" });
    // }
  } catch (err) {
    console.log(err);
    res.send({ massage: "Something Went Wrong" });
  }
});

apples_pears.delete("/delete/:productsID", async (req, res) => {
  try {
    const productsID = req.params.productsID;
    //   const userID = req.body.userID;
    //   const product = await apples_pearsModel.findOne({ _id: productsID });
    //   if (userID !== product.userID) {
    //     res.send("Not Authorised");
    //   }
    //  else{
    await apples_pearsModel.findByIdAndDelete({ _id: productsID });
    res.send({ massage: "Deleted Successfully" });
    //  }
  } catch (err) {
    console.log(err);
    res.send({ massage: "Something Went Wrong" });
  }
});

module.exports = { apples_pears };
