const mongoose = require("mongoose");

const HomeKitchenSchema = mongoose.Schema({
  image: String,
  title: String,
  price: Number,
  userID: String,
},{
  versionKey:false
});

const HomeKitchenModel = mongoose.model("HomeKitchen", HomeKitchenSchema);

module.exports = { HomeKitchenModel };

// ₹
