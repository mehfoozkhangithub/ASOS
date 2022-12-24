const mongoose = require("mongoose");

const ElectronicsSchema = mongoose.Schema({
  image: String,
  title: String,
  price: Number,
  userID: String,
},{
  versionKey:false
});

const ElectronicsModel = mongoose.model("Electronics", ElectronicsSchema);

module.exports = { ElectronicsModel };

// ₹

