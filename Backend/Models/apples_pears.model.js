const mongoose = require("mongoose");

const apples_pearsSchema = mongoose.Schema({
  image: String,
  title: String,
  price: Number,
  userID: String,
},{
  versionKey:false
});

const apples_pearsModel = mongoose.model("apples_pears", apples_pearsSchema);

module.exports = { apples_pearsModel };

// ₹
