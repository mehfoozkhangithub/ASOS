const mongoose = require("mongoose");

const DairySchema = mongoose.Schema({
  image: String,
  title: String,
  price: Number,
  userID: String,
},{
  versionKey:false
});

const DairyModel = mongoose.model("Dairy", DairySchema);

module.exports = { DairyModel };

// ₹
