const mongoose = require("mongoose");

const menSchema = mongoose.Schema({
  image: String,
  title: String,
  price: Number,
  userID: String,
},{
  versionKey:false
});

const menModel = mongoose.model("men", menSchema);

module.exports = { menModel };

// ₹

