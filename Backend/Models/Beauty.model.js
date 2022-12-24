const mongoose = require("mongoose");

const BeautySchema = mongoose.Schema({
  image: String,
  title: String,
  price: Number,
  userID: String,
},{
  versionKey:false
});

const BeautyModel = mongoose.model("Beauty", BeautySchema);

module.exports = { BeautyModel };

// ₹



