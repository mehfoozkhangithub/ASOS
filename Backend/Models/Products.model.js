const mongoose = require("mongoose");

const ProductSchema = mongoose.Schema({
  image: String,
  title: String,
  price: Number,
  userID: String,
},{
  versionKey:false
});

const ProductModel = mongoose.model("Product", ProductSchema);

module.exports = { ProductModel };

// ₹
